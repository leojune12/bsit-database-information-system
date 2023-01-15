<template>
    <aside class="tw-fixed md:tw-block tw-hidden tw-top-0 tw-left-0 tw-w-72 tw-h-full" aria-label="Sidenav">
        <div class="tw-overflow-y-auto tw-py-b tw-h-full tw-bg-gradient-to-b tw-from-pink-900 tw-to-pink-700 tw-border-r tw-border-gray-200 dark:tw-bg-gray-800 dark:tw-border-gray-700">
            <div class="tw-flex tw-justify-center tw-h-16">
                <Link :href="route('dashboard')" class="tw-flex tw-items-center tw-gap-x-3">
                    <img src="/capsu_logo.png" class="tw-h-6 sm:tw-h-12" alt="Flowbite Logo" />
                    <img src="/it_logo.jpeg" class="tw-h-6 sm:tw-h-12" alt="Flowbite Logo" />
                    <!-- <span class="tw-self-center tw-text-xl tw-font-semibold tw-whitespace-nowrap dark:tw-text-white">Capsu Pilar</span> -->
                </Link>
            </div>
            <ul class="tw-pt-5 tw-space-y-2 tw-border-gray-200 dark:tw-border-gray-700 tw-px-3">
                <li
                    v-for="item in navigation"
                    :key="item.name"
                    :class="item.for == null || item.for == $page.props.auth.user.roles[0].name ? '' : 'tw-hidden'"
                >
                    <Link
                        :href="item.href"
                        :class="[$page.url.startsWith(item.href) ? 'tw-bg-white hover:tw-bg-gray-50 tw-text-pink-900' : 'tw-text-white hover:tw-bg-pink-900', 'tw-flex tw-items-center tw-p-2 tw-text-base tw-font-normal tw-text-gray-900 tw-rounded-lg tw-transition tw-duration-75 hover:tw-bg-gray-100 dark:hover:tw-bg-gray-700 dark:tw-text-white tw-group']"
                    >
                        <span class="tw-ml-3">
                            {{ item.name }}
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script setup>
    import { Link } from '@inertiajs/inertia-vue3';

    const navigation = [
        {
            name: 'Dashboard',
            href: '/dashboard',
            for: null
        },
        {
            name: 'Users',
            href: '/users',
            for: 'Admin'
        },
        {
            name: 'Students',
            href: '/students',
            for: 'Admin'
        },
        {
            name: 'Subjects',
            href: '/subjects',
            for: 'Admin'
        },
        {
            name: 'Certificates and Awards',
            href: '/certificates-and-awards',
            for: 'Admin'
        },
        {
            name: 'Alumni',
            href: '/alumni',
            for: 'Admin'
        },
        {
            name: 'ID Numbers',
            href: '/id-numbers',
            for: 'Admin'
        },
        {
            name: 'Accout Settings',
            href: '/profile',
            for: null
        },
    ]
</script>
