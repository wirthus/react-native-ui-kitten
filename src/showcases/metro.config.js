const path = require('path');
const env = require('./env');

const frameworkModules = [
  path.resolve(__dirname, '../components'),
  path.resolve(__dirname, '../date-fns'),
  path.resolve(__dirname, '../eva-icons'),
  path.resolve(__dirname, '../moment'),
];

const moduleDependencies = [
  // @wirthus/ui-kitten-components
  path.resolve(env.EVA_PATH, 'eva'),
  path.resolve(env.EVA_PATH, 'processor'),
  path.resolve(__dirname, '../../node_modules/@eva-design/dss'),
  path.resolve(__dirname, '../../node_modules/hoist-non-react-statics'),
  path.resolve(__dirname, '../../node_modules/lodash.merge'),
  path.resolve(__dirname, '../../node_modules/fecha'),

  // @wirthus/ui-kitten-eva-icons
  path.resolve(__dirname, '../../node_modules/react-native-eva-icons'),
  path.resolve(__dirname, '../../node_modules/react-native-svg'),

  // @wirthus/ui-kitten-moment
  path.resolve(__dirname, '../../node_modules/moment'),

  // @wirthus/ui-kitten-date-fns
  path.resolve(__dirname, '../../node_modules/date-fns'),

  // external
  path.resolve(__dirname, '../../node_modules/react-is'),
  path.resolve(__dirname, '../../node_modules/source-map'),
];

const playgroundExtraModules = {
  '@babel/runtime': path.resolve(__dirname, './node_modules/@babel/runtime'),
  'react': path.resolve(__dirname, './node_modules/react'),
  'react-native': path.resolve(__dirname, './node_modules/react-native'),
  'css-tree': path.resolve(__dirname, './node_modules/css-tree'),
  'css-select': path.resolve(__dirname, './node_modules/css-select'),
};

module.exports = {
  projectRoot: path.resolve(__dirname),
  resolver: {
    extraNodeModules: playgroundExtraModules,
  },
  watchFolders: [
    ...frameworkModules,
    ...moduleDependencies,
  ],
};
