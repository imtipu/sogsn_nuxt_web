<template>
    <div class="flex flex-col max-w-[600px] justify-center items-center mb-8">
        <h1 class="text-[30px] font-bold text-center mb-3">Our History</h1>
        <p class="font-medium text-center leading-6">
            Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of
            empowering young learners to reach their potential through innovative teaching methods and a supportive
            learning environment
        </p>
    </div>
    <div class="flex flex-col justify-center items-center w-full mt-10">
        <UCard v-for="i in 5" class="max-w-[800px] w-full mb-6 lg:mb-10">
            <div class="grid grid-cols-7 gap-x-5">
                <UCard class="col-span-2" :ui="{
                    body: {
                        base: 'flex flex-col items-center justify-center h-full',
                    }
                }">
                    <span class="font-bold text-3xl lg:text-4xl">{{ new Date().getFullYear() - i }}</span>
                </UCard>
                <div class="flex flex-col col-span-5">
                    <h3 class="font-semibold text-lg mb-3">Resilience and Future Horizons</h3>
                    <p class="text-sm font-medium">
                        Adapting to new challenges, we remained committed to our mission of providing an exceptional
                        early education. Looking ahead with optimism, we envision a future filled with boundless
                        possibilities as we continue shaping the leaders and thinkers of tomorrow.
                    </p>
                </div>
            </div>

        </UCard>
    </div>
</template>