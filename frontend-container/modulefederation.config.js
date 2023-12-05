const { dependencies } = require("./package.json");

module.exports = {
  name: "app1",
  exposes: {
    "./App": "./src/App",
  },
  remotes: {
    CustomButton: "CustomButton@http://localhost:3001/remoteEntry.js",
  },
  filename: "remoteEntry.js",
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies.react,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};
