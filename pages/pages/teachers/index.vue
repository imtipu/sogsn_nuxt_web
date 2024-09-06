<script setup lang="ts">
const teachers = [
    {
        name: "John Smith",
        position: "Principal",
        qualification: "Master's Degree in Education",
        subject: "Education"
    },
    {
        name: "Emily Johnson",
        position: "Teacher",
        qualification: "Bachelor's Degree in Early Childhood Education",
        subject: "Mathematics"
    },
    {
        name: "Michael Williams",
        position: "Teacher",
        qualification: "Bachelor's Degree in Elementary Education",
        subject: "Science"
    },
    {
        name: "Olivia Brown",
        position: "Teacher",
        qualification: "Bachelor's Degree in English Education",
        subject: "English"
    },
    {
        name: "James Jones",
        position: "Teacher",
        qualification: "Bachelor's Degree in Physical Education",
        subject: "Physical Education"
    },
    {
        name: "Sophia Miller",
        position: "Teacher",
        qualification: "Bachelor's Degree in Fine Arts Education",
        subject: "Art"
    },
    {
        name: "Daniel Davis",
        position: "Teacher",
        qualification: "Bachelor's Degree in Music Education",
        subject: "Music"
    },
    {
        name: "Ava Wilson",
        position: "Teacher",
        qualification: "Bachelor's Degree in Social Studies Education",
        subject: "Social Studies"
    },
    {
        name: "Matthew Taylor",
        position: "Teacher",
        qualification: "Bachelor's Degree in Computer Science Education",
        subject: "Computer Science"
    },
    {
        name: "Emma Anderson",
        position: "Teacher",
        qualification: "Bachelor's Degree in Foreign Language Education",
        subject: "Foreign Language"
    }
];

</script>
<template>
    <UContainer>
        <div class="flex flex-col">
            <h1 class="text-[30px] font-bold text-center mb-3">Our Teachers</h1>
            <p class="font-medium text-center leading-6">
                Our dedicated team of educators at Little Learners Academy is committed to providing a nurturing and
                stimulating learning environment for your child. Our teachers are passionate about early childhood
                education
                and are dedicated to fostering a love for learning in every student. With their expertise and
                dedication,
                our teachers create a supportive and inclusive space where children can thrive academically, socially,
                and
                emotionally.
            </p>
        </div>
    </UContainer>
    <UContainer class="mt-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-8">
            <UCard v-for="(teacher, index) in teachers">
                <div class="flex justify-between items-center space-x-2 mb-4">
                    <div class="flex items-center">
                        <img src="~/assets/images/teachers/image.png" v-bind:alt="teacher?.name"
                            class="w-16 h-16 object-cover rounded-full" />
                        <div class="flex flex-col ml-1.5">
                            <h3 class="font-semibold text-lg">{{ teacher?.name }}</h3>
                            <p class="text-md font-medium">{{ teacher?.position }}</p>
                        </div>
                    </div>
                    <div class="flex items-center ml-auto">
                        <ULink to="#"
                            class="w-8 h-8 flex flex-col justify-center items-center bg-theme-orange-80 rounded-md border border-gray-900">
                            <UIcon name="i-heroicons-envelope-solid" size="lg" />
                        </ULink>
                        <ULink to="#"
                            class="w-8 h-8 flex flex-col justify-center items-center bg-theme-orange-80 rounded-md border border-gray-900 ml-1">
                            <UIcon name="i-heroicons-phone-solid" size="lg" />
                        </ULink>
                    </div>
                </div>
                <div class="flex flex-col mt-5 border-2 border-gray-900 rounded-lg bg-theme-orange-95 p-4">
                    <h3 class="font-semibold mb-1">{{ teacher?.qualification }}</h3>
                    <h3 class="font-semibold mb-2">Subject: {{ teacher?.subject }}</h3>
                    <p class="text-sm">
                        Ms. Emily's expertise in child psychology enables her to understand each child's unique needs
                        and provide individualized support. Her caring nature fosters a strong sense of belonging and
                        confidence in her students.
                    </p>
                </div>
            </UCard>
        </div>
    </UContainer>
</template>