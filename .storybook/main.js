module.exports = {
  stories: ["../src/**/*.stories.js"],
  addons: [
    {
      name: "@storybook/preset-scss",
      options: {
        cssLoaderOptions: {
          modules: {
            localIdentName: "[name]__[local]--[hash:base64:5]"
          }
        }
      }
    },
    "@storybook/addon-docs",
    "@storybook/addon-a11y/register",
    "@storybook/addon-actions",
    {
      name: "@storybook/addon-knobs/preset",
      options: {
        addDecorator: true
      }
    },
    "@storybook/addon-links",
    "@storybook/addon-viewport/register"
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [["react-app", { flow: false, typescript: true }]]
          }
        },
        {
          loader: require.resolve("react-docgen-typescript-loader")
        }
      ],
      exclude: [/node_modules\/(?!(gatsby)\/)/]
    });
    config.resolve.extensions.push(".ts", ".tsx");
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
    // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    config.module.rules[0].use[0].loader = require.resolve("babel-loader");
    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
      require.resolve("@babel/preset-react"),
      require.resolve("@babel/preset-env")
    ];
    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ["browser", "module", "main"];
    return config;
  }
};
