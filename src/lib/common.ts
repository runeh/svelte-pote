import type {
  NormalizedTextBlock,
  NormalizedBlock,
  NormalizedCustomBlock,
} from 'pote-parse';

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
