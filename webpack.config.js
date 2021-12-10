const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var glob = require('glob');

module.exports = {
  devServer: {
    port: 9000,
    proxy: {
      '/api/*': {
        target: 'http://localhost:8000',
      },
    },
    historyApiFallback: true,
  },
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.js'),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.less'],
    alias: {
      themes: path.resolve(__dirname, 'src/themes'),
    },
  },
  entry: {
    // ...glob.sync(path.resolve(__dirname, './src/**/*.js')).reduce(function (obj, el) {
    //   console.log(obj, el);
    //   obj[path.parse(el).name] = el;
    //   return obj;
    // }, {}),
    index: path.resolve(__dirname, './src/index.js'),
    ...glob.sync(`${__dirname}/src/{**/*.ts,**/*.tsx}`).reduce(function (obj, el) {
      // es greladzevy mtacelu tegxa talis
      const pathPars = path.parse(el);
      const pathMap = pathPars.dir.split('/');
      const bandlerName = pathPars.name.includes('index') ? pathMap[pathMap.length - 1] : pathPars.name;

      console.log(bandlerName, '< bandlerName');
      obj[bandlerName] = el;
      return obj;
    }, {}),
    // components: glob.sync(path.resolve(__dirname, './src/components/*.js')),
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
        // use: [
        //   'style-loader',
        //   'css-loader',
        //   'less-loader',
        //   {
        //     loader: 'less-loader',
        //     options: {
        //       lessOptions: {
        //         javascriptEnabled: true,
        //       },
        //     },
        //   },
        // ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'ProjectName',
      hash: true,
      filename: 'index.html', //relative to root of the application
      // chunks: [**'common'**, 'app'],
      path: path.resolve(__dirname, 'dist'),
      template: './src/index.html',
      templateParameters(compilation, assets, options) {
        return {
          compilation: compilation,
          webpack: compilation.getStats().toJson(),
          webpackConfig: compilation.options,
          htmlWebpackPlugin: {
            files: assets,
            options: options,
          },
          process,
        };
      },
    }),
  ],
  output: {
    publicPath: 'auto',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
};
