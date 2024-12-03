const path = require('path');

const buildBlackCommand = (filenames) =>
  `python -m black --line-length 79 ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' ')}`;

module.exports = {
  '*.{py,pyt}': [buildBlackCommand],
  '*.{css,md}': ['prettier --write --config ./.config/.prettierrc.mjs'],
  '*.{js,jsx,ts,tsx}': ['prettier --write --config ./.config/.prettierrc.mjs'],
};
