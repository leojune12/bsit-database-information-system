<template>
    <Head title="Academic Years" />

    <AuthenticatedLayout>
        <div class="tw-bg-white tw-shadow-lg tw-border sm:tw-rounded-lg tw-mb-5">
            <div>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <h3 class="tw-text-lg tw-font-black tw-leading-6 tw-text-gray-900">Academic Year Information</h3>
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
                <h3 class="tw-text-lg tw-font-black tw-leading-6 tw-text-gray-900">Sections</h3>
                <LinkComponent
                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                    :href="'/sections/create'"
                    type="success-outlined"
                    class=""
                >
                    <PlusIcon class="tw-block tw-h-5 tw-w-5" aria-hidden="true" />
                    New Section
                </LinkComponent>
            </div>
            <div>
                <Disclosure v-slot="{ open }">
                    <DisclosureButton
                        :class="[open ? 'tw-rounded-b-none tw-border tw-border-green-200' : 'tw-mb-3', 'tw-flex tw-w-full tw-justify-between tw-rounded-lg tw-bg-green-100 tw-px-4 tw-py-2 tw-text-left tw-text-sm tw-font-medium tw-text-green-900 hover:tw-bg-green-200 focus:tw-outline-none focus-visible:tw-ring focus-visible:tw-ring-green-500 focus-visible:tw-ring-opacity-75']"
                    >
                        <span><h4 class="tw-font-black tw-leading-6 tw-text-green-700">First Year ({{ props.model.first_year_sections.length }})</h4></span>
                        <ChevronUpIcon
                            :class="open ? 'tw-rotate-180 tw-transform' : ''"
                            class="tw-h-5 tw-w-5 tw-text-green-500"
                        />
                    </DisclosureButton>
                    <DisclosurePanel :class="[open ? 'tw-mb-3' : '', 'tw-px-4 tw-pt-4 tw-pb-2 tw-text-sm tw-border tw-rounded-b-lg tw-border-green-200']">
                        <div class="tw-overflow-x-auto tw-mb-4">
                            <table class="tw-min-w-full">
                                <thead class="tw-text-sm tw-font-medium tw-text-green-700 tw-border-b">
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
                                        v-if="props.model.first_year_sections.length"
                                        v-for="item in props.model.first_year_sections"
                                        :key="item.id"
                                        class="tw-bg-white tw-border-b tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-gray-100"
                                    >
                                        <td class="tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-sm tw-font-medium tw-text-gray-900">
                                            {{ item.id }}
                                        </td>
                                        <td class="tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap">
                                            {{ item.name }}
                                        </td>
                                        <td class="tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap">
                                            {{ item.year }}
                                        </td>
                                        <td class="tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap">
                                            <div class="tw-flex tw-gap-2">
                                                <a
                                                    target="_blank"
                                                    :href="'/sections/' + item.id"
                                                    class="tw-text-green-500 hover:tw-text-green-600 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="View"
                                                >
                                                    View
                                                </a>
                                                <Link
                                                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                                                    :href="'/sections/' + item.id + '/edit'"
                                                    class="tw-text-blue-600 hover:tw-text-blue-700 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="Edit"
                                                >
                                                    Edit
                                                </Link>
                                                <a
                                                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                                                    href="#"
                                                    class="tw-text-red-500 hover:tw-text-red-600 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="Delete"
                                                    @click="confirmDelete(item.id)"
                                                >
                                                    Delete
                                            </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        v-else
                                    >
                                        <td colspan="4" class="tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-sm tw-font-medium tw-text-gray-900 tw-text-center">
                                            No records
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure v-slot="{ open }">
                    <DisclosureButton
                        :class="[open ? 'tw-rounded-b-none tw-border tw-border-green-200' : 'tw-mb-3', 'tw-flex tw-w-full tw-justify-between tw-rounded-lg tw-bg-green-100 tw-px-4 tw-py-2 tw-text-left tw-text-sm tw-font-medium tw-text-green-900 hover:tw-bg-green-200 focus:tw-outline-none focus-visible:tw-ring focus-visible:tw-ring-green-500 focus-visible:tw-ring-opacity-75']"
                    >
                        <span><h4 class="tw-font-black tw-leading-6 tw-text-green-700">Second Year ({{ props.model.second_year_sections.length }})</h4></span>
                        <ChevronUpIcon
                            :class="open ? 'tw-rotate-180 tw-transform' : ''"
                            class="tw-h-5 tw-w-5 tw-text-green-500"
                        />
                    </DisclosureButton>
                    <DisclosurePanel :class="[open ? 'tw-mb-3' : '', 'tw-px-4 tw-pt-4 tw-pb-2 tw-text-sm tw-border tw-rounded-b-lg tw-border-green-200']">
                        <div class="tw-overflow-x-auto tw-mb-4">
                            <table class="tw-min-w-full">
                                <thead class="tw-text-sm tw-font-medium tw-text-green-700 tw-border-b">
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
                                        v-if="props.model.second_year_sections.length"
                                        v-for="item in props.model.second_year_sections"
                                        :key="item.id"
                                        class="tw-bg-white tw-border-b tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-gray-100"
                                    >
                                        <td class="tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-sm tw-font-medium tw-text-gray-900">
                                            {{ item.id }}
                                        </td>
                                        <td class="tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap">
                                            {{ item.name }}
                                        </td>
                                        <td class="tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap">
                                            {{ item.year }}
                                        </td>
                                        <td class="tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap">
                                            <div class="tw-flex tw-gap-2">
                                                <a
                                                    target="_blank"
                                                    :href="'/sections/' + item.id"
                                                    class="tw-text-green-500 hover:tw-text-green-600 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="View"
                                                >
                                                    View
                                                </a>
                                                <Link
                                                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                                                    :href="'/sections/' + item.id + '/edit'"
                                                    class="tw-text-blue-600 hover:tw-text-blue-700 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="Edit"
                                                >
                                                    Edit
                                                </Link>
                                                <a
                                                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                                                    href="#"
                                                    class="tw-text-red-500 hover:tw-text-red-600 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="Delete"
                                                    @click="confirmDelete(item.id)"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        v-else
                                    >
                                        <td colspan="4" class="tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-sm tw-font-medium tw-text-gray-900 tw-text-center">
                                            No records
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure v-slot="{ open }">
                    <DisclosureButton
                        :class="[open ? 'tw-rounded-b-none tw-border tw-border-green-200' : 'tw-mb-3', 'tw-flex tw-w-full tw-justify-between tw-rounded-lg tw-bg-green-100 tw-px-4 tw-py-2 tw-text-left tw-text-sm tw-font-medium tw-text-green-900 hover:tw-bg-green-200 focus:tw-outline-none focus-visible:tw-ring focus-visible:tw-ring-green-500 focus-visible:tw-ring-opacity-75']"
                    >
                        <span><h4 class="tw-font-black tw-leading-6 tw-text-green-700">Third Year ({{ props.model.third_year_sections.length }})</h4></span>
                        <ChevronUpIcon
                            :class="open ? 'tw-rotate-180 tw-transform' : ''"
                            class="tw-h-5 tw-w-5 tw-text-green-500"
                        />
                    </DisclosureButton>
                    <DisclosurePanel :class="[open ? 'tw-mb-3' : '', 'tw-px-4 tw-pt-4 tw-pb-2 tw-text-sm tw-border tw-rounded-b-lg tw-border-green-200']">
                        <div class="tw-overflow-x-auto tw-mb-4">
                            <table class="tw-min-w-full">
                                <thead class="tw-text-sm tw-font-medium tw-text-green-700 tw-border-b">
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
                                        v-if="props.model.third_year_sections.length"
                                        v-for="item in props.model.third_year_sections"
                                        :key="item.id"
                                        class="tw-bg-white tw-border-b tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-gray-100"
                                    >
                                        <td class="tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-sm tw-font-medium tw-text-gray-900">
                                            {{ item.id }}
                                        </td>
                                        <td class="tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap">
                                            {{ item.name }}
                                        </td>
                                        <td class="tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap">
                                            {{ item.year }}
                                        </td>
                                        <td class="tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap">
                                            <div class="tw-flex tw-gap-2">
                                                <a
                                                    target="_blank"
                                                    :href="'/sections/' + item.id"
                                                    class="tw-text-green-500 hover:tw-text-green-600 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="View"
                                                >
                                                    View
                                                </a>
                                                <Link
                                                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                                                    :href="'/sections/' + item.id + '/edit'"
                                                    class="tw-text-blue-600 hover:tw-text-blue-700 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="Edit"
                                                >
                                                    Edit
                                                </Link>
                                                <a
                                                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                                                    href="#"
                                                    class="tw-text-red-500 hover:tw-text-red-600 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="Delete"
                                                    @click="confirmDelete(item.id)"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        v-else
                                    >
                                        <td colspan="4" class="tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-sm tw-font-medium tw-text-gray-900 tw-text-center">
                                            No records
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure v-slot="{ open }">
                    <DisclosureButton
                        :class="[open ? 'tw-rounded-b-none tw-border tw-border-green-200' : 'tw-mb-3', 'tw-flex tw-w-full tw-justify-between tw-rounded-lg tw-bg-green-100 tw-px-4 tw-py-2 tw-text-left tw-text-sm tw-font-medium tw-text-green-900 hover:tw-bg-green-200 focus:tw-outline-none focus-visible:tw-ring focus-visible:tw-ring-green-500 focus-visible:tw-ring-opacity-75']"
                    >
                        <span><h4 class="tw-font-black tw-leading-6 tw-text-green-700">Fourth Year ({{ props.model.fourth_year_sections.length }})</h4></span>
                        <ChevronUpIcon
                            :class="open ? 'tw-rotate-180 tw-transform' : ''"
                            class="tw-h-5 tw-w-5 tw-text-green-500"
                        />
                    </DisclosureButton>
                    <DisclosurePanel :class="[open ? 'tw-mb-3' : '', 'tw-px-4 tw-pt-4 tw-pb-2 tw-text-sm tw-border tw-rounded-b-lg tw-border-green-200']">
                        <div class="tw-overflow-x-auto tw-mb-4">
                            <table class="tw-min-w-full">
                                <thead class="tw-text-sm tw-font-medium tw-text-green-700 tw-border-b">
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
                                        v-if="props.model.fourth_year_sections.length"
                                        v-for="item in props.model.fourth_year_sections"
                                        :key="item.id"
                                        class="tw-bg-white tw-border-b tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-gray-100"
                                    >
                                        <td class="tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-sm tw-font-medium tw-text-gray-900">
                                            {{ item.id }}
                                        </td>
                                        <td class="tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap">
                                            {{ item.name }}
                                        </td>
                                        <td class="tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap">
                                            {{ item.year }}
                                        </td>
                                        <td class="tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap">
                                            <div class="tw-flex tw-gap-2">
                                                <a
                                                    target="_blank"
                                                    :href="'/sections/' + item.id"
                                                    class="tw-text-green-500 hover:tw-text-green-600 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="View"
                                                >
                                                    View
                                                </a>
                                                <Link
                                                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                                                    :href="'/sections/' + item.id + '/edit'"
                                                    class="tw-text-blue-600 hover:tw-text-blue-700 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="Edit"
                                                >
                                                    Edit
                                                </Link>
                                                <a
                                                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                                                    href="#"
                                                    class="tw-text-red-500 hover:tw-text-red-600 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="Delete"
                                                    @click="confirmDelete(item.id)"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        v-else
                                    >
                                        <td colspan="4" class="tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-sm tw-font-medium tw-text-gray-900 tw-text-center">
                                            No records
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </DisclosurePanel>
                </Disclosure>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
    import { Head, useForm, Link } from '@inertiajs/inertia-vue3'
    import LinkComponent from '@/Components/LinkComponent.vue';
    import { ref, computed } from 'vue'
    import Swal from 'sweetalert2'
    import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
    import { ChevronUpIcon, PlusIcon } from '@heroicons/vue/20/solid'

    const props = defineProps({
        model: Object,
    })

    const url = 'academic-years'

    const tableHeader = ref([
        {
            title: 'ID',
            class: 'tw-py-2 tw-px-6 tw-text-left',
        },
        {
            title: 'Name',
            class: 'tw-py-2 tw-px-6 tw-text-left',
        },
        {
            title: 'Year',
            class: 'tw-py-2 tw-px-6 tw-text-left',
        },
        {
            title: 'Actions',
            class: 'tw-py-2 tw-px-6 tw-text-left',
        },
    ])

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
            route('subjects.destroy', id),
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
