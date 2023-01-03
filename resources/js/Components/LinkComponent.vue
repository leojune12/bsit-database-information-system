<script setup>
    import { Link } from '@inertiajs/inertia-vue3'

    defineProps({
        href: {
            type: String,
            default: '/',
        },
        type: {
            type: String,
            default: 'primary',
        },
    });

    const classes = {
        primary: 'tw-flex tw-justify-center tw-items-center tw-px-4 tw-h-10 tw-bg-blue-600 tw-border tw-border-transparent tw-rounded-md tw-font-semibold tw-text-xs tw-text-white tw-uppercase tw-tracking-widest hover:tw-bg-blue-700 focus:tw-bg-blue-700 active:tw-bg-blue-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-ring-offset-2 tw-transition tw-ease-in-out tw-duration-150',
        success: 'tw-flex tw-justify-center tw-items-center tw-px-4 tw-h-10 tw-bg-green-600 tw-border tw-border-transparent tw-rounded-md tw-font-semibold tw-text-xs tw-text-white tw-uppercase tw-tracking-widest hover:tw-bg-green-700 focus:tw-bg-green-700 active:tw-bg-green-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-green-500 focus:tw-ring-offset-2 tw-transition tw-ease-in-out tw-duration-150',
        secondary: 'tw-flex tw-justify-center tw-items-center tw-px-4 tw-h-10 tw-bg-white tw-border tw-border-gray-300 tw-rounded-md tw-font-semibold tw-text-xs tw-text-gray-700 tw-uppercase tw-tracking-widest tw-shadow-sm hover:tw-bg-gray-50-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-ring-offset-2 disabled:tw-opacity-25 tw-transition tw-ease-in-out tw-duration-150',
    }
</script>

<template>
    <Link
        :href="href"
        :type="type"
        :class="classes[type]"
    >
        <slot />
    </Link>
</template>
