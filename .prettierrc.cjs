const PrettierTailwind = require("prettier-plugin-tailwindcss");

module.exports = {
  arrowParens: "avoid",
  bracketSameLine: false,
  embeddedLanguageFormatting: "auto",
  htmlWhitespaceSensitivity: "css",
  insertPragma: false,
  jsxSingleQuote: false,
  printWidth: 80,
  proseWrap: "preserve",
  quoteProps: "as-needed",
  requirePragma: false,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  vueIndentScriptAndStyle: false,
  plugins: [PrettierTailwind],
};
