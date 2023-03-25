module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true,
        'jest': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': { 'jsx': true },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint',
        'simple-import-sort'
    ],
    'rules': {
        'no-undef': 'error',
        'eqeqeq': 'error',
        'default-param-last': ['error'],
        'no-param-reassign': 'error',
        'require-await': 'error',
        'no-use-before-define': ['error', { 'functions': false }],
        'indent': ['error', 4],
        'quotes': ['error', 'single'],
        'no-multi-spaces': 'error',
        'object-curly-newline': ['error', {
            'ObjectExpression': { 'multiline': true, 'minProperties': 4 },
            'ObjectPattern': { 'multiline': true, 'minProperties': 4 },
            'ImportDeclaration': { 'multiline': true, 'minProperties': 3 },
            'ExportDeclaration': { 'multiline': true, 'minProperties': 3 }
        }],
        'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
        'no-trailing-spaces': ['error', { 'skipBlankLines': true }],
        'semi': ['error', 'always'],
        'semi-spacing': ['error', { 'before': false, 'after': false }],
        'key-spacing': ['error', { 'afterColon': true, 'mode': 'strict' }],
        'switch-colon-spacing': ['error', { 'after': true, 'before': false }],
        'no-irregular-whitespace': ['error', { 'skipRegExps': true }],
        'comma-dangle': ['error', 'never'],
        'no-empty-function': ['error', { 'allow': ['arrowFunctions'] }],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': ['error', { 'int32Hint': false }],
        'object-curly-spacing': ['error', 'always'],
        'arrow-spacing': ['error', { 'before': false, 'after': true }],
        'no-console': 'warn',
        'space-before-blocks': ['error', { 'functions': 'always', 'keywords': 'never', 'classes': 'always' }],
        'space-before-function-paren': ['error', {
            'anonymous': 'always',
            'named': 'never',
            'asyncArrow': 'always'
        }],
        'simple-import-sort/imports': 'error',
        '@typescript-eslint/no-unused-vars': ['error', {
            'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false, 'argsIgnorePattern': '^_', 'caughtErrors': 'all'
        }],
        '@typescript-eslint/no-empty-function': ['error', { 'allow': ['arrowFunctions'] }],
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/destructuring-assignment': ['error', 'always']
    }
};