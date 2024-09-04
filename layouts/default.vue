<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col px-3 py-3">
    <HeadersAnnouncementBar/>
    <HeadersTopNav/>
    <div class="w-full mt-4">
      <slot />
    </div>
    <FootersSiteFooter/>
  </div>
</template>

<style scoped>

</style>