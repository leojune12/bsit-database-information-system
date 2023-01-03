<template>
    <aside class="tw-fixed md:tw-block tw-hidden tw-top-0 tw-left-0 tw-w-72 tw-h-full" aria-label="Sidenav">
        <div class="tw-overflow-y-auto tw-py-b tw-h-full tw-bg-white tw-border-r tw-border-gray-200 dark:tw-bg-gray-800 dark:tw-border-gray-700">
            <div class="tw-flex tw-justify-center tw-h-16">
                <Link :href="route('dashboard')" class="tw-flex tw-items-center">
                    <img src="/capsu_logo.png" class="tw-mr-3 tw-h-6 sm:tw-h-9" alt="Flowbite Logo" />
                    <span class="tw-self-center tw-text-xl tw-font-semibold tw-whitespace-nowrap dark:tw-text-white">Capsu Pilar DRRM</span>
                </Link>
            </div>
            <ul class="tw-pt-5 tw-space-y-2 tw-border-gray-200 dark:tw-border-gray-700 tw-px-3">
                <li
                    v-for="item in navigation"
                    :key="item.name"
                >
                    <Link
                        :href="item.href"
                        :class="[$page.url.startsWith(item.href) ? 'tw-bg-blue-500 hover:tw-bg-blue-600 tw-text-white' : 'tw-text-gray-600 hover:tw-bg-blue-50', 'tw-flex tw-items-center tw-p-2 tw-text-base tw-font-normal tw-text-gray-900 tw-rounded-lg tw-transition tw-duration-75 hover:tw-bg-gray-100 dark:hover:tw-bg-gray-700 dark:tw-text-white tw-group']"
                    >
                        <component
                            :is="item.icon"
                            class="tw-flex-shrink-0 tw-w-6 tw-h-6 tw-transition tw-duration-75"
                            aria-hidden="true"
                        />
                        <span class="tw-ml-3">
                            {{ item.name }}
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script setup>
    import { Link } from '@inertiajs/inertia-vue3';
    import { PresentationChartBarIcon, ChatBubbleLeftEllipsisIcon, ChatBubbleLeftRightIcon, ChatBubbleBottomCenterTextIcon, UsersIcon } from '@heroicons/vue/24/outline'

    const navigation = [
        {
            name: 'Dashboard',
            href: '/dashboard',
            icon: PresentationChartBarIcon,
        },
        {
            name: 'Chats',
            href: '/chats',
            icon: ChatBubbleLeftEllipsisIcon,
        },
        {
            name: 'Comments',
            href: '/comments',
            icon: ChatBubbleLeftRightIcon,
        },
        {
            name: 'Replies',
            href: '/replies',
            icon: ChatBubbleBottomCenterTextIcon,
        },
        {
            name: 'Users',
            href: '/users',
            icon: UsersIcon,
        },
    ]
</script>
