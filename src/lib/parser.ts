function invariant(condition: unknown, message?: string): asserts condition {
  if (condition) {
    return;
  } else {
    throw new Error(`Invariant failed: ${message || ''}`);
  }
}

interface GenericBlock {
  _key: string;
  _type: string;
  level?: number;
  listItem?: string;
}

function isGenericBlock(thing: unknown): thing is GenericBlock {
  // fixme: also assert that level is number if present?
  return (
    typeof thing === 'object' &&
    thing != null &&
    typeof thing['_key'] == 'string' &&
    typeof thing['_type'] == 'string'
  );
}

export function parseBlocks(blocks: unknown[]) {
  invariant(blocks.every(isGenericBlock));

  const ret = [];
  let index = 0;

  while (index < blocks.length) {
    const block = blocks[index];
    if (block.listItem == null) {
      // parse standard and custom blocks here
      ret.push(block);
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
