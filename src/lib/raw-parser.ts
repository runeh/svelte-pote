export interface PoteChild {
  _key: string;
  _type: string;
  marks: string[];
  text: string;
}

export interface PoteMarkDef {
  _key: string;
  _type: string;
  [optionName: string]: unknown;
}

export interface PoteTextBlock {
  kind: 'text';
  _key: string;
  _type: string;
  style: string;
  markDefs: PoteMarkDef[];
  children: PoteChild[];
}

export interface PoteListBlock {
  kind: 'list';
  _key: string;
  _type: string;
  level: number;
  listItem: string;
  markDefs: PoteMarkDef[];
  children: PoteChild[];
  style: string;
}

export interface PoteCustomBlock {
  kind: 'custom';
  _key: string;
  _type: string;
  [customOptionName: string]: unknown;
}

interface PoteThing {
  _key: string;
  _type: string;
}

export type PortableText = (PoteListBlock | PoteTextBlock | PoteCustomBlock)[];

// fixme: should we check that there is at least one child on blocks?

function isPoteThing(thing: unknown): thing is PoteThing {
  return (
    typeof thing === 'object' &&
    thing != null &&
    typeof thing['_key'] === 'string' &&
    typeof thing['_type'] === 'string'
  );
}

function looksLikeTextBlock(block: unknown): block is PoteThing {
  return (
    isPoteThing(block) &&
    block._type === 'block' &&
    typeof block['style'] === 'string' &&
    Array.isArray(block['children']) &&
    Array.isArray(block['markDefs'])
  );
}

function looksLikeListBlock(block: unknown): block is PoteThing {
  return (
    isPoteThing(block) &&
    looksLikeTextBlock(block) &&
    typeof block['level'] === 'number' &&
    typeof block['listItem'] === 'string'
  );
}

function looksLikeCustomBlock(block: unknown): block is PoteThing {
  return isPoteThing(block) && block._type !== 'block';
}

class PoteParseError extends Error {
  name: 'PoteParseError';
  failedBlock: unknown;

  constructor(message: string, block: unknown) {
    super(message);
    this.failedBlock = block;
  }
}

function validateMarkDefs(thing: unknown) {
  if (!Array.isArray(thing)) {
    throw new PoteParseError('Unable to parse markDefs', thing);
  } else {
    thing.forEach((markDef) => {
      if (!isPoteThing(markDef)) {
        throw new PoteParseError('Unable to parse markDef', markDef);
      }
    });
  }
}

function validateChildren(thing: unknown) {
  if (!Array.isArray(thing)) {
    throw new PoteParseError('Unable to parse children', thing);
  } else {
    thing.forEach((child) => {
      const valid =
        isPoteThing(child) &&
        Array.isArray(child['marks']) &&
        child['marks'].every((e) => typeof e === 'string') &&
        typeof child['text'] === 'string';

      if (!valid) {
        throw new PoteParseError('Unable to parse child', child);
      }
    });
  }
}

function parseBlock(
  block: unknown,
): PoteListBlock | PoteTextBlock | PoteCustomBlock {
  if (looksLikeListBlock(block)) {
    validateChildren(block['children']);
    validateMarkDefs(block['markDefs']);
    return { kind: 'list', ...block } as PoteListBlock;
  } else if (looksLikeTextBlock(block)) {
    validateChildren(block['children']);
    validateMarkDefs(block['markDefs']);
    return { kind: 'text', ...block } as PoteTextBlock;
  } else if (looksLikeCustomBlock(block)) {
    return { kind: 'custom', ...block } as PoteCustomBlock;
  } else {
    throw new PoteParseError('Unable to parse block', block);
  }
}

export function parsePortableText(blocks: unknown[]): PortableText {
  return blocks.map(parseBlock);
}
