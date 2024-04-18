import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildLoaders(options:BuildOptions):ModuleOptions['rules'] {
  const isDev = options.mode === 'development'
  const tsLoader =  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  const cssLoader =  {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' :
      MiniCssExtractPlugin.loader,
      "css-loader",
      "sass-loader",
    ],
  }
return [tsLoader,cssLoader]
}