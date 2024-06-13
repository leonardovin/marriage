// .eslintrc.js
module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["jsdoc"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "jsdoc/require-jsdoc": ["error", {
      "contexts": ["ExportNamedDeclaration"]
    }],
    "jsdoc/check-tag-names": ["error", {
      "definedTags": ["param", "returns"]
    }]
  }
};
