<script setup lang="ts">
useHead({
  title: 'Admission'
})
</script>

<template>
  <UContainer>
    <AdmissionIntro />
  </UContainer>
  <UContainer class="mt-10 lg:mt-16">
    <AdmissionProcess />
  </UContainer>
  <UContainer class="mt-10 lg:mt-16">
    <AdmissionFeeStructure />
  </UContainer>
</template>

<style scoped>

</style>