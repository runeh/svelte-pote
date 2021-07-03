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
      { kind: 'text', key: '1', spans: [] },
      { kind: 'text', key: '2', spans: [] },
      { kind: 'text', key: '3', spans: [] },
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
      { kind: 'text', key: '1', spans: [] },
      { kind: 'text', key: '2', spans: [] },
      { kind: 'text', key: '3', spans: [] },
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
      { kind: 'text', key: '1', spans: [] },
      [{ _key: '2', _type: 'block', listItem: 'yup' }],
      { kind: 'text', key: '3', spans: [] },
      { kind: 'text', key: '4', spans: [] },
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
      { kind: 'text', key: '1', spans: [] },
      [
        { _key: '2', _type: 'block', listItem: 'yup' },
        { _key: '3', _type: 'block', listItem: 'yup' },
      ],
      { kind: 'text', key: '4', spans: [] },
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
      { kind: 'text', key: '2', spans: [] },
      { kind: 'text', key: '3', spans: [] },
      { kind: 'text', key: '4', spans: [] },
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
