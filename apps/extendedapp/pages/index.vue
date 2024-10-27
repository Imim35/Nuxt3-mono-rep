<script setup lang="ts">
import { useAuthStore } from '@/features/Authentication/model/authStore'

const authStore = useAuthStore()

authStore.login('example-token', { id: 1, name: 'John Doe', email: 'john@example.com' })
</script>

<template>
  <NuxtLink :to="`/user`">Войти</NuxtLink>
  <NuxtWelcome :title="$t('general.title')" />
</template>

<style scoped>

</style>
