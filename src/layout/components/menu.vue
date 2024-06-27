<script setup>
import { useAppStore } from '@/store'
import MenuItem from './menu-item'

const appStore = useAppStore()
const menuList = ref([])
</script>

<template>
  <el-scrollbar>
    <el-menu
      :default-active="$route.path"
      :unique-opened="true"
      router
      :collapse="appStore.menuCollapsed"
      :collapse-transition="false"
    >
      <MenuItem :menuList="menuList" />
    </el-menu>
  </el-scrollbar>
</template>

<style lang="scss" scoped>
$menu-height: 40px;

.menu-wrapper {
  transition: width 0.4s ease;
}

.el-menu {
  border: none;
  box-sizing: border-box;
}

.el-menu--popup {
  height: $menu-height;
  margin-bottom: 5px;
}

:deep(.el-menu) {
  background-color: transparent;
  &.is-active {
    color: aqua;
  }
}

:deep(.el-sub-menu__title) {
  height: $menu-height;
  margin-bottom: 5px;
  color: #ffffffb3;
  &:hover {
    background-color: #ffffff14;
    border-radius: 5px;
  }
}

:deep(.el-menu-item) {
  height: $menu-height;
  margin-bottom: 5px;
  color: #ffffffb3;
  &:hover {
    background-color: #ffffff14;
    border-radius: 5px;
  }
  &.is-active {
    background-color: #ffffff14;
    color: var(--el-color-primary);
    border-radius: 5px;
  }
}

:deep(.el-sub-menu.is-active) {
  .el-sub-menu__title {
    color: var(--el-color-primary);
  }
}
</style>
