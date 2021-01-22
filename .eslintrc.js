module.exports = {
  extends: ['react-app', 'prettier', 'prettier/react'],
  // eslint-config-prettier
  // Turns off all rules that are unnecessary or might conflict with Prettier
  // https://github.com/prettier/eslint-config-prettier
  plugins: ['prettier'],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 'off',
    'prettier/prettier': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    // '@typescript-eslint/no-unused-vars': 'off'
  },
};
