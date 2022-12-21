<template>
    <header>
        <nav class="tw-bg-white tw-border-gray-200 tw-px-4 lg:tw-px-6 tw-py-2.5 dark:tw-bg-gray-800">
            <div class="tw-flex tw-flex-wrap tw-justify-between tw-items-center tw-mx-auto tw-max-w-screen-xl">
                <a href="https://flowbite.com" class="tw-flex tw-items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="tw-mr-3 tw-h-6 sm:tw-h-9" alt="Flowbite Logo" />
                    <span class="tw-self-center tw-text-xl tw-font-semibold tw-whitespace-nowrap dark:tw-text-white">Flowbite</span>
                </a>
                <div class="tw-flex tw-items-center lg:tw-order-2">
                    <a href="#" class="tw-text-gray-800 dark:tw-text-white hover:tw-bg-gray-50 focus:tw-ring-4 focus:tw-ring-gray-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-4 lg:tw-px-5 tw-py-2 lg:tw-py-2.5 tw-mr-2 dark:hover:tw-bg-gray-700 focus:tw-outline-none dark:focus:tw-ring-gray-800">Log in</a>
                    <a href="#" class="tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-4 lg:tw-px-5 tw-py-2 lg:tw-py-2.5 tw-mr-2 dark:tw-bg-blue-600 dark:hover:tw-bg-blue-700 focus:tw-outline-none dark:focus:tw-ring-blue-800">Get started</a>
                    <button data-collapse-toggle="mobile-menu-2" type="button" class="tw-inline-flex tw-items-center tw-p-2 tw-ml-1 tw-text-sm tw-text-gray-500 tw-rounded-lg lg:tw-hidden hover:tw-bg-gray-100 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-gray-200 dark:tw-text-gray-400 dark:hover:tw-bg-gray-700 dark:focus:tw-ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span class="tw-sr-only">Open main menu</span>
                        <svg class="tw-w-6 tw-h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg class="tw-hidden tw-w-6 tw-h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="tw-hidden tw-justify-between tw-items-center tw-w-full lg:tw-flex lg:tw-w-auto lg:tw-order-1" id="mobile-menu-2">
                    <ul class="tw-flex tw-flex-col tw-mt-4 tw-font-medium lg:tw-flex-row lg:tw-space-x-8 lg:tw-mt-0">
                        <li
                            v-for="item in navigation"
                            :key="item.namespace"
                        >
                            <a href="#" class="tw-block tw-py-2 tw-pr-4 tw-pl-3 tw-text-gray-700 tw-border-b tw-border-gray-100 hover:tw-bg-gray-50 lg:hover:tw-bg-transparent lg:tw-border-0 lg:hover:tw-text-blue-700 lg:tw-p-0 dark:tw-text-gray-400 lg:dark:hover:tw-text-white dark:hover:tw-bg-gray-700 dark:hover:tw-text-white lg:dark:hover:tw-bg-transparent dark:tw-border-gray-700">
                                {{ item.name }}
                            </a>
                        </li>
                        <!-- <li>
                            <a href="#" class="tw-block tw-py-2 tw-pr-4 tw-pl-3 tw-text-white tw-rounded tw-bg-blue-700 lg:tw-bg-transparent lg:tw-text-blue-700 lg:tw-p-0 dark:tw-text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" class="tw-block tw-py-2 tw-pr-4 tw-pl-3 tw-text-gray-700 tw-border-b tw-border-gray-100 hover:tw-bg-gray-50 lg:hover:tw-bg-transparent lg:tw-border-0 lg:hover:tw-text-blue-700 lg:tw-p-0 dark:tw-text-gray-400 lg:dark:hover:tw-text-white dark:hover:tw-bg-gray-700 dark:hover:tw-text-white lg:dark:hover:tw-bg-transparent dark:tw-border-gray-700">Company</a>
                        </li>
                        <li>
                            <a href="#" class="tw-block tw-py-2 tw-pr-4 tw-pl-3 tw-text-gray-700 tw-border-b tw-border-gray-100 hover:tw-bg-gray-50 lg:hover:tw-bg-transparent lg:tw-border-0 lg:hover:tw-text-blue-700 lg:tw-p-0 dark:tw-text-gray-400 lg:dark:hover:tw-text-white dark:hover:tw-bg-gray-700 dark:hover:tw-text-white lg:dark:hover:tw-bg-transparent dark:tw-border-gray-700">Marketplace</a>
                        </li>
                        <li>
                            <a href="#" class="tw-block tw-py-2 tw-pr-4 tw-pl-3 tw-text-gray-700 tw-border-b tw-border-gray-100 hover:tw-bg-gray-50 lg:hover:tw-bg-transparent lg:tw-border-0 lg:hover:tw-text-blue-700 lg:tw-p-0 dark:tw-text-gray-400 lg:dark:hover:tw-text-white dark:hover:tw-bg-gray-700 dark:hover:tw-text-white lg:dark:hover:tw-bg-transparent dark:tw-border-gray-700">Features</a>
                        </li>
                        <li>
                            <a href="#" class="tw-block tw-py-2 tw-pr-4 tw-pl-3 tw-text-gray-700 tw-border-b tw-border-gray-100 hover:tw-bg-gray-50 lg:hover:tw-bg-transparent lg:tw-border-0 lg:hover:tw-text-blue-700 lg:tw-p-0 dark:tw-text-gray-400 lg:dark:hover:tw-text-white dark:hover:tw-bg-gray-700 dark:hover:tw-text-white lg:dark:hover:tw-bg-transparent dark:tw-border-gray-700">Team</a>
                        </li>
                        <li>
                            <a href="#" class="tw-block tw-py-2 tw-pr-4 tw-pl-3 tw-text-gray-700 tw-border-b tw-border-gray-100 hover:tw-bg-gray-50 lg:hover:tw-bg-transparent lg:tw-border-0 lg:hover:tw-text-blue-700 lg:tw-p-0 dark:tw-text-gray-400 lg:dark:hover:tw-text-white dark:hover:tw-bg-gray-700 dark:hover:tw-text-white lg:dark:hover:tw-bg-transparent dark:tw-border-gray-700">Contact</a>
                        </li> -->
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
    import { ref } from 'vue'
    import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
    import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

    const navigation = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contact', href: '#contact' },
        { name: 'Cooments', href: '#comment' },
    ]

    const mobileMenuOpen = ref(false)
</script>
