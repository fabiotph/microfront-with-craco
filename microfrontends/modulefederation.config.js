const deps = require("./package.json").dependencies;

module.exports = {
  name: "CustomButton",
  exposes: {
    "./Button": "./src/App",
  },
  filename: "remoteEntry.js",
  // shared: {
  //   ...deps,
  //   react: {
  //     singleton: true,
  //     requiredVersion: deps["react"],
  //   },
  //   "react-dom": {
  //     singleton: true,
  //     requiredVersion: deps["react-dom"],
  //   },
  // },
};
