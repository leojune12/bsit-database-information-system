<template>
    <Head title="Grades" />
    <div class="tw-max-w-4xl tw-mx-auto tw-px-4">
        <div class="tw-flex tw-justify-around tw-mb-6">
            <div class="tw-flex tw-w-28 tw-h-28 tw-justify-center tw-items-center">
                <img src="/capsu_logo.png" alt="" class="tw-h-16">
            </div>
            <div class="tw-flex tw-flex-col tw-justify-center tw-items-center tw-font-bold tw-text-gray-700">
                <h1 class="tw-text-xl tw-font-extrabold tw-tracking-tight tw-leading-none tw-flex tw-items-center">Database Information System for BSIT Student</h1>
                <h3>Grade Query</h3>
            </div>
            <div class="tw-flex tw-w-28 tw-h-28 tw-justify-center tw-items-center">
                <img src="/it_logo.png" alt="" class="tw-h-16">
            </div>
        </div>
        <div class="tw-mb-8">
            <div class="tw-flex">
                <div class="tw-mr-3">
                    Name:
                </div>
                <div class="tw-font-bold">
                    {{ props.model.first_name }}{{ props.model.middle_name ? ' ' + props.model.middle_name + ' ' : ' ' }}{{ props.model.last_name }}
                </div>
            </div>
            <div class="tw-flex">
                <div class="tw-mr-3">
                    Year:
                </div>
                <div class="tw-font-bold">
                    {{ props.section.year }}
                </div>
            </div>
            <div class="tw-flex">
                <div class="tw-mr-3">
                    Section:
                </div>
                <div class="tw-font-bold">
                    {{ props.section.name }}
                </div>
            </div>
            <div class="tw-flex">
                <div class="tw-mr-3">
                    Semester:
                </div>
                <div class="tw-font-bold">
                    {{ props.semester }}
                </div>
            </div>
            <div class="tw-flex">
                <div class="tw-mr-3">
                    Academic Year:
                </div>
                <div class="tw-font-bold">
                    {{ props.section.academic_year.name }}
                </div>
            </div>
        </div>
        <div class="tw-overflow-x-auto tw-mb-4">
            <table class="tw-min-w-full tw-border">
                <thead class="tw-font-medium tw-border-b">
                    <tr>
                        <th
                            v-for="header in tableHeader"
                            :key="header.title"
                            :class="header.class"
                        >
                            {{ header.title }}
                        </th>
                    </tr>
                </thead>
                <tbody class="border">
                    <tr
                        v-for="item in props.subjects"
                        :key="item.id"
                        class="tw-bg-white tw-border-b tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-gray-100"
                    >
                        <td class="tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3">
                            {{ item.course_code }}
                        </td>
                        <td class="tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3">
                            {{ item.descriptive_title }}
                        </td>
                        <td class="tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3">
                            {{ item.pivot.grade }}
                        </td>
                    </tr>
                    <!-- <tr
                        v-else
                    >
                        <td colspan="4" class="tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-sm tw-font-medium tw-text-gray-900 tw-text-center">
                            No records
                        </td>
                    </tr> -->
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/inertia-vue3'
import { ref } from 'vue'

const props = defineProps({
    model: Object,
    subjects: Object,
    year: String,
    semester: String,
    section: Object,
})

const tableHeader = ref([
    {
        title: 'Course Number',
        class: 'tw-py-2 tw-px-6 tw-text-left tw-whitespace-nowrap',
    },
    {
        title: 'Descriptive Title',
        class: 'tw-py-2 tw-px-6 tw-text-left tw-whitespace-nowrap',
    },
    {
        title: 'Grade',
        class: 'tw-py-2 tw-px-6 tw-text-left tw-whitespace-nowrap',
    },
])

</script>
