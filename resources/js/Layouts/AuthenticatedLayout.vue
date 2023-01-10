<template>
    <div class="tw-min-h-screen">
        <div>
            <SideNav />
        </div>
        <div class="tw-flex">
            <div class="tw-hidden md:tw-block tw-w-72 tw-shrink-0"></div>
            <div class="tw-grow">
                <DashboardHeader />
                <!-- Page Content -->
                <main class="tw-px-4 sm:tw-px-6 lg:tw-px-12 tw-py-10">
                    <slot />
                </main>
            </div>
        </div>
    </div>
</template>

<script setup>
    import DashboardHeader from '@/Components/DashboardHeader.vue';
    import SideNav from '@/Components/SideNav.vue';
</script>
