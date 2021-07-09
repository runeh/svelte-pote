import type {
  NormalizedTextBlock,
  NormalizedBlock,
  NormalizedCustomBlock,
} from 'pote-parse';
import type {
  TextBlockTypeComponent,
  MarkTypeComponent,
  ListItemComponent,
  ListParentComponent,
  CustomBlockComponent,
} from './serializers';

export function isTextBlock(
  block: NormalizedBlock,
): block is NormalizedTextBlock {
  return block.kind === 'text';
}

export function isCustomBlock(
  block: NormalizedBlock,
): block is NormalizedCustomBlock {
  return block.kind === 'custom';
}

export type CustomBlockComponents = Record<string, typeof CustomBlockComponent>;

export type CustomSpanComponents = Record<string, typeof MarkTypeComponent>;

export interface StandardComponentOverrides {
  code?: typeof MarkTypeComponent;
  del?: typeof MarkTypeComponent;
  em?: typeof MarkTypeComponent;
  blockquote?: typeof TextBlockTypeComponent;
  h1?: typeof TextBlockTypeComponent;
  h2?: typeof TextBlockTypeComponent;
  h3?: typeof TextBlockTypeComponent;
  h4?: typeof TextBlockTypeComponent;
  h5?: typeof TextBlockTypeComponent;
  h6?: typeof TextBlockTypeComponent;
  li?: typeof ListItemComponent;
  link?: typeof MarkTypeComponent;
  normal?: typeof TextBlockTypeComponent;
  ol?: typeof ListParentComponent;
  strong?: typeof MarkTypeComponent;
  ul?: typeof ListParentComponent;
  underline?: typeof MarkTypeComponent;
}
