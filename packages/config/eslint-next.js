module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: ["next/core-web-vitals", "prettier"],
  rules: {
    "import/no-anonymous-default-export": "off",
    "@next/next/no-server-import-in-page": "off"
  }
};
