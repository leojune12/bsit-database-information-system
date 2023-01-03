<template>
    <Head title="Users" />

    <AuthenticatedLayout>
        <div class="tw-bg-white tw-shadow sm:tw-rounded-lg tw-mb-5">
            <div class="tw-px-4 tw-py-5 sm:tw-px-6">
                <h3 class="tw-text-lg tw-font-medium tw-leading-6 tw-text-gray-900">User Information</h3>
                <p class="tw-mt-1 tw-max-w-2xl tw-text-sm tw-text-gray-500">User details and application.</p>
            </div>
            <div class="tw-border-t tw-border-gray-200">
                <dl>
                    <div class="tw-bg-gray-50 tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6">
                        <dt class="tw-text-sm tw-font-medium tw-text-gray-500">First name</dt>
                        <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                            {{ props.model.first_name }}
                        </dd>
                    </div>
                    <div class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6">
                        <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Last name</dt>
                        <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                            {{ props.model.last_name }}
                        </dd>
                    </div>
                    <div class="tw-bg-gray-50 tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6">
                        <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Email address</dt>
                        <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                            {{ props.model.email }}
                        </dd>
                    </div>
                    <div class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6">
                        <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Date Added</dt>
                        <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0 tw-capitalize ">
                            {{ props.model.date_added }}
                        </dd>
                    </div>
                </dl>
            </div>
            <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-4 tw-py-6 sm:tw-px-6 tw-px-4">
                <LinkComponent
                    :href="url"
                    type="secondary"
                >
                    Back
                </LinkComponent>
                <LinkComponent
                :href="url + '/' + props.model.id + '/edit'"
                    type="primary"
                >
                    Edit
                </LinkComponent>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
    import { Head } from '@inertiajs/inertia-vue3'
    import LinkComponent from '@/Components/LinkComponent.vue';

    const props = defineProps({
        model: Object,
    })

    const url = '/users'
</script>
