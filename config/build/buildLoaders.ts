import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshTypeScript from 'react-refresh-typescript'
import { buildBabelLoader } from "./babel/buildBabelLoader";

export function buildLoaders(options:BuildOptions):ModuleOptions['rules'] {
  const isDev = options.mode === 'development'
  const tsLoader =  {
    test: /\.tsx?$/,
    exclude:/node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
        },
      },
    ],
    
  }
  const cssLoader =  {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' :
      MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
           localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
          }
        },
      },
      "sass-loader",
    ],
  }
  const babelLoader = buildBabelLoader(options)
return [babelLoader,cssLoader]
}