module.exports = {
  preset: 'react-native',
  cacheDirectory: '<rootDir>/dist/jest/cache',
  coverageDirectory: '<rootDir>/dist/jest/coverage',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/src/showcases/',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/dist',
  ],
};
