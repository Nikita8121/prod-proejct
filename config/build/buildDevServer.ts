import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { type BuildOptions } from './types/config'

export function buildDevServer (options: BuildOptions): DevServerConfiguration {
  return {
    hot: true,
    port: options.port,
    open: true,
    historyApiFallback: true
  }
}
