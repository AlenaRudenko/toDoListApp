import { buildWebpack } from './config/build/buildWebpack';
import path from 'path'
import { BuildPaths } from './config/build/types/types';
import webpack from 'webpack';
type Mode = 'development' | 'production'

interface Environments {
  mode:Mode,
  port?:number
}

export default (env:Environments) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  }
  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
  })
  return config
}