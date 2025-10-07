import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import ts from 'typescript-eslint';

export default [
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    plugins: {
      react,
      'react-hooks': reactHooks,
      '@typescript-eslint': ts.plugin,
      prettier
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/prefer-as-const': 'error',
      '@typescript-eslint/no-explicit-any': ['warn'],
      '@typescript-eslint/no-unused-expressions': 'off',
      'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
      'no-useless-catch': 'off',
      'react/jsx-no-target-blank': 'off',
      'prefer-const': 'error',
      'no-empty': 'error',
      'no-empty-pattern': 'error',
      'no-prototype-builtins': 'warn',
      'react/prop-types': 'off',
      'no-constant-binary-expression': 'error',
      'react-hooks/exhaustive-deps': 'off'
    }
  },
  { ignores: ['build/'] }
];
