export const staticRoutes = [
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      layout: 'blank',
    },
  },
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/error/404.vue'),
    meta: {
      title: '页面飞走了',
    },
  },
]
