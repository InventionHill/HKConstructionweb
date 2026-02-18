module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
    createDefaultProgram: true,
  },
  env: {
    browser: true,
  },
  ignorePatterns: ["/build"],
  rules: {
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "no-nested-ternary": "off",
    "no-console": ["error", { allow: ["error"] }],
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "react/jsx-no-useless-fragment": [2, { allowExpressions: true }],
  },
};