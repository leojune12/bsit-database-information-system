<template>
    <Head title="Students" />

    <AuthenticatedLayout>
        <div class="tw-bg-white tw-shadow-lg sm:tw-rounded-lg tw-mb-5 tw-p-4 sm:tw-p-8">
            <form @submit.prevent="submitForm()" class="tw-mt-6 tw-space-y-6 md:tw-col-span-1">

                <h3 class="tw-text-xl tw-font-bold tw-text-gray-600">
                    Student Information
                </h3>

                <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                    <div>
                        <InputLabel for="" value="Photo" class="tw-mb-1" />

                        <input
                            type="file"
                            accept="image/*"
                            @input="previewImage"
                            class=""
                            id="photo"
                            hidden
                        >

                        <div v-if="preview" class="tw-mb-2">
                            <img :src="preview" class="tw-w-44 tw-max-h-44 tw-object-contain tw-mb-2" />
                            <div v-if="!!form.photo">
                                <p class="tw-mb-0">File name: {{ form.photo.name }}</p>
                                <p class="tw-mb-0">Size: {{ (form.photo.size/1024).toFixed(2) }}KB</p>
                            </div>
                        </div>

                        <div class="tw-flex tw-gap-3">
                            <button
                                @click="browseFile()"
                                type="button"
                                class="tw-h-8 tw-bg-blue-500 hover:tw-bg-blue-600 tw-text-white tw-rounded-lg tw-px-3 tw-text-sm"
                            >
                                Browse File
                            </button>
                            <button
                                v-if="preview"
                                @click="resetFile()"
                                type="button"
                                class="tw-h-8 tw-bg-red-500 hover:tw-bg-red-600 tw-text-white tw-rounded-lg tw-px-3 tw-text-sm"
                            >
                                Remove
                            </button>
                        </div>

                        <InputError class="tw-mt-2" :message="form.errors.photo" />
                    </div>
                </div>

                <div class="tw-space-y-6">
                    <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                        <div>
                            <InputLabel for="id_number" value="ID Number" required />

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
                            <InputLabel for="first_name" value="First Name" required />

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
                            <InputLabel for="last_name" value="Last Name" required />

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
                            <InputLabel for="gender" value="Gender" required />

                            <TextInput
                                id="gender"
                                type="text"
                                class="tw-mt-1 tw-block tw-w-full"
                                v-model="form.gender"
                                required
                                autocomplete="gender"
                            />

                            <InputError class="tw-mt-2" :message="form.errors.gender" />
                        </div>

                        <div>
                            <InputLabel for="citizenship" value="Citizenship" required />

                            <TextInput
                                id="citizenship"
                                type="text"
                                class="tw-mt-1 tw-block tw-w-full"
                                v-model="form.citizenship"
                                required
                                autocomplete="citizenship"
                            />

                            <InputError class="mt-2" :message="form.errors.citizenship" />
                        </div>
                    </div>
                    <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                        <div>
                            <InputLabel for="religion" value="Religion" />

                            <TextInput
                                id="religion"
                                type="text"
                                class="tw-mt-1 tw-block tw-w-full"
                                v-model="form.religion"
                                autocomplete="religion"
                            />

                            <InputError class="tw-mt-2" :message="form.errors.religion" />
                        </div>

                        <div>
                            <InputLabel for="civil_status" value="Civil Status" required />

                            <TextInput
                                id="civil_status"
                                type="text"
                                class="tw-mt-1 tw-block tw-w-full"
                                v-model="form.civil_status"
                                required
                                autocomplete="civil_status"
                            />

                            <InputError class="mt-2" :message="form.errors.civil_status" />
                        </div>
                    </div>
                    <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                        <div>
                            <InputLabel for="date_of_birth" value="Birthday" required />

                            <TextInput
                                id="date_of_birth"
                                type="date"
                                class="tw-mt-1 tw-block tw-w-full"
                                v-model="form.date_of_birth"
                                required
                                autocomplete="date_of_birth"
                            />

                            <InputError class="tw-mt-2" :message="form.errors.date_of_birth" />
                        </div>

                        <div>
                            <InputLabel for="place_of_birth" value="Place of Birth" />

                            <TextInput
                                id="place_of_birth"
                                type="text"
                                class="tw-mt-1 tw-block tw-w-full"
                                v-model="form.place_of_birth"
                                autocomplete="place_of_birth"
                            />

                            <InputError class="mt-2" :message="form.errors.place_of_birth" />
                        </div>
                    </div>
                </div>

                <div class="tw-border tw-border-gray-200"></div>
                <h3 class="tw-text-xl tw-font-bold tw-text-gray-600">
                    Contact Information
                </h3>
                <div class="tw-space-y-6">
                    <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                        <div>
                            <InputLabel for="email" value="Email address" required />

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

                        <div>
                            <InputLabel for="contact_number" value="Contact Number" required />

                            <TextInput
                                id="contact_number"
                                type="text"
                                class="tw-mt-1 tw-block tw-w-full"
                                required
                                v-model="form.contact_number"
                                autocomplete="contact_number"
                            />

                            <InputError class="tw-mt-2" :message="form.errors.contact_number" />
                        </div>
                    </div>
                </div>

                <div class="tw-border tw-border-gray-200"></div>
                <h3 class="tw-text-xl tw-font-bold tw-text-gray-600">
                    Family Information
                </h3>
                <div class="tw-space-y-6">
                    <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                        <div>
                            <InputLabel for="father_name" value="Father Name" />

                            <TextInput
                                id="father_name"
                                type="text"
                                class="tw-mt-1 tw-block tw-w-full"
                                v-model="form.father_name"
                                autocomplete="father_name"
                            />

                            <InputError class="tw-mt-2" :message="form.errors.father_name" />
                        </div>

                        <div>
                            <InputLabel for="father_highest_educational_attainment" value="Father Highest Educational Attainment" />

                            <TextInput
                                id="father_highest_educational_attainment"
                                type="text"
                                class="tw-mt-1 tw-block tw-w-full"
                                v-model="form.father_highest_educational_attainment"
                                autocomplete="father_highest_educational_attainment"
                            />

                            <InputError class="mt-2" :message="form.errors.father_highest_educational_attainment" />
                        </div>
                    </div>
                    <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                        <div>
                            <InputLabel for="father_occupation" value="Father Occupation" />

                            <TextInput
                                id="father_occupation"
                                type="text"
                                class="tw-mt-1 tw-block tw-w-full"
                                v-model="form.father_occupation"
                                autocomplete="father_occupation"
                            />

                            <InputError class="tw-mt-2" :message="form.errors.father_occupation" />
                        </div>

                        <div>
                            <InputLabel for="father_contact_number" value="Father Contact Number" />

                            <TextInput
                                id="father_contact_number"
                                type="text"
                                class="tw-mt-1 tw-block tw-w-full"
                                v-model="form.father_contact_number"
                                autocomplete="father_contact_number"
                            />

                            <InputError class="mt-2" :message="form.errors.father_contact_number" />
                        </div>
                    </div>
                    <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                        <div>
                            <InputLabel for="mother_name" value="Mother Name" />

                            <TextInput
                                id="mother_name"
                                type="text"
                                class="tw-mt-1 tw-block tw-w-full"
                                v-model="form.mother_name"
                                autocomplete="mother_name"
                            />

                            <InputError class="tw-mt-2" :message="form.errors.mother_name" />
                        </div>

                        <div>
                            <InputLabel for="mother_highest_educational_attainment" value="Mother Highest Educational Attainment" />

                            <TextInput
                                id="mother_highest_educational_attainment"
                                type="text"
                                class="tw-mt-1 tw-block tw-w-full"
                                v-model="form.mother_highest_educational_attainment"
                                autocomplete="mother_highest_educational_attainment"
                            />

                            <InputError class="mt-2" :message="form.errors.mother_highest_educational_attainment" />
                        </div>
                    </div>
                    <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                        <div>
                            <InputLabel for="mother_occupation" value="Mother Occupation" />

                            <TextInput
                                id="mother_occupation"
                                type="text"
                                class="tw-mt-1 tw-block tw-w-full"
                                v-model="form.mother_occupation"
                                autocomplete="mother_occupation"
                            />

                            <InputError class="tw-mt-2" :message="form.errors.mother_occupation" />
                        </div>

                        <div>
                            <InputLabel for="mother_contact_number" value="Mother Contact Number" />

                            <TextInput
                                id="mother_contact_number"
                                type="text"
                                class="tw-mt-1 tw-block tw-w-full"
                                v-model="form.mother_contact_number"
                                autocomplete="mother_contact_number"
                            />

                            <InputError class="mt-2" :message="form.errors.mother_contact_number" />
                        </div>
                    </div>
                    <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                        <div>
                            <InputLabel for="monthly_family_income" value="Monthly Family Income" />

                            <TextInput
                                id="monthly_family_income"
                                type="text"
                                class="tw-mt-1 tw-block tw-w-full"
                                v-model="form.monthly_family_income"
                                autocomplete="monthly_family_income"
                            />

                            <InputError class="tw-mt-2" :message="form.errors.monthly_family_income" />
                        </div>
                    </div>
                </div>

                <div class="tw-border tw-border-gray-200"></div>
                <h3 class="tw-text-xl tw-font-bold tw-text-gray-600">
                    Guardian Information
                </h3>
                <div class="tw-space-y-6">
                    <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                        <div>
                            <InputLabel for="guardian_name" value="Guardian Name" />

                            <TextInput
                                id="guardian_name"
                                type="text"
                                class="tw-mt-1 tw-block tw-w-full"
                                v-model="form.guardian_name"
                                autocomplete="guardian_name"
                            />

                            <InputError class="tw-mt-2" :message="form.errors.guardian_name" />
                        </div>

                        <div>
                            <InputLabel for="guardian_highest_educational_attainment" value="Guardian Highest Educational Attainment" />

                            <TextInput
                                id="guardian_highest_educational_attainment"
                                type="text"
                                class="tw-mt-1 tw-block tw-w-full"
                                v-model="form.guardian_highest_educational_attainment"
                                autocomplete="guardian_highest_educational_attainment"
                            />

                            <InputError class="mt-2" :message="form.errors.guardian_highest_educational_attainment" />
                        </div>
                    </div>
                    <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                        <div>
                            <InputLabel for="guardian_occupation" value="Guardian Occupation" />

                            <TextInput
                                id="guardian_occupation"
                                type="text"
                                class="tw-mt-1 tw-block tw-w-full"
                                v-model="form.guardian_occupation"
                                autocomplete="guardian_occupation"
                            />

                            <InputError class="tw-mt-2" :message="form.errors.guardian_occupation" />
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
                    </div>
                </div>

                <div class="tw-border tw-border-gray-200"></div>
                <h3 class="tw-text-xl tw-font-bold tw-text-gray-600">
                    Address Information
                </h3>
                <div class="tw-space-y-6">
                    <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                        <div>
                            <InputLabel for="province_id" value="Province" required />
                            <ListBox
                                id="province_id"
                                :items="provinces"
                                v-on:update:model-value="form.province_id = $event.id"
                                :model-value="form.province_id"
                            />
                            <InputError class="mt-2" :message="form.errors.province_id" />
                        </div>

                        <div>
                            <InputLabel for="city_id" value="City/Municipality" required />
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
                            <InputLabel for="barangay_id" value="Barangay" required />
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
                </div>

                <div class="tw-border tw-border-gray-200"></div>
                <h3 class="tw-text-xl tw-font-bold tw-text-gray-600">
                    Educational Background Information
                </h3>
                <div class="tw-space-y-6">
                    <div class="tw-space-y-6">
                        <h3 class="tw-text-lg tw-font-bold tw-text-gray-500">
                            Elementary
                        </h3>
                        <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                            <div>
                                <InputLabel for="elementary_school" value="School" />

                                <TextInput
                                    id="elementary_school"
                                    type="text"
                                    class="tw-mt-1 tw-block tw-w-full"
                                    v-model="form.elementary_school"
                                    autocomplete="elementary_school"
                                />

                                <InputError class="tw-mt-2" :message="form.errors.elementary_school" />
                            </div>

                            <div>
                                <InputLabel for="elementary_address" value="Address" />

                                <TextInput
                                    id="elementary_address"
                                    type="text"
                                    class="tw-mt-1 tw-block tw-w-full"
                                    v-model="form.elementary_address"
                                    autocomplete="elementary_address"
                                />

                                <InputError class="mt-2" :message="form.errors.elementary_address" />
                            </div>
                        </div>
                        <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                            <div>
                                <InputLabel for="elementary_award" value="Award" />

                                <TextInput
                                    id="elementary_award"
                                    type="text"
                                    class="tw-mt-1 tw-block tw-w-full"
                                    v-model="form.elementary_award"
                                    autocomplete="elementary_award"
                                />

                                <InputError class="tw-mt-2" :message="form.errors.elementary_award" />
                            </div>

                            <div>
                                <InputLabel for="elementary_school_type" value="School Type (Private/Public)" />

                                <TextInput
                                    id="elementary_school_type"
                                    type="text"
                                    class="tw-mt-1 tw-block tw-w-full"
                                    v-model="form.elementary_school_type"
                                    autocomplete="elementary_school_type"
                                />

                                <InputError class="mt-2" :message="form.errors.elementary_school_type" />
                            </div>
                        </div>
                    </div>
                    <div class="tw-space-y-6">
                        <h3 class="tw-text-lg tw-font-bold tw-text-gray-500">
                            Junior High School
                        </h3>
                        <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                            <div>
                                <InputLabel for="junior_high_school" value="School" />

                                <TextInput
                                    id="junior_high_school"
                                    type="text"
                                    class="tw-mt-1 tw-block tw-w-full"
                                    v-model="form.junior_high_school"
                                    autocomplete="junior_high_school"
                                />

                                <InputError class="tw-mt-2" :message="form.errors.junior_high_school" />
                            </div>

                            <div>
                                <InputLabel for="junior_high_school_address" value="Address" />

                                <TextInput
                                    id="junior_high_school_address"
                                    type="text"
                                    class="tw-mt-1 tw-block tw-w-full"
                                    v-model="form.junior_high_school_address"
                                    autocomplete="junior_high_school_address"
                                />

                                <InputError class="mt-2" :message="form.errors.junior_high_school_address" />
                            </div>
                        </div>
                        <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                            <div>
                                <InputLabel for="junior_high_school_award" value="Award" />

                                <TextInput
                                    id="junior_high_school_award"
                                    type="text"
                                    class="tw-mt-1 tw-block tw-w-full"
                                    v-model="form.junior_high_school_award"
                                    autocomplete="junior_high_school_award"
                                />

                                <InputError class="tw-mt-2" :message="form.errors.junior_high_school_award" />
                            </div>

                            <div>
                                <InputLabel for="junior_high_school_type" value="School Type (Private/Public)" />

                                <TextInput
                                    id="junior_high_school_type"
                                    type="text"
                                    class="tw-mt-1 tw-block tw-w-full"
                                    v-model="form.junior_high_school_type"
                                    autocomplete="junior_high_school_type"
                                />

                                <InputError class="mt-2" :message="form.errors.junior_high_school_type" />
                            </div>
                        </div>
                    </div>
                    <div class="tw-space-y-6">
                        <h3 class="tw-text-lg tw-font-bold tw-text-gray-500">
                            Senior High School
                        </h3>
                        <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                            <div>
                                <InputLabel for="senior_high_school" value="School" />

                                <TextInput
                                    id="senior_high_school"
                                    type="text"
                                    class="tw-mt-1 tw-block tw-w-full"
                                    v-model="form.senior_high_school"
                                    autocomplete="senior_high_school"
                                />

                                <InputError class="tw-mt-2" :message="form.errors.senior_high_school" />
                            </div>

                            <div>
                                <InputLabel for="senior_high_school_address" value="Address" />

                                <TextInput
                                    id="senior_high_school_address"
                                    type="text"
                                    class="tw-mt-1 tw-block tw-w-full"
                                    v-model="form.senior_high_school_address"
                                    autocomplete="senior_high_school_address"
                                />

                                <InputError class="mt-2" :message="form.errors.senior_high_school_address" />
                            </div>
                        </div>
                        <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                            <div>
                                <InputLabel for="senior_high_school_award" value="Award" />

                                <TextInput
                                    id="senior_high_school_award"
                                    type="text"
                                    class="tw-mt-1 tw-block tw-w-full"
                                    v-model="form.senior_high_school_award"
                                    autocomplete="senior_high_school_award"
                                />

                                <InputError class="tw-mt-2" :message="form.errors.senior_high_school_award" />
                            </div>

                            <div>
                                <InputLabel for="senior_high_school_type" value="School Type (Private/Public)" />

                                <TextInput
                                    id="senior_high_school_type"
                                    type="text"
                                    class="tw-mt-1 tw-block tw-w-full"
                                    v-model="form.senior_high_school_type"
                                    autocomplete="senior_high_school_type"
                                />

                                <InputError class="mt-2" :message="form.errors.senior_high_school_type" />
                            </div>
                        </div>
                    </div>
                    <div class="tw-space-y-6">
                        <h3 class="tw-text-lg tw-font-bold tw-text-gray-500">
                            Tertiary
                        </h3>
                        <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                            <div>
                                <InputLabel for="tertiary_school" value="School" />

                                <TextInput
                                    id="tertiary_school"
                                    type="text"
                                    class="tw-mt-1 tw-block tw-w-full"
                                    v-model="form.tertiary_school"
                                    autocomplete="tertiary_school"
                                />

                                <InputError class="tw-mt-2" :message="form.errors.tertiary_school" />
                            </div>

                            <div>
                                <InputLabel for="tertiary_address" value="Address" />

                                <TextInput
                                    id="tertiary_address"
                                    type="text"
                                    class="tw-mt-1 tw-block tw-w-full"
                                    v-model="form.tertiary_address"
                                    autocomplete="tertiary_address"
                                />

                                <InputError class="mt-2" :message="form.errors.tertiary_address" />
                            </div>
                        </div>
                        <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                            <div>
                                <InputLabel for="tertiary_award" value="Award" />

                                <TextInput
                                    id="tertiary_award"
                                    type="text"
                                    class="tw-mt-1 tw-block tw-w-full"
                                    v-model="form.tertiary_award"
                                    autocomplete="tertiary_award"
                                />

                                <InputError class="tw-mt-2" :message="form.errors.tertiary_award" />
                            </div>

                            <div>
                                <InputLabel for="tertiary_school_type" value="School Type (Private/Public)" />

                                <TextInput
                                    id="tertiary_school_type"
                                    type="text"
                                    class="tw-mt-1 tw-block tw-w-full"
                                    v-model="form.tertiary_school_type"
                                    autocomplete="tertiary_school_type"
                                />

                                <InputError class="mt-2" :message="form.errors.tertiary_school_type" />
                            </div>
                        </div>
                    </div>
                    <div class="tw-space-y-6">
                        <h3 class="tw-text-lg tw-font-bold tw-text-gray-500">
                            Special Courses
                        </h3>
                        <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                            <div>
                                <InputLabel for="special_courses_school" value="School" />

                                <TextInput
                                    id="special_courses_school"
                                    type="text"
                                    class="tw-mt-1 tw-block tw-w-full"
                                    v-model="form.special_courses_school"
                                    autocomplete="special_courses_school"
                                />

                                <InputError class="tw-mt-2" :message="form.errors.special_courses_school" />
                            </div>

                            <div>
                                <InputLabel for="special_courses_address" value="Address" />

                                <TextInput
                                    id="special_courses_address"
                                    type="text"
                                    class="tw-mt-1 tw-block tw-w-full"
                                    v-model="form.special_courses_address"
                                    autocomplete="special_courses_address"
                                />

                                <InputError class="mt-2" :message="form.errors.special_courses_address" />
                            </div>
                        </div>
                        <div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0">
                            <div>
                                <InputLabel for="special_courses_award" value="Award" />

                                <TextInput
                                    id="special_courses_award"
                                    type="text"
                                    class="tw-mt-1 tw-block tw-w-full"
                                    v-model="form.special_courses_award"
                                    autocomplete="special_courses_award"
                                />

                                <InputError class="tw-mt-2" :message="form.errors.special_courses_award" />
                            </div>

                            <div>
                                <InputLabel for="special_courses_school_type" value="School Type (Private/Public)" />

                                <TextInput
                                    id="special_courses_school_type"
                                    type="text"
                                    class="tw-mt-1 tw-block tw-w-full"
                                    v-model="form.special_courses_school_type"
                                    autocomplete="special_courses_school_type"
                                />

                                <InputError class="mt-2" :message="form.errors.special_courses_school_type" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tw-border tw-border-gray-200"></div>
                <h3 class="tw-text-xl tw-font-bold tw-text-gray-600">
                    Account Information
                </h3>
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
        photo_url: String,
    });

    const url = 'students'

    const preview = ref(props.photo_url)

    const form = useForm({
        id_number: props.model.id_number,

        // Basic Information
        photo: null,
        remove_photo: false,
        first_name: props.model.first_name,
        last_name: props.model.last_name,
        middle_name: props.model.middle_name,
        suffix_name: props.model.suffix_name,
        gender: props.model.gender,
        citizenship: props.model.citizenship,
        religion: props.model.religion,
        civil_status: props.model.civil_status,
        date_of_birth: props.model.date_of_birth,
        place_of_birth: props.model.place_of_birth,

        // Contact Information
        email: props.model.email,
        contact_number: props.model.contact_number,

        // Family Information
        father_name: props.model.father_name,
        father_highest_educational_attainment: props.model.father_highest_educational_attainment,
        father_occupation: props.model.father_occupation,
        father_contact_number: props.model.father_contact_number,
        mother_name: props.model.mother_name,
        mother_highest_educational_attainment: props.model.mother_highest_educational_attainment,
        mother_occupation: props.model.mother_occupation,
        mother_contact_number: props.model.mother_contact_number,
        guardian_name: props.model.guardian_name,
        guardian_highest_educational_attainment: props.model.guardian_highest_educational_attainment,
        guardian_occupation: props.model.guardian_occupation,
        guardian_relationship: props.model.guardian_relationship,
        guardian_contact_number: props.model.guardian_contact_number,
        monthly_family_income: props.model.monthly_family_income,

        // Address Information
        province_id: props.model.province_id,
        city_id: props.model.city_id,
        barangay_id: props.model.barangay_id,

        // Edcational Background Information
        elementary_school: props.model.elementary_school,
        elementary_address: props.model.elementary_address,
        elementary_award: props.model.elementary_award,
        elementary_school_type: props.model.elementary_school_type,
        junior_high_school: props.model.junior_high_school,
        junior_high_school_address: props.model.junior_high_school_address,
        junior_high_school_award: props.model.junior_high_school_award,
        junior_high_school_type: props.model.junior_high_school_type,
        senior_high_school: props.model.senior_high_school,
        senior_high_school_address: props.model.senior_high_school_address,
        senior_high_school_award: props.model.senior_high_school_award,
        senior_high_school_type: props.model.senior_high_school_type,
        tertiary_school: props.model.tertiary_school,
        tertiary_address: props.model.tertiary_address,
        tertiary_award: props.model.tertiary_award,
        tertiary_school_type: props.model.tertiary_school_type,
        special_courses_school: props.model.special_courses_school,
        special_courses_address: props.model.special_courses_address,
        special_courses_award: props.model.special_courses_award,
        special_courses_school_type: props.model.special_courses_school_type,

        // Account Information
        password: null,
        password_confirmation: null,
        _method: 'put',
    });

    const provinces = ref([])
    const citiesMunicipalities = ref([])
    const barangays = ref([])

    const resetCityIndex = ref(false)
    const resetBarangayIndex = ref(false)

    onMounted(() => {
        getProvinces()
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

    function previewImage(event) {

        let input = event.target;

        if (input.files.length) {

            let reader = new FileReader();

            reader.onload = (e) => {

                preview.value = e.target.result;
            }

            form.photo = input.files[0];
            reader.readAsDataURL(input.files[0]);
            form.remove_photo = false
        }
    }

    function browseFile() {
        document.getElementById("photo").click()
    }

    function resetFile() {
        form.photo = null
        preview.value = null
        form.remove_photo = true
    }

    function submitForm() {
        form.post(route(url + '.update', props.model.id), {
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
