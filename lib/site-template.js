import fs from 'node:fs';
import path from 'node:path';

const sourcePath = path.join(process.cwd(), 'index.html');
const sourceHtml = fs.readFileSync(sourcePath, 'utf8');

function extractBodyHtml(html) {
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

  if (!match) {
    throw new Error('Unable to extract the body markup from index.html');
  }

  return match[1]
    .replace(/\s*<!-- Main JavaScript -->\s*<script src="script\.js"><\/script>\s*/i, '\n')
    .trim();
}

export const bodyHtml = extractBodyHtml(sourceHtml);
