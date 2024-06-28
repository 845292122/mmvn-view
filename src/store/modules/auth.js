import { defineStore } from 'pinia'

// TODO 认证方法
export const useAuthStore = defineStore('authStore', {
  state: () => ({
    token: '',
  }),
  actions: {},
  persist: {
    storage: sessionStorage,
  },
})
