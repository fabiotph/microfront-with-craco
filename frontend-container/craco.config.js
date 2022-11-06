const cracoModuleFederation = require("craco-module-federation");

module.exports = {
  devServer: {
    client: {
      overlay: false,
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
      options: { useNamedChunkIds: true }, //THIS LINE IS OPTIONAL
    },
  ],
};
