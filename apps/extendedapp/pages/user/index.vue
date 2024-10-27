<script setup lang="ts">
import UserProfile from '@/entities/User/ui/UserProfile.vue'
import LoginButton from '@/features/Authentication/ui/LoginButton.vue'

definePageMeta({
  layout: 'splash'
})
</script>

<template>
  <div>
    <NuxtLink :to="`/`">Домой</NuxtLink>
    <UserProfile />
    <LoginButton />
  </div>
</template>