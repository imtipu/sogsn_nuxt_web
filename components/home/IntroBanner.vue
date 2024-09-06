<script setup lang="ts">

</script>

<template>
  <UContainer>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
      <div class="flex flex-col items-center justify-center">
        <div class="rounded-lg relative bg-theme-orange-80">
          <span
            class="w-[20px] h-[20px] bg-white rounded-full border-2 border-theme-gray-10 absolute -top-1 -left-1 z-10"></span>
          <span
            class="w-[20px] h-[20px] bg-white rounded-full border-2 border-theme-gray-10 absolute -top-1 -right-1 z-10"></span>
          <span
            class="w-[20px] h-[20px] bg-white rounded-full border-2 border-theme-gray-10 absolute -bottom-1 -left-1 z-10"></span>
          <span
            class="w-[20px] h-[20px] bg-white rounded-full border-2 border-theme-gray-10 absolute -bottom-1 -right-1 z-10"></span>
          <div class="rounded-lg relative overflow-hidden p-[5px]">
            <img src="~/assets/images/home-childs.png" alt="Hero Image"
              class="w-auto h-auto min-w-[250px] max-w-[400px] min-h-[250px] max-h-full object-cover p-1 border-2 border-theme-gray-10">
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center w-full">
        <div class="flex flex-col items-center lg:items-start justify-center w-full">
          <h3 class="font-semibold text-lg border-b-[2px] border-theme-gray-10 inline-block pb-1">
            Welcome to Little Learners Academy</h3>
          <h1 class="text-[34px] text-center lg:text-left font-bold leading-10 mt-2">
            Where Young Minds Blossom and
            <span class="text-theme-orange-65">Dreams Take Flight.</span>
          </h1>
          <p class="text-center lg:text-left mt-3 font-semibold tracking-wide text-sm">Our kinder garden school
            provides a
            nurturing and
            stimulating environment,
            fostering a love for
            learning
            that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 bg-theme-orange-90 rounded-lg mt-4 px-3 py-3 w-full
               shadow-[6px_6px_0px_0px_#FF8D4C]">
            <div
              class="flex flex-col justify-center items-center lg:items-start pb-3 md:pb-0 border-b-[3px] md:border-none border-b-theme-orange-65">
              <div class="text-[30px] font-bold">+7000</div>
              <p class="text-sm font-semibold">Passed out</p>
            </div>

            <div
              class="flex flex-col justify-center items-center lg:items-start pb-3 md:pb-0 border-b-[3px] md:border-none border-b-theme-orange-65">
              <div class="text-[30px] font-bold">+37</div>
              <p class="text-sm font-semibold">Awards & Recognitions</p>
            </div>

            <div class="flex flex-col justify-center items-center lg:items-start">
              <div class="text-[30px] font-bold">+20</div>
              <p class="text-sm font-semibold">Experienced Educators</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </UContainer>
</template>

<style scoped>

</style>