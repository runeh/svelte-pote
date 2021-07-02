export interface BlockChild {
  _key: string;
  // this probably needs to be just "string"
  _type: 'span' | 'link';
  marks: string[];
  text: string;
}

export interface MarkDef {
  _key: string;
  _type: string;
  [propName: string]: unknown;
}

export interface CustomBlock {
  _key: string;
  _type: string;
  [propName: string]: unknown;
}

export interface StandardBlock {
  _key: string;
  _type: 'block';
  children: BlockChild[];
  markDefs: MarkDef[];
  style: string;
  level?: number;
  listItem?: string;
}

export type StructuredTextBlock = StandardBlock | CustomBlock;

export type StructuredText = (StandardBlock | CustomBlock)[];

export function isStandardBlock(
  block: StructuredTextBlock,
): block is StandardBlock {
  return block._type === 'block';
}

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

export function getTagNameForBlock(block: StandardBlock): BlockHtmlTag {
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
