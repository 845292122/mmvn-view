import vue from '@vitejs/plugin-vue'

/**
 * vite插件
 */
export default (viteEnv, isBuild) => {
  const vitePlugins = []
  vitePlugins.push(vue())
  return vitePlugins
}
