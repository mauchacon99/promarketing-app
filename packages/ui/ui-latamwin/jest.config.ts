import type { Config } from "@jest/types";
import { resolve } from "path";
const configuration: Config.InitialOptions = {
    modulePathIgnorePatterns: ["node_modules", "jest-test-results.json"],
    collectCoverage: true,
    preset: "ts-jest",
    testEnvironment: "jsdom",
    extensionsToTreatAsEsm: [".tsx"],
    moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.js$": "$1",
        "^.+\\.(css|less|scss)$": "babel-jest",
        "^@cva/(.*)$": resolve(__dirname, "./src/cva/$1"),
    },

    transform: {
        "^.+\\.ts?$": "ts-jest",
    },
    // Runs special logic, such as cleaning up components
    // when using React Testing Library and adds special
    // extended assertions to Jest
    /*setupFilesAfterEnv: [
    "@testing-library/react/cleanup-after-each",
    "@testing-library/jest-dom/extend-expect"
  ],*/
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
};

export default configuration;
