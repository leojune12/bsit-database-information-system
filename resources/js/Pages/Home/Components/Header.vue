<template>
    <header class="tw-sticky tw-top-0 tw-border-b tw-shadow">
        <nav class="tw-bg-white tw-border-gray-200 tw-px-4 lg:tw-px-6 tw-py-2.5 dark:tw-bg-gray-800">
            <div class="tw-flex tw-flex-wrap tw-justify-between tw-items-center tw-mx-auto tw-max-w-screen-xl">
                <Link href="/" class="tw-flex tw-items-center">
                    <img src="/capsu_logo.png" class="tw-mr-3 tw-h-6 sm:tw-h-9" alt="Flowbite Logo" />
                    <span class="tw-self-center tw-text-xl tw-font-semibold tw-whitespace-nowrap dark:tw-text-white">Capsu Pilar DRRM</span>
                </Link>
                <div class="tw-flex tw-items-center lg:tw-order-2">
                    <Link
                        v-if="$page.props.auth.user"
                        href="/logout"
                        method="post"
                        as="button"
                        class="tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-4 lg:tw-px-5 tw-py-2 lg:tw-py-2.5 tw-mr-2 dark:tw-bg-blue-600 dark:hover:tw-bg-blue-700 focus:tw-outline-none dark:focus:tw-ring-blue-800"
                    >
                        Logout
                    </Link>
                    <Link
                        v-else
                        href="/login"
                        class="tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-4 lg:tw-px-5 tw-py-2 lg:tw-py-2.5 tw-mr-2 dark:tw-bg-blue-600 dark:hover:tw-bg-blue-700 focus:tw-outline-none dark:focus:tw-ring-blue-800"
                    >
                        Login
                    </Link>
                    <button
                        @click="mobileMenuOpen = !mobileMenuOpen"
                        data-collapse-toggle="mobile-menu-2"
                        type="button"
                        class="tw-inline-flex tw-items-center tw-p-2 tw-ml-1 tw-text-sm tw-text-gray-500 tw-rounded-lg lg:tw-hidden hover:tw-bg-gray-100 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-gray-200 dark:tw-text-gray-400 dark:hover:tw-bg-gray-700 dark:focus:tw-ring-gray-600"
                        aria-controls="mobile-menu-2"
                        aria-expanded="false"
                    >
                        <span class="tw-sr-only">Open main menu</span>
                        <Bars3Icon
                            v-if="!mobileMenuOpen"
                            class="tw-h-6 tw-w-6"
                            aria-hidden="true"
                        />
                        <XMarkIcon
                            v-else
                            class="tw-h-6 tw-w-6"
                            aria-hidden="true"
                        />
                    </button>
                </div>
                <div
                    id="mobile-menu-2"
                    class="tw-hidden tw-justify-between tw-items-center tw-w-full lg:tw-flex lg:tw-w-auto lg:tw-order-1"
                >
                    <ul class="tw-flex tw-flex-col tw-mt-4 tw-font-medium lg:tw-flex-row lg:tw-space-x-8 lg:tw-mt-0">
                        <li
                            v-for="item in navigation"
                            :key="item.namespace"
                        >
                            <a :href="item.href" class="tw-block tw-py-2 tw-pr-4 tw-pl-3 tw-text-gray-700 tw-border-b tw-border-gray-100 hover:tw-bg-gray-50 lg:hover:tw-bg-transparent lg:tw-border-0 lg:hover:tw-text-blue-700 lg:tw-p-0 dark:tw-text-gray-400 lg:dark:hover:tw-text-white dark:hover:tw-bg-gray-700 dark:hover:tw-text-white lg:dark:hover:tw-bg-transparent dark:tw-border-gray-700">
                                {{ item.name }}
                            </a>
                        </li>
                    </ul>
                </div>
                <div
                    v-if="mobileMenuOpen"
                    id="mobile-menu-2"
                    class="lg:tw-hidden tw-justify-between tw-items-center tw-w-full tw-flex lg:tw-w-auto lg:tw-order-1"
                >
                    <ul class="tw-flex tw-flex-col tw-mt-4 tw-font-medium lg:tw-flex-row lg:tw-space-x-8 lg:tw-mt-0">
                        <li
                            v-for="item in navigation"
                            :key="item.namespace"
                        >
                            <a :href="item.href" class="tw-block tw-py-2 tw-pr-4 tw-pl-3 tw-text-gray-700 tw-border-b tw-border-gray-100 hover:tw-bg-gray-50 lg:hover:tw-bg-transparent lg:tw-border-0 lg:hover:tw-text-blue-700 lg:tw-p-0 dark:tw-text-gray-400 lg:dark:hover:tw-text-white dark:hover:tw-bg-gray-700 dark:hover:tw-text-white lg:dark:hover:tw-bg-transparent dark:tw-border-gray-700">
                                {{ item.name }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
    import { ref } from 'vue'
    import { Link } from '@inertiajs/inertia-vue3'
    import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid'

    const navigation = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contact', href: '#contact' },
        { name: 'Comments', href: '#comments' },
    ]

    const mobileMenuOpen = ref(false)
</script>
