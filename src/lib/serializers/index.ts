import { SvelteComponentTyped } from 'svelte';
import BlockQuoteComponent from './blocks/Blockquote.svelte';
import CodeComponent from './marks/Code.svelte';
import DelComponent from './marks/Del.svelte';
import DivComponent from './blocks/Div.svelte';
import EmComponent from './marks/Em.svelte';
import Heading1Component from './blocks/H1.svelte';
import Heading2Component from './blocks/H2.svelte';
import Heading3Component from './blocks/H3.svelte';
import Heading4Component from './blocks/H4.svelte';
import Heading5Component from './blocks/H5.svelte';
import Heading6Component from './blocks/H6.svelte';
import LinkComponent from './marks/Link.svelte';
import ListItem from './lists/Li.svelte';
import OrderedList from './lists/Ol.svelte';
import ParagraphComponent from './blocks/Paragraph.svelte';
import StrongComponent from './marks/Strong.svelte';
import type {
  NormalizedListBlock,
  NormalizedTextBlock,
  NormalizedTextSpan,
} from 'pote-parse';
import UnderlineComponent from './marks/Underline.svelte';
import UnOrderedList from './lists/Ul.svelte';

export { OrderedList, UnOrderedList, ListItem };

const markTypes = ['code', 'del', 'em', 'strong', 'underline', 'link'] as const;

export type MarkType = typeof markTypes[number];

export class MarkTypeComponent extends SvelteComponentTyped<{
  span?: NormalizedTextSpan;
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
