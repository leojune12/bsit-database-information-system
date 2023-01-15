<template>
    <Head title="Subjects" />

    <AuthenticatedLayout>
        <div class="tw-bg-white tw-shadow-lg sm:tw-rounded-lg tw-mb-5 tw-p-4 sm:tw-p-8">
            <div class="md:tw-grid md:tw-grid-cols-2">
                <header>
                    <h2 class="tw-text-lg tw-font-medium tw-text-gray-900">Create ID Number</h2>
                </header>
            </div>
            <div class="">
                <form @submit.prevent="submitForm()" class="tw-mt-6 tw-space-y-6">

                    <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                        <div>
                            <InputLabel for="course_code" value="Course Code" />

                            <TextInput
                                id="course_code"
                                type="text"
                                class="tw-mt-1 tw-block tw-w-full"
                                v-model="form.course_code"
                                required
                                autofocus
                                autocomplete="course_code"
                            />

                            <InputError class="tw-mt-2" :message="form.errors.course_code" />
                        </div>
                    </div>
                    <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                        <div>
                            <InputLabel for="descriptive_title" value="Descriptive Title" />

                            <TextInput
                                id="descriptive_title"
                                type="text"
                                class="tw-mt-1 tw-block tw-w-full"
                                v-model="form.descriptive_title"
                                required
                                autocomplete="descriptive_title"
                            />

                            <InputError class="tw-mt-2" :message="form.errors.descriptive_title" />
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

    const url = 'subjects'

    const form = useForm({
        course_code: null,
        descriptive_title: null,
    });

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
