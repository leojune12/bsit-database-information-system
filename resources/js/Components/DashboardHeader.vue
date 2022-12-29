<template>
    <header>
        <nav class="tw-bg-white tw-border-gray-200 tw-px-4 lg:tw-px-6 tw-py-2.5 dark:tw-bg-gray-800">
            <div class="tw-flex tw-flex-wrap tw-justify-between tw-items-center">
                <div class="tw-flex tw-justify-start tw-items-center">
                    <!-- <button id="toggleSidebar" aria-expanded="true" aria-controls="sidebar" class="tw-hidden tw-p-2 tw-mr-3 tw-text-gray-600 tw-rounded tw-cursor-pointer lg:tw-inline hover:tw-text-gray-900 hover:tw-bg-gray-100 dark:tw-text-gray-400 dark:hover:tw-text-white dark:hover:tw-bg-gray-700">
                        <svg class="tw-w-6 tw-h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <button aria-expanded="true" aria-controls="sidebar" class="tw-p-2 tw-mr-2 tw-text-gray-600 tw-rounded-lg tw-cursor-pointer lg:tw-hidden hover:tw-text-gray-900 hover:tw-bg-gray-100 focus:tw-bg-gray-100 dark:focus:tw-bg-gray-700 focus:tw-ring-2 focus:tw-ring-gray-100 dark:focus:tw-ring-gray-700 dark:tw-text-gray-400 dark:hover:tw-bg-gray-700 dark:hover:tw-text-white">
                        <svg aria-hidden="true" class="tw-w-6 tw-h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg aria-hidden="true" class="tw-hidden tw-w-6 tw-h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="tw-sr-only">Toggle sidebar</span>
                    </button>
                    <a href="https://flowbite.com" class="tw-flex tw-mr-4">
                        <img src="https://flowbite.s3.amazonaws.com/logo.svg" class="mr-3 h-8" alt="FlowBite Logo" />
                        <span class="tw-self-center tw-text-2xl tw-font-semibold tw-whitespace-nowrap dark:tw-text-white">Flowbite</span>
                    </a> -->
                    <!-- <form action="#" method="GET" class="tw-hidden lg:tw-block lg:tw-pl-2">
                        <label for="topbar-search" class="tw-sr-only">Search</label>
                        <div class="tw-relative tw-mt-1 lg:tw-w-96">
                        <div class="tw-flex tw-absolute tw-inset-y-0 tw-left-0 tw-items-center tw-pl-3 tw-pointer-events-none">
                            <svg class="tw-w-5 tw-h-5 tw-text-gray-500 dark:tw-text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" name="email" id="topbar-search" class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-pl-10 tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500" placeholder="Search">
                        </div>
                    </form> -->
                </div>
                <div class="tw-flex tw-items-center lg:tw-order-2">
                    <!-- Profile dropdown -->
                    <Menu as="div" class="tw-relative">
                        <div>
                            <MenuButton class="tw-flex tw-items-center tw-gap-x-2 tw-rounded-full tw-text-sm hover:tw-text-gray-600 tw-text-gray-800 focus:tw-outline-none">
                                <span class="tw-sr-only">Open user menu</span>
                                <!-- {{ $page.props.auth.user.name }} -->
                                <img class="tw-h-8 tw-w-8 tw-rounded-full hover:tw-brightness-95" :src="'https://ui-avatars.com/api/?name=' + $page.props.auth.user.first_name + ' ' + $page.props.auth.user.first_name + '&background=random'" alt="" />
                            </MenuButton>
                        </div>
                        <transition enter-active-class="tw-transition tw-ease-out tw-duration-100" enter-from-class="tw-transform tw-opacity-0 tw-scale-95" enter-to-class="tw-transform tw-opacity-100 tw-scale-100" leave-active-class="tw-transition tw-ease-in tw-duration-75" leave-from-class="tw-transform tw-opacity-100 tw-scale-100" leave-to-class="tw-transform tw-opacity-0 tw-scale-95">
                            <MenuItems class="tw-absolute tw-right-0 tw-z-10 tw-mt-2 tw-w-48 tw-origin-top-right tw-rounded-md tw-bg-white tw-py-1 tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none">
                                <MenuItem v-slot="{ active }">
                                    <Link :href="route('profile.edit')" class="tw-block tw-py-2 tw-px-4 tw-text-sm hover:tw-bg-gray-100 dark:tw-hover:bg-gray-600 dark:tw-text-gray-400 dark:hover:tw-text-white">
                                        Account settings
                                    </Link>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                    <Link :href="route('logout')" method="post" as="button" class="tw-block tw-py-2 tw-px-4 tw-text-sm hover:tw-bg-gray-100 dark:tw-hover:bg-gray-600 dark:tw-text-gray-400 dark:hover:tw-text-white">
                                        Log Out
                                    </Link>
                                </MenuItem>
                            </MenuItems>
                        </transition>
                    </Menu>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
    import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
    import { Link } from '@inertiajs/inertia-vue3';
</script>
