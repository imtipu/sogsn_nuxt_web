<script setup lang="ts">
const mobile = useMobileStore();
const router = useRouter();

// close mobile menu on route change
router.afterEach(() => {
  mobile.closeMobileMenu();
});

</script>

<template>
  <div
      class="flex flex-col items-center justify-center fixed w-full min-h-screen overflow-hidden bg-theme-orange-90 p-3 z-50 top-0 left-0 right-0 bottom-0">
    <UButton @click="mobile.toggleMobileMenu"
             class="absolute top-3 right-3 w-10 h-10 bg-white justify-center font-bold" size="lg"
             icon="i-heroicons-x-mark" :ui="{
      rounded: 'rounded-none'
    }"/>
    <div class="flex flex-col justify-center items-center">
      <ULink to="/" class="text-[20px] font-semibold tracking-wide uppercase mb-2">
        Home
      </ULink>
      <ULink to="/pages/about-us" class="text-[20px] font-semibold tracking-wide uppercase mb-2">
        About Us
      </ULink>
      <ULink to="/pages/academics" class="text-[20px] font-semibold tracking-wide uppercase mb-2">
        Academics
      </ULink>
      <ULink to="/pages/admission" class="text-[20px] font-semibold tracking-wide uppercase mb-2">
        Admission
      </ULink>
      <ULink to="/pages/contact" class="text-[20px] font-semibold tracking-wide uppercase mb-2">
        Contact
      </ULink>
    </div>
  </div>
</template>

<style scoped>

</style>