const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');

module.exports = merge(webpackBaseConfig, {
	devServer: {
		port: 8088,
		contentBase: ".",
		hot: true,
		open: true,
		inline: true,
		compress: true,
		historyApiFallback: true,
		stats: {
			colors: true
		}
	}
});