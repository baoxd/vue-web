const path = require('path');

module.exports = {
	entry: {
		main: './src/main',
		vendors: ['vue', 'vue-router', 'element-ui']
	},
	output: {
		path: path.resolve(__dirname, './dist')
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		modules:[
			path.resolve(__dirname, './src'),
			path.resolve(__dirname, './node_modules')
		]
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include:[path.resolve(__dirname, './src')],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [require('autoprefixer')()]
						}
					}
				]
			}
		]
	}
}