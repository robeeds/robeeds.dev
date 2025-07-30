// This function generates the headings for the Table of Contents (Intended for Posts)

export type Heading = {
  text: string;
  id: string;
  level: number;
};

export function extractHeadings(content: any): Heading[] {
  const headings: Heading[] = [];

  const rootNodes = content?.root?.children ?? [];

  rootNodes.forEach((node: any) => {
    if (node.type === 'heading' && node.tag?.match(/^h[1-6]$/)) {
      const level = parseInt(node.tag[1], 10);
      const text = node.children?.map((c: any) => c.text).join('') ?? '';
      const id = text
        .trimEnd()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '');

      headings.push({ text, id, level });
    }
  });

  return headings;
}
