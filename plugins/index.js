import vue from '@vitejs/plugin-vue'
import createAutoImport from './auto-import'
import createUnocss from './unocss'

/**
 * vite插件
 */
export default (viteEnv, isBuild) => {
  const vitePlugins = []
  vitePlugins.push(vue())
  vitePlugins.push(createUnocss())
  vitePlugins.push(createAutoImport())
  return vitePlugins
}
