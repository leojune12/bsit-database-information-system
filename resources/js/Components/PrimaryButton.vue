<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>

<template>
    <button
        :type="type"
        class="tw-inline-flex tw-items-center tw-px-4 tw-py-2 tw-bg-blue-700 tw-border tw-border-transparent tw-rounded-md tw-font-semibold tw-text-xs tw-text-white tw-uppercase tw-tracking-widest hover:tw-bg-blue-800 focus:tw-bg-blue-700 active:tw-bg-blue-900 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-ring-offset-2 tw-transition tw-ease-in-out tw-duration-150"
    >
        <slot />
    </button>
</template>
