/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/build/'],
  testMatch: ['**/*.test.ts'],
  setupFiles: ['<rootDir>/src/tests/setupTests.ts'],
  transform: {
    '^.+\\.{ts|tsx}?$': ['ts-jest', {
      babel: true,
      tsconfig: '<rootDir>/tsconfig.json',
    }],

  },
};