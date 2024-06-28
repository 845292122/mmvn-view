<script setup>
const title = import.meta.env.VITE_APP_TITLE
const loginForm = ref({
  account: '',
  password: '',
  rememberMe: '',
})
const loading = ref(false)
</script>

<template>
  <div flex justify-center items-center h-full>
    <el-form ref="loginRef" :model="loginForm" w-full p-15>
      <h2 text-center mb-5 text-size-2xl>{{ title }}</h2>
      <el-form-item prop="account">
        <el-input
          v-model="loginForm.account"
          autocomplete="off"
          placeholder="账号"
        >
          <template #prefix>
            <i-bi:person-circle />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          placeholder="密码"
        >
          <template #prefix>
            <i-bi:shield-lock />
          </template>
        </el-input>
      </el-form-item>
      <el-tooltip content="保存账号密码30天" placement="right" effect="light">
        <el-checkbox v-model="loginForm.rememberMe">记住密码</el-checkbox>
      </el-tooltip>
      <el-form-item>
        <el-button w-full type="primary" :loading="loading"> 登 录 </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped></style>
