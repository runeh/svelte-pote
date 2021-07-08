import { SvelteComponentTyped } from 'svelte';
import BlockQuoteComponent from './Blockquote.svelte';
import CodeComponent from './Code.svelte';
import DelComponent from './Del.svelte';
import DivComponent from './Div.svelte';
import EmComponent from './Em.svelte';
import Heading1Component from './H1.svelte';
import Heading2Component from './H2.svelte';
import Heading3Component from './H3.svelte';
import Heading4Component from './H4.svelte';
import Heading5Component from './H5.svelte';
import Heading6Component from './H6.svelte';
import LinkComponent from './Link.svelte';
import ListItem from './Li.svelte';
import OrderedList from './Ol.svelte';
import ParagraphComponent from './Paragraph.svelte';
import StrongComponent from './Strong.svelte';
import type {
  NormalizedListBlock,
  NormalizedTextBlock,
  NormalizedTextSpan,
} from 'pote-parse';
import UnderlineComponent from './Underline.svelte';
import UnOrderedList from './Ul.svelte';

export { OrderedList, UnOrderedList, ListItem };

const markTypes = ['code', 'del', 'em', 'strong', 'underline', 'link'] as const;

export type MarkType = typeof markTypes[number];

export class MarkTypeComponent extends SvelteComponentTyped<{
  span: NormalizedTextSpan;
}> {}

export function isMarkType(e: string): e is MarkType {
  return (markTypes as readonly string[]).includes(e);
}

export const markComponents: Record<MarkType, typeof MarkTypeComponent> = {
  code: CodeComponent,
  del: DelComponent,
  em: EmComponent,
  link: LinkComponent,
  strong: StrongComponent,
  underline: UnderlineComponent,
};

const textBlockTypes = [
  'blockquote',
  'div',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'normal',
  'p',
] as const;

export type TextBlockType = typeof textBlockTypes[number];

export function isTextBlockType(e: string): e is TextBlockType {
  return (textBlockTypes as readonly string[]).includes(e);
}

export class TextBlockTypeComponent extends SvelteComponentTyped<{
  block?: NormalizedTextBlock;
}> {}

export const textBlockComponents: Record<
  TextBlockType,
  typeof TextBlockTypeComponent
> = {
  blockquote: BlockQuoteComponent,
  div: DivComponent,
  h1: Heading1Component,
  h2: Heading2Component,
  h3: Heading3Component,
  h4: Heading4Component,
  h5: Heading5Component,
  h6: Heading6Component,
  normal: ParagraphComponent,
  p: ParagraphComponent,
};

export class ListParentComponent extends SvelteComponentTyped<{
  list?: NormalizedListBlock;
}> {}

export class ListItemComponent extends SvelteComponentTyped<{
  list?: NormalizedListBlock;
  block?: NormalizedListBlock | NormalizedTextBlock;
}> {}
