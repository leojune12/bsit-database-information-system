<template>
    <section id="contact" class="tw-bg-white dark:tw-bg-gray-900">
        <div class="tw-py-8 lg:tw-py-16 tw-px-4 tw-mx-auto tw-max-w-screen-md">
            <h2 class="tw-mb-4 tw-text-4xl tw-tracking-tight tw-font-extrabold tw-text-center tw-text-gray-900 dark:tw-text-white">Contact Us</h2>
            <p class="tw-mb-8 lg:tw-mb-16 tw-font-light tw-text-center tw-text-gray-500 dark:tw-text-gray-400 sm:tw-text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
            <form @submit.prevent="submitContactUsForm()" class="tw-space-y-8">
                <div>
                    <label for="email" class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-gray-300">Your email</label>
                    <input
                        v-model="contactUsForm.email"
                        type="email"
                        id="email"
                        class="tw-shadow-sm tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500 dark:tw-shadow-sm-light"
                        placeholder="Your email"
                        required
                    >
                </div>
                <div>
                    <label for="subject" class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-gray-300">Subject</label>
                    <input
                        v-model="contactUsForm.subject"
                        type="text"
                        id="subject"
                        class="tw-block tw-p-3 tw-w-full tw-text-sm tw-text-gray-900 tw-rounded-lg tw-border tw-border-gray-300 tw-shadow-sm focus:tw-ring-blue-500 focus:tw-border-blue-500 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500 dark:tw-shadow-sm-light"
                        placeholder="Let us know how we can help you"
                        required
                    >
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-gray-400">Your message</label>
                    <textarea
                        v-model="contactUsForm.message"
                        id="message"
                        rows="6"
                        class="tw-block tw-p-2.5 tw-w-full tw-text-sm tw-text-gray-900 tw-rounded-lg tw-shadow-sm tw-border tw-border-gray-300 focus:tw-ring-blue-500 focus:tw-border-blue-500 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500"
                        placeholder="Leave a message..."
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    class="tw-py-3 tw-px-5 tw-text-sm tw-font-medium tw-text-center tw-text-white tw-rounded-lg tw-bg-blue-700 sm:tw-w-fit hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 dark:tw-bg-blue-600 dark:hover:tw-bg-blue-700 dark:focus:tw-ring-blue-800"
                    :disabled="contactUsForm.processing"
                >Send message</button>
            </form>
        </div>
    </section>
</template>

<script setup>
    import { useForm } from '@inertiajs/inertia-vue3'
    import Swal from 'sweetalert2'

    const contactUsForm = useForm({
        email: "",
        subject: "",
        message: "",
    })

    function submitContactUsForm() {
        contactUsForm.post('/contact-us', {
            preserveScroll: true,
            onSuccess: () => {
                Swal.fire({
                    title: 'Success',
                    text: "Message sent.",
                    icon: 'success',
                    confirmButtonColor: '#16a34a',
                })

                contactUsForm.reset()
            },
        })
    }
</script>
