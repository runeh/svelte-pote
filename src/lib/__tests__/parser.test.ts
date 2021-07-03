import { parseBlocks } from '../parser';

describe('parser', () => {
  it('parser 1', () => {
    const blocks = [
      { _key: '1', _type: 'block' },
      { _key: '2', _type: 'block' },
      { _key: '3', _type: 'block' },
    ];

    const parsed = parseBlocks(blocks);

    expect(parsed).toEqual(blocks);
  });

  it('parser 2', () => {
    const blocks = [
      { _key: '1', _type: 'block' },
      { _key: '2', _type: 'block' },
      { _key: '3', _type: 'block' },
      { _key: '4', _type: 'block', listItem: 'yup' },
    ];

    const parsed = parseBlocks(blocks);

    expect(parsed).toEqual([
      { _key: '1', _type: 'block' },
      { _key: '2', _type: 'block' },
      { _key: '3', _type: 'block' },
      [{ _key: '4', _type: 'block', listItem: 'yup' }],
    ]);
  });

  it('parser 3', () => {
    const blocks = [
      { _key: '1', _type: 'block' },
      { _key: '2', _type: 'block', listItem: 'yup' },
      { _key: '3', _type: 'block' },
      { _key: '4', _type: 'block' },
    ];

    const parsed = parseBlocks(blocks);

    expect(parsed).toEqual([
      { _key: '1', _type: 'block' },
      [{ _key: '2', _type: 'block', listItem: 'yup' }],
      { _key: '3', _type: 'block' },
      { _key: '4', _type: 'block' },
    ]);
  });

  it('parser 4', () => {
    const blocks = [
      { _key: '1', _type: 'block' },
      { _key: '2', _type: 'block', listItem: 'yup' },
      { _key: '3', _type: 'block', listItem: 'yup' },
      { _key: '4', _type: 'block' },
    ];

    const parsed = parseBlocks(blocks);

    expect(parsed).toEqual([
      { _key: '1', _type: 'block' },
      [
        { _key: '2', _type: 'block', listItem: 'yup' },
        { _key: '3', _type: 'block', listItem: 'yup' },
      ],
      { _key: '4', _type: 'block' },
    ]);
  });

  it('parser 5', () => {
    const blocks = [
      { _key: '1', _type: 'block', listItem: 'yup' },
      { _key: '2', _type: 'block' },
      { _key: '3', _type: 'block' },
      { _key: '4', _type: 'block' },
    ];

    const parsed = parseBlocks(blocks);

    expect(parsed).toEqual([
      [{ _key: '1', _type: 'block', listItem: 'yup' }],
      { _key: '2', _type: 'block' },
      { _key: '3', _type: 'block' },
      { _key: '4', _type: 'block' },
    ]);
  });
});
