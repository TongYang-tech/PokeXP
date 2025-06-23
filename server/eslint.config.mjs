import js from "@eslint/js"
import globals from "globals"
import { defineConfig } from "eslint/config"

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"]
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "commonjs"
    },
    env: {
      node: true
    }
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions:
    {
      globals: globals.browser
    }
  },
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn"
    }
  }
]);
