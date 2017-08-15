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
		extensions: ['*','.js', '.vue', '.json','.css', '.less', '.scss'],
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
				exclude: path.resolve(__dirname, './node_modules')
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
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: [require('autoprefixer')()]
						}
					},
					'less-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: [require('autoprefixer')()]
						}
					},
					'sass-loader'
				]
			},
			{
				test: /\.(gif|jpg|png|woff|svg|eot|ttf)(\?.*)?$/,
                loader: 'url-loader?limit=1024'
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			}
		]
	}
}