const path = require('path');

module.exports = {
	mode: 'development',
	entry: './code/client/src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'code/client/dist')
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['./.babelrc.js']
					}
				}
			}
		]
	}
};
