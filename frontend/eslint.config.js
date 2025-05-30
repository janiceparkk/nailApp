// eslint.config.js
import js from "@eslint/js"
import globals from "globals"
import pluginReact from "eslint-plugin-react"
import pluginPrettier from "eslint-plugin-prettier"
import babelParser from "@babel/eslint-parser"
import { defineConfig } from "eslint/config"

export default defineConfig([
    {
        files: ["**/*.{js,jsx}"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            parser: babelParser, // ✅ Correct object, not a string
            parserOptions: {
                requireConfigFile: false,
                babelOptions: {
                    presets: ["@babel/preset-react"],
                },
            },
            globals: globals.browser,
        },
        plugins: {
            react: pluginReact,
            prettier: pluginPrettier,
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "prettier/prettier": "warn",
        },
    },
])
