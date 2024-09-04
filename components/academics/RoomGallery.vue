<script setup lang="ts">

</script>

<template>
  <UContainer class="flex flex-col items-center justify-center py-5 mb-16">
    <div class="flex flex-col max-w-[600px] justify-center items-center mb-8">
      <h1 class="text-[30px] font-bold text-center mb-3">Our Rooms Gallery</h1>
      <p class="font-medium text-center leading-6">
        Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable
        experiences at our kindergarten school.
      </p>
    </div>
  </UContainer>
  <UContainer
      class="flex flex-col relative border-2 border-theme-gray-10 shadow-[4px_4px_0px_2px_#000] px-3 py-10 bg-white rounded-md mt-[150px] mb-16">
    <div class="absolute w-full mb-3 left-0 -top-[150px]">
      <Swiper
          :modules="[SwiperAutoplay, SwiperEffectCreative]"
          :slides-per-view="5"
          :loop="true"
          :autoplay="{
      delay: 3000,
      disableOnInteraction: true,
    }"
      >
        <SwiperSlide v-for="slide in 10" :key="slide">
          <div
              class="flex flex-col justify-center items-center rounded-md overflow-hidden">
            <img src="~/assets/images/academics/learn1.png" alt="Room Image" class="w-auto h-auto max-w-[230px]"/>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="flex flex-col">
      <div class="flex justify-between items-center mb-5">
        <h1 class="font-semibold text-lg mb-2">Classrooms</h1>
        <div class="flex items-center">
          <UButton icon="i-heroicons-chevron-left"/>
          <UButton icon="i-heroicons-chevron-right" class="ml-2"/>
        </div>
      </div>
      <p class="text-sm font-medium">
        Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each
        classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.
      </p>
    </div>
  </UContainer>
</template>

<style scoped>

</style>