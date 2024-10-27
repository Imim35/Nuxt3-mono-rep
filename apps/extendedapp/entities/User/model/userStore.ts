import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: null as number | null,
    name: '',
    email: '',
  }),
  actions: {
    setUserData(id: number, name: string, email: string) {
      this.id = id
      this.name = name
      this.email = email
    },
    clearUserData() {
      this.id = null
      this.name = ''
      this.email = ''
    },
  },
})