<template>
    <Head title="Curriculums" />

    <AuthenticatedLayout>
        <div class="tw-bg-white tw-shadow-lg tw-border sm:tw-rounded-lg tw-mb-5">
            <div>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <h3 class="tw-text-lg tw-font-black tw-leading-6 tw-text-gray-900">Curriculum Information</h3>
                </dl>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Name</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.name }}
                    </dd>
                </dl>

                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Date Added</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0 tw-capitalize ">
                        {{ props.model.date_added }}
                    </dd>
                </dl>
            </div>
            <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-4 tw-py-6 sm:tw-px-6 tw-px-4">
                <LinkComponent
                    v-if="['Admin', 'Faculty'].includes($page.props.auth.user.roles[0].name)"
                    :href="'/' + url"
                    type="secondary"
                >
                    Back
                </LinkComponent>
                <LinkComponent
                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                    :href="'/' + url + '/' + props.model.id + '/edit'"
                    type="primary"
                >
                    Update
                </LinkComponent>
            </div>
        </div>
        <div class="tw-bg-white tw-shadow-lg tw-border sm:tw-rounded-lg tw-mb-5 tw-px-4 tw-py-5 sm:tw-px-6">
            <div class="tw-flex tw-items-center tw-justify-between tw-mb-3">
                <h3 class="tw-text-lg tw-font-black tw-leading-6 tw-text-gray-900">Subjects for {{ currentYearAndSection }}</h3>
                <!-- <LinkComponent
                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                    :href="'/subjects/create'"
                    type="success-outlined"
                    class=""
                >
                    <PlusIcon class="tw-block tw-h-5 tw-w-5" aria-hidden="true" />
                    New Subject
                </LinkComponent> -->
                <button
                    v-if="['Admin'].includes($page.props.auth.user.roles[0].name)"
                    type="button"
                    @click="openModal"
                    class="tw-rounded-lg tw-border-2 tw-h-10 tw-px-3 tw-border-green-600 hover:tw-bg-green-600 hover:tw-text-white tw-text-green-600 tw-text-sm"
                >
                    Update Subjects
                </button>
            </div>
            <div>
                <TabGroup>
                    <TabList class="tw-flex tw-space-x-1 tw-rounded-xl tw-bg-indigo-500 tw-p-1">
                        <Tab
                            v-for="(item, index) in yearAndSections"
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
                                @click="setYearAndSectionToUpdate(item)"
                            >
                                {{ item.title }} ({{ item.subjects.length }})
                            </button>
                        </Tab>
                    </TabList>

                    <TabPanels class="tw-mt-2">
                        <TabPanel
                            v-for="(yearAndSection, idx) in yearAndSections"
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
                                            v-if="yearAndSection.subjects.length"
                                            v-for="item in yearAndSection.subjects"
                                            :key="item.id"
                                            class="tw-bg-white tw-border-b tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-gray-100"
                                        >
                                            <td class="tw-px-6 tw-py-3 tw-text-sm tw-font-medium tw-text-gray-900">
                                                {{ item.id }}
                                            </td>
                                            <td>
                                                <div :class="[['Admin', 'Faculty'].includes($page.props.auth.user.roles[0].name) ? 'tw-text-blue-600 hover:tw-underline' : '', 'tw-text-sm tw-font-light tw-px-6 tw-py-3']">
                                                    <Link
                                                        v-if="['Admin', 'Faculty'].includes($page.props.auth.user.roles[0].name)"
                                                        :href="'/subjects/' + item.id"
                                                    >
                                                        {{ item.course_code }}
                                                    </Link>
                                                    <div v-else>
                                                        {{ item.course_code }}
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3">
                                                {{ item.descriptive_title }}
                                            </td>
                                            <td class="tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3">
                                                {{ item.unit }}
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
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
        <TransitionRoot appear :show="modalIsOpen" as="template">
            <Dialog as="div" @close="closeModal" class="tw-relative tw-z-10">
                <TransitionChild
                    as="template"
                    enter="tw-duration-300 tw-ease-out"
                    enter-from="tw-opacity-0"
                    enter-to="tw-opacity-100"
                    leave="tw-duration-200 tw-ease-in"
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
                                class="tw-w-full tw-max-w-md tw-transform tw-overflow-auto tw-rounded-2xl tw-bg-white tw-p-6 tw-text-left tw-align-middle tw-shadow-xl tw-transition-all"
                            >
                                <DialogTitle
                                    as="h3"
                                    class="tw-text-lg tw-font-medium tw-leading-6 tw-text-gray-900 tw-mb-5"
                                >
                                    Update Subjects for {{ currentYearAndSection }}
                                </DialogTitle>
                                <div class="">
                                    <Combobox v-model="selected">
                                        <div class="tw-relative tw-mt-1">
                                            <div class="tw-flex tw-gap-x-3">
                                                <div
                                                class="tw-relative tw-w-full tw-cursor-default tw-overflow-hidden tw-rounded-lg tw-bg-white tw-text-left tw-shadow-md focus:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-white focus-visible:tw-ring-opacity-75 focus-visible:tw-ring-offset-2 focus-visible:tw-ring-offset-teal-300 sm:tw-text-sm tw-border"
                                                >
                                                    <ComboboxInput
                                                        class="tw-w-full tw-border-none tw-py-2 tw-pl-3 tw-pr-10 tw-text-sm tw-leading-5 tw-text-gray-900 focus:tw-ring-0"
                                                        :displayValue="(person) => person?.course_code"
                                                        @change="query = $event.target.value"
                                                        placeholder="Search"
                                                    />
                                                    <ComboboxButton
                                                        class="tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-2"
                                                    >
                                                        <ChevronUpDownIcon
                                                        class="tw-h-5 tw-w-5 tw-text-gray-400"
                                                        aria-hidden="true"
                                                        />
                                                    </ComboboxButton>
                                                </div>
                                                <button
                                                    type="button"
                                                    class="tw-bg-green-500 hover:tw-bg-green-600 tw-px-3 tw-h-9 tw-flex tw-items-center tw-justify-center tw-rounded-md tw-text-white"
                                                    @click="addSubject()"
                                                >
                                                    Add
                                                </button>
                                            </div>
                                            <TransitionRoot
                                            leave="tw-transition tw-ease-in tw-duration-100"
                                            leaveFrom="tw-opacity-100"
                                            leaveTo="tw-opacity-0"
                                            @after-leave="query = ''"
                                            >
                                                <ComboboxOptions
                                                    class="tw-absolute tw-mt-1 tw-max-h-60 tw-w-full tw-overflow-auto tw-rounded-md tw-bg-white tw-py-1 tw-text-base tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none sm:tw-text-sm"
                                                >
                                                    <div
                                                    v-if="filteredSubjects.length === 0 && query !== ''"
                                                    class="tw-relative tw-cursor-default tw-select-none tw-py-2 tw-px-4 tw-text-gray-700"
                                                    >
                                                    Nothing found.
                                                    </div>

                                                    <ComboboxOption
                                                    v-for="person in filteredSubjects"
                                                    as="template"
                                                    :key="person.id"
                                                    :value="person"
                                                    v-slot="{ selected, active }"
                                                    >
                                                    <li
                                                        class="tw-relative tw-cursor-default tw-select-none tw-py-2 tw-pl-10 tw-pr-4"
                                                        :class="{
                                                        'tw-bg-teal-600 tw-text-white': active,
                                                        'tw-text-gray-900': !active,
                                                        }"
                                                    >
                                                        <span
                                                        class="tw-block tw-truncate"
                                                        :class="{ 'tw-font-medium': selected, 'tw-font-normal': !selected }"
                                                        >
                                                        {{ person.id }} - {{ person.course_code }}
                                                        </span>
                                                        <span
                                                        v-if="selected"
                                                        class="tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-3"
                                                        :class="{ 'tw-text-white': active, 'tw-text-teal-600': !active }"
                                                        >
                                                        <CheckIcon class="tw-h-5 tw-w-5" aria-hidden="true" />
                                                        </span>
                                                    </li>
                                                    </ComboboxOption>
                                                </ComboboxOptions>
                                            </TransitionRoot>
                                        </div>
                                    </Combobox>
                                    <div class="tw-h-96 tw-overflow-y-auto">
                                        <table class="tw-mt-5 tw-w-full tw-text-gray-600 tw-text-sm">
                                            <thead class="">
                                                <tr>
                                                    <th class="tw-pr-4 tw-py-1">ID</th>
                                                    <th class="tw-px-4 tw-py-1">Course Number</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr
                                                    v-if="selectedSubjects.length"
                                                    v-for="(item, index) in selectedSubjects"
                                                    :key="index"
                                                >
                                                    <td class="tw-pr-4 tw-py-1">{{ item.id }}</td>
                                                    <td  class="tw-px-4 tw-py-1">{{ item.course_code }}</td>
                                                    <td>
                                                        <button
                                                            class="tw-text-red-600 tw-text-xs"
                                                            @click="removeSubject(index)"
                                                        >
                                                            Remove
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr v-else>
                                                    <td class="tw-p-6 tw-py-1 tw-text-center" colspan="3">No Subject</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div class="tw-mt-4 tw-space-x-3">
                                    <button
                                        type="button"
                                        class="tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-transparent tw-bg-gray-100 tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-gray-900 hover:tw-bg-gray-200 focus:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-gray-500 focus-visible:tw-ring-offset-2"
                                        @click="closeModal"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        class="tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-transparent tw-bg-amber-500 tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-white hover:tw-bg-amber-600 focus:tw-outline-none"
                                        @click="confirmUpdateSubjects()"
                                    >
                                        Save
                                    </button>
                                </div>
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
    import { Head, useForm, Link } from '@inertiajs/inertia-vue3'
    import LinkComponent from '@/Components/LinkComponent.vue';
    import { ref, computed, onMounted } from 'vue'
    import Swal from 'sweetalert2'
    import { ChevronUpDownIcon, PlusIcon, CheckIcon } from '@heroicons/vue/20/solid'
    import {
        TabGroup,
        TabList,
        Tab,
        TabPanels,
        TabPanel,
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogPanel,
        DialogTitle,
        Listbox,
        ListboxLabel,
        ListboxButton,
        ListboxOptions,
        ListboxOption,
        Combobox,
        ComboboxInput,
        ComboboxButton,
        ComboboxOptions,
        ComboboxOption,
    } from '@headlessui/vue'

    const props = defineProps({
        model: Object,
        subjects: null,
    })

    onMounted(() =>{
        setYearAndSectionsValue()
        modalSubjects.value = props.subjects['first_year_first_semester_subjects']
        selectedSubjects.value = JSON.parse(JSON.stringify(yearAndSections.value.filter(item => item.description == 'first_year_first_semester_subjects')[0].subjects))
        selectedSubjectsHolder.value = JSON.parse(JSON.stringify(yearAndSections.value.filter(item => item.description == 'first_year_first_semester_subjects')[0].subjects))
        updateSubjectsForm.year = 1
        updateSubjectsForm.semester = 1
    })

    const url = 'curriculums'

    const updateSubjectsForm = useForm({
        subjects: [],
        year: '',
        semester: '',
    })

    const modalIsOpen = ref(false)

    const tableHeader = ref([
        {
            title: 'ID',
            class: 'tw-py-2 tw-px-6 tw-text-left tw-whitespace-nowrap',
        },
        {
            title: 'Course Number',
            class: 'tw-py-2 tw-px-6 tw-text-left tw-whitespace-nowrap',
        },
        {
            title: 'Descriptive Title',
            class: 'tw-py-2 tw-px-6 tw-text-left tw-whitespace-nowrap',
        },
        {
            title: 'Units',
            class: 'tw-py-2 tw-px-6 tw-text-left tw-whitespace-nowrap',
        },
    ])

    const yearAndSections = ref({})

    const selectedSubjects = ref([])
    const selectedSubjectsHolder = ref([])

    const currentYearAndSection = ref("1st Year - 1st Sem")
    const currentYearAndSectionDescription = ref("first_year_first_semester_subjects")

    const modalSubjects = ref([])

    function setYearAndSectionToUpdate(yearAndSection) {
        updateSubjectsForm.year = yearAndSection.year
        updateSubjectsForm.semester = yearAndSection.semester
        modalSubjects.value = props.subjects[yearAndSection.description]
        currentYearAndSection.value = yearAndSection.title
        currentYearAndSectionDescription.value = yearAndSection.description
        selectedSubjects.value = JSON.parse(JSON.stringify(yearAndSection.subjects))
        selectedSubjectsHolder.value = JSON.parse(JSON.stringify(yearAndSection.subjects))
    }

    function setYearAndSectionsValue() {
        yearAndSections.value = [
            {
                title: '1st Year - 1st Sem',
                description: 'first_year_first_semester_subjects',
                subjects: props.model.first_year_first_semester_subjects,
                year: 1,
                semester: 1,
            },
            {
                title: '1st Year - 2nd Sem',
                description: 'first_year_second_semester_subjects',
                subjects: props.model.first_year_second_semester_subjects,
                year: 1,
                semester: 2,
            },
            {
                title: '2nd Year - 1st Sem',
                description: 'second_year_first_semester_subjects',
                subjects: props.model.second_year_first_semester_subjects,
                year: 2,
                semester: 1,
            },
            {
                title: '2nd Year - 2nd Sem',
                description: 'second_year_second_semester_subjects',
                subjects: props.model.second_year_second_semester_subjects,
                year: 2,
                semester: 2,
            },
            {
                title: '3rd Year - 1st Sem',
                description: 'third_year_first_semester_subjects',
                subjects: props.model.third_year_first_semester_subjects,
                year: 3,
                semester: 1,
            },
            {
                title: '3rd Year - 2nd Sem',
                description: 'third_year_second_semester_subjects',
                subjects: props.model.third_year_second_semester_subjects,
                year: 3,
                semester: 2,
            },
            {
                title: '4th Year - 1st Sem',
                description: 'fourth_year_first_semester_subjects',
                subjects: props.model.fourth_year_first_semester_subjects,
                year: 4,
                semester: 1,
            },
            {
                title: '4th Year - 2nd Sem',
                description: 'fourth_year_second_semester_subjects',
                subjects: props.model.fourth_year_second_semester_subjects,
                year: 4,
                semester: 2,
            },
        ]

        selectedSubjectsHolder.value = JSON.parse(JSON.stringify(yearAndSections.value.filter(item => item.description == currentYearAndSectionDescription.value)[0].subjects))
    }

    let selected = ref(null)
    let query = ref('')

    let filteredSubjects = computed(() =>
    query.value === ''
        ? modalSubjects.value
        : modalSubjects.value.filter((person) =>
            person.course_code
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.value.toLowerCase().replace(/\s+/g, ''))
        )
    )

    function addSubject() {

        if (!selectedSubjects.value.filter(item => item.id == selected.value?.id).length) {

            if (!!selected.value) {
                selectedSubjects.value.push(selected.value)
                selected.value = null
            }
        }
    }

    function removeSubject(index) {
        selectedSubjects.value.splice(index, 1)
    }

    function confirmUpdateSubjects() {

        Swal.fire({
            title: 'Are you sure?',
            // text: "You won't be able to revert this!",
            // icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#16a34a',
            confirmButtonText: 'Save'
        }).then((result) => {
            if (result.isConfirmed) {
                updateSubjects()
            }
        })
    }

    function updateSubjects() {

        updateSubjectsForm.subjects = selectedSubjects.value

        updateSubjectsForm.post(
            '/curriculums/' + props.model.id + '/update-subjects',
            {
                preserveScroll: true,
                onSuccess: () => {
                    Swal.fire({
                        title: 'Updated successfully',
                        // text: "Deleted successfully.",
                        // icon: 'success',
                        confirmButtonColor: '#16a34a',
                    })

                    setYearAndSectionsValue()
                    closeModal()
                },
                onError: (error) => {
                    Swal.fire({
                        title: 'Something went wrong',
                        text: "Please refresh the page.",
                        icon: 'error',
                        confirmButtonColor: '#d33',
                    })
                },
            }
        )
    }

    function closeModal() {
        modalIsOpen.value = false
    }
    function openModal() {
        modalIsOpen.value = true
        selectedSubjects.value = JSON.parse(JSON.stringify(selectedSubjectsHolder.value))
    }

</script>
