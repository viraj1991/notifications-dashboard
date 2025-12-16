import nextJest from 'next/jest.js';

const createJestConfig = nextJest({

  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {

    '^@/(.*)$': '<rootDir>/$1',
  },
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/.next/**',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!jest.config.mjs',
    '!jest.setup.js',
  ],
};

export default createJestConfig(customJestConfig);