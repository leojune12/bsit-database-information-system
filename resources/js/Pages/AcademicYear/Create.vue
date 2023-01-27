<template>
    <Head title="Alumni" />

    <AuthenticatedLayout>
        <div class="tw-bg-white tw-shadow sm:tw-rounded-lg tw-mb-5 tw-p-4 sm:tw-p-8">
            <div class="">
                <form @submit.prevent="submitForm()" class="tw-mt-6 tw-space-y-6">

                    <h3 class="tw-text-xl tw-font-bold tw-text-gray-600">
                        Create Academic Year
                    </h3>

                    <!-- <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                        <div>
                            <InputLabel for="curriculum_id" value="Curriculum" required />

                            <Listbox as="div" v-model="form.curriculums" multiple>
                                <div class="tw-relative tw-mt-1">
                                    <ListboxButton class="tw-relative tw-w-full tw-cursor-default tw-rounded-md tw-border tw-border-gray-300 tw-bg-white tw-pl-3 tw-pr-10 tw-text-left tw-shadow-sm focus:tw-border-pink-800 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-pink-800 sm:tw-text-sm tw-h-11">
                                        <span class="tw-flex tw-items-center">
                                            {{ form.curriculums.map((person) => person.name).join(', ') }}
                                        </span>
                                        <span class="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-right-0 tw-ml-3 tw-flex tw-items-center tw-pr-2">
                                            <ChevronUpDownIcon class="tw-h-5 tw-w-5 tw-text-gray-400" aria-hidden="true" />
                                        </span>
                                    </ListboxButton>
                                    <transition leave-active-class="tw-transition tw-ease-in tw-duration-100" leave-from-class="tw-opacity-100" leave-to-class="tw-opacity-0">
                                        <ListboxOptions class="tw-absolute tw-z-10 tw-mt-1 tw-max-h-56 tw-w-full tw-overflow-auto tw-rounded-md tw-bg-white tw-py-1 tw-text-base tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none sm:tw-text-sm">
                                            <ListboxOption as="template" v-for="person in curriculum_array" :key="person.id" :value="person" v-slot="{ active, selected }">
                                                <li :class="[active ? 'tw-text-white tw-bg-blue-600' : 'tw-text-gray-900', 'tw-relative tw-cursor-default tw-select-none tw-py-2 tw-pl-3 tw-pr-9']">
                                                    <div class="tw-flex tw-items-center">
                                                        <span :class="[selected ? 'tw-font-semibold' : 'tw-font-normal', 'tw-block tw-truncate']">{{ person.name }}</span>
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
                            <InputError class="mt-2" :message="form.errors.curriculum_id" />
                        </div>
                    </div> -->

                    <div class="tw-space-y-6">
                        <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                            <div>
                                <InputLabel for="name" value="Name" required />

                                <TextInput
                                    id="name"
                                    type="text"
                                    class="tw-mt-1 tw-block tw-w-full"
                                    v-model="form.name"
                                    required
                                    autofocus
                                    autocomplete="name"
                                />

                                <InputError class="tw-mt-2" :message="form.errors.name" />
                            </div>
                        </div>
                    </div>
                    <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-4">
                        <LinkComponent
                            :href="'/' + url"
                            type="secondary"
                        >
                            Back
                        </LinkComponent>
                        <PrimaryButton :disabled="form.processing">
                            Save
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
    import { Head, useForm } from '@inertiajs/inertia-vue3'
    import { Inertia } from '@inertiajs/inertia'
    import InputError from '@/Components/InputError.vue';
    import InputLabel from '@/Components/InputLabel.vue';
    import TextInput from '@/Components/TextInput.vue';
    import PrimaryButton from '@/Components/PrimaryButton.vue';
    import LinkComponent from '@/Components/LinkComponent.vue';
    import Swal from 'sweetalert2'
    import { ref, onMounted, watch } from 'vue'
    import {
        Listbox,
        ListboxButton,
        ListboxOptions,
        ListboxOption,
    } from '@headlessui/vue'
    import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

    const props = defineProps({
        curriculums: Array,
    })

    const curriculum_array = ref([])

    const url = 'academic-years'

    const form = useForm({
        curriculums: [],
        name: null,
    });

    onMounted(() => {
        props.curriculums.forEach((item) => {
                curriculum_array.value.push({
                    id: item.id,
                    name: item.name
                })
            });
    })

    function submitForm() {
        form.post(route(url + '.store'), {
            preserveScroll: true,
            onSuccess: () => {
                Swal.fire({
                    title: 'Created successfully',
                    // text: "Created successfully.",
                    // icon: 'success',
                    confirmButtonColor: '#16a34a',
                }).then(() => {
                    Inertia.get('/' + url)
                })
            },
        })
    }
</script>
