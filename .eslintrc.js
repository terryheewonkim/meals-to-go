module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    'react-native/react-native': true,  // Enable React Native environment
    browser: true,  // For React Native web support
  },
  extends: [
    'eslint:recommended',  // Basic ESLint recommended rules
    'plugin:react/recommended',  // Recommended React rules
    'plugin:react-native/all',  // Recommended React Native rules
    'plugin:@typescript-eslint/recommended',  // Recommended TypeScript rules
  ],
  plugins: [
    'react',  // React plugin
    'react-native',  // React Native plugin
    '@typescript-eslint',  // TypeScript plugin
  ],
  rules: {
    // Customize any rules you want to override here
    'react/prop-types': 'off',  // Disable PropTypes validation in TypeScript
    '@typescript-eslint/no-unused-vars': ['warn'],  // Warn on unused variables
    '@typescript-eslint/no-explicit-any': ['warn'],
    'react-native/no-unused-styles': 'warn',  // Warn on unused styles in React Native
    'react-native/split-platform-components': 'warn',  // Warn if platform-specific components are not split
    'react-native/no-inline-styles': 'off',
    'react-native/no-color-literals': 'off',
    'react-native/sort-styles': 'off',
    'react/react-in-jsx-scope': 'off',  // Not needed for React 17+ with JSX transform
  },
}