import { parseBlocks } from '../parser';
import type { PortableText } from '../raw-parser';

describe('parser', () => {
  describe('smoke tests for grouping', () => {
    it('parser 1', () => {
      // fixme: these should be rejected because no children or markdefs?

      const blocks: PortableText = [
        {
          _key: '1',
          _type: 'block',
          children: [],
          kind: 'text',
          markDefs: [],
          style: 'normal',
        },
        {
          _key: '2',
          _type: 'block',
          children: [],
          kind: 'text',
          markDefs: [],
          style: 'normal',
        },
        {
          _key: '3',
          _type: 'block',
          children: [],
          kind: 'text',
          markDefs: [],
          style: 'normal',
        },
      ];

      const parsed = parseBlocks(blocks);

      const expected = [
        {
          key: '1',
          kind: 'text',
          spans: [],
          style: 'normal',
        },
        {
          key: '2',
          kind: 'text',
          spans: [],
          style: 'normal',
        },
        {
          key: '3',
          kind: 'text',
          spans: [],
          style: 'normal',
        },
      ];

      expect(parsed).toEqual(expected);
    });

    it('parser 2', () => {
      const blocks: PortableText = [
        {
          _key: '1',
          _type: 'block',
          children: [],
          kind: 'text',
          markDefs: [],
          style: 'normal',
        },
        {
          _key: '2',
          _type: 'block',
          children: [],
          kind: 'text',
          markDefs: [],
          style: 'normal',
        },
        {
          _key: '3',
          _type: 'block',
          children: [],
          kind: 'text',
          markDefs: [],
          style: 'normal',
        },
        {
          _key: '4',
          _type: 'block',
          children: [],
          kind: 'list',
          level: 1,
          listItem: 'yup',
          markDefs: [],
          style: 'normal',
        },
      ];

      const parsed = parseBlocks(blocks);

      const expected = [
        {
          key: '1',
          kind: 'text',
          spans: [],
          style: 'normal',
        },
        {
          key: '2',
          kind: 'text',
          spans: [],
          style: 'normal',
        },
        {
          key: '3',
          kind: 'text',
          spans: [],
          style: 'normal',
        },
        [
          {
            kind: 'list',
            _key: '4',
            _type: 'block',
            listItem: 'yup',
            children: [],
            level: 1,

            // fixme: sort out the markDefs here
            markDefs: [],
            style: 'normal',
          },
        ],
      ];

      expect(parsed).toEqual(expected);
    });

    it('parser 3', () => {
      const blocks: PortableText = [
        {
          _key: '1',
          _type: 'block',
          children: [],
          kind: 'text',
          markDefs: [],
          style: 'normal',
        },
        {
          _key: '2',
          _type: 'block',
          children: [],
          kind: 'list',
          level: 1,
          listItem: 'yeah',
          markDefs: [],
          style: 'normal',
        },
        {
          _key: '3',
          _type: 'block',
          children: [],
          kind: 'text',
          markDefs: [],
          style: 'normal',
        },
        {
          _key: '4',
          _type: 'block',
          children: [],
          kind: 'text',
          markDefs: [],
          style: 'normal',
        },
      ];

      const parsed = parseBlocks(blocks);

      const expected = [
        {
          key: '1',
          kind: 'text',
          spans: [],
          style: 'normal',
        },
        [
          {
            _key: '2',
            _type: 'block',
            children: [],
            kind: 'list',
            level: 1,
            listItem: 'yeah',
            markDefs: [],
            style: 'normal',
          },
        ],
        {
          key: '3',
          kind: 'text',
          spans: [],
          style: 'normal',
        },
        {
          key: '4',
          kind: 'text',
          spans: [],
          style: 'normal',
        },
      ];

      expect(parsed).toEqual(expected);
    });

    it.skip('parser 4', () => {
      const blocks = [
        {
          _key: '1',
          _type: 'block',
          markDefs: [],
        },
        {
          _key: '2',
          _type: 'block',
          listItem: 'yup',
        },
        {
          _key: '3',
          _type: 'block',
          listItem: 'yup',
        },
        {
          _key: '4',
          _type: 'block',
          markDefs: [],
        },
      ];

      const parsed = parseBlocks(blocks);

      const expected = [
        {
          kind: 'text',
          key: '1',
          spans: [],
        },
        [
          {
            _key: '2',
            _type: 'block',
            listItem: 'yup',
          },
          {
            _key: '3',
            _type: 'block',
            listItem: 'yup',
          },
        ],
        { kind: 'text', key: '4', spans: [] },
      ];

      expect(parsed).toEqual(expected);
    });

    it.skip('parser 5', () => {
      const blocks = [
        {
          _key: '1',
          _type: 'block',
          listItem: 'yup',
        },
        {
          _key: '2',
          _type: 'block',
          markDefs: [],
        },
        {
          _key: '3',
          _type: 'block',
          markDefs: [],
        },
        {
          _key: '4',
          _type: 'block',
          markDefs: [],
        },
      ];

      const parsed = parseBlocks(blocks);

      const expected = [
        [
          {
            _key: '1',
            _type: 'block',
            listItem: 'yup',
          },
        ],
        {
          kind: 'text',
          key: '2',
          spans: [],
        },
        {
          kind: 'text',
          key: '3',
          spans: [],
        },
        {
          kind: 'text',
          key: '4',
          spans: [],
        },
      ];

      expect(parsed).toEqual(expected);
    });

    it.skip('parser 6', () => {
      const blocks = [];

      const parsed = parseBlocks(blocks);

      const expected = [];

      expect(parsed).toEqual(expected);
    });
  });

  describe('span parsing', () => {
    it.skip('span parsing 1', () => {
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

      const expected = [
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

    it.skip('span parsing 2', () => {
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

      const expected = [
        {
          kind: 'text',
          key: '1',
          spans: [
            {
              key: 'span-1',
              type: 'span',
              marks: [
                {
                  type: 'em',
                },
              ],
              text: 'test',
            },
          ],
        },
      ];

      expect(parsed).toEqual(expected);
    });

    it.skip('span parsing 3', () => {
      const blocks = [
        {
          _key: '1',
          _type: 'block',
          markDefs: [
            {
              _key: 'linkdef',
              _type: 'link',
              href: 'https://example.org',
            },
          ],
          style: 'h2',
          children: [
            {
              _key: 'span-1',
              _type: 'span',
              marks: ['linkdef'],
              text: 'test',
            },
          ],
        },
      ];

      const parsed = parseBlocks(blocks);

      const expected = [
        {
          kind: 'text',
          key: '1',
          spans: [
            {
              key: 'span-1',
              type: 'span',
              marks: [
                { type: 'link', options: { href: 'https://example.org' } },
              ],
              text: 'test',
            },
          ],
        },
      ];

      expect(parsed).toEqual(expected);
    });

    it.skip('span parsing 4', () => {
      const blocks = [
        {
          _key: '1',
          _type: 'block',
          markDefs: [
            {
              _key: 'linkdef',
              _type: 'link',
              href: 'https://example.org',
            },
          ],
          style: 'h2',
          children: [
            {
              _key: 'span-1',
              _type: 'span',
              marks: ['em', 'linkdef', 'u'],
              text: 'test',
            },
          ],
        },
      ];

      const parsed = parseBlocks(blocks);

      const expected = [
        {
          kind: 'text',
          key: '1',
          spans: [
            {
              key: 'span-1',
              type: 'span',
              marks: [
                { type: 'em' },
                { type: 'link', options: { href: 'https://example.org' } },
                { type: 'u' },
              ],
              text: 'test',
            },
          ],
        },
      ];

      expect(parsed).toEqual(expected);
    });

    it.todo('multiple spans with same mark from markdefs');
  });
});
