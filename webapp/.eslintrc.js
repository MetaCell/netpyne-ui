module.exports = {
  extends: [
    "./node_modules/@geppettoengine/geppetto-client/.eslintrc.js",
    "plugin:jest/recommended"
  ],
  rules: {
    'multiline-comment-style': 0,
  },
  plugins: ["jest"],
  globals: {
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true,
    acnet2: true,
    c302: true,
    pvdr: true,
    net1: true,
    CanvasContainer: true,
    patchRequire: true
  }
};