<template>
    <Head title="Subjects" />

    <AuthenticatedLayout>
        <div class="tw-bg-white tw-shadow-lg sm:tw-rounded-lg tw-mb-5 tw-p-4 sm:tw-p-8">
            <h3 class="tw-text-xl tw-font-bold tw-text-gray-600">
                Update Subject
            </h3>
            <form @submit.prevent="submitForm()" class="tw-mt-6 tw-space-y-6 md:tw-col-span-1">

                <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                    <div>
                        <InputLabel for="course_code" value="Course Code" />

                        <TextInput
                            id="course_code"
                            type="text"
                            class="tw-mt-1 tw-block tw-w-full"
                            v-model="form.course_code"
                            required
                            autocomplete="course_code"
                        />

                        <InputError class="tw-mt-2" :message="form.errors.course_code" />
                    </div>

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

                <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                    <div>
                        <InputLabel for="unit" value="Units" />

                        <TextInput
                            id="unit"
                            type="text"
                            class="tw-mt-1 tw-block tw-w-full"
                            v-model="form.unit"
                            required
                            autocomplete="unit"
                        />

                        <InputError class="tw-mt-2" :message="form.errors.unit" />
                    </div>

                    <div>
                        <InputLabel for="lecture" value="Lecture" />

                        <TextInput
                            id="lecture"
                            type="text"
                            class="tw-mt-1 tw-block tw-w-full"
                            v-model="form.lecture"
                            required
                            autocomplete="lecture"
                        />

                        <InputError class="tw-mt-2" :message="form.errors.lecture" />
                    </div>
                </div>

                <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                    <div>
                        <InputLabel for="laboratory" value="Laboratory" />

                        <TextInput
                            id="laboratory"
                            type="text"
                            class="tw-mt-1 tw-block tw-w-full"
                            v-model="form.laboratory"
                            required
                            autocomplete="laboratory"
                        />

                        <InputError class="tw-mt-2" :message="form.errors.laboratory" />
                    </div>

                    <div>
                        <InputLabel for="prerequisite_subject_ids" value="Prerequisite Subject ID" />

                        <TextInput
                            id="prerequisite_subject_ids"
                            type="text"
                            class="tw-mt-1 tw-block tw-w-full"
                            v-model="form.prerequisite_subject_ids"
                            autocomplete="prerequisite_subject_ids"
                        />

                        <InputError class="tw-mt-2" :message="form.errors.prerequisite_subject_ids" />
                    </div>
                </div>

                <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                        <div>
                            <InputLabel for="year" value="Year" required />

                            <!-- <TextInput
                                id="year"
                                type="text"
                                class="tw-mt-1 tw-block tw-w-full"
                                v-model="form.year"
                                required
                                autocomplete="year"
                            /> -->

                            <ListBox
                                id="year"
                                :items="[
                                    {
                                        id: 1,
                                        name: '1st'
                                    },
                                    {
                                        id: 2,
                                        name: '2nd'
                                    },
                                    {
                                        id: 3,
                                        name: '3rd'
                                    },
                                    {
                                        id: 4,
                                        name: '4th'
                                    },
                                ]"
                                v-on:update:model-value="form.year = $event.id"
                                :model-value="form.year"
                            />

                            <InputError class="tw-mt-2" :message="form.errors.year" />
                        </div>

                        <div>
                            <InputLabel for="semester" value="Semester" required />

                            <!-- <TextInput
                                id="semester"
                                type="text"
                                class="tw-mt-1 tw-block tw-w-full"
                                v-model="form.semester"
                                required
                                autocomplete="semester"
                            /> -->

                            <ListBox
                                id="semester"
                                :items="[
                                    {
                                        id: 1,
                                        name: '1st'
                                    },
                                    {
                                        id: 2,
                                        name: '2nd'
                                    },
                                ]"
                                v-on:update:model-value="form.semester = $event.id"
                                :model-value="form.semester"
                            />

                            <InputError class="tw-mt-2" :message="form.errors.semester" />
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
    import ListBox from '@/Components/ListBox.vue'
    import { ref, onMounted, watch } from 'vue'

    const props = defineProps({
        model: Object,
    });

    const url = 'subjects'

    const form = useForm({
        course_code: props.model.course_code,
        descriptive_title: props.model.descriptive_title,
        unit: props.model.unit,
        lecture: props.model.lecture,
        laboratory: props.model.laboratory,
        prerequisite_subject_ids: props.model.prerequisite_subject_ids,
        year: props.model.year,
        semester: props.model.semester,
    });

    function submitForm() {
        form.patch(route(url + '.update', props.model.id), {
            preserveScroll: true,
            onSuccess: () => {
                Swal.fire({
                    title: 'Updated successfully',
                    // text: "Updated successfully.",
                    // icon: 'success',
                    confirmButtonColor: '#16a34a',
                }).then(() => {
                    Inertia.get('/' + url)
                })
            },
        })
    }
</script>
