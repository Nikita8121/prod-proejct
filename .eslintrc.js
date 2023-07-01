module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "eslint-config-standard-with-typescript",
    "plugin:i18next/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "i18next"],
  rules: {
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "i18next/no-literal-string": ["error", { markupOnly: true }],
  },
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  globals: {
    __IS_DEV__: true,
  },
};
