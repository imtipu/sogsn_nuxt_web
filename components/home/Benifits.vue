<script setup lang="ts">

</script>

<template>
  <UContainer class="py-5">
    <div class="flex flex-col justify-center items-center">
      <div
          class="bg-theme-orange-99 capitalize text-sm text-theme-gray-10 font-medium px-3 py-1.5 rounded-lg border-theme-gray-10 border">
        Children deserve bright future
      </div>
    </div>
    <div class="flex flex-col justify-center items-center mt-3 pb-4">
      <h1 class="font-bold text-[30px]">Our Benefits</h1>
      <p class="font-medium max-w-[500px] text-center text-sm mt-3">
        With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we
        aim to lay a strong foundation for your child's future.
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