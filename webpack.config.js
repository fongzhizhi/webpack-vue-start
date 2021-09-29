// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  /**模式 */
  mode: 'development',
  /**入口 */
  entry: path.resolve(__dirname, './src/main.ts'),
  /**出口 */
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js']
  },
  /**构建目标 */
  target: 'web',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx$/,
        loader: 'ts-loader'
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              useRelativePath: true,
              limit: 1024,
              esModule: false
            }
          }
        ]
      }
    ]
  },
  /**插件 */
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    // 请确保引入这个插件来施展魔法
    new VueLoaderPlugin()
  ],
  optimization: {
    usedExports: true,
    minimize: true,
    concatenateModules: true,
  },
  /**服务 */
  devServer: {
    // contentBase: [
    //     path.join(__dirname, 'dist'),
    //     path.join(__dirname, 'pybulic'),
    // ],
    // watchContentBase: true,
    compress: false, 
    port: 9000,
    hot: true,
    open: false,
  }
}