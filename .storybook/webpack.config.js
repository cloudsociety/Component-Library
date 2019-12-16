module.exports = ({config}) => {
  config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx'];
  config.resolve.mainFields = ['browser', 'module', 'main'];

  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre',
  });

  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: {parser: 'typescript'},
      },
    ],
    enforce: 'pre',
  });

  config.module.rules.push({
    test: /\.jsx?$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: ['react-app'],
    },
    exclude: [/node_modules\/(?!(gatsby)\/)/],
  });

  config.module.rules.push({
    test: /\.tsx?$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', {flow: false, typescript: true}]],
    },
    exclude: [/node_modules\/(?!(gatsby)\/)/],
  });

  config.module.rules.push({
    test: /\.scss$/,
    // include: /\/styles\//,
    loaders: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
          modules: true,
        },
      },
      require.resolve('sass-loader'),
    ],
  });

  // config.module.rules.push({
  //   test: [/\.woff2?$/, /\.eot?$/],
  //   loader: require.resolve('url-loader'),
  //   options: {
  //     limit: 10000,
  //     name: 'static/media/[name].[hash:8].[ext]',
  //   },
  // });

  return config;
};
