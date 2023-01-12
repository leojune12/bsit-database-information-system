<template>
    <Head title="Users" />

    <AuthenticatedLayout>
        <div class="tw-bg-white tw-shadow-lg sm:tw-rounded-lg tw-mb-5 tw-p-4 sm:tw-p-8">
            <div class="md:tw-grid md:tw-grid-cols-2">
                <header>
                    <h2 class="tw-text-lg tw-font-medium tw-text-gray-900">User Information</h2>

                    <p class="tw-mt-1 tw-text-sm tw-text-gray-600">
                        Update user's profile information and email address.
                    </p>
                </header>
            </div>
            <form @submit.prevent="submitForm()" class="tw-mt-6 tw-space-y-6 md:tw-col-span-1">

                <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                    <div>
                        <InputLabel for="id_number" value="ID Number" />

                        <TextInput
                            id="id_number"
                            type="text"
                            class="tw-mt-1 tw-block tw-w-full"
                            v-model="form.id_number"
                            required
                            autofocus
                            autocomplete="id_number"
                        />

                        <InputError class="tw-mt-2" :message="form.errors.id_number" />
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

    const props = defineProps({
        model: Object,
        roles: Array,
    });

    const url = 'id-numbers'

    const form = useForm({
        id_number: props.model.id_number,
    });

    function submitForm() {
        form.patch(route(url + '.update', props.model.id), {
            preserveScroll: true,
            onSuccess: () => {
                Swal.fire({
                    title: 'Success',
                    text: "Updated successfully.",
                    icon: 'success',
                    confirmButtonColor: '#16a34a',
                }).then(() => {
                    Inertia.get('/' + url)
                })
            },
        })
    }
</script>
