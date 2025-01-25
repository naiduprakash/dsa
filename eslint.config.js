import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */

const eslintConfig =  [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn', // Warn about unused variables
      'no-console': 'off', // Allow console logs for debugging
      'curly': 'error', // Require curly braces for clarity
      'semi': ['error', 'always'], // Enforce semicolons
      'quotes': ['error', 'single'], // Use single quotes for consistency
      'no-var': 'error', // Enforce let/const over var
      'prefer-const': 'warn', // Suggest using const if variables don't change
      'eqeqeq': 'warn', // Encourage strict equality (===) over loose equality (==)
      'arrow-spacing': ['error', { before: true, after: true }], // Enforce spacing in arrow functions
      'indent': ['error', 2], // Enforce 2-space indentation
      'space-in-parens': ['error', 'never'], // No spaces inside parentheses
      'array-bracket-spacing': ['error', 'never'], // No spaces inside array brackets
    }
  }
];

export default eslintConfig;