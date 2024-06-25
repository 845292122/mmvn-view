import vue from '@vitejs/plugin-vue'
import createUnocss from './unocss'

/**
 * vite插件
 */
export default (viteEnv, isBuild) => {
  const vitePlugins = []
  vitePlugins.push(vue())
  vitePlugins.push(createUnocss())
  return vitePlugins
}
