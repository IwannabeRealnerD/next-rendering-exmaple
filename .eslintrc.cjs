module.exports = {
  root: true,
  parserOptions: {
    project: "./tsconfig.json",
  },
  env: { browser: true, es2020: true },
  extends: ["next/core-web-vitals", "khanne-react"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
};
