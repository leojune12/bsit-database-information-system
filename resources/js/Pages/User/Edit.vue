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

                <div
                    v-if="form.id_number"
                    class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0"
                >
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
                <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                    <div>
                        <InputLabel for="first_name" value="First Name" />

                        <TextInput
                            id="first_name"
                            type="text"
                            class="tw-mt-1 tw-block tw-w-full"
                            v-model="form.first_name"
                            required
                            autocomplete="first_name"
                        />

                        <InputError class="tw-mt-2" :message="form.errors.first_name" />
                    </div>

                    <div>
                        <InputLabel for="middle_name" value="Middle Name" />

                        <TextInput
                            id="middle_name"
                            type="text"
                            class="tw-mt-1 tw-block tw-w-full"
                            v-model="form.middle_name"
                            autocomplete="middle_name"
                        />

                        <InputError class="tw-mt-2" :message="form.errors.middle_name" />
                    </div>
                </div>
                <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
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

                    <div>
                        <InputLabel for="suffix_name" value="Suffix Name" />

                        <TextInput
                            id="suffix_name"
                            type="text"
                            class="tw-mt-1 tw-block tw-w-full"
                            v-model="form.suffix_name"
                            autocomplete="suffix_name"
                        />

                        <InputError class="tw-mt-2" :message="form.errors.suffix_name" />
                    </div>
                </div>
                <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                    <div>
                        <InputLabel for="date_of_birth" value="Birthday (yyyy-mm-dd)" />

                        <TextInput
                            id="date_of_birth"
                            type="text"
                            class="tw-mt-1 tw-block tw-w-full"
                            v-model="form.date_of_birth"
                            required
                            autocomplete="date_of_birth"
                        />

                        <InputError class="tw-mt-2" :message="form.errors.date_of_birth" />
                    </div>

                    <div>
                        <InputLabel for="email" value="Email address" />

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
                <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                    <div>
                        <InputLabel for="contact_number" value="Contact Number" />

                        <TextInput
                            id="contact_number"
                            type="text"
                            class="tw-mt-1 tw-block tw-w-full"
                            v-model="form.contact_number"
                            autocomplete="contact_number"
                        />

                        <InputError class="tw-mt-2" :message="form.errors.contact_number" />
                    </div>

                    <div>
                        <InputLabel for="guardian_name" value="Guardian Name" />

                        <TextInput
                            id="guardian_name"
                            type="text"
                            class="tw-mt-1 tw-block tw-w-full"
                            v-model="form.guardian_name"
                            autocomplete="guardian_name"
                        />

                        <InputError class="mt-2" :message="form.errors.guardian_name" />
                    </div>
                </div>
                <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                    <div>
                        <InputLabel for="guardian_relationship" value="Guardian Relationship" />

                        <TextInput
                            id="guardian_relationship"
                            type="text"
                            class="tw-mt-1 tw-block tw-w-full"
                            v-model="form.guardian_relationship"
                            autocomplete="guardian_relationship"
                        />

                        <InputError class="tw-mt-2" :message="form.errors.guardian_relationship" />
                    </div>

                    <div>
                        <InputLabel for="guardian_contact_number" value="Guardian Contact Number" />

                        <TextInput
                            id="guardian_contact_number"
                            type="text"
                            class="tw-mt-1 tw-block tw-w-full"
                            v-model="form.guardian_contact_number"
                            autocomplete="guardian_contact_number"
                        />

                        <InputError class="mt-2" :message="form.errors.guardian_contact_number" />
                    </div>
                </div>
                <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                    <div>
                        <InputLabel for="province_id" value="Province" />
                        <ListBox
                            id="province_id"
                            :items="provinces"
                            v-on:update:model-value="form.province_id = $event.id"
                            :model-value="form.province_id"
                        />
                        <InputError class="mt-2" :message="form.errors.province_id" />
                    </div>

                    <div>
                        <InputLabel for="city_id" value="City/Municipality" />
                        <ListBox
                            id="city_id"
                            :items="citiesMunicipalities"
                            v-on:update:model-value="form.city_id = $event.id"
                            :model-value="form.city_id"
                            :reset-index="resetCityIndex"
                            v-on:update:reset-index="resetCityIndex = $event"
                        />
                        <InputError class="mt-2" :message="form.errors.city_id" />
                    </div>
                </div>
                <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                    <div>
                        <InputLabel for="barangay_id" value="Barangay" />
                        <ListBox
                            id="barangay_id"
                            :items="barangays"
                            v-on:update:model-value="form.barangay_id = $event.id"
                            :model-value="form.barangay_id"
                            :reset-index="resetBarangayIndex"
                            v-on:update:reset-index="resetBarangayIndex = $event"
                        />
                        <InputError class="mt-2" :message="form.errors.barangay_id" />
                    </div>
                </div>
                <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                    <div>
                        <InputLabel for="password" value="New Password" />

                        <TextInput
                            id="password"
                            type="password"
                            class="tw-mt-1 tw-block tw-w-full"
                            v-model="form.password"
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
        roles: Array,
    });

    const url = '/users'

    const form = useForm({
        id_number: props.model.id_number,
        first_name: props.model.first_name,
        last_name: props.model.last_name,
        middle_name: props.model.middle_name,
        suffix_name: props.model.suffix_name,
        date_of_birth: props.model.date_of_birth,
        email: props.model.email,
        contact_number: props.model.contact_number,
        guardian_name: props.model.guardian_name,
        guardian_relationship: props.model.guardian_relationship,
        guardian_contact_number: props.model.guardian_contact_number,
        province_id: props.model.province_id,
        city_id: props.model.city_id,
        barangay_id: props.model.barangay_id,
        password: null,
        password_confirmation: null,
        terms: false,
    });

    const provinces = ref([])
    const citiesMunicipalities = ref([])
    const barangays = ref([])

    const resetCityIndex = ref(false)
    const resetBarangayIndex = ref(false)

    onMounted(() => {
        if(!!props.model.province_id) getProvinces()
        if(!!props.model.city_id) getCitiesMunicipalities(props.model.province_id)
        if(!!props.model.barangay_id) getBarangays(props.model.city_id)
    })

    watch(() => _.cloneDeep(form.province_id), (newValue, oldValue) => {

        getCitiesMunicipalities(form.province_id)
        resetCityIndex.value = true
        resetBarangayIndex.value = true
        form.city_id = null
        form.barangay_id = null
    })

    watch(() => _.cloneDeep(form.city_id), (newValue, oldValue) => {

        getBarangays(form.city_id)
        resetBarangayIndex.value = true
        form.barangay_id = null
    })

    function submitForm() {
        form.patch(route('users.update', props.model.id), {
            preserveScroll: true,
            onSuccess: () => {
                Swal.fire({
                    title: 'Success',
                    text: "Updated successfully.",
                    icon: 'success',
                    confirmButtonColor: '#16a34a',
                }).then(() => {
                    Inertia.get(url)
                })
            },
        })
    }

    function getProvinces() {
        axios.get('/address/get-provinces')
        .then(function (response) {

            let itemsArray = []

            response.data.forEach((item) => {
                itemsArray.push({
                    id: item.provCode,
                    name: ucWords(item.provDesc)
                })
            });

            provinces.value = itemsArray
        })
    }

    function getCitiesMunicipalities(id) {
        axios.get('/address/get-cities-municipalities-per-province/' + id)
        .then(function (response) {

            let itemsArray = []

            response.data.forEach((item) => {
                itemsArray.push({
                    id: item.citymunCode,
                    name: ucWords(item.citymunDesc)
                })
            });

            citiesMunicipalities.value = itemsArray
        })
    }

    function getBarangays(id) {
        axios.get('/address/get-barangays-per-city-muniicpality/' + id)
        .then(function (response) {

            let itemsArray = []

            response.data.forEach((item) => {
                itemsArray.push({
                    id: item.brgyCode,
                    name: ucWords(item.brgyDesc)
                })
            });

            barangays.value = itemsArray
        })
    }

    function ucWords(str) {

        return str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase()
        })
    }
</script>
