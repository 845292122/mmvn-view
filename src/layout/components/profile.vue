<script setup></script>

<template>
  <el-dropdown>
    <div flex cursor-pointer items-center>
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <div flex-col flex-shrink-0 items-center ml-3>
        <span text-4>super</span>
        <span text-3 opacity-50>merchant-name</span>
      </div>
    </div>
    <template #dropdown>
      <el-dropdown-item>账户资料</el-dropdown-item>
      <el-dropdown-item divided>退出登录</el-dropdown-item>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped>
:deep(.el-tooltip__trigger:focus-visible) {
  outline: unset;
}
</style>
