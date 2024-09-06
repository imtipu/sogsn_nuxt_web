<script setup lang="ts">

</script>

<template>
    <div class="flex flex-col justify-center items-center">
        <h1 class="text-lg md:text-xl lg:text-[26px] font-bold mb-5">Fee Structure</h1>
        <p class="text-sm font-medium text-center max-w-[400px]">
            Our fee structure is transparent, and we strive to keep our fees competitive within the education
            sector. The fees vary based on the program, age group, and any additional services chosen.
        </p>
    </div>
    <UCard class="mt-10">
        <div class="flex flex-col w-full rounded-lg border-2 border-gray-900 relative overflow-hidden">
            <table class="w-full">
                <thead class="text-sm text-gray-950 uppercase bg-theme-orange-50 rounded-lg">
                    <tr class="">
                        <th scope="col" class="px-3 py-3 border-b-2 border-gray-700">Class</th>
                        <th scope="col" class="px-3 py-3 border-x-2 border-b-2  border-gray-700">Annual Tution(BDT)
                        </th>
                        <th scope="col" class="px-3 py-3 border-x-2 border-b-2 border-gray-700">Registration Fee(BDT)
                        </th>
                        <th scope="col" class="px-3 py-3  border-b-2 border-gray-700">Acitivity Fee(BDT)</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(item, index) in 5" class="bg-white">
                        <td scope="row" class="px-3 py-3 text-center font-medium border-t-2 border-gray-700">Class 1
                        </td>
                        <td scope="row" class="px-3 py-3 text-center font-medium border-x-2 border-t-2 border-gray-700">
                            1000/-
                        </td>
                        <td scope="row"
                            class="px-3 py-1.5 text-center font-medium border-x-2 border-t-2 border-gray-700">500/-
                        </td>
                        <td scope="row" class="px-3 py-1.5 text-center font-medium border-t-2 border-gray-700">200/-
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </UCard>
    <UCard class="mt-10">
        <div class="text-lg font-semibold w-full rounded-lg border-2 border-gray-900 bg-theme-orange-95 px-4 py-3 mb-4">
            Annual Services
        </div>
        <div class="flex flex-col rounded-lg border-2 border-gray-900 overflow-hidden">
            <table class="">
                <tr class="bg-white">
                    <td scope="row" class="px-3 py-3 font-medium border-b-2 border-r-2 border-gray-700">Monthly Fee</td>
                    <td scope="row" class="px-3 py-3 font-medium border-b-2 border-gray-700">1000/-</td>
                </tr>
                <tr class="bg-white">
                    <td scope="row" class="px-3 py-3 font-medium border-r-2 border-gray-700">Monthly Transportation Fee
                    </td>
                    <td scope="row" class="px-3 py-3 font-medium">500/-</td>
                </tr>

            </table>
        </div>

    </UCard>
</template>