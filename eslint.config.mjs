import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
