<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '../model/userStore'

const userStore = useUserStore()

const userName = computed(() => userStore.name)
const userEmail = computed(() => userStore.email)
</script>

<template>
  <div class="user-profile">
    <h2>{{ userName }}</h2>
    <p>{{ userEmail }}</p>
  </div>
</template>

<style scoped>
.user-profile {
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
}
</style>