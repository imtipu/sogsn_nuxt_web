<script setup lang="ts">
useHead({
  title: 'Academics'
})
</script>

<template>
  <UContainer class="flex flex-col items-center bg-white px-4 py-16 rounded-md border border-theme-gray-10 mb-16">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div class="flex flex-col items-start">
        <h1 class="text-sm font-semibold bg-white inline-block px-3 py-1.5 rounded-md border-2 border-theme-gray-10">
          Academics
        </h1>
        <h3 class="text-[30px] font-bold mt-3">Nurturing Young Minds for Success</h3>
      </div>
      <div class="flex flex-col items-center">
        <p class="text-theme-gray-10 text-sm font-medium text-justify">Welcome to our Academics page, where we take
          pride in
          providing a
          comprehensive and stimulating
          educational
          experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a
          love for learning while building a strong foundation of essential skills and knowledge. From language arts and
          mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and
          encourage active exploration.</p>
      </div>
    </div>
  </UContainer>
  <AcademicsSpecialFeatures class="mb-16"/>
  <AcademicsStudentLearns class="mb-16"/>
  <AcademicsRoomGallery class="mb-16"/>
</template>

<style scoped>

</style>