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

function isGenericBlock(thing: unknown): thing is RawBlock {
  // fixme: also assert that level is number if present?
  return (
    typeof thing === 'object' &&
    thing != null &&
    typeof thing['_key'] == 'string' &&
    typeof thing['_type'] == 'string'
  );
}

function parseNonListBlock(block: RawBlock): StandardBlock | CustomBlock {
  if (block._type === 'block') {
    const ret: StandardBlock = {
      kind: 'text',
      key: block._key,
      spans: [],
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
