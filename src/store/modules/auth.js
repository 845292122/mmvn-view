import { defineStore } from 'pinia'

// TODO 认证方法 注销方法 路由权限
export const useAuthStore = defineStore('authStore', {
  state: () => ({
    token: '',
  }),
  actions: {},
  persist: {
    storage: sessionStorage,
  },
})
