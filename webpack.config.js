const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const options = {
	output: {
		path: path.resolve(`${ __dirname }/dist`),
	},
	externals: {
		vue: 'vue',
	},
	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.(js|vue)$/,
				exclude: /node_modules/,
				loader: "eslint-loader",
				options: {
					formatter: require('eslint-friendly-formatter')
				}
			},
			{
				test: /\.vue$/,
				loader: "vue-loader"
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/
			}, 
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			}, 
			{
				test: /\.scss$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					},
					{
						loader: "sass-loader"
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.vue'],
	},
	// Configuración para el servidor de desarrollo
	devServer: {
		host: '0.0.0.0',
		inline: true,
		hot: true,
		clientLogLevel: 'warning',
		historyApiFallback: true,
		compress: true,
		open: true,
		watchOptions: { poll: false },
		overlay: {
			warnings: false,
			errors: true
		}
	},
	optimization: {
		minimize: true
	},
}

module.exports = [
	// Config 1: For browser environment
	merge(options, {
		entry: path.resolve(`${ __dirname }/src/index.js`),
		output: {
			filename: "vue-panels.js",
			libraryTarget: "window",
			library: "VuePanels",
		}
	}),
	// Config 2: For Node-based development environments
	merge(options, {
		entry: path.resolve(`${ __dirname }/src/components/VuePanels.vue`),
		output: {
			filename: 'vue-panels.js',
			libraryTarget: 'umd',
			library: 'vue-panels',
			umdNamedDefine: true,
		}
	}),
]