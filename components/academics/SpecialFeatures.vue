<script setup lang="ts">

</script>

<template>
  <UContainer class="flex flex-col items-center justify-center py-5">
    <div class="flex flex-col max-w-[600px] justify-center items-center mb-8">
      <h1 class="text-[30px] font-bold text-center mb-3">Our Special Features</h1>
      <p class="font-medium text-center leading-6">
        Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that
        lasts a lifetime. Join us as we embark on an exciting educational journey together!
      </p>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-14 mt-4">
      <div v-for="i in 6" :key="i"
           class="flex flex-col shadow-[4px_4px_0px_2px_#000] relative rounded-lg bg-white border-[2px] border-theme-gray-10 px-6 py-10">
        <div
            class="flex flex-col justify-center items-center absolute w-10 h-10 bg-theme-orange-90 border border-theme-gray-10 -top-5 left-[5%] rounded-lg">
          <UIcon name="i-heroicons-academic-cap-solid" class="text-theme-gray-10 w-5 h-5 m-auto"/>
        </div>
        <h3 class="font-bold text-lg mb-3">Holistic Learning Approach</h3>
        <p class="text-sm font-medium">Our curriculum focuses on nurturing cognitive, social, emotional, and physical
          development,
          ensuring a
          well-rounded education.</p>

      </div>
    </div>
  </UContainer>
</template>

<style scoped>

</style>