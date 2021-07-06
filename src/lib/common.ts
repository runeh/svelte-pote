import type {
  NormalizedTextBlock,
  NormalizedBlock,
  NormalizedCustomBlock,
} from 'pote-parse';

export type BlockHtmlTag =
  | 'p'
  | 'div'
  | 'blockquote'
  | 'ol'
  | 'ul'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export function getTagNameForBlock(block: NormalizedTextBlock): BlockHtmlTag {
  switch (block.style) {
    case 'normal':
      return 'p';
    case 'blockquote':
      return 'blockquote';
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'h5':
      return 'h5';
    case 'h6':
      return 'h6';
    default:
      return 'div';
  }
}

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
