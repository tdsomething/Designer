import { defineStore, acceptHMRUpdate } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    userInfo: {}
  })
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
