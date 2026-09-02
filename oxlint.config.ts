import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: ['typescript', 'import', 'unicorn', 'node', 'react', 'jsx-a11y', 'nextjs', 'jest'],

  options: {
    typeAware: true,
  },

  settings: {
    next: {
      rootDir: 'apps/web',
    },
  },

  rules: {
    eqeqeq: 'error',
    'no-debugger': 'error',
    'prefer-const': 'error',
  },

  overrides: [
    {
      files: ['apps/api/**/*.ts'],
      plugins: ['typescript', 'import', 'unicorn', 'node', 'jest'],
    },
    {
      files: ['apps/web/**/*.{ts,tsx}'],
      plugins: ['typescript', 'import', 'unicorn', 'react', 'jsx-a11y', 'nextjs'],
    },
  ],
});
