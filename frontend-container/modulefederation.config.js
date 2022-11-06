const deps = require("./package.json").dependencies;

module.exports = {
  name: "app1",
  exposes: {
    "./App": "./src/App",
  },
  remotes: {
    button: "button@http://localhost:3001/remoteEntry.js",
  },
  filename: "remoteEntry.js",
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};
