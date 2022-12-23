<template>
    <section class="tw-bg-white dark:tw-bg-gray-900">
        <div class="tw-grid tw-max-w-screen-xl tw-px-4 tw-py-8 tw-mx-auto lg:tw-gap-8 xl:tw-gap-0 lg:tw-py-28 lg:tw-grid-cols-12">
            <div class="tw-mr-auto tw-place-self-center lg:tw-col-span-7">
                <h1 class="tw-max-w-xl tw-mb-4 tw-text-4xl tw-font-extrabold tw-tracking-tight tw-leading-none md:tw-text-5xl xl:tw-text-6xl dark:tw-text-white">CAPSU Pilar Disaster Risk Reduction and Management System</h1>
                <p class="tw-max-w-2xl tw-mb-6 tw-font-light tw-text-gray-500 lg:tw-mb-8 md:tw-text-lg lg:tw-text-xl dark:tw-text-gray-400">WE SHARE, AS WE CARE.</p>
                <button
                    type="button"
                    class="tw-inline-flex tw-items-center tw-justify-center tw-px-5 tw-py-3 tw-mr-3 tw-text-base tw-font-medium tw-text-center tw-text-white tw-rounded-lg tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-ring-blue-300 dark:focus:tw-ring-blue-900"
                    @click="modalOpen = true"
                >
                    Emergency Hotlines
                    <PhoneIcon class="tw-h-5 tw-w-5 tw-ml-3" aria-hidden="true"  />
                </button>
            </div>
            <div class="tw-hidden lg:tw-mt-0 lg:tw-col-span-5 lg:tw-flex">
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup">
            </div>
        </div>
    </section>
    <TransitionRoot as="div" :show="modalOpen">
        <Dialog as="div" class="tw-relative tw-z-10" @close="modalOpen = false">
            <TransitionChild as="template" enter="tw-ease-out tw-duration-300" enter-from="tw-opacity-0" enter-to="tw-opacity-100" leave="tw-ease-in tw-duration-200" leave-from="tw-opacity-100" leave-to="tw-opacity-0">
                <div class="tw-fixed tw-inset-0 tw-bg-gray-500 tw-bg-opacity-75 tw-transition-opacity" />
            </TransitionChild>

            <div class="tw-fixed tw-inset-0 tw-z-10 tw-overflow-y-auto">
                <div class="tw-flex tw-min-h-full tw-items-end tw-justify-center tw-p-4 tw-text-center sm:tw-items-center sm:tw-p-0">
                <TransitionChild as="template" enter="tw-ease-out tw-duration-300" enter-from="tw-opacity-0 tw-translate-y-4 sm:tw-translate-y-0 sm:tw-scale-95" enter-to="tw-opacity-100 tw-translate-y-0 sm:tw-scale-100" leave="tw-ease-in tw-duration-200" leave-from="tw-opacity-100 tw-translate-y-0 sm:tw-scale-100" leave-to="tw-opacity-0 tw-translate-y-4 sm:tw-translate-y-0 sm:tw-scale-95">
                    <DialogPanel class="tw-relative tw-transform tw-overflow-hidden tw-rounded-lg tw-bg-white tw-text-left tw-shadow-xl tw-transition-all sm:tw-my-8 tw-w-full md:tw-w-96 sm:tw-max-w-lg">
                        <div class="tw-bg-white tw-px-4 tw-pt-5 tw-pb-4 sm:tw-p-6 sm:tw-pb-4">
                            <div class="sm:tw-flex sm:tw-items-start">
                            <div class="tw-mx-auto tw-flex tw-h-12 tw-w-12 tw-flex-shrink-0 tw-items-center tw-justify-center tw-rounded-full tw-bg-blue-100 sm:tw-mx-0 sm:tw-h-10 sm:tw-w-10">
                                <PhoneIcon class="tw-h-6 tw-w-6 tw-text-blue-600" aria-hidden="true" />
                            </div>
                            <div class="tw-mt-3 tw-text-center sm:tw-mt-0 sm:tw-ml-4 sm:tw-text-left">
                                <DialogTitle as="h3" class="tw-text-lg tw-font-bold tw-leading-6 tw-text-gray-900">Emergency Hotlines</DialogTitle>
                                <div class="tw-mt-2">
                                    <ol class="fs-5 tw-text-gray-500">
                                        <li>
                                            <b>BFP</b>: +639783292
                                        </li>
                                        <li>
                                            <b>PNP</b>: +63783292
                                        </li>
                                        <li>
                                            <b>GA</b>: +639783292
                                        </li>
                                        <li>
                                            <b>UCG</b>: +639481729952
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="tw-bg-gray-50 tw-px-4 tw-py-3 tw-flex tw-justify-end sm:tw-px-6">
                            <button type="button" class="tw-inline-flex tw-w-full tw-justify-center tw-rounded-md tw-border tw-border-transparent tw-bg-blue-600 tw-px-4 tw-py-2 tw-text-base tw-font-medium tw-text-white tw-shadow-sm hover:tw-bg-blue-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-ring-offset-2 sm:tw-ml-3 sm:tw-w-auto sm:tw-text-sm" @click="modalOpen = false">OK</button>
                        </div>
                    </DialogPanel>
                </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
    import { ref } from 'vue'
    import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
    import {  PhoneIcon } from '@heroicons/vue/24/solid'

    const modalOpen = ref(false)
</script>
