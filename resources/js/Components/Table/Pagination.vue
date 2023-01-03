<template>
    <div class="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-between tw-gap-y-3">
        <div class="tw-flex tw-gap-x-6 tw-flex-col md:tw-flex-row tw-gap-y-3">
            <ul class="tw-flex tw-items-center">
                <li class="tw-flex tw-items-center">
                    <button
                        type="button"
                        @click="onClickFirstPage"
                        :disabled="isInFirstPage"
                        :class="[isInFirstPage ? 'tw-pointer-events-none tw-text-gray-500' : 'tw-text-gray-700', 'tw-relative tw-inline-flex tw-items-center tw-rounded-l-md tw-border tw-border-gray-300 tw-bg-white dark:tw-bg-gray-700 tw-px-3 tw-h-10 tw-text-sm tw-font-medium hover:tw-bg-gray-100 focus:tw-z-20']"
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
                        @click="onClickPreviousPage"
                        :disabled="isInFirstPage"
                        :class="[isInFirstPage ? 'tw-pointer-events-none tw-text-gray-500' : 'tw-text-gray-700', 'tw-relative tw-inline-flex tw-items-center tw-border tw-border-gray-300 tw-bg-white dark:tw-bg-gray-700 tw-px-3 tw-h-10 tw-text-sm tw-font-medium hover:tw-bg-gray-100 focus:tw-z-20']"
                        title="Previous"
                    >
                        <ChevronLeftIcon
                            class="tw-block tw-h-4 tw-w-4"
                            aria-hidden="true"
                        />
                    </button>
                </li>

                <!-- Visible Buttons Start -->

                <li
                    v-for="page in pages"
                    :key="page.name"
                    >
                    <button
                        type="button"
                        :disabled="page.isDisabled"
                        @click="onClickPage(page.name)"
                        :class="[page.isDisabled ? 'tw-border-blue-500 tw-bg-blue-50 tw-text-blue-600 tw-z-20' : 'tw-bg-white dark:tw-bg-gray-700 tw-text-gray-700 hover:tw-bg-gray-100 tw-border-gray-300', 'tw-relative tw-inline-flex tw-items-center tw-border tw-px-4 tw-h-10 tw-text-sm tw-font-medium tw-m-0']"
                    >
                        {{ page.name }}
                    </button>
                </li>

                <!-- Visible Buttons End -->

                <li class="tw-lex tw-items-center">
                    <button
                        type="button"
                        @click="onClickNextPage"
                        :disabled="isInLastPage"
                        :class="[isInLastPage ? 'tw-pointer-events-none tw-text-gray-500' : 'tw-text-gray-700', 'tw-relative tw-inline-flex tw-items-center tw-border tw-border-gray-300 tw-bg-white dark:tw-bg-gray-700 tw-px-3 tw-h-10 tw-text-sm tw-font-medium hover:tw-bg-gray-100 focus:tw-z-20']"
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
                        @click="onClickLastPage"
                        :disabled="isInLastPage"
                        :class="[isInLastPage ? 'tw-pointer-events-none tw-text-gray-500' : 'tw-text-gray-700', 'tw-relative tw-inline-flex tw-items-center tw-rounded-r-md tw-border tw-border-gray-300 tw-bg-white dark:tw-bg-gray-700 tw-px-3 tw-h-10 tw-text-sm tw-font-medium hover:tw-bg-gray-100 focus:tw-z-20']"
                        title="Last"
                    >
                        <ChevronDoubleRightIcon
                            class="tw-block tw-h-4 tw-w-4"
                            aria-hidden="true"
                        />
                    </button>
                </li>
            </ul>
            <div class="tw-flex tw-items-center tw-justify-center tw-gap-x-2">
                <label for="per_page" class="tw-block tw-text-sm tw-font-medium tw-text-gray-700 dark:tw-text-white tw-whitespace-nowrap">Per Page</label>
                <select
                    v-model="currentPerPage.value"
                    id="per_page"
                    name="per_page"
                    autocomplete="per_page"
                    class="tw-block tw-w-full tw-rounded-md tw-border tw-border-gray-300 tw-bg-white dark:tw-bg-gray-700 tw-h-10 tw-pl-3 tw-pr-8 tw-shadow-sm focus:tw-border-blue-500 focus:tw-outline-none focus:tw-ring-blue-500 sm:tw-text-sm tw-text-gray-700 dark:tw-text-white md:tw-w-16"
                    @change="queryTable(false, true)"
                >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                </select>
            </div>
        </div>
        <div>
            <p class="tw-text-sm tw-text-gray-700 dark:tw-text-white">
                Showing
                {{ ' ' }}
                <span class="tw-font-medium">
                    {{ from }}
                </span>
                {{ ' ' }}
                to
                {{ ' ' }}
                <span class="tw-font-medium">
                    {{ to }}
                </span>
                {{ ' ' }}
                of
                {{ ' ' }}
                <span class="tw-font-medium">
                    {{ total }}
                </span>
                {{ ' ' }}
                results
            </p>
        </div>
    </div>
</template>

<script>
import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronDoubleRightIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
    export default {
        components: {
            ChevronDoubleLeftIcon,
            ChevronLeftIcon,
            ChevronDoubleRightIcon,
            ChevronRightIcon,
        },
        props: {
            maxVisibleButtons: {
                type: Number,
                required: false,
                default: 3
            },
            totalPages: {
                type: Number,
                required: true
            },
            perPage: {
                type: Number,
                required: true
            },
            currentPage: {
                type: Number,
                required: true
            },
            from: {
                type: Number,
                required: true
            },
            to: {
                type: Number,
                required: true
            },
            total: {
                type: Number,
                required: true
            },
            url: {
                type: String,
                required: true,
            },
        },
        computed: {
            startPage() {
                // When on the first page
                if (this.currentPage === 1) {
                    return 1;
                }

                // When on the last page
                if (this.currentPage === this.totalPages) {
                    const start = this.totalPages - (this.maxVisibleButtons - 1);

                    if (start === 0) {
                        return 1;
                    } else {
                        return start;
                    }
                }

                // When inbetween
                return this.currentPage - 1

                // When inbetween
                // let tempCurrentPage = this.currentPage

                // if (tempCurrentPage - 2 < 1) {
                //     return this.currentPage - 1
                // } else {
                //     return this.currentPage - 2;
                // }
            },
            pages() {
                const range = [];

                for (
                    let i = this.startPage;
                    i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
                    i++
                ) {
                    range.push({
                        name: i,
                        isDisabled: i === this.currentPage
                    });
                }

                return range;
            },
            isInFirstPage() {
                return this.currentPage === 1;
            },
            isInLastPage() {
                return this.currentPage === this.totalPages;
            },
        },
        data() {
            return {
                currentPerPage: {
                    value: 10
                },
                queryString: ''
            }
        },
        mounted() {
            this.currentPerPage.value = JSON.parse(JSON.stringify(this.perPage))
        },
        methods: {
            onClickFirstPage() {
                this.queryTable(1)
            },
            onClickPreviousPage() {
                this.queryTable(this.currentPage - 1)
            },
            onClickPage(page) {
                this.queryTable(page)
            },
            onClickNextPage() {
                this.queryTable(this.currentPage + 1)
            },
            onClickLastPage() {
                this.queryTable(this.totalPages)
            },
            queryTable(page = false, perPageChanged = false) {

                if (!page) {
                    page = this.currentPage
                }

                if (perPageChanged) {
                    page = 1
                }

                this.queryString = '?page=' + page + '&perPage=' + this.currentPerPage.value

                let query = this.url + this.queryString

                this.$inertia.get(
                    query,
                    {},
                    { preserveScroll: true }
                )
            },
        }
    };
</script>
