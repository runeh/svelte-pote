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

interface StandardBlock {
  kind: 'standard-block';
  key: string;
  children: unknown[];
}

interface CustomBlock {
  kind: 'custom-block';
  key: string;
  fields: Record<string, unknown>;
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
      kind: 'standard-block',
      key: block._key,
      children: [],
    };
    return ret;
  } else {
    const { _key, _type, ...rest } = block;
    const ret: CustomBlock = {
      kind: 'custom-block' as const,
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
