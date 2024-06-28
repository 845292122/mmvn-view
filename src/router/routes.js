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

export const dynamicRoutes = [
  {
    name: 'system',
    path: '/system',
    redirect: '/system/account',
    requireAdmin: true,
    meta: {
      title: '系统管理',
    },
    children: [
      {
        name: 'system-account',
        path: '/system/account',
        component: () => import('@/views/system/account/index.vue'),
        requireAdmin: true,
        meta: {
          title: '账户管理',
        },
      },
    ],
  },
]
