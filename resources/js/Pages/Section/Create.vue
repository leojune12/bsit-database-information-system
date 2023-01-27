<template>
    <Head title="Section" />

    <AuthenticatedLayout>
        <div class="tw-bg-white tw-shadow sm:tw-rounded-lg tw-mb-5 tw-p-4 sm:tw-p-8">
            <div class="">
                <form @submit.prevent="submitForm()" class="tw-mt-6 tw-space-y-6">

                    <h3 class="tw-text-xl tw-font-bold tw-text-gray-600">
                        Create Section
                    </h3>

                    <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                        <div>
                            <InputLabel for="academic_year_id" value="Academic Year" required />
                            <ListBox
                                id="academic_year_id"
                                :items="academic_year_array"
                                v-on:update:model-value="form.academic_year_id = $event.id"
                                :model-value="form.academic_year_id"
                            />
                            <InputError class="mt-2" :message="form.errors.academic_year_id" />
                        </div>
                    </div>

                    <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                        <div>
                            <InputLabel for="curriculum_id" value="Curriculum" required />
                            <ListBox
                                id="curriculumn_id"
                                :items="curriculum_array"
                                v-on:update:model-value="form.curriculum_id = $event.id"
                                :model-value="form.curriculum_id"
                            />
                            <InputError class="mt-2" :message="form.errors.curriculum_id" />
                        </div>
                    </div>

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

                    <div class="tw-space-y-6">
                        <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                            <div>
                                <InputLabel for="year" value="Year" required />

                                <TextInput
                                    id="year"
                                    type="text"
                                    class="tw-mt-1 tw-block tw-w-full"
                                    v-model="form.year"
                                    required
                                    autofocus
                                    autocomplete="year"
                                />

                                <InputError class="tw-mt-2" :message="form.errors.year" />
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
    import { ref, onMounted } from 'vue'
    import ListBox from '@/Components/ListBox.vue'

    const props = defineProps({
        academic_years: Array,
        curriculums: Array,
    })

    const url = 'sections'

    const form = useForm({
        academic_year_id: null,
        curriculum_id: null,
        name: null,
        year: null,
    });

    const academic_year_array = ref([])
    const curriculum_array = ref([])

    onMounted(() => {
        props.academic_years.forEach((item) => {
            academic_year_array.value.push({
                id: item.id,
                name: item.name
            })
        });

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
