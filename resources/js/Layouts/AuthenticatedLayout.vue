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
    import { ref } from 'vue';
    import ApplicationLogo from '@/Components/ApplicationLogo.vue';
    import Dropdown from '@/Components/Dropdown.vue';
    import DropdownLink from '@/Components/DropdownLink.vue';
    import NavLink from '@/Components/NavLink.vue';
    import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
    import { Link } from '@inertiajs/inertia-vue3';
    import DashboardHeader from '@/Components/DashboardHeader.vue';
    import SideNav from '@/Components/SideNav.vue';

    const showingNavigationDropdown = ref(false);
</script>
