<template>
    <Head title="Sections" />

    <AuthenticatedLayout>
        <div class="tw-bg-white tw-shadow-lg tw-border sm:tw-rounded-lg tw-mb-5">
            <div>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <h3 class="tw-text-lg tw-font-black tw-leading-6 tw-text-gray-900">Section Information</h3>
                </dl>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Academic Year</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.academic_year.name }}
                    </dd>
                </dl>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Curriculum</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.curriculum.name }}
                    </dd>
                </dl>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Name</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.name }}
                    </dd>
                </dl>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Year</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.year }}
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

        <div class="tw-bg-white tw-shadow-lg tw-border sm:tw-rounded-lg tw-mb-5 tw-px-4 sm:tw-px-6 tw-py-5">
            <div class="tw-flex tw-items-center tw-justify-between tw-mb-3">
                <h3 class="tw-text-lg tw-font-black tw-leading-6 tw-text-gray-900">Students ({{ props.students.length }})</h3>
                <form
                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                    @submit.prevent="submitAddSudentForm()" class="tw-flex"
                >
                    <div>
                        <TextInput
                            id="id_number"
                            type="text"
                            class="tw-block tw-w-full tw-border-r-0 tw-rounded-r-none"
                            v-model="addStudentForm.id_number"
                            required
                            autocomplete="id_number"
                            placeholder="Type ID Number"
                        />

                        <InputError class="tw-mt-2" :message="addStudentForm.errors.id_number" />
                    </div>
                    <button
                        type="submit"
                        class="tw-h-11 tw-rounded-l-none tw-flex tw-justify-center tw-items-center tw-px-4 tw-bg-green-600s tw-border-2 tw-border-green-600 tw-rounded-md tw-font-semibold tw-text-xs tw-text-green-600 tw-uppercase tw-tracking-widest hover:tw-bg-green-700 hover:tw-text-white active:tw-text-white focus:tw-text-white focus:tw-bg-green-700 active:tw-bg-green-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-green-500 focus:tw-ring-offset-2 tw-transition tw-ease-in-out tw-duration-150"
                    >
                        <PlusIcon class="tw-block tw-h-5 tw-w-5" aria-hidden="true" />
                        Add
                    </button>
                </form>
            </div>
            <div>
                <div class="tw-overflow-x-auto tw-mb-4">
                    <table class="tw-min-w-full">
                        <thead class="tw-border-b tw-text-sm tw-font-medium tw-text-gray-800">
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
                                v-if="props.students.length"
                                v-for="item in props.students"
                                :key="item.id"
                                class="tw-bg-white tw-border-b tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-gray-100"
                            >
                                <td class="tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-sm tw-font-medium tw-text-gray-900">
                                    {{ item.id }}
                                </td>
                                <td class="tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-sm tw-font-medium tw-text-gray-900">
                                    {{ item.id_number }}
                                </td>
                                <td class="tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap">
                                    {{ item.first_name }}
                                </td>
                                <td class="tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap">
                                    {{ item.last_name }}
                                </td>
                                <td class="tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap">
                                    {{ item.email }}
                                </td>
                                <!-- <td class="tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap">
                                    {{ item.role }}
                                </td> -->
                                <td class="tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap">
                                    <div class="tw-flex tw-gap-2">
                                        <Link
                                            :href="'/students/' + item.id"
                                            class="tw-text-green-500 hover:tw-text-green-600 tw-transition tw-duration-300 tw-ease-in-out"
                                            title="View"
                                        >
                                            View
                                        </Link>
                                        <a
                                            v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                                            href="#"
                                            class="tw-text-red-500 hover:tw-text-red-600 tw-transition tw-duration-300 tw-ease-in-out"
                                            title="Delete"
                                            @click="confirmRemoveStudent(item.id)"
                                        >
                                            Remove
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr
                                v-else
                            >
                                <td colspan="6" class="tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-sm tw-font-medium tw-text-gray-900 tw-text-center">
                                    No records
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
    import { Head, useForm, Link } from '@inertiajs/inertia-vue3'
    import LinkComponent from '@/Components/LinkComponent.vue';
    import { ref } from 'vue'
    import Swal from 'sweetalert2'
    import { PlusIcon } from '@heroicons/vue/24/outline'
    import InputError from '@/Components/InputError.vue';
    import InputLabel from '@/Components/InputLabel.vue';
    import TextInput from '@/Components/TextInput.vue';

    const props = defineProps({
        model: Object,
        students: Object,
    })

    const tableHeader = ref([
        {
            title: 'ID',
            class: 'tw-py-2 tw-px-6 tw-text-left',
        },
        {
            title: 'ID Number',
            class: 'tw-py-2 tw-px-6 tw-text-left',
        },
        {
            title: 'First Name',
            class: 'tw-py-2 tw-px-6 tw-text-left',
        },
        {
            title: 'Last Name',
            class: 'tw-py-2 tw-px-6 tw-text-left',
        },
        {
            title: 'Email',
            class: 'tw-py-2 tw-px-6 tw-text-left',
        },
        // {
        //     title: 'Role',
        //     class: 'tw-py-2 tw-px-6 tw-text-left',
        // },
        {
            title: 'Actions',
            class: 'tw-py-2 tw-px-6 tw-text-left',
        },
    ])

    const form = useForm({
        //
    })

    const addStudentForm = useForm({
        id_number: null,
        section_id: props.model.id,
        curriculum_id: props.model.curriculum_id,
        year: props.model.year
    })

    const url = 'sections'

    function submitAddSudentForm() {
        addStudentForm
            .post('/' + url + '/add-student', {
                preserveScroll: true,
                onSuccess: () => {
                    Swal.fire({
                        title: 'Added successfully',
                        // text: "Created successfully.",
                        // icon: 'success',
                        confirmButtonColor: '#16a34a',
                    })

                    addStudentForm.reset('id_number')
                },
            })
    }

    function confirmRemoveStudent(id) {

        Swal.fire({
            title: 'Remove student from section?',
            // text: "You won't be able to revert this!",
            // icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            confirmButtonText: 'Remove'
        }).then((result) => {
            if (result.isConfirmed) {
                RemoveStudent(id)
            }
        })
        }

    function RemoveStudent(id) {

        let id_array = Array.isArray(id)
                    ? Object.keys(id).map(index => id[index].id)
                    : [id]

        form.transform(() => ({
                section_id: props.model.id,
                curriculum_id: props.model.curriculum_id,
                year: props.model.year
            }))
            .delete('/' + url + '/remove-student/' + id,
            {
                preserveScroll: true,
                onSuccess: () => {
                    Swal.fire({
                        title: 'Removed successfully',
                        // text: "Deleted successfully.",
                        // icon: 'success',
                        confirmButtonColor: '#16a34a',
                    })
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
</script>
