module.exports = {
  env: {
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier"
  ],
  plugins: ["import", "@typescript-eslint"],
  parserOptions: {
    project: ["./tsconfig.json"]
  },
  settings: {
    "import/parsers": { "@typescript-eslint/parser": [".ts", ".d.ts"] },
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".d.ts"],
        moduleDirectory: ["node_modules", "src/"]
      },
      typescript: {
        alwaysTryTypes: true,
        project: "."
      }
    }
  },
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-var-requires": "off"
  }
  // overrides: [
  //   {
  //     env: {
  //       jest: true
  //     },
  //     files: ["**/__tests__/**/*.[jt]s", "**/?(*.)+(spec|test).[jt]s"],
  //     extends: ["plugin:jest/recommended"],
  //     rules: {
  //       "import/no-extraneous-dependencies": [
  //         "off",
  //         { devDependencies: ["**/?(*.)+(spec|test).[jt]s"] }
  //       ]
  //     }
  //   }
  // ],
  // ignorePatterns: ["**/*.js", "node_modules", ".turbo", "dist", "coverage"]
};
