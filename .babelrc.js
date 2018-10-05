const react = true;

function getTargets(target) {
  switch (target) {
    case 'old':
      return 'ie >= 7';
    case 'new':
      return 'last 2 versions';
    case 'chrome':
      // return 'last 2 Chrome versions';
      return {chrome: 60};
    case 'standard':
      return '> 0.25%, not dead';
    case 'node':
    case 'node8':
      return {node: '11'};
    case 'node11':
      return {node: '11'};
    default:
      throw new Error(`Invalid Target: ${target}.`);
  }
}

const target = 'old';

const classProperties = ['old', 'standard'].includes(target);

const plugins = [];

if (classProperties) {
  plugins.push('@babel/plugin-proposal-class-properties');
}

module.exports = {
  presets: [
    '@babel/preset-typescript',
    react && '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        targets: getTargets('chrome'),
      },
    ],
  ],
  plugins,
};
