const otherOptions = require('./eslint-other-options.js');

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  // NOTE: 이거는 뭐 때문에 주석처리 했음.
  // globals: {
  //   $: 'readonly'
  // },
  rules: {
    // ...otherOptions,
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
