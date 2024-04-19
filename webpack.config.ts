import { buildWebpack } from './config/build/buildWebpack';
import path from 'path'
import { BuildMode, BuildPaths } from './config/build/types/types';
import webpack from 'webpack';


interface Environments {
  mode:BuildMode,
  port?:number
}

export default (env:Environments) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }
  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
  })
  return config
}