<template>
    <section id="comments" class="tw-bg-white dark:tw-bg-gray-900 tw-py-8 lg:tw-py-16">
        <div class="tw-max-w-screen-md tw-mx-auto tw-px-4">
            <div class="tw-flex tw-justify-between tw-items-center tw-mb-6">
                <h2 class="tw-text-lg lg:tw-text-2xl tw-font-bold tw-text-gray-900 dark:tw-text-white">Discussion ({{ comments.total }})</h2>
            </div>
            <form @submit.prevent="submitCommentForm()" class="tw-mb-6 tw-space-y-4">
                <div>
                    <label for="username" class="tw-sr-only">Your username</label>
                    <input
                        v-model="commentForm.username"
                        id="username"
                        type="text"
                        class="tw-px-4 tw-shadow-sm tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500 dark:tw-shadow-sm-light"
                        placeholder="Your username"
                        required
                    >
                </div>
                <div class="">
                    <label for="comment" class="tw-sr-only">Your comment</label>
                    <textarea
                        v-model="commentForm.comment"
                        id="comment"
                        rows="6"
                        class="tw-block tw-p-2.5 tw-w-full tw-text-sm tw-text-gray-900 tw-rounded-lg tw-shadow-sm tw-border tw-border-gray-300 focus:tw-ring-blue-500 focus:tw-border-blue-500 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500"
                        placeholder="Write a comment..."
                        required
                    ></textarea>
                </div>
                <button type="submit"
                    class="tw-inline-flex tw-items-center tw-py-2.5 tw-px-4 tw-text-xs tw-font-medium tw-text-center tw-text-white tw-bg-blue-700 tw-rounded-lg focus:tw-ring-4 focus:tw-ring-blue-200 dark:focus:tw-ring-blue-900 hover:tw-bg-blue-800">
                    Post comment
                </button>
            </form>

            <div
                v-for="comment in comments.data"
                :key="comment.id"
            >
                <CommentComponent
                    :comment="comment"
                    v-on:refresh-comments="getComments(comments.path + '?page=' + comments.current_page)"
                />
            </div>

            <!-- Pagination -->
            <div class="tw-px-6">
                <div class="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-between tw-gap-y-3">
                    <div class="tw-flex tw-gap-x-6 tw-flex-col md:tw-flex-row tw-gap-y-3">
                        <ul class="tw-flex tw-items-center">
                            <li class="tw-flex tw-items-center">
                                <button
                                    type="button"
                                    @click="getComments(comments.first_page_url)"
                                    :disabled="comments.current_page == 1"
                                    :class="[comments.current_page == 1 ? 'tw-pointer-events-none tw-text-gray-500' : 'tw-text-gray-700', 'tw-relative tw-inline-flex tw-items-center tw-rounded-l-md tw-border tw-border-gray-300 tw-bg-white tw-px-3 tw-h-10 tw-text-sm tw-font-medium hover:tw-bg-gray-100 focus:tw-z-20']"
                                    title="Last"
                                >
                                    <ChevronDoubleLeftIcon
                                        class="tw-block tw-h-4 tw-w-4"
                                        aria-hidden="true"
                                    />
                                </button>
                            </li>

                            <li class="tw-flex tw-items-center">
                                <button
                                    type="button"
                                    @click="getComments(comments.prev_page_url)"
                                    :disabled="comments.current_page == 1"
                                    :class="[comments.current_page == 1 ? 'tw-pointer-events-none tw-text-gray-500' : 'tw-text-gray-700', 'tw-relative tw-inline-flex tw-items-center tw-border tw-border-gray-300 tw-bg-white tw-px-3 tw-h-10 tw-text-sm tw-font-medium hover:tw-bg-gray-100 focus:tw-z-20']"
                                    title="Previous"
                                >
                                    <ChevronLeftIcon
                                        class="tw-block tw-h-4 tw-w-4"
                                        aria-hidden="true"
                                    />
                                </button>
                            </li>

                            <li class="tw-flex tw-items-center">
                                <button
                                    type="button"
                                    @click="getComments(comments.next_page_url)"
                                    :disabled="comments.current_page == comments.last_page"
                                    :class="[comments.current_page == comments.last_page ? 'tw-pointer-events-none tw-text-gray-500' : 'tw-text-gray-700', 'tw-relative tw-inline-flex tw-items-center tw-border tw-border-gray-300 tw-bg-white tw-px-3 tw-h-10 tw-text-sm tw-font-medium hover:tw-bg-gray-100 focus:tw-z-20']"
                                    title="Next"
                                >
                                    <ChevronRightIcon
                                        class="tw-block tw-h-4 tw-w-4"
                                        aria-hidden="true"
                                    />
                                </button>
                            </li>

                            <li class="tw-flex tw-items-center">
                                <button
                                    type="button"
                                    @click="getComments(comments.last_page_url)"
                                    :disabled="comments.current_page == comments.last_page"
                                    :class="[comments.current_page == comments.last_page ? 'tw-pointer-events-none tw-text-gray-500' : 'tw-text-gray-700', 'tw-relative tw-inline-flex tw-items-center tw-rounded-r-md tw-border tw-border-gray-300 tw-bg-white tw-px-3 tw-h-10 tw-text-sm tw-font-medium hover:tw-bg-gray-100 focus:tw-z-20']"
                                    title="Last"
                                >
                                    <ChevronDoubleRightIcon
                                        class="tw-block tw-h-4 tw-w-4"
                                        aria-hidden="true"
                                    />
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p class="text-sm text-gray-700">
                            Showing
                            {{ ' ' }}
                            <span class="font-medium">
                                {{ comments.from }}
                            </span>
                            {{ ' ' }}
                            to
                            {{ ' ' }}
                            <span class="font-medium">
                                {{ comments.to }}
                            </span>
                            {{ ' ' }}
                            of
                            {{ ' ' }}
                            <span class="font-medium">
                                {{ comments.total }}
                            </span>
                            {{ ' ' }}
                            results
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { useForm } from '@inertiajs/inertia-vue3'
    import Swal from 'sweetalert2'
    import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronDoubleRightIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
    import CommentComponent from '@/Pages/Home/Components/Comment-components/CommentComponent.vue'

    const commentForm = useForm({
        username: "",
        comment: "",
    })

    const comments = ref([])

    onMounted(() => {
        getComments()
    })

    function submitCommentForm() {
        commentForm.post('/comments', {
            preserveScroll: true,
            onSuccess: () => {
                Swal.fire({
                    title: 'Success',
                    text: "Comment posted.",
                    icon: 'success',
                    confirmButtonColor: '#16a34a',
                })

                commentForm.reset()
                getComments()
            },
        })
    }

    function getComments(pageUrl = null) {
        axios.get(pageUrl ?? '/comments')
        .then(function (response) {

            comments.value = response.data
        })
    }
</script>
