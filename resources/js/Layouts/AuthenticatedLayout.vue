<template>
    <div>
        <div class="tw-min-h-screen tw-bg-gray-100">
            <div>
                <SideNav />
            </div>
            <div class="tw-flex">
                <div class="tw-hidden md:tw-block tw-w-72"></div>
                <div class="tw-grow">
                    <DashboardHeader />
                    <!-- Page Content -->
                    <main>
                        <slot />
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import DashboardHeader from '@/Components/DashboardHeader.vue';
    import SideNav from '@/Components/SideNav.vue';
</script>
