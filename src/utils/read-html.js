import fs from 'fs';
import path from 'path';

export function readHTML(relativePath) {
  return fs.readFileSync(path.resolve(relativePath), 'utf-8');
}
