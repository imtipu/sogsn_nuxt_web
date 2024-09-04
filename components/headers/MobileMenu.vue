<script setup lang="ts">
const mobile = useMobileStore();

</script>

<template>
  <div
      class="flex flex-col items-center justify-center fixed w-full min-h-screen overflow-hidden bg-theme-orange-90 p-3 z-50 top-0 left-0 right-0 bottom-0">
    <UButton @click="mobile.toggleMobileMenu"
        class="absolute top-3 right-3 w-10 h-10 bg-white justify-center font-bold" size="lg"
    icon="i-heroicons-x-mark" :ui="{
      rounded: 'rounded-none'
    }"/>
    <div class="flex flex-col justify-center items-center">
      <ULink to="/" class="text-[26px]">
        Home
      </ULink>

      <ULink to="/" class="text-[26px]">
        Home
      </ULink>

      <ULink to="/" class="text-[26px]">
        Home
      </ULink>
    </div>
  </div>
</template>

<style scoped>

</style>