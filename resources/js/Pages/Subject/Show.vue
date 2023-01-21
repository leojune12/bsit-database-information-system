<template>
    <Head title="Subjects" />

    <AuthenticatedLayout>
        <div class="tw-bg-white tw-shadow sm:tw-rounded-lg tw-mb-5">
            <div>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <h3 class="tw-text-lg tw-font-black tw-leading-6 tw-text-gray-900">ID Number Information</h3>
                </dl>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Course Code</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.course_code }}
                    </dd>
                </dl>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Descriptive Title</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.descriptive_title }}
                    </dd>
                </dl>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Units</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.unit }}
                    </dd>
                </dl>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Lecture</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.lecture }}
                    </dd>
                </dl>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Laboratory</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.laboratory }}
                    </dd>
                </dl>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Prerequisite Subject ID</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.prerequisite_subject_id }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Date Added</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0 tw-capitalize ">
                        {{ props.model.date_added }}
                    </dd>
                </dl>
            </div>
            <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-4 tw-py-6 sm:tw-px-6 tw-px-4">
                <LinkComponent
                    :href="'/' + url"
                    type="secondary"
                >
                    Back
                </LinkComponent>
                <LinkComponent
                :href="'/' + url + '/' + props.model.id + '/edit'"
                    type="primary"
                >
                    Update
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

    const url = 'subjects'
</script>
