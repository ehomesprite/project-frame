// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html',
    'vue'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    "prefer-promise-reject-errors": 0,
    "object-curly-newline": ["error", {
      "ObjectExpression": { "consistent": true },
      "ObjectPattern": { "multiline": true },
      "ImportDeclaration": "never",
      "ExportDeclaration": { "multiline": true, "minProperties": 3 }
    }],
    "prefer-destructuring": ["error", { "object": false, "array": false }],
    "no-restricted-globals": 0,
    "no-console": 0,
    // allow: The option is an array of identifier names to be allowed
    "no-shadow": 0,
    // prevent unintended behavior caused by modification or reassignment of function parameters.
    "no-param-reassign": 0,
    "no-void": 0,
    // enforce a maximum line length
    "max-len": 0,
    // "treatUndefinedAsUnspecified": true always either specify values or return undefined explicitly or implicitly.
    // http://eslint.org/docs/rules/consistent-return
    "consistent-return": ["error", {
      "treatUndefinedAsUnspecified": true
    }],
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    'no-underscore-dangle': ["error", {
      "allowAfterThis": true,
    }],
    // windows linebreaks when not in production environment
    "linebreak-style": 0
  }
};
