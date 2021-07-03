function invariant(condition: unknown, message?: string): asserts condition {
  if (condition) {
    return;
  } else {
    throw new Error(`Invariant failed: ${message || ''}`);
  }
}

interface RawBlock {
  _key: string;
  _type: string;
  level?: number;
  listItem?: string;
}

interface RawSpan {
  _type: string;
  _key: string;
  text: string;
  marks: string[];
}

interface KeyTypeThing {
  _type: string;
  _key: string;
}

function isKeyTypeThing(thing: unknown): thing is KeyTypeThing {
  return (
    typeof thing === 'object' &&
    thing != null &&
    typeof thing['_key'] === 'string' &&
    typeof thing['_type'] === 'string'
  );
}

function isRawSpan(thing: unknown): thing is RawSpan {
  invariant(isKeyTypeThing);
  invariant(Array.isArray(thing['marks']));
  invariant(thing['marks'].every((e) => typeof e === 'string'));
  invariant(typeof thing['text'] === 'string');
  return true;
}

interface RawMarkDef {
  _key: string;
  _type: string;
  [key: string]: unknown;
}

function isRawMarkDef(thing: unknown): thing is RawMarkDef {
  return isKeyTypeThing(thing);
}

interface Mark {
  type: string;
  options?: Record<string, unknown>;
}

interface TextSpan {
  key: string;
  type: string; // can this be 'span' | 'link' ?
  marks: Mark[];
  text: string;
}

interface StandardBlock {
  kind: 'text';
  key: string;
  spans: TextSpan[];
}

interface CustomBlock {
  kind: 'custom';
  key: string;
  fields: Record<string, unknown>;
}

interface ListBlock {
  kind: 'list';
  key: string;
  type: string;
  level: number;
  children: (StandardBlock | ListBlock)[];
}

export type PortableText = (StandardBlock | CustomBlock | ListBlock)[];

function isGenericBlock(thing: unknown): thing is RawBlock {
  // fixme: also assert that level is number if present?
  return isKeyTypeThing(thing);
}

// fixme: add ?spans to generic block
function parseNonListBlock(block: RawBlock): StandardBlock | CustomBlock {
  if (block._type === 'block') {
    const ret: StandardBlock = {
      kind: 'text',
      key: block._key,
      spans: parseSpans(block['children'] ?? []),
    };
    return ret;
  } else {
    const { _key, _type, ...rest } = block;
    const ret: CustomBlock = {
      kind: 'custom',
      key: _key,
      fields: rest as Record<string, unknown>,
    };
    return ret;
  }
}

// fixme: also pass in markdefs
function parseSpans(spans: unknown[]): TextSpan[] {
  return spans.map<TextSpan>((span) => {
    invariant(isRawSpan(span));
    const { _key, _type, marks, text } = span;

    return {
      key: _key,
      type: _type,
      // fixme: get extra options for the marks
      marks: marks.map((e) => ({ type: e })),
      text,
    };
  });
}

export function parseBlocks(blocks: unknown[]) {
  invariant(blocks.every(isGenericBlock));

  const ret = [];
  let index = 0;

  while (index < blocks.length) {
    const block = blocks[index];
    if (block.listItem == null) {
      ret.push(parseNonListBlock(block));
      index++;
    } else {
      const foundIndex = blocks.findIndex(
        (e, n) => n > index && e.listItem == null,
      );
      const nextIndex = foundIndex === -1 ? blocks.length : foundIndex;
      ret.push(blocks.slice(index, nextIndex));
      index = nextIndex;
    }
  }

  return ret;
}
