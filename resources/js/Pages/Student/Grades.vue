<template>
    <Head title="Curriculums" />

    <AuthenticatedLayout>
        <div
            class="tw-bg-white tw-shadow-lg tw-border sm:tw-rounded-lg tw-mb-5"
        >
            <div>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <h3 class="tw-text-lg tw-font-black tw-leading-6 tw-text-gray-900">Student Information</h3>
                </dl>
                <dl
                    v-if="usePage().props.value.auth.user.roles[0].name == 'Admin' || usePage().props.value.auth.user.roles[0].name == 'Faculty'"
                    class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Name</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        <Link
                            class="tw-text-blue-500 tw-underline hover:tw-text-blue-700"
                            :href="'/students/' + props.model.id"
                        >
                            {{ props.model.first_name }} {{ props.model.last_name }}
                        </Link>
                    </dd>
                </dl>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Year</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.sections[0] ? props.model.sections[0].year : '' }}
                    </dd>
                </dl>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Section</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        <div v-if="usePage().props.value.auth.user.roles[0].name == 'Admin' || usePage().props.value.auth.user.roles[0].name == 'Faculty'">
                            <Link
                                v-if="props.model.sections[0]"
                                :href="'/sections/' + props.model.sections[0].id"
                                class="tw-text-blue-500 tw-underline hover:tw-text-blue-700"
                            >
                                {{ props.model.sections[0].name }}
                            </Link>
                        </div>
                        <div v-else>
                            {{ props.model.sections[0].name }}
                        </div>
                    </dd>
                </dl>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Academic Year</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        <div v-if="usePage().props.value.auth.user.roles[0].name == 'Admin' || usePage().props.value.auth.user.roles[0].name == 'Faculty'">
                            <Link
                                v-if="props.model.sections[0]"
                                :href="'/academic-years/' + props.model.sections[0].academic_year.id"
                                class="tw-text-blue-500 tw-underline hover:tw-text-blue-700"
                            >
                                {{ props.model.sections[0].academic_year.name }}
                            </Link>
                        </div>
                        <div v-else>
                            {{ props.model.sections[0].academic_year.name }}
                        </div>
                    </dd>
                </dl>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Curriculum</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        <div v-if="usePage().props.value.auth.user.roles[0].name == 'Admin' || usePage().props.value.auth.user.roles[0].name == 'Faculty'">
                            <Link
                                v-if="props.model.sections[0]"
                                :href="'/curriculums/' + props.model.sections[0].curriculum.id"
                                class="tw-text-blue-500 tw-underline hover:tw-text-blue-700"
                            >
                                {{ props.model.sections[0].curriculum.name }}
                            </Link>
                        </div>
                        <div v-else>
                            {{ props.model.sections[0].curriculum.name }}
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
        <div class="tw-bg-white tw-shadow-lg tw-border sm:tw-rounded-lg tw-mb-5 tw-px-4 tw-py-5 sm:tw-px-6">
            <div class="tw-flex tw-items-center tw-justify-between tw-mb-3">
                <h3 class="tw-text-lg tw-font-black tw-leading-6 tw-text-gray-900">Grades</h3>
            </div>
            <div>
                <TabGroup>
                    <TabList class="tw-flex tw-space-x-1 tw-rounded-xl tw-bg-indigo-500 tw-p-1">
                        <Tab
                            v-for="(item, index) in yearAndSemesters"
                            as="template"
                            :key="item.title"
                            v-slot="{ selected }"
                        >
                            <button
                                :class="[
                                'tw-w-full tw-rounded-lg tw-py-2 tw-text-sm tw-font tw-leading-5 tw-text-blue-700',
                                'tw-ring-white tw-ring-opacity-60 tw-ring-offset-2 tw-ring-offset-blue-400 focus:tw-outline-none focus:tw-ring-2s tw-text-xs tw-font-bold',
                                selected
                                    ? 'tw-bg-white tw-shadow'
                                    : 'tw-text-blue-100 hover:tw-bg-white/[0.12] hover:tw-text-white',
                                ]"
                            >
                                {{ item.title }} ({{ item.items.length }})
                            </button>
                        </Tab>
                    </TabList>

                    <TabPanels class="tw-mt-2">
                        <TabPanel
                            v-for="(yearAndSemester, idx) in yearAndSemesters"
                            :key="idx"
                            :class="[
                                'tw-rounded-xl tw-bg-white p-3',
                                'tw-ring-white tw-ring-opacity-60 tw-ring-offset-2 focus:tw-outline-none focus:tw-ring-2',
                            ]"
                        >
                            <div class="tw-overflow-x-auto tw-my-4">
                                <table class="tw-min-w-full">
                                    <thead class="tw-text-sm tw-font-medium tw-text-gray-800 tw-border-b">
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
                                            v-if="yearAndSemester.items.length"
                                            v-for="item in yearAndSemester.items"
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
                                            <td v-if="usePage().props.value.auth.user.roles[0].name == 'Admin' || usePage().props.value.auth.user.roles[0].name == 'Faculty'" class="tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap">
                                                <div class="tw-flex tw-gap-2">
                                                    <button
                                                        type="button"
                                                        v-if="$page.props.auth.user.roles[0].name == 'Admin' || $page.props.auth.user.roles[0].name == 'Faculty'"
                                                        class="tw-text-blue-600 hover:tw-text-blue-700 tw-transition tw-duration-300 tw-ease-in-out"
                                                        title="Edit"
                                                        @click="openModal(item.id, item.course_code, item.pivot.grade)"
                                                    >
                                                        Edit
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr
                                            v-else
                                        >
                                            <td :colspan="tableHeader.length" class="tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-sm tw-font-medium tw-text-gray-900 tw-text-center">
                                                No records
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="tw-inline-block">
                                <a
                                    v-if="yearAndSemester.items.length"
                                    target="_blank"
                                    :href="'/print-grades/' + props.model.id_number + '/?year=' + yearAndSemester.year + '&semester=' + yearAndSemester.semester"
                                    class="tw-bg-blue-500 tw-h-8 tw-text-white tw-px-3 tw-rounded-lg tw-flex tw-grow-0 tw-items-center tw-justify-center"
                                >
                                    <PrinterIcon class="tw-w-4 tw-h-4 tw-mr-2" /> Print
                                </a>
                            </div>
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
        <TransitionRoot appear :show="updateGradeModalIsOpen" as="template">
            <Dialog as="div" @close="closeModal" class="tw-relative z-10">
                <TransitionChild
                    as="template"
                    enter="tw-duration-300 ease-out"
                    enter-from="tw-opacity-0"
                    enter-to="tw-opacity-100"
                    leave="tw-duration-200 ease-in"
                    leave-from="tw-opacity-100"
                    leave-to="tw-opacity-0"
                >
                    <div class="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-25" />
                </TransitionChild>

                <div class="tw-fixed tw-inset-0 tw-overflow-y-auto">
                    <div
                    class="tw-flex tw-min-h-full tw-items-center tw-justify-center tw-p-4 tw-text-center"
                    >
                    <TransitionChild
                        as="template"
                        enter="tw-duration-300 tw-ease-out"
                        enter-from="tw-opacity-0 tw-scale-95"
                        enter-to="tw-opacity-100 tw-scale-100"
                        leave="tw-duration-200 tw-ease-in"
                        leave-from="tw-opacity-100 tw-scale-100"
                        leave-to="tw-opacity-0 tw-scale-95"
                    >
                        <DialogPanel
                        class="tw-w-full tw-max-w-md tw-transform tw-overflow-hidden tw-rounded-2xl tw-bg-white tw-p-6 tw-text-left tw-align-middle tw-shadow-xl tw-transition-all"
                        >
                            <DialogTitle
                                as="h3"
                                class="tw-text-lg tw-font-medium tw-leading-6 tw-text-gray-900"
                            >
                                Update Grade for <b>{{ courseCode }}</b>
                            </DialogTitle>
                            <form @submit.prevent="submitForm()" class="tw-mt-6 tw-space-y-6">
                                <div class="tw-mt-2">
                                    <div>
                                        <InputLabel for="grade" value="New Grade" required />

                                        <TextInput
                                            id="grade"
                                            type="text"
                                            class="tw-mt-1 tw-block tw-w-full"
                                            v-model="form.grade"
                                            required
                                            autofocus
                                            autocomplete="grade"
                                        />

                                        <InputError class="tw-mt-2" :message="form.errors.grade" />
                                    </div>
                                </div>

                                <div class="tw-mt-4 tw-flex tw-gap-x-3">
                                    <button
                                        type="button"
                                        class="tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-transparent tw-bg-gray-100 tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-gray-900 hover:tw-bg-gray-200 focus:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-gray-500 focus-visible:tw-ring-offset-2"
                                        @click="closeModal()"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        class="tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-transparent tw-bg-blue-100 tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-blue-900 hover:tw-bg-blue-200 focus:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-blue-500 focus-visible:tw-ring-offset-2"
                                        @click="submitForm()"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </DialogPanel>
                    </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </AuthenticatedLayout>
</template>

<script setup>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
    import { Head, useForm, usePage, Link } from '@inertiajs/inertia-vue3'
    import { ref, onMounted } from 'vue'
    import Swal from 'sweetalert2'
    import {
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogPanel,
        DialogTitle,
        TabGroup,
        TabList,
        Tab,
        TabPanels,
        TabPanel,
    } from '@headlessui/vue'
    import { ChevronUpIcon, PrinterIcon } from '@heroicons/vue/20/solid'
    import TextInput from '@/Components/TextInput.vue';
    import InputLabel from '@/Components/InputLabel.vue';
    import InputError from '@/Components/InputError.vue';

    const props = defineProps({
        model: Object,
    })

    onMounted(() =>{
        setYearAndSemesters()
    })

    const yearAndSemesters = ref({})

    function setYearAndSemesters() {
        yearAndSemesters.value = [
            {
                title: '1st Year-1st Sem',
                items: props.model.first_year_first_semester_subjects,
                year: 1,
                semester: 1,
            },
            {
                title: '1st Year-2nd Sem',
                items: props.model.first_year_second_semester_subjects,
                year: 1,
                semester: 2,
            },
            {
                title: '2nd Year-1st Sem',
                items: props.model.second_year_first_semester_subjects,
                year: 2,
                semester: 1,
            },
            {
                title: '2nd Year-2nd Sem',
                items: props.model.second_year_second_semester_subjects,
                year: 2,
                semester: 2,
            },
            {
                title: '3rd Year-1st Sem',
                items: props.model.third_year_first_semester_subjects,
                year: 3,
                semester: 1,
            },
            {
                title: '3rd Year-2nd Sem',
                items: props.model.third_year_second_semester_subjects,
                year: 3,
                semester: 2,
            },
            {
                title: '4th Year-1st Sem',
                items: props.model.fourth_year_first_semester_subjects,
                year: 4,
                semester: 1,
            },
            {
                title: '4th Year-2nd Sem',
                items: props.model.fourth_year_second_semester_subjects,
                year: 4,
                semester: 2,
            },
        ]
    }

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
        {
            title: 'Actions',
            class: usePage().props.value.auth.user.roles[0].name == 'Admin' || usePage().props.value.auth.user.roles[0].name == 'Faculty' ? 'tw-py-2 tw-px-6 tw-text-left' : 'tw-py-2 tw-px-6 tw-text-left tw-hidden',
        },
    ])

    const form = useForm({
        subject_id: null,
        grade: null,
    });

    const updateGradeModalIsOpen = ref(false)
    const courseCode = ref(null)

    function closeModal() {
        updateGradeModalIsOpen.value = false
    }

    function openModal(subject_id, course_code, grade) {
        updateGradeModalIsOpen.value = true
        courseCode.value = course_code
        form.subject_id = subject_id
        form.grade = grade
    }

    function submitForm() {
        form.post('/students/' + props.model.id + '/grades', {
            preserveScroll: true,
            onSuccess: () => {
                Swal.fire({
                    title: 'Updated successfully',
                    confirmButtonColor: '#16a34a',
                })

                setYearAndSemesters()
            },
        })

        closeModal()
    }
</script>
