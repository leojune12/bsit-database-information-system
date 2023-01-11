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
        class="tw-inline-flex tw-items-center tw-justify-center tw-px-4 tw-h-10 tw-bg-pink-700 tw-border tw-border-transparent tw-rounded-md tw-font-semibold tw-text-xs tw-text-white tw-uppercase tw-tracking-widest hover:tw-bg-pink-800 focus:tw-bg-pink-700 active:tw-bg-pink-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-ring-offset-2 tw-transition tw-ease-in-out tw-duration-150"
    >
        <slot />
    </button>
</template>
