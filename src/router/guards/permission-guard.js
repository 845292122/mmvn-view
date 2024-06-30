import { useAuthStore } from '@/store'

const WHITE_LIST = ['/login', '/404']
export function createPermissionGuard(router) {
  router.beforeEach(async (to, form, next) => {
    const authStore = useAuthStore()
    const token = authStore.token

    /** 没有token */
    if (!token) {
      if (WHITE_LIST.includes(to.path)) next()
      next('/login')
    }

    /** 有token */
    if (to.path === '/login') next('/')
    if (WHITE_LIST.includes(to.path)) next()
    if (!authStore.info) {
      const permRoutes = await authStore.getInfo()
      permRoutes.forEach((route) => {
        router.addRoute(route)
      })
      next({ ...to, replace: true })
    }

    next()
  })
}
