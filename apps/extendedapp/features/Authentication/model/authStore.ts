import { defineStore } from 'pinia'
import { useUserStore } from '~/entities/User/model/userStore'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    token: '',
  }),
  actions: {
    login(token: string, userData: { id: number, name: string, email: string }) {
      this.isAuthenticated = true
      this.token = token
      const userStore = useUserStore()
      userStore.setUserData(userData.id, userData.name, userData.email)
    },
    logout() {
      this.isAuthenticated = false
      this.token = ''
      const userStore = useUserStore()
      userStore.clearUserData()
    },
  },
})