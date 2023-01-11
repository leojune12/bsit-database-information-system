<template>
    <Listbox
        as="div"
        v-model="selected"
        @update:modelValue="value => emit('update:modelValue', value)"
    >
        <div class="tw-relative tw-mt-1">
            <ListboxButton class="tw-relative tw-w-full tw-cursor-default tw-rounded-md tw-border tw-border-gray-300 tw-bg-white tw-h-10 tw-pl-3 tw-pr-10 tw-text-left tw-shadow-sm focus:tw-border-indigo-500 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-indigo-500 sm:tw-text-sm">
                <span class="tw-flex tw-items-center">
                    <span class="tw-block tw-truncate">{{ selected.name }}</span>
                </span>
                <span class="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-right-0 tw-ml-3 tw-flex tw-items-center tw-pr-2">
                    <ChevronUpDownIcon class="tw-h-5 tw-w-5 tw-text-gray-400" aria-hidden="true" />
                </span>
            </ListboxButton>

            <transition leave-active-class="tw-transition tw-ease-in tw-duration-100" leave-from-class="tw-opacity-100" leave-to-class="tw-opacity-0">
                <ListboxOptions class="tw-absolute tw-z-10 tw-mt-1 tw-max-h-56 tw-w-full tw-overflow-auto tw-rounded-md tw-bg-white tw-py-1 tw-text-base tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none sm:tw-text-sm">
                    <ListboxOption
                        as="template"
                        v-for="item in listboxItems"
                        :key="item.id"
                        :value="item"
                        v-slot="{ active, selected }"
                    >
                        <li :class="[active ? 'tw-text-white tw-bg-blue-600' : 'tw-text-gray-900', 'tw-relative tw-cursor-default tw-select-none tw-py-2 tw-pl-3 tw-pr-9']">
                            <div class="tw-flex tw-items-center">
                                <span :class="[selected ? 'tw-font-semibold' : 'tw-font-normal', 'tw-block tw-truncate']">{{ item.name }}</span>
                            </div>

                            <span v-if="selected" :class="[active ? 'tw-text-white' : 'tw-text-blue-600', 'tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-4']">
                            <CheckIcon class="tw-h-5 tw-w-5" aria-hidden="true" />
                            </span>
                        </li>
                    </ListboxOption>
                </ListboxOptions>
            </transition>
        </div>
    </Listbox>
</template>

<script setup>
    import { ref, computed, watch } from 'vue'
    import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
    import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

    const props = defineProps({
        items: {
            type: Array,
            required: true,
            default: [],
        },
        modelValue: null,
        resetIndex: {
            type: Boolean,
            default: false,
        },
    })

    const emit = defineEmits(['update:modelValue', 'update:resetIndex'])

    const initalItem = [
        {
            id: null,
            name: 'Select',
        }
    ]

    const listboxItems = computed(() => [...initalItem, ...props.items])

    let selected = ref(listboxItems.value[0])

    if (!!props.modelValue) {

        const selectedIndex = listboxItems.value.findIndex(item => item.id == parseInt(props.modelValue))

        selected.value = selectedIndex < 1 ? listboxItems.value[0] : listboxItems.value[selectedIndex]
    }

    watch(() => _.cloneDeep(props.items), (newValue, oldValue) => {

        if (!!props.modelValue) {

        const selectedIndex = listboxItems.value.findIndex(item => item.id == parseInt(props.modelValue))

        selected.value = selectedIndex < 1 ? listboxItems.value[0] : listboxItems.value[selectedIndex]
        }
    })

    watch(() => _.cloneDeep(props.resetIndex), (newValue, oldValue) => {
        selected.value = listboxItems.value[0]
        emit('update:resetIndex', false)
    })
</script>
