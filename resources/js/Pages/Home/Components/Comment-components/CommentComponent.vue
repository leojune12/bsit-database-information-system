<template>
    <article
        class="tw-py-6 md:tw-px-6 tw-px-3 tw-text-base tw-bg-white tw-border-t tw-border-gray-200 dark:tw-border-gray-700 dark:tw-bg-gray-900"
    >
        <footer class="tw-flex tw-justify-between tw-items-center tw-mb-2">
            <div class="tw-flex tw-items-center">
                <p class="tw-inline-flex tw-items-center tw-mr-3 tw-text-sm tw-text-gray-900 dark:tw-text-white">
                    <img
                        class="tw-mr-2 tw-w-8 tw-h-8 tw-rounded-full"
                        :src="'https://ui-avatars.com/api/?name=' + props.comment.user_name + '&background=random&color=ffffff'"
                        alt="Helene Engels">
                    {{ props.comment.user_name }}
                </p>
                <p class="tw-text-sm tw-text-gray-600 dark:tw-text-gray-400">
                    <time
                        pubdate
                        :datetime="props.comment.date_added"
                        :title="props.comment.date_added">
                        {{ props.comment.date_added_diff }}
                    </time>
                </p>
            </div>
        </footer>
        <p class="tw-text-gray-500 dark:tw-text-gray-400 tw-whitespace-pre-wrap">
            {{ props.comment.comment }}
        </p>
        <div class="tw-flex tw-items-center tw-mt-4 tw-space-x-4">
            <button
                @click="showReplyForm = !showReplyForm"
                type="button"
                class="tw-flex items-center tw-text-sm tw-text-gray-500 hover:tw-underline dark:tw-text-gray-400"
            >
                <svg aria-hidden="true" class="tw-mr-1 tw-w-4 tw-h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                Reply
            </button>
        </div>
        <form
            v-if="showReplyForm"
            @submit.prevent="submitReplyForm()"
            class="tw-mb-6 tw-space-y-4 tw-mt-4"
        >
            <div>
                <label for="username" class="tw-sr-only">Your username</label>
                <input
                    v-model="replyForm.username"
                    id="username"
                    type="text"
                    class="tw-px-4 tw-shadow-sm tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500 dark:tw-shadow-sm-light"
                    placeholder="Your username"
                    required
                >
            </div>
            <div class="">
                <label for="reply" class="tw-sr-only">Your reply</label>
                <textarea
                    v-model="replyForm.reply"
                    id="reply"
                    rows="4"
                    class="tw-block tw-p-2.5 tw-w-full tw-text-sm tw-text-gray-900 tw-rounded-lg tw-shadow-sm tw-border tw-border-gray-300 focus:tw-ring-blue-500 focus:tw-border-blue-500 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500"
                    placeholder="Write a reply..."
                    required
                ></textarea>
            </div>
            <button type="submit"
                class="tw-inline-flex tw-items-center tw-py-2.5 tw-px-4 tw-text-xs tw-font-medium tw-text-center tw-text-white tw-bg-blue-700 tw-rounded-lg focus:tw-ring-4 focus:tw-ring-blue-200 dark:focus:tw-ring-blue-900 hover:tw-bg-blue-800">
                Post reply
            </button>
        </form>
    </article>

    <article
        v-for="reply in comment.replies"
        :key="reply.id"
        class="tw-py-6 md:tw-px-6 tw-ml-8 tw-px-3 tw-text-base tw-bg-white tw-border-t tw-border-gray-200 dark:tw-border-gray-700 dark:tw-bg-gray-900"
    >
        <footer class="tw-flex tw-justify-between tw-items-center tw-mb-2">
            <div class="tw-flex tw-items-center">
                <p class="tw-inline-flex tw-items-center tw-mr-3 tw-text-sm tw-text-gray-900 dark:tw-text-white">
                    <img
                        class="tw-mr-2 tw-w-8 tw-h-8 tw-rounded-full"
                        :src="'https://ui-avatars.com/api/?name=' + reply.user_name + '&background=random&color=ffffff'"
                        alt="Helene Engels">
                    {{ reply.user_name }}
                </p>
                <p class="tw-text-sm tw-text-gray-600 dark:tw-text-gray-400">
                    <time
                        pubdate
                        :datetime="reply.date_added"
                        :title="reply.date_added">
                        {{ reply.date_added_diff }}
                    </time>
                </p>
            </div>
        </footer>
        <p class="tw-text-gray-500 dark:tw-text-gray-400 tw-whitespace-pre-wrap">
            {{ reply.comment }}
        </p>
    </article>
</template>

<script setup>
    import { useForm } from '@inertiajs/inertia-vue3'
    import { ref } from 'vue'
    import Swal from 'sweetalert2'

    const showReplyForm = ref(false)

    const replyForm = useForm({
        username: "",
        reply: "",
    })

    const props = defineProps({
        comment: {
            type: Object,
            required: true,
        },
    })

    const emit = defineEmits(['refreshComments'])

    function submitReplyForm() {
        replyForm.post('/comments/' + props.comment.id + '/reply', {
            preserveScroll: true,
            onSuccess: () => {
                Swal.fire({
                    title: 'Success',
                    text: "Reply posted.",
                    icon: 'success',
                    confirmButtonColor: '#16a34a',
                })

                replyForm.reset()
                showReplyForm.value = false
                emit('refreshComments')
            },
        })
    }
</script>
