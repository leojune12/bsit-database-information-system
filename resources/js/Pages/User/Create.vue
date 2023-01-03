<template>
    <Head :title="props.module" />

    <AuthenticatedLayout>
        <div class="tw-bg-white tw-shadow sm:tw-rounded-lg tw-mb-5 tw-p-4 sm:tw-p-8">
            <div class="md:tw-grid md:tw-grid-cols-2">
                <header>
                    <h2 class="tw-text-lg tw-font-medium tw-text-gray-900">User Information</h2>

                    <p class="tw-mt-1 tw-text-sm tw-text-gray-600">
                        Create user's profile information and email address.
                    </p>
                </header>
            </div>
            <div class="">
                <form @submit.prevent="submitForm()" class="tw-mt-6 tw-space-y-6">

                    <div class="md:tw-grid md:tw-grid-cols-3 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                        <div>
                            <InputLabel for="first_name" value="First Name" />

                            <TextInput
                                id="first_name"
                                type="text"
                                class="tw-mt-1 tw-block tw-w-full"
                                v-model="form.first_name"
                                required
                                autofocus
                                autocomplete="first_name"
                            />

                            <InputError class="tw-mt-2" :message="form.errors.first_name" />
                        </div>

                        <div>
                            <InputLabel for="last_name" value="Last Name" />

                            <TextInput
                                id="last_name"
                                type="text"
                                class="tw-mt-1 tw-block tw-w-full"
                                v-model="form.last_name"
                                required
                                autocomplete="last_name"
                            />

                            <InputError class="tw-mt-2" :message="form.errors.last_name" />
                        </div>
                    </div>
                    <div class="md:tw-grid md:tw-grid-cols-3 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                        <div>
                            <InputLabel for="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                class="tw-mt-1 tw-block tw-w-full"
                                v-model="form.email"
                                required
                                autocomplete="email"
                            />

                            <InputError class="mt-2" :message="form.errors.email" />
                        </div>
                    </div>
                    <div class="md:tw-grid md:tw-grid-cols-3 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                        <div>
                            <InputLabel for="password" value="Password" />

                            <TextInput
                                id="password"
                                type="password"
                                class="tw-mt-1 tw-block tw-w-full"
                                v-model="form.password"
                                required
                                autocomplete="password"
                            />

                            <InputError class="tw-mt-2" :message="form.errors.password" />
                        </div>

                        <div>
                            <InputLabel for="password_confirmation" value="Confirm Password" />

                            <TextInput
                                id="password_confirmation"
                                type="password"
                                class="tw-mt-1 tw-block tw-w-full"
                                v-model="form.password_confirmation"
                                required
                                autocomplete="password_confirmation"
                            />

                            <InputError class="tw-mt-2" :message="form.errors.password_confirmation" />
                        </div>
                    </div>
                    <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-4">
                        <LinkComponent
                            :href="url"
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
    import { ref } from 'vue'

    const props = defineProps({
        roles: Array,
    });

    const url = '/users'

    const form = useForm({
        first_name: null,
        last_name: null,
        email: null,
        password: null,
        password_confirmation: null,
    })

    function submitForm() {
        form.post(route('users.store'), {
            preserveScroll: true,
            onSuccess: () => {
                Swal.fire({
                    title: 'Success',
                    text: "Created successfully.",
                    icon: 'success',
                    confirmButtonColor: '#16a34a',
                }).then(() => {
                    Inertia.get(url)
                })
            },
        })
    }
</script>
