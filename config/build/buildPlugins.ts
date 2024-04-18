import { Configuration } from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BuildOptions } from "./types/types";

export function buildPlugins(options:BuildOptions):Configuration['plugins'] {
  const {mode,paths} = options
  
  const isDev = mode === 'development'
  const isProd = mode === 'production'
  if (isDev) {

  }
  if(isProd) {
    
  }
return ([
    new HtmlWebpackPlugin({
        template: paths.html}),
      isProd && new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[id].[contenthash:8].css",
      })
])
}