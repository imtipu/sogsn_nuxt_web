<script setup lang="ts">

const form = ref()
const formState = reactive({
    name: '',
    email: '',
    phone: '',
    message: ''
})

const classChoices = [
    {
        label: 'Nursery',
        value: -1,
    },
    {
        label: 'KG',
        value: 0,
    },
    {
        label: 'Class 1',
        value: 1,
    },
    {
        label: 'Class 2',
        value: 2,
    },
    {
        label: 'Class 3',
        value: 3,
    },
    {
        label: 'Class 4',
        value: 4,
    },
    {
        label: 'Class 5',
        value: 5,
    },
    {
        label: 'Class 6',
        value: 6,
    },
    {
        label: 'Class 7',
        value: 7,
    },
    {
        label: 'Class 8',
        value: 8,
    },
    {
        label: 'Class 9',
        value: 9,
    },
    {
        label: 'Class 10',
        value: 10,
    },
    {
        label: 'Class 11',
        value: 11,
    },
    {
        label: 'Class 12',
        value: 12,
    },
]

</script>
<template>
    <div class="flex flex-col items-center justify-center">
        <div class="flex flex-col justify-center items-center max-w-[600px]">
            <h1 class="font-bold text-[26px] mb-3">Submit your question</h1>
            <p class="font-medium text-sm text-center">If you have specific questions or wish to request more
                information
                about Little
                Learners
                Academy, please
                complete the contact form below. Kindly provide the following details to help us better understand
                your needs
            </p>
        </div>

        <UCard class="w-full max-w-[1400px] mt-10 relative">
            <div class="flex justify-center items-center w-full absolute -top-5">
                <ULink to="#"
                    class="flex flex-col justify-center items-center bg-theme-orange-90 w-10 h-10 rounded-md border-2 border-theme-gray-10">
                    <UIcon name="i-ic-outline-facebook" dynamic class="w-6 h-6" />
                </ULink>
                <ULink to="#"
                    class="flex flex-col justify-center items-center bg-theme-orange-90 w-10 h-10 rounded-md border-2 border-theme-gray-10 ml-2">
                    <UIcon name="i-line-md-twitter-x" dynamic class="w-6 h-6" />
                </ULink>

                <ULink to="#"
                    class="flex flex-col justify-center items-center bg-theme-orange-90 w-10 h-10 rounded-md border-2 border-theme-gray-10 ml-2">
                    <UIcon name="i-mdi-linkedin" dynamic class="w-6 h-6" />
                </ULink>
            </div>
            <form class="w-full lg:px-10 py-10">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4">
                    <UFormGroup label="Parent Name" name="parent_name" required size="lg">
                        <UInput icon="i-heroicons-user-solid" color="gray" placeholder="Enter Parent Nane" />
                    </UFormGroup>
                    <UFormGroup label="Email Address" name="email" size="lg">
                        <UInput icon="i-heroicons-at-symbol" placeholder="email@example.com" />
                    </UFormGroup>
                    <UFormGroup label="Phone Number" name="phone_number" required size="lg">
                        <UInput icon="i-heroicons-phone-solid" placeholder="Enter Phone Number" />
                    </UFormGroup>
                    <UFormGroup label="Address" name="address" required size="lg">
                        <UInput icon="i-heroicons-map-pin-solid" placeholder="Enter Address" />
                    </UFormGroup>
                    <UFormGroup label="Student Name" name="student_name" required size="lg">
                        <UInput placeholder="Enter Student Name" />
                    </UFormGroup>
                    <UFormGroup label="Student ID" name="student_id" required size="lg">
                        <UInput placeholder="Enter Student ID" />
                    </UFormGroup>
                    <UFormGroup label="Grade" name="grade" required size="lg">
                        <USelect :options="classChoices" value-attribute="value" option-attribute="label" />
                    </UFormGroup>
                    <UFormGroup label="Student Age" name="student_age" required size="lg">
                        <UInput type="number" min="5" placeholder="Enter Age" />
                    </UFormGroup>
                </div>
                <div class="flex flex-col mt-5">
                    <UFormGroup label="Message" name="message" required size="lg">
                        <UTextarea placeholder="Enter Your Message" />
                    </UFormGroup>
                </div>
                <div class="flex flex-col justify-center mt-10">
                    <UButton color="primary" size="lg" trailing-icon="i-heroicons-paper-airplane-solid"
                        class="min-w-[150px] justify-center border-2 border-theme-gray-10">Submit</UButton>
                </div>
            </form>

        </UCard>
    </div>
</template>