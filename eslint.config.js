import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
 

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/*.{js,mjs,cjs,ts}']},
  {languageOptions: { globals: {...globals.browser, ...globals.node} },
    rules: {
      quotes: ['warn', 'single'],
      semi: ['error', 'always'],
      indent: ['warn', 2],
      'no-unused-vars': 'warn',}
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];