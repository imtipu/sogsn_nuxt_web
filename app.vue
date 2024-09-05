<script setup lang="ts">
</script>
<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <div class="w-full mb-[50px]">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<style lang="scss">
#__app {
  @apply min-h-screen flex flex-col w-full bg-theme-orange-97;
}
// .page-enter-active,
// .page-leave-active {
//   transition: all 0.4s;
// }

// .page-enter-from,
// .page-leave-to {
//   opacity: 0;
//   filter: blur(1rem);
// }
</style>

