<script setup lang="ts">
useHead({
  title: 'About Us'
})
</script>

<template>
  <UContainer class="flex flex-col items-center bg-white px-4 py-16 rounded-md border border-theme-gray-10 mb-16">
    <AboutIntro />
  </UContainer>
  <UContainer class="flex flex-col items-center justify-center">
    <AboutMissionVision />
  </UContainer>
  <UContainer class="flex flex-col items-center justify-center mt-10">
    <AboutAwardRecognition />
  </UContainer>
  <UContainer class="flex flex-col items-center justify-center mt-10">
    <AboutHistory />
  </UContainer>
</template>

<style scoped>

</style>