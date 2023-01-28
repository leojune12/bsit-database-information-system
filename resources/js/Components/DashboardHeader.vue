<template>
    <header>
        <nav class="tw-bg-white tw-border-gray-200 tw-px-4 lg:tw-px-6 tw-py-2.5 dark:tw-bg-gray-800 md:tw-h-16 tw-h-auto tw-flex tw-flex-wrap tw-justify-between tw-items-center tw-shadow">
            <div class="md:tw-hidden tw-flex tw-justify-start tw-items-center tw-w-full">
                <Disclosure as="div" class="tw-bg-white tw-w-full" v-slot="{ open }">
                    <div class="tw-px-2s sm:tw-px-6 lg:tw-px-8 tw-w-full">
                        <div class="tw-relative tw-flex tw-items-center tw-justify-between tw-w-full">
                            <div class="tw-flex tw-items-center">
                                <!-- Mobile menu button-->
                                <DisclosureButton class="tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-p-2 tw-text-gray-400 hover:tw-bg-gray-700 hover:tw-text-white focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-white">
                                    <span class="tw-sr-only">Open main menu</span>
                                    <Bars3Icon v-if="!open" class="tw-block tw-h-6 tw-w-6" aria-hidden="true" />
                                    <XMarkIcon v-else class="tw-block tw-h-6 tw-w-6" aria-hidden="true" />
                                </DisclosureButton>
                            </div>
                            <Menu as="div" class="tw-relative">
                                <div>
                                    <MenuButton class="tw-flex tw-items-center tw-gap-x-2 tw-rounded-full tw-text-sm hover:tw-text-gray-600 tw-text-gray-800 focus:tw-outline-none">
                                        <span class="tw-sr-only">Open user menu</span>
                                        <!-- {{ $page.props.auth.user.name }} -->
                                        <img class="tw-h-8 tw-w-8 tw-rounded-full hover:tw-brightness-95" :src="'https://ui-avatars.com/api/?name=' + $page.props.auth.user.first_name + ' ' + $page.props.auth.user.last_name + '&background=random'" alt="" />
                                        <img src="" alt="">
                                    </MenuButton>
                                </div>
                                <transition enter-active-class="tw-transition tw-ease-out tw-duration-100" enter-from-class="tw-transform tw-opacity-0 tw-scale-95" enter-to-class="tw-transform tw-opacity-100 tw-scale-100" leave-active-class="tw-transition tw-ease-in tw-duration-75" leave-from-class="tw-transform tw-opacity-100 tw-scale-100" leave-to-class="tw-transform tw-opacity-0 tw-scale-95">
                                    <MenuItems class="tw-absolute tw-right-0 tw-z-10 tw-mt-2 tw-w-48 tw-origin-top-right tw-rounded-md tw-bg-white tw-py-1 tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none">
                                        <MenuItem v-slot="{ active }">
                                            <div class="tw-block tw-px-4 tw-py-2">
                                                <div class="tw-font-bold tw-text-gray-500">
                                                    {{ $page.props.auth.user.first_name }} {{ $page.props.auth.user.last_name }}
                                                </div>
                                                <div class="tw-text-xs tw-font-bold tw-text-gray-400">
                                                    {{ $page.props.auth.user.roles[0].name }}
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem v-slot="{ active }">
                                            <Link :href="route('logout')" method="post" as="button" class="tw-flex tw-py-2 tw-px-4 tw-text-sm hover:tw-bg-gray-100 dark:tw-hover:bg-gray-600 dark:tw-text-gray-400 dark:hover:tw-text-white tw-w-full">
                                                Log Out
                                            </Link>
                                        </MenuItem>
                                    </MenuItems>
                                </transition>
                            </Menu>
                        </div>
                    </div>

                    <DisclosurePanel class="">
                        <div class="tw-space-y-1 tw-px-0 tw-pt-2 tw-pb-3">
                            <Link
                                v-for="item in navigation"
                                :key="item.name" as="a"
                                :href="item.href"
                                :class="[$page.url.startsWith(item.href) ? 'tw-bg-rose-800 tw-text-white' : 'tw-text-gray-700 hover:tw-bg-rose-50', !item.for.length || item.for.includes($page.props.auth.user.roles[0].name) ? '' : 'tw-hidden', 'tw-px-3 tw-py-2 tw-rounded-md tw-text-base tw-font-medium tw-flex tw-items-center']"
                                :aria-current="item.current ? 'page' : undefined"
                            >
                                <!-- <component
                                    :is="item.icon"
                                    class="tw-block tw-h-6 tw-w-6 tw-mr-3"
                                    aria-hidden="true"
                                /> -->
                                {{ item.name }}
                            </Link>
                        </div>
                    </DisclosurePanel>
                </Disclosure>
            </div>
            <div class="tw-hidden md:tw-flex tw-items-center tw-justify-end lg:tw-order-2 tw-w-full">
                <!-- Profile dropdown -->
                <Menu as="div" class="tw-relative">
                    <div>
                        <MenuButton class="tw-flex tw-items-center tw-gap-x-2 tw-rounded-full tw-text-sm hover:tw-text-gray-600 tw-text-gray-800 focus:tw-outline-none">
                            <div class="tw-block tw-px-4 tw-py-2 tw-text-right">
                                <div class="tw-font-bold tw-text-gray-500">
                                    {{ $page.props.auth.user.first_name }} {{ $page.props.auth.user.last_name }}
                                </div>
                                <div class="tw-text-xs tw-font-bold tw-text-gray-400">
                                    {{ $page.props.auth.user.roles[0].name }}
                                </div>
                            </div>
                            <span class="tw-sr-only">Open user menu</span>
                            <!-- {{ $page.props.auth.user.name }} -->
                            <img
                                v-if="usePage().props.value.auth.photo_url != ''"
                                class="tw-h-8 tw-w-8 tw-rounded-full hover:tw-brightness-95" :src="usePage().props.value.auth.photo_url" alt=""
                            />
                            <div
                                v-else
                                class="tw-h-8 tw-w-8 tw-rounded-full hover:tw-brightness-95 tw-bg-blue-300 tw-text-white tw-flex tw-items-center tw-justify-center"
                            >
                                {{ usePage().props.value.auth.user.first_name.charAt(0) + usePage().props.value.auth.user.last_name.charAt(0) }}
                            </div>
                        </MenuButton>
                    </div>
                    <transition enter-active-class="tw-transition tw-ease-out tw-duration-100" enter-from-class="tw-transform tw-opacity-0 tw-scale-95" enter-to-class="tw-transform tw-opacity-100 tw-scale-100" leave-active-class="tw-transition tw-ease-in tw-duration-75" leave-from-class="tw-transform tw-opacity-100 tw-scale-100" leave-to-class="tw-transform tw-opacity-0 tw-scale-95">
                        <MenuItems class="tw-absolute tw-right-0 tw-z-10 tw-mt-2 tw-w-48 tw-origin-top-right tw-rounded-md tw-bg-white tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none tw-divide-y tw-divide-gray-100 tw-py-1">
                            <!-- <MenuItem v-slot="{ active }">
                                <div class="tw-block tw-px-4 tw-py-2">
                                    <div class="tw-font-bold tw-text-gray-500">
                                        {{ $page.props.auth.user.first_name }} {{ $page.props.auth.user.last_name }}
                                    </div>
                                    <div class="tw-text-xs tw-font-bold tw-text-gray-400">
                                        {{ $page.props.auth.user.roles[0].name }}
                                    </div>
                                </div>
                            </MenuItem> -->
                            <MenuItem v-slot="{ active }">
                                <Link :href="route('logout')" method="post" as="button" class="tw-flex tw-py-2 tw-px-4 tw-text-sm hover:tw-bg-gray-100 dark:tw-hover:bg-gray-600 dark:tw-text-gray-400 dark:hover:tw-text-white tw-w-full">
                                    Log Out
                                </Link>
                            </MenuItem>
                        </MenuItems>
                    </transition>
                </Menu>
            </div>
        </nav>
    </header>
</template>

<script setup>
    import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
    import { Link, usePage } from '@inertiajs/inertia-vue3';
    import { Bars3Icon, XMarkIcon, PresentationChartBarIcon, ChatBubbleLeftEllipsisIcon, ChatBubbleLeftRightIcon, ChatBubbleBottomCenterTextIcon, UsersIcon } from '@heroicons/vue/24/outline'

    const navigation = [
        {
            name: 'Dashboard',
            href: '/home',
            for: ['Admin', 'Faculty']
        },
        {
            name: 'Users',
            href: '/users',
            for: ['Admin']
        },
        {
            name: 'Students',
            href: '/students',
            for: ['Admin', 'Faculty']
        },
        {
            name: 'Alumni',
            href: '/alumni',
            for: ['Admin', 'Faculty']
        },
        {
            name: 'Grades',
            href: '/grades',
            for: ['Student', 'Alumnus']
        },
        {
            name: 'Curriculums',
            href: '/curriculums',
            for: ['Admin', 'Faculty']
        },
        {
            name: 'Academic Years',
            href: '/academic-years',
            for: ['Admin', 'Faculty']
        },
        {
            name: 'Subjects',
            href: '/subjects',
            for: ['Admin']
        },
        {
            name: 'Sections',
            href: '/sections',
            for: ['Admin']
        },
        {
            name: 'Profile',
            href: '/user-profile',
            for: []
        },
        {
            name: 'Accout Settings',
            href: '/profile',
            for: []
        },
    ]
</script>
