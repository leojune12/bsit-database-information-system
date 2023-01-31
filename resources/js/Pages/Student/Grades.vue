<template>
    <Head title="Curriculums" />

    <AuthenticatedLayout>
        <div
            v-if="usePage().props.value.auth.user.roles[0].name == 'Admin' || usePage().props.value.auth.user.roles[0].name == 'Faculty'"
            class="tw-bg-white tw-shadow-lg tw-border sm:tw-rounded-lg tw-mb-5"
        >
            <div>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <h3 class="tw-text-lg tw-font-black tw-leading-6 tw-text-gray-900">Student Information</h3>
                </dl>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
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
                        {{ props.model.section[0] ? props.model.section[0].year : '' }}
                    </dd>
                </dl>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Section</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.section[0] ? props.model.section[0].name : '' }}
                    </dd>
                </dl>
            </div>
        </div>
        <div class="tw-bg-white tw-shadow-lg tw-border sm:tw-rounded-lg tw-mb-5 tw-px-4 tw-py-5 sm:tw-px-6">
            <div class="tw-flex tw-items-center tw-justify-between tw-mb-3">
                <h3 class="tw-text-lg tw-font-black tw-leading-6 tw-text-gray-900">Grades</h3>
            </div>
            <div>
                <Disclosure v-slot="{ open }">
                    <DisclosureButton
                        :class="[open ? 'tw-rounded-b-none tw-border tw-border-green-200' : 'tw-mb-3', 'tw-flex tw-w-full tw-justify-between tw-rounded-lg tw-bg-green-100 tw-px-4 tw-py-2 tw-text-left tw-text-sm tw-font-medium tw-text-green-900 hover:tw-bg-green-200 focus:tw-outline-none focus-visible:tw-ring focus-visible:tw-ring-green-500 focus-visible:tw-ring-opacity-75']"
                    >
                        <span><h4 class="tw-font-black tw-leading-6 tw-text-green-700">First Year First Semester ({{ props.model.first_year_first_semester_subjects.length }})</h4></span>
                        <ChevronUpIcon
                            :class="!open ? 'tw-rotate-180 tw-transform' : ''"
                            class="tw-h-5 tw-w-5 tw-text-green-500"
                        />
                    </DisclosureButton>
                    <DisclosurePanel :class="[open ? 'tw-mb-3' : '', 'tw-px-4 tw-pt-4 tw-pb-2 tw-text-sm tw-text-gray-500 tw-border tw-rounded-b-lg tw-border-green-200']">
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
                                        v-if="props.model.first_year_first_semester_subjects.length"
                                        v-for="item in props.model.first_year_first_semester_subjects"
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
                                                <!-- <a
                                                    :href="'/subjects/' + item.id"
                                                    class="tw-text-green-500 hover:tw-text-green-600 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="View"
                                                >
                                                    View
                                                </a> -->
                                                <button
                                                    type="button"
                                                    v-if="$page.props.auth.user.roles[0].name == 'Admin' || $page.props.auth.user.roles[0].name == 'Faculty'"
                                                    class="tw-text-blue-600 hover:tw-text-blue-700 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="Edit"
                                                    @click="openModal(item.id, item.course_code, item.pivot.grade)"
                                                >
                                                    Edit
                                                </button>
                                                <!-- <a
                                                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                                                    href="#"
                                                    class="tw-text-red-500 hover:tw-text-red-600 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="Delete"
                                                    @click="confirmDelete(item.id)"
                                                >
                                                    Delete
                                            </a> -->
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
                        <span><h4 class="tw-font-black tw-leading-6 tw-text-green-700">First Year Second Semester ({{ props.model.first_year_second_semester_subjects.length }})</h4></span>
                        <ChevronUpIcon
                            :class="!open ? 'tw-rotate-180 tw-transform' : ''"
                            class="tw-h-5 tw-w-5 tw-text-green-500"
                        />
                    </DisclosureButton>
                    <DisclosurePanel :class="[open ? 'tw-mb-3' : '', 'tw-px-4 tw-pt-4 tw-pb-2 tw-text-sm tw-text-gray-500 tw-border tw-rounded-b-lg tw-border-green-200']">
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
                                        v-if="props.model.first_year_second_semester_subjects.length"
                                        v-for="item in props.model.first_year_second_semester_subjects"
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
                                                <!-- <a
                                                    :href="'/subjects/' + item.id"
                                                    class="tw-text-green-500 hover:tw-text-green-600 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="View"
                                                >
                                                    View
                                                </a> -->
                                                <button
                                                    type="button"
                                                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                                                    :href="'/subjects/' + item.id + '/edit'"
                                                    class="tw-text-blue-600 hover:tw-text-blue-700 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="Edit"
                                                    @click="openModal(item.id, item.course_code, item.pivot.grade)"
                                                >
                                                    Edit
                                                </button>
                                                <!-- <a
                                                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                                                    href="#"
                                                    class="tw-text-red-500 hover:tw-text-red-600 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="Delete"
                                                    @click="confirmDelete(item.id)"
                                                >
                                                    Delete
                                            </a> -->
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
                        <span><h4 class="tw-font-black tw-leading-6 tw-text-green-700">Second Year First Semester ({{ props.model.second_year_first_semester_subjects.length }})</h4></span>
                        <ChevronUpIcon
                            :class="!open ? 'tw-rotate-180 tw-transform' : ''"
                            class="tw-h-5 tw-w-5 tw-text-green-500"
                        />
                    </DisclosureButton>
                    <DisclosurePanel :class="[open ? 'tw-mb-3' : '', 'tw-px-4 tw-pt-4 tw-pb-2 tw-text-sm tw-text-gray-500 tw-border tw-rounded-b-lg tw-border-green-200']">
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
                                        v-if="props.model.second_year_first_semester_subjects.length"
                                        v-for="item in props.model.second_year_first_semester_subjects"
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
                                                <!-- <a
                                                    :href="'/subjects/' + item.id"
                                                    class="tw-text-green-500 hover:tw-text-green-600 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="View"
                                                >
                                                    View
                                                </a> -->
                                                <button
                                                    type="button"
                                                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                                                    :href="'/subjects/' + item.id + '/edit'"
                                                    class="tw-text-blue-600 hover:tw-text-blue-700 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="Edit"
                                                    @click="openModal(item.id, item.course_code, item.pivot.grade)"
                                                >
                                                    Edit
                                                </button>
                                                <!-- <a
                                                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                                                    href="#"
                                                    class="tw-text-red-500 hover:tw-text-red-600 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="Delete"
                                                    @click="confirmDelete(item.id)"
                                                >
                                                    Delete
                                            </a> -->
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
                        <span><h4 class="tw-font-black tw-leading-6 tw-text-green-700">Second Year Second Semester ({{ props.model.second_year_second_semester_subjects.length }})</h4></span>
                        <ChevronUpIcon
                            :class="!open ? 'tw-rotate-180 tw-transform' : ''"
                            class="tw-h-5 tw-w-5 tw-text-green-500"
                        />
                    </DisclosureButton>
                    <DisclosurePanel :class="[open ? 'tw-mb-3' : '', 'tw-px-4 tw-pt-4 tw-pb-2 tw-text-sm tw-text-gray-500 tw-border tw-rounded-b-lg tw-border-green-200']">
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
                                        v-if="props.model.second_year_second_semester_subjects.length"
                                        v-for="item in props.model.second_year_second_semester_subjects"
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
                                                <!-- <a
                                                    :href="'/subjects/' + item.id"
                                                    class="tw-text-green-500 hover:tw-text-green-600 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="View"
                                                >
                                                    View
                                                </a> -->
                                                <button
                                                    type="button"
                                                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                                                    :href="'/subjects/' + item.id + '/edit'"
                                                    class="tw-text-blue-600 hover:tw-text-blue-700 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="Edit"
                                                    @click="openModal(item.id, item.course_code, item.pivot.grade)"
                                                >
                                                    Edit
                                                </button>
                                                <!-- <a
                                                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                                                    href="#"
                                                    class="tw-text-red-500 hover:tw-text-red-600 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="Delete"
                                                    @click="confirmDelete(item.id)"
                                                >
                                                    Delete
                                            </a> -->
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
                        <span><h4 class="tw-font-black tw-leading-6 tw-text-green-700">Third Year First Semester ({{ props.model.third_year_first_semester_subjects.length }})</h4></span>
                        <ChevronUpIcon
                            :class="!open ? 'tw-rotate-180 tw-transform' : ''"
                            class="tw-h-5 tw-w-5 tw-text-green-500"
                        />
                    </DisclosureButton>
                    <DisclosurePanel :class="[open ? 'tw-mb-3' : '', 'tw-px-4 tw-pt-4 tw-pb-2 tw-text-sm tw-text-gray-500 tw-border tw-rounded-b-lg tw-border-green-200']">
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
                                        v-if="props.model.third_year_first_semester_subjects.length"
                                        v-for="item in props.model.third_year_first_semester_subjects"
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
                                                <!-- <a
                                                    :href="'/subjects/' + item.id"
                                                    class="tw-text-green-500 hover:tw-text-green-600 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="View"
                                                >
                                                    View
                                                </a> -->
                                                <button
                                                    type="button"
                                                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                                                    :href="'/subjects/' + item.id + '/edit'"
                                                    class="tw-text-blue-600 hover:tw-text-blue-700 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="Edit"
                                                    @click="openModal(item.id, item.course_code, item.pivot.grade)"
                                                >
                                                    Edit
                                                </button>
                                                <!-- <a
                                                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                                                    href="#"
                                                    class="tw-text-red-500 hover:tw-text-red-600 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="Delete"
                                                    @click="confirmDelete(item.id)"
                                                >
                                                    Delete
                                            </a> -->
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
                        <span><h4 class="tw-font-black tw-leading-6 tw-text-green-700">Third Year Second Semester ({{ props.model.third_year_second_semester_subjects.length }})</h4></span>
                        <ChevronUpIcon
                            :class="!open ? 'tw-rotate-180 tw-transform' : ''"
                            class="tw-h-5 tw-w-5 tw-text-green-500"
                        />
                    </DisclosureButton>
                    <DisclosurePanel :class="[open ? 'tw-mb-3' : '', 'tw-px-4 tw-pt-4 tw-pb-2 tw-text-sm tw-text-gray-500 tw-border tw-rounded-b-lg tw-border-green-200']">
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
                                        v-if="props.model.third_year_second_semester_subjects.length"
                                        v-for="item in props.model.third_year_second_semester_subjects"
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
                                                <!-- <a
                                                    :href="'/subjects/' + item.id"
                                                    class="tw-text-green-500 hover:tw-text-green-600 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="View"
                                                >
                                                    View
                                                </a> -->
                                                <button
                                                    type="button"
                                                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                                                    :href="'/subjects/' + item.id + '/edit'"
                                                    class="tw-text-blue-600 hover:tw-text-blue-700 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="Edit"
                                                    @click="openModal(item.id, item.course_code, item.pivot.grade)"
                                                >
                                                    Edit
                                                </button>
                                                <!-- <a
                                                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                                                    href="#"
                                                    class="tw-text-red-500 hover:tw-text-red-600 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="Delete"
                                                    @click="confirmDelete(item.id)"
                                                >
                                                    Delete
                                            </a> -->
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
                        <span><h4 class="tw-font-black tw-leading-6 tw-text-green-700">Fourth Year First Semester ({{ props.model.fourth_year_first_semester_subjects.length }})</h4></span>
                        <ChevronUpIcon
                            :class="!open ? 'tw-rotate-180 tw-transform' : ''"
                            class="tw-h-5 tw-w-5 tw-text-green-500"
                        />
                    </DisclosureButton>
                    <DisclosurePanel :class="[open ? 'tw-mb-3' : '', 'tw-px-4 tw-pt-4 tw-pb-2 tw-text-sm tw-text-gray-500 tw-border tw-rounded-b-lg tw-border-green-200']">
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
                                        v-if="props.model.fourth_year_first_semester_subjects.length"
                                        v-for="item in props.model.fourth_year_first_semester_subjects"
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
                                                <!-- <a
                                                    :href="'/subjects/' + item.id"
                                                    class="tw-text-green-500 hover:tw-text-green-600 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="View"
                                                >
                                                    View
                                                </a> -->
                                                <button
                                                    type="button"
                                                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                                                    :href="'/subjects/' + item.id + '/edit'"
                                                    class="tw-text-blue-600 hover:tw-text-blue-700 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="Edit"
                                                    @click="openModal(item.id, item.course_code, item.pivot.grade)"
                                                >
                                                    Edit
                                                </button>
                                                <!-- <a
                                                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                                                    href="#"
                                                    class="tw-text-red-500 hover:tw-text-red-600 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="Delete"
                                                    @click="confirmDelete(item.id)"
                                                >
                                                    Delete
                                            </a> -->
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
                        <span><h4 class="tw-font-black tw-leading-6 tw-text-green-700">Fourth Year Second Semester ({{ props.model.fourth_year_second_semester_subjects.length }})</h4></span>
                        <ChevronUpIcon
                            :class="!open ? 'tw-rotate-180 tw-transform' : ''"
                            class="tw-h-5 tw-w-5 tw-text-green-500"
                        />
                    </DisclosureButton>
                    <DisclosurePanel :class="[open ? 'tw-mb-3' : '', 'tw-px-4 tw-pt-4 tw-pb-2 tw-text-sm tw-text-gray-500 tw-border tw-rounded-b-lg tw-border-green-200']">
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
                                        v-if="props.model.fourth_year_second_semester_subjects.length"
                                        v-for="item in props.model.fourth_year_second_semester_subjects"
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
                                                <!-- <a
                                                    :href="'/subjects/' + item.id"
                                                    class="tw-text-green-500 hover:tw-text-green-600 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="View"
                                                >
                                                    View
                                                </a> -->
                                                <button
                                                    type="button"
                                                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                                                    :href="'/subjects/' + item.id + '/edit'"
                                                    class="tw-text-blue-600 hover:tw-text-blue-700 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="Edit"
                                                    @click="openModal(item.id, item.course_code, item.pivot.grade)"
                                                >
                                                    Edit
                                                </button>
                                                <!-- <a
                                                    v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                                                    href="#"
                                                    class="tw-text-red-500 hover:tw-text-red-600 tw-transition tw-duration-300 tw-ease-in-out"
                                                    title="Delete"
                                                    @click="confirmDelete(item.id)"
                                                >
                                                    Delete
                                            </a> -->
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
    import { Head, useForm, Link, usePage } from '@inertiajs/inertia-vue3'
    import { ref } from 'vue'
    import Swal from 'sweetalert2'
    import {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogPanel,
        DialogTitle,
    } from '@headlessui/vue'
    import { ChevronUpIcon, PlusIcon } from '@heroicons/vue/20/solid'
    import TextInput from '@/Components/TextInput.vue';
    import InputLabel from '@/Components/InputLabel.vue';
    import InputError from '@/Components/InputError.vue';

    const props = defineProps({
        model: Object,
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
            },
        })

        closeModal()
    }
</script>
