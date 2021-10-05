module.exports = {
  preset: 'ts-jest',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!**/*.d.ts'
  ],
  coverageDirectory: 'coverage',
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    'dotenv/config',
    '<rootDir>/src/setupTests.ts'
  ],
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/src/__mocks__/svgrMock.ts",
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
    'src/(.*)': '<rootDir>/src/$1',
  },
};
