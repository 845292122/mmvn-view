import { createLoadingGuard } from './loading-guard'

/**
 * 路由守卫
 * TODO 路由权限认证
 */
export function setupRouterGuard(router) {
  createLoadingGuard(router)
}
