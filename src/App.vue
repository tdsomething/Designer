<script setup lang="ts">
import { getUserInfo } from '@/apis'
import { useUserStore } from '@/stores'

onMounted(async () => {
  const userStore = useUserStore()
  const resp = await getUserInfo()
  userStore.userInfo = resp.data
})
</script>

<template>
  <n-message-provider>
    <router-view> </router-view>
  </n-message-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
