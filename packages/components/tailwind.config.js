const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    join(__dirname, '.storybook/preview.js'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  presets: [require('../../tailwind.config.base')],
  theme: {
    extend: {},
  },
  plugins: [],
};
