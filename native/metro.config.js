const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

const { transformer, resolver } = config;

config.transformer = {
...transformer,
babelTransformerPath: require.resolve("react-native-svg-transformer"),
}

config.resolver = {
    ...resolver,
    // assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    // sourceExts: [...resolver.sourceExts, "svg", ],
    sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs', 'mjs', 'svg'],
    assetExts: ['glb', 'gltf', 'png', 'jpg'],
  };

module.exports = config;