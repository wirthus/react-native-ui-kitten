const path = require('path');
const environment = require('./env');

const evaModules = {
  '@eva-design/eva': path.resolve(environment.EVA_PATH, 'eva'),
  '@eva-design/material': path.resolve(environment.EVA_PATH, 'material'),
  '@eva-design/processor': path.resolve(environment.EVA_PATH, 'processor'),
};

const frameworkModules = {
  '@wirthus/ui-kitten-components': path.resolve(__dirname, '../components'),
  '@wirthus/ui-kitten-date-fns': path.resolve(__dirname, '../date-fns'),
  '@wirthus/ui-kitten-eva-icons': path.resolve(__dirname, '../eva-icons'),
  '@wirthus/ui-kitten-moment': path.resolve(__dirname, '../moment'),
};

const moduleResolverConfig = {
  root: path.resolve('./'),
  alias: {
    ...evaModules,
    ...frameworkModules,
  },
};

const presets = [
  'babel-preset-expo',
];

const plugins = [
  ['module-resolver', moduleResolverConfig],
  ["@babel/plugin-proposal-decorators", { 'legacy': true }],
  ["react-native-web", { commonjs: true }]
];

module.exports = function (api) {
  api.cache(true);
  return { presets, plugins };
};
