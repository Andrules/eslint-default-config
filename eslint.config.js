// Please CHECK README.md before inject this file in project
// Just use or extend, it's up to you

//Please read this imports and use your package manager to install necessary node_modules
import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tseslint from 'typescript-eslint'

export default [
  {
    // those files we are don't need to lint beacause they are 
    // system files, reports, bundles or external code
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/*.min.*',
      '**/*.d.ts'
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended, //remove this line if you do not use TypeScript

  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn'
    }
  },

  // General project rules
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      prettier,
      'simple-import-sort': simpleImportSort // sorting-imports-plugin rules (trust me, this plugin really make sense)
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'error',

      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      'no-unused-vars': 'off', // set 'on' if you do not use TS in your project
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports'
        }
      ],

      // IMPORTANT !!!
      // prepare your vscode and turn off prettier extension for avoid conflicts between this formatter tool and global settings.json of VSCode.
      // also recommend you to add /.vscode directory in root of your project and add some rules to turn on "onSave formatting"

      // Prettier plugin configuration
      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          jsxSingleQuote: true,
          printWidth: 80,
          tabWidth: 2,
          endOfLine: 'auto',
          trailingComma: 'none'
        },
        {
          usePrettierrc: false // Preffer to use this settting not .prettierrc file
        }
      ]
    }
  },
  // turn off conflict rules of ESLint
  eslintConfigPrettier
]
