<script setup lang="ts">

</script>

<template>
  <LayoutApplication>
    <template #header>
      <div class="text-center w-full">
        {{ $t('general.header') }}
      </div>
    </template>

    <slot />

    <template #footer>
      <div class="text-center w-full space-x-4">
        <span>
          {{ $t('general.footer') }}
        </span>
      </div>
    </template>
  </LayoutApplication>
</template>