<script setup lang="ts">

</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-5 gap-3 py-6 px-3 md:px-6 lg:px-0">
    <div class="flex flex-col col-span-2">
      <h3 class="font-bold text-lg mb-2">SOGSN</h3>
      <p class="text-sm font-semibold">We believe in the power of play to foster creativity, problem-solving skills, and
        imagination.</p>
      <div class="flex flex-col mt-2">
        <ULink to="#"
        class="flex items-center font-medium mb-2">
          <span
              class="w-7 h-7 flex items-center justify-center bg-theme-orange-90 rounded-md border border-theme-gray-10">
            <UIcon name="i-heroicons-envelope-solid" class="w-4 h-4"/>
          </span>
          <span class="ml-1">info@sogsn.edu.bd</span>
        </ULink>
        <ULink to="#"
               class="flex items-center font-medium mb-2">
          <span
              class="w-7 h-7 flex items-center justify-center bg-theme-orange-90 rounded-md border border-theme-gray-10">
            <UIcon name="i-heroicons-phone-solid" class="w-4 h-4"/>
          </span>
          <span class="ml-1">+880 1711 00 11 00</span>
        </ULink>
        <ULink to="#"
               class="flex items-center font-medium">
          <span
              class="w-7 h-7 flex items-center justify-center bg-theme-orange-90 rounded-md border border-theme-gray-10">
            <UIcon name="i-heroicons-map-pin-solid" class="w-4 h-4"/>
          </span>
          <span class="ml-1">Boiratiapara, Guzadia, Karimganj, Kishoreganj</span>
        </ULink>
      </div>
    </div>
    <div class="flex flex-col">
      <h3 class="font-bold text-lg">About Us</h3>
      <div class="flex flex-col mt-2">
        <ULink to="#"
               class="font-regular hover:font-medium hover:text-theme-orange-65 transition-all ease-in-out text-sm hover:px-1 mb-1">
          Our Mission
        </ULink>
        <ULink to="#"
               class="font-regular hover:font-medium hover:text-theme-orange-65 transition-all ease-in-out text-sm hover:px-1 mb-1">
          Our Vision
        </ULink>
      </div>
    </div>
    <div class="flex flex-col">
      <h3 class="font-bold text-lg">Academics</h3>
      <div class="flex flex-col mt-2">
        <ULink to="#"
               class="font-regular hover:font-medium hover:text-theme-orange-65 transition-all ease-in-out text-sm hover:px-1 mb-1">
          Gallery
        </ULink>
        <ULink to="#"
               class="font-regular hover:font-medium hover:text-theme-orange-65 transition-all ease-in-out text-sm hover:px-1 mb-1">
          Teachers
        </ULink>
      </div>
    </div>
    <div class="flex flex-col">
      <h3 class="font-bold text-lg">Contacts</h3>
      <div class="flex flex-col mt-2">
        <ULink to="#"
               class="font-regular hover:font-medium hover:text-theme-orange-65 transition-all ease-in-out text-sm hover:px-1 mb-1">
          Information
        </ULink>
        <ULink to="#"
               class="font-regular hover:font-medium hover:text-theme-orange-65 transition-all ease-in-out text-sm hover:px-1 mb-1">
          Map & Direction
        </ULink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>