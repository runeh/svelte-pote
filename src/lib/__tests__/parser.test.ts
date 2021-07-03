import { parseBlocks, PortableText } from '../parser';

describe('parser', () => {
  describe('smoke tests for grouping', () => {
    it('parser 1', () => {
      // fixme: these should be rejected because no children or markdefs?

      const blocks = [
        { _key: '1', _type: 'block', markDefs: [] },
        { _key: '2', _type: 'block', markDefs: [] },
        { _key: '3', _type: 'block', markDefs: [] },
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
        { _key: '1', _type: 'block', markDefs: [] },
        { _key: '2', _type: 'block', markDefs: [] },
        { _key: '3', _type: 'block', markDefs: [] },
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
        { _key: '1', _type: 'block', markDefs: [] },
        { _key: '2', _type: 'block', listItem: 'yup' },
        { _key: '3', _type: 'block', markDefs: [] },
        { _key: '4', _type: 'block', markDefs: [] },
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
        { _key: '1', _type: 'block', markDefs: [] },
        { _key: '2', _type: 'block', listItem: 'yup' },
        { _key: '3', _type: 'block', listItem: 'yup' },
        { _key: '4', _type: 'block', markDefs: [] },
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
        { _key: '2', _type: 'block', markDefs: [] },
        { _key: '3', _type: 'block', markDefs: [] },
        { _key: '4', _type: 'block', markDefs: [] },
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

  describe('span parsing', () => {
    it('span parsing 1', () => {
      const blocks = [
        {
          _key: '1',
          _type: 'block',
          markDefs: [],
          style: 'h2',
          children: [
            {
              _key: 'span-1',
              _type: 'span',
              marks: [],
              text: 'test',
            },
          ],
        },
      ];

      const parsed = parseBlocks(blocks);

      const expected: PortableText = [
        {
          kind: 'text',
          key: '1',
          spans: [
            {
              key: 'span-1',
              type: 'span',
              marks: [],
              text: 'test',
            },
          ],
        },
      ];

      expect(parsed).toEqual(expected);
    });

    it('span parsing 2', () => {
      const blocks = [
        {
          _key: '1',
          _type: 'block',
          markDefs: [],
          style: 'h2',
          children: [
            {
              _key: 'span-1',
              _type: 'span',
              marks: ['em'],
              text: 'test',
            },
          ],
        },
      ];

      const parsed = parseBlocks(blocks);

      const expected: PortableText = [
        {
          kind: 'text',
          key: '1',
          spans: [
            {
              key: 'span-1',
              type: 'span',
              marks: [{ type: 'em' }],
              text: 'test',
            },
          ],
        },
      ];

      expect(parsed).toEqual(expected);
    });
  });
});
