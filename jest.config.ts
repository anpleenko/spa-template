import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  moduleDirectories: ['node_modules', 'src'],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testEnvironment: 'jsdom',
  verbose: true,
};

// eslint-disable-next-line import/no-default-export
export default config;
