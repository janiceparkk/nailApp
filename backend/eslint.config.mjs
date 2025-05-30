import js from "@eslint/js"
import globals from "globals"
import prettier from "eslint-plugin-prettier/recommended"
import pluginReact from "eslint-plugin-react"
import { defineConfig } from "eslint/config"

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        plugins: { js },
        extends: ["js/recommended"],
    },
    prettier,
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        languageOptions: { globals: globals.browser },
    },
    pluginReact.configs.flat.recommended,
])
