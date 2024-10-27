<script setup lang="ts">
import { useAuthStore } from '../model/authStore'

const authStore = useAuthStore()

const isAuthenticated = computed(() => authStore.isAuthenticated)

function login() {
  if (authStore.isAuthenticated) {
    authStore.logout()
  } else {
    authStore.login('example-token', { id: 1, name: 'John Doe', email: 'john@example.com' })
  }
}
</script>

<template>
  <button @click="login" class="login-button">
    {{ isAuthenticated ? 'Logout' : 'Login' }}
  </button>
</template>

<style scoped>
.login-button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>