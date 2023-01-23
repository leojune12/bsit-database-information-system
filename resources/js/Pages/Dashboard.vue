<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <!-- <template #header>
            <h2 class="tw-font-semibold tw-text-xl tw-text-gray-800 tw-leading-tight">Dashboard</h2>
        </template> -->

        <div class="tw-py-12">
            <div class="tw-max-w-7xl tw-mx-auto sm:tw-px-6 lg:tw-px-8">
                <div class="tw-flex tw-flex-wrap tw-gap-10">
                    <div
                        v-if="$page.props.auth.user.roles[0].name == 'Admin'"
                        v-for="item in dashboardData"
                        :key="item.title"
                        class="tw-shadow-lg tw-border tw-p-5 tw-w-full md:tw-w-52 flex tw-rounded-lg"
                    >
                        <div class="tw-flex tw-justify-between tw-items-center">
                            <div>
                                <div class="tw-text-xl tw-font-bold tw-text-gray-700">
                                    {{ item.value }}
                                </div>
                                <div class="tw-text-gray-500 tw-font-medium">
                                    {{ item.title }}
                                </div>
                            </div>
                            <component
                                :is="item.icon"
                                class="tw-flex-shrink-0 tw-w-10 tw-h-10 tw-transition tw-duration-75 tw-text-rose-800"
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                    <div
                        v-else
                        class="tw-bg-white tw-overflow-hidden tw-shadow-sm sm:tw-rounded-lg"
                    >
                        <div class="tw-p-6 tw-text-gray-900">You're logged in!</div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import { Head } from '@inertiajs/inertia-vue3';
    import { ref } from 'vue'
    import { UserIcon, AcademicCapIcon, BookOpenIcon } from '@heroicons/vue/24/solid'

    const props = defineProps({
        users: Array,
        students: Array,
        alumni: Array,
        subjects: Array,
    })

    const dashboardData = ref([
    {
        title: 'Users',
        value: props.users,
        icon: UserIcon,
    },
    {
        title: 'Students',
        value: props.students,
        icon: UserIcon,
    },
    {
        title: 'Alumni',
        value: props.alumni,
        icon: AcademicCapIcon,
    },
    {
        title: 'Subjects',
        value: props.subjects,
        icon: BookOpenIcon,
    },
    ])
</script>
