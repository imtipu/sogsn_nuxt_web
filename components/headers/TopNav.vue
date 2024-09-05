<script setup lang="ts">
const mobile = useMobileStore();
const {mobileMenu} = storeToRefs(mobile);
const windowSize = useWindowSize();

const isMobileOrTablet = computed(() => windowSize?.isMobileOrTablet?.value || false);
const isDesktop = computed(() => windowSize?.isDesktop?.value || false);


</script>

<template>
  <div
      class="flex justify-between my-2 border-[2px] border-theme-gray-10 rounded-lg bg-white relative overflow-hidden">
    <ULink
        class="flex flex-col items-center justify-center mr-auto text-lg lg:text-lg text-theme-gray-10 font-bold
tracking-wide px-3">
      SOGSN
    </ULink>
    <div v-if="isMobileOrTablet" class="flex lg:hidden flex-col items-stretch justify-center w-[80px] border-l-2 border-theme-gray-10">
      <UButton @click="mobile.toggleMobileMenu()"
               class="justify-center bg-theme-orange-90 w-full h-full "
               :ui="{
        rounded: 'rounded-none'
      }">
        <UIcon name="i-heroicons-bars-3-bottom-right" class="w-6 h-6"/>
      </UButton>
    </div>
    <div v-if="isDesktop"
        class="hidden desktop-menu lg:flex items-center ml-auto">
      <ULink to="/"
             active-class="bg-theme-orange-90"
             inactive-class="hover:bg-theme-orange-70"
             class="text-theme-gray-10 font-semibold tracking-wide px-5 py-3 border-x-[2px] border-theme-gray-10 transition-all ease-in-out">
        Home
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
  <Transition name="slide-mobile-menu">
    <HeadersMobileMenu v-if="mobileMenu"/>
  </Transition>
</template>

<style scoped lang="scss">
.slide-mobile-menu-enter-active {
  transition: all 0.3s ease-out;
}

.slide-mobile-menu-leave-active {
  transition: all 0.3s ease-out;
}

.slide-mobile-menu-enter-from, .slide-mobile-menu-leave-to {
  transform: translateX(100%);
}

</style>