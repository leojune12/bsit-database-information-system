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
                        class="tw-shadow-lg tw-p-5 tw-w-full md:tw-w-80 flex tw-rounded-lg"
                    >
                        <div>
                            <div class="tw-text-xl tw-font-bold tw-text-gray-800">
                                {{ item.value }}
                            </div>
                            <div class="tw-text-gray-400 tw-font-medium">
                                {{ item.title }}
                            </div>
                        </div>
                        <div>

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

    const dashboardData = ref([
    {
        title: 'Users',
        value: 325,
    },
    {
        title: 'Students',
        value: 295,
    },
    {
        title: 'Subjects',
        value: 215,
    },
    {
        title: 'Certificate and Awards',
        value: 32,
    },
    {
        title: 'Alumni',
        value: 845,
    },
    ])
</script>
