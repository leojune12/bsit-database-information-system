<script setup>
defineProps({
    value: {
        type: String,
    },
    required: {
        default: false,
        type: Boolean,
    }
});
</script>

<template>
    <label class="tw-block tw-font-medium tw-text-sm tw-text-gray-700">
        <span v-if="value">{{ value }} <span v-if="required" class="tw-font-black tw-text-red-500">*</span></span>
        <span v-else><slot /></span>
    </label>
</template>
