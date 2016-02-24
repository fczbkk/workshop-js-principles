module.exports = {
  entry: "./index.js",
  output: {
    path: "./build/",
    filename: "bundle.js",
    publicPath: "/build/"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ["style", "css"]
      },
      {
        test: /\.png$/,
        loader: "url",
        query: {
          prefix: "/build/"
        }
      }
    ]
  }
}