var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var env = process.env.NODE_ENV.trim();
var plugins = [];
var entry = null;
var output = {};
var devtool = '';

console.log('env',env)

if( env == 'production' ){
    entry = {index:['./config','./src/entry/index']};
    devtool = 'cheap-module-eval-source-map';
    output = {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
      publicPath: '/'    
    }    
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        compress: {
            sequences: true,
            dead_code: true,
            conditionals: true,
            booleans: true,
            unused: true,
            if_return: true,
            join_vars: true,
            drop_console: true,
            warnings: false
        },
        mangle: {
            except: ['exports', 'require']
        },
        output: {
            comments: false
        }
    }));
}else{
  entry = {
    index: ['./config','./src/entry/index', 'webpack-hot-middleware/client?timeout=2000&overlay=false']
    //配置多入口
  };
  devtool = 'source-map';
  output = {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'    
  }
  plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
  plugins.push(new webpack.HotModuleReplacementPlugin());
}
plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(env)
}));
plugins.push(new ExtractTextPlugin("styles.css"));
plugins.push(new webpack.NoErrorsPlugin());
plugins.push(new HtmlWebpackPlugin({
  title:'首页',
  filename: 'index.html',
  template: './template.html',
  inject: 'body', 
  chunks:['index']
}));
module.exports = {
  devtool:devtool,
  entry:entry,  
  output:output,
  plugins:plugins,
  resolve: {
    extensions: ['', '.js', '.json', '.scss','.jsx','.less']
  },  
  module: {
    loaders: [
      {test: /\.css|\.scss$/, loader: 'style!css-loader?modules!sass'},
      {test: /\.css|\.less$/, loader: 'style!css-loader!less'},      
      {
        test: /\.js|\.jsx$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
};
