<template>
    <Head title="Users" />

    <AuthenticatedLayout>
        <div class="tw-bg-white tw-shadow-lg tw-border sm:tw-rounded-lg tw-mb-5">
            <div>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <h3 class="tw-text-lg tw-font-black tw-leading-6 tw-text-gray-900">Profile Information</h3>
                </dl>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Photo</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        <img
                            v-if="props.photo_url != ''"
                            :src="props.photo_url"
                            alt="photo"
                            class="tw-w-44 tw-max-h-44 tw-object-contain tw-rounded-lg"
                        >
                        <div
                            v-else
                            class="tw-w-28 tw-h-28 tw-rounded-lg tw-text-5xl tw-bg-blue-200 tw-text-white tw-flex tw-items-center tw-justify-center"
                        >
                            {{ props.model.first_name.charAt(0) + props.model.last_name.charAt(0) }}
                        </div>
                    </dd>
                </dl>
                <!-- <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Year</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.section[0] ? props.model.section[0].year : '' }}
                    </dd>
                </dl> -->
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Year</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.section[0] ? props.model.section[0].year : '' }}
                    </dd>
                </dl>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Section</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        <Link
                            v-if="props.model.section[0]"
                            :href="'/sections/' + props.model.section[0].id"
                            class="tw-text-blue-500 tw-underline hover:tw-text-blue-700"
                        >
                            {{ props.model.section[0].name }}
                        </Link>
                    </dd>
                </dl>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">ID Number</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.id_number }}
                    </dd>
                </dl>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">First name</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.first_name }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Middle name</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.middle_name }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Last name</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.last_name }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Suffix name</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.suffix_name }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Gender</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.gender }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Citizenship</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.citizenship }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Religion</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.religion }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Civil Status</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.civil_status }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Birthday</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.date_of_birth }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Age</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.age }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Place of birth</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.place_of_birth }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <h3 class="tw-text-lg tw-font-black tw-leading-6 tw-text-gray-900">Contact Information</h3>
                </dl>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Email address</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.email }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Contact number</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.contact_number }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <h3 class="tw-text-lg tw-font-black tw-leading-6 tw-text-gray-900">Family Information</h3>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Father Name</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.father_name }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Father Highest Educational Attainment</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.father_highest_educational_attainment }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Father Occupation</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.father_occupation }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Father Contact Number</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.father_contact_number }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Mother Name</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.mother_name }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Mother Highest Educational Attainment</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.mother_highest_educational_attainment }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Mother Occupation</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.mother_occupation }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Mother Contact Number</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.mother_contact_number }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Guardian Name</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.guardian_name }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Guardian Highest Educational Attainment</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.guardian_highest_educational_attainment }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Guardian Occupation</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.guardian_occupation }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Guardian Relationship</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.guardian_relationship }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Guardian Contact Number</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.guardian_contact_number }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Monthly Family Income</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ props.model.monthly_family_income }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <h3 class="tw-text-lg tw-font-black tw-leading-6 tw-text-gray-900">Address Information</h3>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <dt class="tw-text-sm tw-font-medium tw-text-gray-500">Address</dt>
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0">
                        {{ address }}
                    </dd>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <h3 class="tw-text-lg tw-font-black tw-leading-6 tw-text-gray-900">Educational Background Information</h3>
                </dl>
                <dl class="tw-bg-white tw-px-4 tw-py-5 sm:tw-px-6 tw-border-b-2">
                    <table class="tw-w-full">
                        <thead>
                            <tr class="tw-text-left tw-border-b">
                                <th class="tw-py-2">Level</th>
                                <th class="tw-py-2">School</th>
                                <th class="tw-py-2">Address</th>
                                <th class="tw-py-2">Honors/Award</th>
                                <th class="tw-py-2">Type of School (Private/Public)</th>
                            </tr>
                        </thead>
                        <tbody class="tw-text-sm tw-text-gray-900">
                            <tr class="tw-border-b">
                                <td class="tw-font-bold tw-py-2 tw-text-gray-500">Elementary</td>
                                <td class="tw-py-2">{{ props.model.elementary_school }}</td>
                                <td class="tw-py-2">{{ props.model.elementary_address }}</td>
                                <td class="tw-py-2">{{ props.model.elementary_award }}</td>
                                <td class="tw-py-2">{{ props.model.elementary_school_type }}</td>
                            </tr>
                            <tr class="tw-border-b">
                                <td class="tw-font-bold tw-py-2 tw-text-gray-500">Junior High School</td>
                                <td class="tw-py-2">{{ props.model.junior_high_school }}</td>
                                <td class="tw-py-2">{{ props.model.junior_high_school_address }}</td>
                                <td class="tw-py-2">{{ props.model.junior_high_school_award }}</td>
                                <td class="tw-py-2">{{ props.model.junior_high_school_type }}</td>
                            </tr>
                            <tr class="tw-border-b">
                                <td class="tw-font-bold tw-py-2 tw-text-gray-500">Senior High School</td>
                                <td class="tw-py-2">{{ props.model.senior_high_school }}</td>
                                <td class="tw-py-2">{{ props.model.senior_high_school_address }}</td>
                                <td class="tw-py-2">{{ props.model.senior_high_school_award }}</td>
                                <td class="tw-py-2">{{ props.model.senior_high_school_type }}</td>
                            </tr>
                            <tr class="tw-border-b">
                                <td class="tw-font-bold tw-py-2 tw-text-gray-500">Tertiary</td>
                                <td class="tw-py-2">{{ props.model.tertiary_school }}</td>
                                <td class="tw-py-2">{{ props.model.tertiary_address }}</td>
                                <td class="tw-py-2">{{ props.model.tertiary_award }}</td>
                                <td class="tw-py-2">{{ props.model.tertiary_school_type }}</td>
                            </tr>
                            <tr>
                                <td class="tw-font-bold tw-py-2 tw-text-gray-500">Special Courses</td>
                                <td class="tw-py-2">{{ props.model.special_courses_school }}</td>
                                <td class="tw-py-2">{{ props.model.special_courses_address }}</td>
                                <td class="tw-py-2">{{ props.model.special_courses_award }}</td>
                                <td class="tw-py-2">{{ props.model.special_courses_school_type }}</td>
                            </tr>
                        </tbody>
                    </table>
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
                    v-if="['Admin', 'Student'].includes($page.props.auth.user.roles[0].name)"
                    :href="'/' + url + '/' + props.model.id + '/edit'"
                    type="primary"
                >
                    Update
                </LinkComponent>

                <button
                    v-if="['Admin'].includes($page.props.auth.user.roles[0].name)"
                    @click="confirmMakeAlumnus()"
                    class="tw-bg-blue-600 tw-rounded-lg tw-px-3 tw-text-white"
                >
                    Make Alumnus
                </button>
            </div>
        </div>

        <div class="tw-bg-white tw-shadow-lg tw-border sm:tw-rounded-lg tw-mb-5">
            <div>
                <dl class="tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2">
                    <h3 class="tw-text-lg tw-font-black tw-leading-6 tw-text-gray-900">Certificates and Awards</h3>
                </dl>
                <dl class="tw-px-4 tw-py-5 sm:tw-px-6 tw-border-b-2">
                    <dd class="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-mt-0">
                        <div class="tw-flex tw-flex-wrap">
                            <div
                                v-if="props.model.certificate_and_awards.length"
                                v-for="item in props.model.certificate_and_awards"
                                :key="item.id"
                                class="tw-w-48 tw-flex tw-items-center tw-justify-center"
                            >
                                <div>
                                    <div class="tw-relative">
                                        <button
                                            class="tw-absolute tw-top-1 tw-right-1"
                                            title="Remove"
                                            @click="confirmRemoveCertificateAndAward(item.id)"
                                        >
                                            <XCircleIcon
                                                class="tw-w-8 tw-h-8 tw-text-red-500 hover:tw-text-red-600"
                                            />
                                        </button>
                                        <img
                                            v-if="item.file.mime_type.startsWith('image/')"
                                            :src="item.file.original_url"
                                            alt=""
                                            class="tw-h-44 tw-w-44 tw-object-contain tw-rounded-xl tw-border-2 tw-mb-2"
                                        >
                                        <div
                                            v-else
                                            class="tw-h-44 tw-w-44 tw-flex tw-items-center tw-justify-center tw-rounded-xl tw-border-2 tw-mb-2"
                                        >
                                            <DocumentIcon
                                                class="tw-h-16 tw-w-16 tw-text-gray-500"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="tw-mb-1 tw-w-44 tw-truncate">
                                            {{ item.name }}
                                        </div>
                                        <div class="tw-inline-block">
                                            <a
                                                download
                                                :href="item.file.original_url"
                                                class="tw-bg-amber-400 tw-h-7 tw-flex tw-items-center tw-w-auto tw-px-3 tw-rounded-lg tw-text-white tw-text-xs"
                                                :title="item.file.file_name"
                                            >
                                                <ArrowDownTrayIcon
                                                    class="tw-h-4 tw-w-4 tw-mr-1"
                                                />
                                                Download
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                v-else
                            >
                                No records found
                            </div>
                        </div>
                    </dd>
                </dl>
            </div>
            <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-4 tw-py-6 sm:tw-px-6 tw-px-4">
                <button
                    v-if="['Admin', 'Faculty'].includes($page.props.auth.user.roles[0].name)"
                    @click="openCertificateAndAwardModal()"
                    class="tw-bg-green-600 tw-rounded-lg tw-px-3 tw-text-white tw-h-10"
                >
                    Add Award/Certificate
                </button>
            </div>
        </div>
        <TransitionRoot appear :show="addCertificateAndAwardModalIsOpen" as="template">
            <Dialog as="div" @close="closeCertificateAndAwardModal" class="tw-relative z-10">
                <TransitionChild
                    as="template"
                    enter="tw-duration-300 ease-out"
                    enter-from="tw-opacity-0"
                    enter-to="tw-opacity-100"
                    leave="tw-duration-200 ease-in"
                    leave-from="tw-opacity-100"
                    leave-to="tw-opacity-0"
                >
                    <div class="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-25" />
                </TransitionChild>

                <div class="tw-fixed tw-inset-0 tw-overflow-y-auto">
                    <div
                    class="tw-flex tw-min-h-full tw-items-center tw-justify-center tw-p-4 tw-text-center"
                    >
                    <TransitionChild
                        as="template"
                        enter="tw-duration-300 tw-ease-out"
                        enter-from="tw-opacity-0 tw-scale-95"
                        enter-to="tw-opacity-100 tw-scale-100"
                        leave="tw-duration-200 tw-ease-in"
                        leave-from="tw-opacity-100 tw-scale-100"
                        leave-to="tw-opacity-0 tw-scale-95"
                    >
                        <DialogPanel
                        class="tw-w-full tw-max-w-md tw-transform tw-overflow-hidden tw-rounded-2xl tw-bg-white tw-p-6 tw-text-left tw-align-middle tw-shadow-xl tw-transition-all"
                        >
                            <DialogTitle
                                as="h3"
                                class="tw-text-lg tw-font-medium tw-leading-6 tw-text-gray-900"
                            >
                                Add Certificate/Award
                            </DialogTitle>
                            <form @submit.prevent="submitCertificateAndAwardForm()" class="tw-mt-6 tw-space-y-6">
                                <div class="tw-mt-2">
                                    <div class="tw-mb-4">
                                        <InputLabel for="name" value="Certificate/Award Name" required />

                                        <TextInput
                                            id="name"
                                            type="text"
                                            class="tw-mt-1 tw-block tw-w-full"
                                            v-model="addCertificateAndAwardForm.name"
                                            required
                                            autofocus
                                            autocomplete="name"
                                        />

                                        <InputError class="tw-mt-2" :message="addCertificateAndAwardForm.errors.name" />
                                    </div>
                                    <div>
                                        <InputLabel for="" value="File" class="tw-mb-1" />

                                        <input
                                            type="file"
                                            @input="previewCertificateAndAward"
                                            class=""
                                            id="file"
                                            hidden
                                        >

                                        <div v-if="certificateAndAwardPreview && addCertificateAndAwardForm.file" class="tw-mb-2">
                                            <img
                                                v-if="addCertificateAndAwardForm.file.type.startsWith('image/')" :src="certificateAndAwardPreview"
                                                class="tw-w-44 tw-max-h-44 tw-object-contain tw-mb-2"
                                            />
                                            <DocumentIcon
                                                v-else
                                                class="tw-h-12 tw-w-12 tw-text-gray-500"
                                            />
                                            <p class="tw-mb-0">File name: {{ addCertificateAndAwardForm.file.name }}</p>
                                            <p class="tw-mb-0">Size: {{ (addCertificateAndAwardForm.file.size/1024).toFixed(2) }}KB</p>
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
                                                v-if="certificateAndAwardPreview"
                                                @click="resetFile()"
                                                type="button"
                                                class="tw-h-8 tw-bg-red-500 hover:tw-bg-red-600 tw-text-white tw-rounded-lg tw-px-3 tw-text-sm"
                                            >
                                                Remove
                                            </button>
                                        </div>

                                        <InputError class="tw-mt-2" :message="addCertificateAndAwardForm.errors.file" />
                                    </div>
                                </div>

                                <div class="tw-mt-4 tw-flex tw-gap-x-3">
                                    <button
                                        type="button"
                                        class="tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-transparent tw-bg-gray-100 tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-gray-900 hover:tw-bg-gray-200 focus:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-gray-500 focus-visible:tw-ring-offset-2"
                                        @click="closeCertificateAndAwardModal()"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        class="tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-transparent tw-bg-blue-100 tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-blue-900 hover:tw-bg-blue-200 focus:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-blue-500 focus-visible:tw-ring-offset-2"
                                        @click="submitCertificateAndAwardForm()"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </DialogPanel>
                    </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </AuthenticatedLayout>
</template>

<script setup>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
    import { Head, useForm, Link } from '@inertiajs/inertia-vue3'
    import LinkComponent from '@/Components/LinkComponent.vue';
    import { ref, computed } from 'vue'
    import Swal from 'sweetalert2'
    import { Inertia } from '@inertiajs/inertia'
    import {
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogPanel,
        DialogTitle,
    } from '@headlessui/vue'
    import TextInput from '@/Components/TextInput.vue';
    import InputLabel from '@/Components/InputLabel.vue';
    import InputError from '@/Components/InputError.vue';
    import { DocumentIcon, ArrowDownTrayIcon, XCircleIcon } from '@heroicons/vue/24/outline'

    const props = defineProps({
        model: Object,
        photo_url: String,
    })

    const url = 'students'

    const addCertificateAndAwardModalIsOpen = ref(false)
    const certificateAndAwardPreview = ref(null)

    const form = useForm({
        //
    });

    const addCertificateAndAwardForm = useForm({
        user_id: props.model.id,
        name: null,
        file: null,
    });

    const removeCertificateAndAwardForm = useForm({
        certificate_and_award_id: null,
    });

    const address = computed(() => {
        return titleCase(props.model.barangay?.brgyDesc + ', ' + props.model.city?.citymunDesc + ', ' + props.model.province?.provDesc)
    })

    function titleCase(str) {

        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you
            // Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        // Directly return the joined string
        return splitStr.join(' ');
    }

    function confirmMakeAlumnus() {

        Swal.fire({
            title: 'Are you sure?',
            // text: "You won't be able to revert this!",
            // icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                submitForm()
            }
        })
    }

    function submitForm() {
        form.post('/students/' + props.model.id + '/update-role-to-alumnus', {
            preserveScroll: true,
            onSuccess: () => {
                Swal.fire({
                    title: 'Updated successfully',
                    confirmButtonColor: '#16a34a',
                }).then(() => {
                    Inertia.get('/alumni/' + props.model.id)
                })
            },
        })
    }

    function closeCertificateAndAwardModal() {
        addCertificateAndAwardModalIsOpen.value = false
        certificateAndAwardPreview.value = null
        addCertificateAndAwardForm.name = null
        addCertificateAndAwardForm.file = null
    }

    function openCertificateAndAwardModal() {
        addCertificateAndAwardModalIsOpen.value = true
    }

    function previewCertificateAndAward(event) {

        console.log(event)

        let input = event.target;

        if (input.files.length) {

            let reader = new FileReader();

            reader.onload = (e) => {

                certificateAndAwardPreview.value = e.target.result;
            }

            addCertificateAndAwardForm.file = input.files[0];
            reader.readAsDataURL(input.files[0]);
        }
    }

    function browseFile() {
        document.getElementById("file").click()
    }

    function resetFile() {
        addCertificateAndAwardForm.file = null
        certificateAndAwardPreview.value = null
    }

    function submitCertificateAndAwardForm() {
        addCertificateAndAwardForm.post('/students/certificate-and-awards', {
            preserveScroll: true,
            onSuccess: () => {
                Swal.fire({
                    title: 'Added successfully',
                    confirmButtonColor: '#16a34a',
                }).then(() => {
                    closeCertificateAndAwardModal()
                })
            },
        })
    }

    function confirmRemoveCertificateAndAward(id) {
        Swal.fire({
            title: 'Are you sures?',
            // text: "You won't be able to revert this!",
            // icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                removeCertificateAndAward(id)
            }
        })
    }

    function removeCertificateAndAward(id) {

        removeCertificateAndAwardForm.certificate_and_award_id = id

        removeCertificateAndAwardForm.post('/students/delete-certificate-and-awards', {
            preserveScroll: true,
            onSuccess: () => {
                Swal.fire({
                    title: 'Removed successfully',
                    confirmButtonColor: '#16a34a',
                })
            },
        })
    }
</script>
