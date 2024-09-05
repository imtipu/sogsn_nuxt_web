<script setup lang="ts">
useHead({
  title: 'Contact'
})
</script>

<template>
  <UContainer>
    <UCard :ui="{
      body: {
        padding: 'py-10 px-6 lg:py-[100px] lg:px-6'
      }
    }">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div class="flex flex-col lg:col-span-2">
          <h1 class="text-sm font-medium px-3 py-1.5 border border-theme-gray-10 rounded-full self-start">Contact Us
          </h1>
          <h2 class="mt-2 text-[26px] font-bold tracking-wide">
            Feel Free To Connect With Us
          </h2>
        </div>
        <div class="flex flex-col lg:col-span-3">
          <div class="flex flex-col mb-5">
            <p class="text-sm font-medium">We value open communication and are eager to assist you with any inquiries.
              Feel free to reach out to us
              through any of the following contact methods</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="flex items-center border-2 border-theme-gray-10 py-2 px-3 rounded-lg">
              <span class="w-8 h-8 flex flex-col items-center justify-center rounded-md border-2 border-theme-gray-10">
                <UIcon name="i-heroicons-envelope-solid" clas="w-5 h-5" />
              </span>
              <span class="font-medium text-sm ml-1.5">info@sogsn.edu.bd</span>
            </div>
            <div class="flex items-center border-2 border-theme-gray-10 py-2 px-3 rounded-lg">
              <span class="w-8 h-8 flex flex-col items-center justify-center rounded-md border-2 border-theme-gray-10">
                <UIcon name="i-heroicons-phone-solid" clas="w-5 h-5" />
              </span>
              <span class="font-medium text-sm ml-1.5">+880 1711 00 11 00</span>
            </div>
            <div class="flex items-start border-2 border-theme-gray-10 py-2 px-3 rounded-md">
              <span
                class="w-8 min-w-8 h-8 flex flex-col items-center justify-center rounded-lg border-2 border-theme-gray-10">
                <UIcon name="i-heroicons-clock-solid" clas="w-5 h-5" />
              </span>
              <span class="text-sm flex flex-col font-medium ml-1.5 leading-4">
                <span>Office Hours: 10:00 AM - 4:00 PM</span>
                <span class="text-[#808080]">Friday - Saturday: Closed</span>
              </span>
            </div>

          </div>
        </div>
      </div>
    </UCard>
  </UContainer>
  <UContainer class="mt-16">
    <ContactsParentContactForm />
  </UContainer>

</template>

<style scoped></style>