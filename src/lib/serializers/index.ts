import { SvelteComponentTyped } from 'svelte';
import BlockQuoteComponent from './blocks/blockquote.svelte';
import CodeComponent from './marks/code.svelte';
import DelComponent from './marks/del.svelte';
import EmComponent from './marks/em.svelte';
import Heading1Component from './blocks/h1.svelte';
import Heading2Component from './blocks/h2.svelte';
import Heading3Component from './blocks/h3.svelte';
import Heading4Component from './blocks/h4.svelte';
import Heading5Component from './blocks/h5.svelte';
import Heading6Component from './blocks/h6.svelte';
import LinkComponent from './marks/link.svelte';
import ListItem from './lists/li.svelte';
import OrderedList from './lists/ol.svelte';
import ParagraphComponent from './blocks/normal.svelte';
import StrongComponent from './marks/strong.svelte';
import type {
  NormalizedCustomBlock,
  NormalizedListBlock,
  NormalizedTextBlock,
  NormalizedTextSpan,
} from 'pote-parse';
import UnderlineComponent from './marks/underline.svelte';
import UnOrderedList from './lists/ul.svelte';

export { OrderedList, UnOrderedList, ListItem };

const markTypes = ['code', 'del', 'em', 'strong', 'underline', 'link'] as const;

export type MarkType = typeof markTypes[number];

export class MarkTypeComponent extends SvelteComponentTyped<{
  span?: NormalizedTextSpan;
  parent?: NormalizedTextBlock;
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
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'normal',
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
  h1: Heading1Component,
  h2: Heading2Component,
  h3: Heading3Component,
  h4: Heading4Component,
  h5: Heading5Component,
  h6: Heading6Component,
  normal: ParagraphComponent,
};

export class ListParentComponent extends SvelteComponentTyped<{
  list?: NormalizedListBlock;
}> {}

export class ListItemComponent extends SvelteComponentTyped<{
  list?: NormalizedListBlock;
  block?: NormalizedListBlock | NormalizedTextBlock;
}> {}

export class CustomBlockComponent extends SvelteComponentTyped<{
  block?: NormalizedCustomBlock;
}> {}
