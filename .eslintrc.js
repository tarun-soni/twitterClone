module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    semi: 0,
    'eslint-comments/no-unlimited-disable': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-curly-new-line': 0,
    'no-param-reassign': 0,
    'react-native/no-inline-styles': 0,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'no-console': 1,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'react-native/sort-styles': [
      'error',
      'asc',
      {
        ignoreClassNames: false,
        ignoreStyleProperties: false,
      },
    ],
    'eslint-comments/no-unused-disable': 0,
  },
}
