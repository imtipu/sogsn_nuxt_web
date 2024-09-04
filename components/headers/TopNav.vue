<script setup lang="ts">

</script>

<template>
  <div
      class="flex justify-between items-center my-2 border-[2px] border-theme-gray-10 rounded-lg bg-white relative overflow-hidden">
    <div class="flex flex-col items-center justify-center lg:justify-between ml-auto mr-auto lg:ml-0 lg:mr-auto">
      <ULink to="/" class="text-[26px] lg:text-lg text-theme-gray-10 font-bold tracking-wide px-3 py-1">
        SOGSN
      </ULink>
    </div>
    <div class="hidden lg:flex items-center ml-auto">
      <ULink to="/"
             active-class="bg-theme-orange-90"
             inactive-class="hover:bg-theme-orange-70"
             class="text-theme-gray-10 font-semibold tracking-wide px-5 py-3 border-x-[2px] border-theme-gray-10 transition-all ease-in-out">Home
      </ULink>
      <ULink to="/pages/about-us"
             active-class="bg-theme-orange-90"
             inactive-class="hover:bg-theme-orange-70"
             class="text-theme-gray-10 font-semibold tracking-wide px-5 py-3 border-x-[2px] border-theme-gray-10 -ml-[2px] transition-all ease-in-out">
        About
        Us
      </ULink>
      <ULink to="/pages/admission"
             active-class="bg-theme-orange-90"
             inactive-class="hover:bg-theme-orange-70"
             class="text-theme-gray-10 font-semibold tracking-wide px-5 py-3 border-x-[2px] border-theme-gray-10 -ml-[2px] transition-all ease-in-out">
        Admission
      </ULink>
      <ULink to="/pages/academics"
             active-class="bg-theme-orange-90"
             inactive-class="hover:bg-theme-orange-70"
             class="text-theme-gray-10 font-semibold tracking-wide px-5 py-3 border-x-[2px] border-theme-gray-10 -ml-[2px] transition-all ease-in-out">
        Academics
      </ULink>
      <ULink to="/pages/contact"
             active-class="bg-theme-orange-90"
             inactive-class="hover:bg-theme-orange-70"
             class="text-theme-gray-10 font-semibold tracking-wide px-5 py-3 border-l-[2px] border-theme-gray-10 -ml-[2px] transition-all ease-in-out">
        Contact
      </ULink>
    </div>
  </div>
</template>

<style scoped>

</style>