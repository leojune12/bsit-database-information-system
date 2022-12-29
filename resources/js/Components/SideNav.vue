<template>
    <aside class="tw-fixed md:tw-block tw-hidden tw-top-0 tw-left-0 tw-w-72 tw-h-full" aria-label="Sidenav">
        <div class="tw-overflow-y-auto tw-py-5 tw-px-3 tw-h-full tw-bg-white tw-border-r tw-border-gray-200 dark:tw-bg-gray-800 dark:tw-border-gray-700">
            <div class="tw-flex tw-justify-center">
                <Link :href="route('dashboard')" class="tw-flex tw-items-center">
                    <img src="/capsu_logo.png" class="tw-mr-3 tw-h-6 sm:tw-h-9" alt="Flowbite Logo" />
                    <span class="tw-self-center tw-text-xl tw-font-semibold tw-whitespace-nowrap dark:tw-text-white">Capsu Pilar DRRM</span>
                </Link>
            </div>
            <ul class="tw-pt-5 tw-mt-5 tw-space-y-2 tw-border-t tw-border-gray-200 dark:tw-border-gray-700">
                <li>
                    <Link href="#" class="tw-flex tw-items-center tw-p-2 tw-text-base tw-font-normal tw-text-gray-900 tw-rounded-lg tw-transition tw-duration-75 hover:tw-bg-gray-100 dark:hover:tw-bg-gray-700 dark:tw-text-white tw-group">
                        <ChatBubbleLeftRightIcon class="tw-flex-shrink-0 tw-w-6 tw-h-6 tw-text-gray-400 tw-transition tw-duration-75 dark:tw-text-gray-400 group-hover:tw-text-gray-900 dark:group-hover:tw-text-white" />
                        <span class="tw-ml-3">Chats</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" class="tw-flex tw-items-center tw-p-2 tw-text-base tw-font-normal tw-text-gray-900 tw-rounded-lg tw-transition tw-duration-75 hover:tw-bg-gray-100 dark:hover:tw-bg-gray-700 dark:tw-text-white tw-group">
                        <ChatBubbleBottomCenterTextIcon class="tw-flex-shrink-0 tw-w-6 tw-h-6 tw-text-gray-400 tw-transition tw-duration-75 dark:tw-text-gray-400 group-hover:tw-text-gray-900 dark:group-hover:tw-text-white" />
                        <span class="tw-ml-3">Comments</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" class="tw-flex tw-items-center tw-p-2 tw-text-base tw-font-normal tw-text-gray-900 tw-rounded-lg tw-transition tw-duration-75 hover:tw-bg-gray-100 dark:hover:tw-bg-gray-700 dark:tw-text-white tw-group">
                        <ChatBubbleLeftEllipsisIcon class="tw-flex-shrink-0 tw-w-6 tw-h-6 tw-text-gray-400 tw-transition tw-duration-75 dark:tw-text-gray-400 group-hover:tw-text-gray-900 dark:group-hover:tw-text-white" />
                        <span class="tw-ml-3">Replies</span>
                    </Link>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script setup>
    import { Link } from '@inertiajs/inertia-vue3';
    import { ChatBubbleLeftEllipsisIcon, ChatBubbleLeftRightIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/vue/24/outline'

</script>
