const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	devServer: {
		contentBase: path.resolve(__dirname, "./public"),
		historyApiFallback: true,
		port: 3000,
	},
	devtool: "inline-source-map",
	entry: path.resolve(__dirname, "./src/index.js"),
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
};
