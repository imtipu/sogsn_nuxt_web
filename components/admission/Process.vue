<script setup lang="ts">
const processSteps = [
    {
        step: 1,
        title: 'Inquiry',
        description: 'Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy.'
    },
    {
        step: 2,
        title: 'School Tour',
        description: 'Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment.'
    },
    {
        step: 3,
        title: 'Applicaton Form',
        description: "Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records(if applicable)."
    },
    {
        step: 4,
        title: 'Parent Interview',
        description: "We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners Academy aligns with your family's expectations."
    },
    {
        step: 5,
        title: 'Student Assessment',
        description: 'For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement.'
    },
    {
        step: 6,
        title: 'Acceptance',
        description: 'Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy.'
    }
]


</script>
<template>
    <UContainer>
        <div class="flex flex-col justify-center items-center">
            <div class="px-3 py-1.5 bg-white border-2 border-gray-950 cursor-pointer rounded-md mb-4">Proccess</div>
            <h1 class="text-lg md:text-xl lg:text-[26px] font-bold mb-5">Admission Process</h1>
            <p class="text-sm font-medium text-center">
                Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway
                to providing your child with an exceptional learning experience at our kindergarten school
            </p>
        </div>
    </UContainer>
    <UContainer class="mt-28 lg:mt-[120px]">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-32">
            <UCard v-for="(item, index) in processSteps" class="relative">
                <div
                    class="absolute -top-[100px] left-0 w-14 h-14 flex flex-col justify-center items-center rounded-md border-2 border-gray-950 shadow-[4px_4px_0px_2px_#000]">
                    <span class="text-lg font-bold">{{ item?.step }}</span>
                    <div class="absolute flex flex-col justify-center items-center -bottom-2">
                        <span class="bg-white z-10 rounded-full min-w-4 h-4 border-2 border-gray-950"></span>
                        <span class="absolute top-[2px] w-[4px] h-[50px] bg-gray-950"></span>
                    </div>
                </div>

                <!-- <div class="flex flex-col absolute top-0 left-0">
                    <span class="rounded-full min-w-4 h-4 border-2 border-gray-950"></span>
                </div> -->
                <h3 class="text-lg font-semibold mb-3">{{ item?.title }}</h3>
                <p class="text-sm font-medium">{{ item?.description }}</p>
            </UCard>
        </div>
    </UContainer>
</template>