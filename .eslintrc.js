module.exports = {
  extends: [
    './node_modules/gts',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'import'],
  rules: {
    'react/prop-types': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    eqeqeq: [2, 'allow-null'],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
