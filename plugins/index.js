import vue from '@vitejs/plugin-vue'
import createAutoImport from './auto-import'
import createComponents from './components'
import createIcons from './icons'
import createUnocss from './unocss'

/**
 * vite插件
 */
export default (viteEnv, isBuild) => {
  const vitePlugins = []
  vitePlugins.push(vue())
  vitePlugins.push(createUnocss())
  vitePlugins.push(createAutoImport())
  vitePlugins.push(createComponents())
  vitePlugins.push(createIcons())
  return vitePlugins
}
