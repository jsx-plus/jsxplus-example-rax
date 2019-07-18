function processConfig(config) {
  const { plugins } = config.module.rules[1].use[0].options;

  plugins.push(require('babel-plugin-transform-jsx-memo'));
  plugins.push(require('babel-plugin-transform-jsx-slot'));
  plugins.push(require('babel-plugin-transform-jsx-fragment'));
  plugins.push(require('babel-plugin-transform-jsx-class'));
  plugins.push(require('babel-plugin-transform-jsx-list'));

  return config;
}

module.exports = (config) => {
  if (Array.isArray(config)) config = config.map(processConfig);
  else config = processConfig(config);
  return config;
};
