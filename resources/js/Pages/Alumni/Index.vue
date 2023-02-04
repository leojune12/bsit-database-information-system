<template>
    <Head title="Alumni" />

    <AuthenticatedLayout>
        <div class="tw-flex tw-flex-col md:tw-flex-row tw-mb-4 md:tw-justify-between md:tw-items-center tw-gap-y-4">
            <h3 class="tw-text-xl tw-font-bold tw-leading-6 tw-text-gray-700">
                Alumni
            </h3>
            <div class="tw-flex tw-gap-3">
                <div class="tw-flex">
                    <TextInput
                        id="id_number"
                        type="text"
                        class="tw-block tw-w-full tw-border-r-0 tw-rounded-r-none tw-ring-0 tw-rounded-lg tw-border-2"
                        v-model="search"
                        required
                        autocomplete="id_number"
                        placeholder="Search"
                    />
                    <LinkComponent
                        :href="search ? '/' + url + '/?search=' + search : '/' + url"
                        type="success-outlined"
                        class="tw-h-11 tw-rounded-l-none"
                        title="Search"
                    >
                        <MagnifyingGlassIcon
                            class="tw-h-6 tw-w-6"
                        />
                    </LinkComponent>
                </div>
            </div>
        </div>
        <div class="tw-overflow-x-auto tw-mb-4">
            <table class="tw-min-w-full">
                <thead class="tw-border tw-bg-indigo-500 tw-text-sm tw-font-medium tw-text-white">
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
                        v-if="props.response.data.length"
                        v-for="item in props.response.data"
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
                                    :href="url + '/' + item.id + '/grades'"
                                    class="tw-text-yellow-500 hover:tw-text-yellow-600 tw-transition tw-duration-300 tw-ease-in-out"
                                    title="View"
                                >
                                    <!-- <EyeIcon class="tw-block tw-h-5 tw-w-5" aria-hidden="true" /> -->
                                    Grades
                                </Link>
                                <Link
                                    :href="url + '/' + item.id"
                                    class="tw-text-green-500 hover:tw-text-green-600 tw-transition tw-duration-300 tw-ease-in-out"
                                    title="View"
                                >
                                    <!-- <EyeIcon class="tw-block tw-h-5 tw-w-5" aria-hidden="true" /> -->
                                    View
                                </Link>
                                <Link
                                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                                    :href="url + '/' + item.id + '/edit'"
                                    class="tw-text-blue-600 hover:tw-text-blue-700 tw-transition tw-duration-300 tw-ease-in-out"
                                    title="Edit"
                                >
                                    <!-- <PencilSquareIcon class="tw-block tw-h-5 tw-w-5" aria-hidden="true" /> -->
                                    Edit
                                </Link>
                                <a
                                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                                    href="#"
                                    class="tw-text-red-500 hover:tw-text-red-600 tw-transition tw-duration-300 tw-ease-in-out"
                                    title="Delete"
                                    @click="confirmDelete(item.id)"
                                >
                                    <!-- <TrashIcon class="tw-block tw-h-5 tw-w-5" aria-hidden="true" /> -->
                                    Delete
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr
                        v-else
                        class="tw-bg-white tw-border-b tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-gray-100"
                    >
                        <td
                            :colspan="tableHeader.length"
                            class="tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center"
                        >
                            No records
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <PaginationComponent
            :totalPages="props.response.last_page ?? 0"
            :perPage="props.response.per_page ?? 0"
            :currentPage="props.response.current_page ?? 0"
            :from="props.response.from ?? 0"
            :to="props.response.to ?? 0"
            :total="props.response.total ?? 0"
            :url="url"
        />
    </AuthenticatedLayout>
</template>

<script setup>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
    import PaginationComponent from '@/Components/Table/Pagination.vue'
    import { Head, useForm, Link } from '@inertiajs/inertia-vue3'
    import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
    import Swal from 'sweetalert2'
    import LinkComponent from '@/Components/LinkComponent.vue';
    import { ref } from 'vue'
    import TextInput from '@/Components/TextInput.vue';

    const props = defineProps({
        response: Object,
    })

    const tableHeader = ref([
    {
            title: 'ID',
            class: 'tw-py-3 tw-px-6 tw-text-left',
        },
        {
            title: 'ID Number',
            class: 'tw-py-3 tw-px-6 tw-text-left',
        },
        {
            title: 'First Name',
            class: 'tw-py-3 tw-px-6 tw-text-left',
        },
        {
            title: 'Last Name',
            class: 'tw-py-3 tw-px-6 tw-text-left',
        },
        {
            title: 'Email',
            class: 'tw-py-3 tw-px-6 tw-text-left',
        },
        // {
        //     title: 'Role',
        //     class: 'tw-py-3 tw-px-6 tw-text-left',
        // },
        {
            title: 'Actions',
            class: 'tw-py-3 tw-px-6 tw-text-left',
        },
    ])

    const url = 'alumni'

    const search = ref('')

    const form = useForm({
        //
    })

    function confirmDelete(id) {

        Swal.fire({
            title: 'Are you sure?',
            // text: "You won't be able to revert this!",
            // icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteItem(id)
            }
        })
    }

    function deleteItem(id) {

        let id_array = Array.isArray(id)
                    ? Object.keys(id).map(index => id[index].id)
                    : [id]

        form.transform(() => ({
                id_array: id_array,
            }))
            .delete(
            route(url + '.destroy', id),
            {
                preserveScroll: true,
                onSuccess: () => {
                    Swal.fire({
                        title: 'Deleted successfully',
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
