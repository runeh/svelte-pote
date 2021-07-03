import { parseBlocks } from '../parser';

describe('parser', () => {
  it('parser 1', () => {
    const blocks = [
      { _key: '1', _type: 'block' },
      { _key: '2', _type: 'block' },
      { _key: '3', _type: 'block' },
    ];

    const parsed = parseBlocks(blocks);

    const expected = [
      { kind: 'standard-block', key: '1', children: [] },
      { kind: 'standard-block', key: '2', children: [] },
      { kind: 'standard-block', key: '3', children: [] },
    ];

    expect(parsed).toEqual(expected);
  });

  it('parser 2', () => {
    const blocks = [
      { _key: '1', _type: 'block' },
      { _key: '2', _type: 'block' },
      { _key: '3', _type: 'block' },
      { _key: '4', _type: 'block', listItem: 'yup' },
    ];

    const parsed = parseBlocks(blocks);

    const expected = [
      { kind: 'standard-block', key: '1', children: [] },
      { kind: 'standard-block', key: '2', children: [] },
      { kind: 'standard-block', key: '3', children: [] },
      [{ _key: '4', _type: 'block', listItem: 'yup' }],
    ];

    expect(parsed).toEqual(expected);
  });

  it('parser 3', () => {
    const blocks = [
      { _key: '1', _type: 'block' },
      { _key: '2', _type: 'block', listItem: 'yup' },
      { _key: '3', _type: 'block' },
      { _key: '4', _type: 'block' },
    ];

    const parsed = parseBlocks(blocks);

    const expected = [
      { kind: 'standard-block', key: '1', children: [] },
      [{ _key: '2', _type: 'block', listItem: 'yup' }],
      { kind: 'standard-block', key: '3', children: [] },
      { kind: 'standard-block', key: '4', children: [] },
    ];

    expect(parsed).toEqual(expected);
  });

  it('parser 4', () => {
    const blocks = [
      { _key: '1', _type: 'block' },
      { _key: '2', _type: 'block', listItem: 'yup' },
      { _key: '3', _type: 'block', listItem: 'yup' },
      { _key: '4', _type: 'block' },
    ];

    const parsed = parseBlocks(blocks);

    const expected = [
      { kind: 'standard-block', key: '1', children: [] },
      [
        { _key: '2', _type: 'block', listItem: 'yup' },
        { _key: '3', _type: 'block', listItem: 'yup' },
      ],
      { kind: 'standard-block', key: '4', children: [] },
    ];

    expect(parsed).toEqual(expected);
  });

  it('parser 5', () => {
    const blocks = [
      { _key: '1', _type: 'block', listItem: 'yup' },
      { _key: '2', _type: 'block' },
      { _key: '3', _type: 'block' },
      { _key: '4', _type: 'block' },
    ];

    const parsed = parseBlocks(blocks);

    const expected = [
      [{ _key: '1', _type: 'block', listItem: 'yup' }],
      { kind: 'standard-block', key: '2', children: [] },
      { kind: 'standard-block', key: '3', children: [] },
      { kind: 'standard-block', key: '4', children: [] },
    ];

    expect(parsed).toEqual(expected);
  });

  it('parser 6', () => {
    const blocks = [];

    const parsed = parseBlocks(blocks);

    const expected = [];

    expect(parsed).toEqual(expected);
  });
});
