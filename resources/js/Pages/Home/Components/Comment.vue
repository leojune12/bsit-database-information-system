<template>
    <section id="comments" class="tw-bg-white dark:tw-bg-gray-900 tw-py-8 lg:tw-py-16">
        <div class="tw-max-w-2xl tw-mx-auto tw-px-4">
            <div class="tw-flex tw-justify-between tw-items-center tw-mb-6">
                <h2 class="tw-text-lg lg:tw-text-2xl tw-font-bold tw-text-gray-900 dark:tw-text-white">Discussion (20)</h2>
            </div>
            <form class="tw-mb-6">
                <div class="tw-py-2 tw-px-4 tw-mb-4 tw-bg-white tw-rounded-lg tw-rounded-t-lg tw-border tw-border-gray-200 dark:tw-bg-gray-800 dark:tw-border-gray-700">
                    <label for="comment" class="tw-sr-only">Your comment</label>
                    <textarea rows="6"
                        class="tw-px-0 tw-w-full tw-text-sm tw-text-gray-900 tw-border-0 focus:tw-ring-0 focus:tw-outline-none dark:tw-text-white dark:tw-placeholder-gray-400 dark:tw-bg-gray-800"
                        placeholder="Write a comment..." required></textarea>
                </div>
                <button type="submit"
                    class="tw-inline-flex tw-items-center tw-py-2.5 tw-px-4 tw-text-xs tw-font-medium tw-text-center tw-text-white tw-bg-blue-700 tw-rounded-lg focus:tw-ring-4 focus:tw-ring-blue-200 dark:focus:tw-ring-blue-900 hover:tw-bg-blue-800">
                    Post comment
                </button>
            </form>
            <article class="tw-p-6 mb-6 tw-text-base tw-bg-white tw-rounded-lg dark:tw-bg-gray-900">
                <footer class="tw-flex tw-justify-between tw-items-center tw-mb-2">
                    <div class="tw-flex tw-items-center">
                        <p class="tw-inline-flex tw-items-center tw-mr-3 tw-text-sm tw-text-gray-900 dark:tw-text-white"><img
                                class="tw-mr-2 tw-w-6 tw-h-6 tw-rounded-full"
                                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                alt="Michael Gough">Michael Gough</p>
                        <p class="tw-text-sm tw-text-gray-600 dark:tw-text-gray-400"><time pubdate datetime="2022-02-08"
                                title="February 8th, 2022">Feb. 8, 2022</time></p>
                    </div>
                    <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                        class="tw-inline-flex tw-items-center tw-p-2 tw-text-sm tw-font-medium tw-text-center tw-text-gray-400 tw-bg-white tw-rounded-lg hover:tw-bg-gray-100 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-gray-50 dark:tw-bg-gray-900 dark:hover:tw-bg-gray-700 dark:focus:tw-ring-gray-600"
                        type="button">
                        <svg class="tw-w-5 tw-h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                            </path>
                        </svg>
                        <span class="tw-sr-only">Comment settings</span>
                    </button>
                    <!-- Dropdown menu -->
                    <div id="dropdownComment1"
                        class="tw-hidden tw-z-10 tw-w-36 tw-bg-white tw-rounded tw-divide-y tw-divide-gray-100 tw-shadow dark:tw-bg-gray-700 dark:tw-divide-gray-600">
                        <ul class="tw-py-1 tw-text-sm tw-text-gray-700 dark:tw-text-gray-200"
                            aria-labelledby="dropdownMenuIconHorizontalButton">
                            <li>
                                <a href="#"
                                    class="tw-block tw-py-2 tw-px-4 hover:tw-bg-gray-100 dark:hover:tw-bg-gray-600 dark:hover:tw-text-white">Edit</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="tw-block tw-py-2 tw-px-4 hover:tw-bg-gray-100 dark:hover:tw-bg-gray-600 dark:hover:tw-text-white">Remove</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="tw-block tw-py-2 tw-px-4 hover:tw-bg-gray-100 dark:hover:tw-bg-gray-600 dark:hover:tw-text-white">Report</a>
                            </li>
                        </ul>
                    </div>
                </footer>
                <p class="tw-text-gray-500 dark:tw-text-gray-400">Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
                    instruments for the UX designers. The knowledge of the design tools are as important as the
                    creation of the design strategy.</p>
                <div class="tw-flex tw-items-center tw-mt-4 tw-space-x-4">
                    <button type="button"
                        class="tw-flex tw-items-center tw-text-sm tw-text-gray-500 hover:tw-underline dark:tw-text-gray-400">
                        <svg aria-hidden="true" class="tw-mr-1 tw-w-4 tw-h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                        Reply
                    </button>
                </div>
            </article>
            <article class="tw-p-6 tw-mb-6 tw-ml-6 lg:tw-ml-12 tw-text-base tw-bg-white tw-rounded-lg dark:tw-bg-gray-900">
                <footer class="tw-flex tw-justify-between tw-items-center tw-mb-2">
                    <div class="tw-flex tw-items-center">
                        <p class="tw-inline-flex tw-items-center tw-mr-3 tw-text-sm tw-text-gray-900 dark:tw-text-white"><img
                                class="tw-mr-2 tw-w-6 tw-h-6 tw-rounded-full"
                                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                alt="Jese Leos">Jese Leos</p>
                        <p class="tw-text-sm tw-text-gray-600 dark:tw-text-gray-400"><time pubdate datetime="2022-02-12"
                                title="February 12th, 2022">Feb. 12, 2022</time></p>
                    </div>
                    <button id="dropdownComment2Button" data-dropdown-toggle="dropdownComment2"
                        class="tw-inline-flex tw-items-center tw-p-2 tw-text-sm tw-font-medium tw-text-center tw-text-gray-400 tw-bg-white tw-rounded-lg hover:tw-bg-gray-100 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-gray-50 dark:tw-bg-gray-900 dark:hover:tw-bg-gray-700 dark:focus:tw-ring-gray-600"
                        type="button">
                        <svg class="tw-w-5 tw-h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                            </path>
                        </svg>
                        <span class="tw-sr-only">Comment settings</span>
                    </button>
                    <!-- Dropdown menu -->
                    <div id="dropdownComment2"
                        class="tw-hidden tw-z-10 tw-w-36 tw-bg-white tw-rounded tw-divide-y tw-divide-gray-100 tw-shadow dark:tw-bg-gray-700 dark:tw-divide-gray-600">
                        <ul class="tw-py-1 tw-text-sm tw-text-gray-700 dark:tw-text-gray-200"
                            aria-labelledby="dropdownMenuIconHorizontalButton">
                            <li>
                                <a href="#"
                                    class="tw-block tw-py-2 tw-px-4 hover:tw-bg-gray-100 dark:hover:tw-bg-gray-600 dark:hover:tw-text-white">Edit</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="tw-block tw-py-2 tw-px-4 hover:tw-bg-gray-100 dark:hover:tw-bg-gray-600 dark:hover:tw-text-white">Remove</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="tw-block tw-py-2 tw-px-4 hover:tw-bg-gray-100 dark:hover:tw-bg-gray-600 dark:hover:tw-text-white">Report</a>
                            </li>
                        </ul>
                    </div>
                </footer>
                <p class="tw-text-gray-500 dark:tw-text-gray-400">Much appreciated! Glad you liked it ☺️</p>
                <div class="tw-flex tw-items-center tw-mt-4 tw-space-x-4">
                    <button type="button"
                        class="tw-flex tw-items-center tw-text-sm tw-text-gray-500 hover:tw-underline dark:tw-text-gray-400">
                        <svg aria-hidden="true" class="tw-mr-1 tw-w-4 tw-h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                        Reply
                    </button>
                </div>
            </article>
            <article class="tw-p-6 tw-mb-6 tw-text-base tw-bg-white tw-border-t tw-border-gray-200 dark:tw-border-gray-700 dark:tw-bg-gray-900">
                <footer class="tw-flex tw-justify-between tw-items-center tw-mb-2">
                    <div class="tw-flex tw-items-center">
                        <p class="tw-inline-flex tw-items-center tw-mr-3 tw-text-sm tw-text-gray-900 dark:tw-text-white"><img
                                class="tw-mr-2 tw-w-6 tw-h-6 tw-rounded-full"
                                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                alt="Bonnie Green">Bonnie Green</p>
                        <p class="tw-text-sm tw-text-gray-600 dark:tw-text-gray-400"><time pubdate datetime="2022-03-12"
                                title="March 12th, 2022">Mar. 12, 2022</time></p>
                    </div>
                    <button id="dropdownComment3Button" data-dropdown-toggle="dropdownComment3"
                        class="tw-inline-flex tw-items-center tw-p-2 tw-text-sm tw-font-medium tw-text-center tw-text-gray-400 tw-bg-white tw-rounded-lg hover:tw-bg-gray-100 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-gray-50 dark:tw-bg-gray-900 dark:hover:tw-bg-gray-700 dark:focus:tw-ring-gray-600"
                        type="button">
                        <svg class="tw-w-5 tw-h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                            </path>
                        </svg>
                        <span class="tw-sr-only">Comment settings</span>
                    </button>
                    <!-- Dropdown menu -->
                    <div id="dropdownComment3"
                        class="tw-hidden tw-z-10 tw-w-36 tw-bg-white tw-rounded tw-divide-y tw-divide-gray-100 tw-shadow dark:tw-bg-gray-700 dark:tw-divide-gray-600">
                        <ul class="tw-py-1 tw-text-sm tw-text-gray-700 dark:tw-text-gray-200"
                            aria-labelledby="dropdownMenuIconHorizontalButton">
                            <li>
                                <a href="#"
                                    class="tw-block tw-py-2 tw-px-4 hover:tw-bg-gray-100 dark:hover:tw-bg-gray-600 dark:hover:tw-text-white">Edit</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="tw-block tw-py-2 tw-px-4 hover:tw-bg-gray-100 dark:hover:tw-bg-gray-600 dark:hover:tw-text-white">Remove</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="tw-block tw-py-2 tw-px-4 hover:tw-bg-gray-100 dark:hover:tw-bg-gray-600 dark:hover:tw-text-white">Report</a>
                            </li>
                        </ul>
                    </div>
                </footer>
                <p class="tw-text-tw-gray-500 dark:tw-text-gray-400">The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.</p>
                <div class="tw-flex tw-items-center tw-mt-4 tw-space-x-4">
                    <button type="button"
                        class="tw-flex tw-items-center tw-text-sm tw-text-gray-500 hover:tw-underline dark:tw-text-gray-400">
                        <svg aria-hidden="true" class="tw-mr-1 tw-w-4 tw-h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                        Reply
                    </button>
                </div>
            </article>
            <article class="tw-p-6 tw-text-base tw-bg-white tw-border-t tw-border-gray-200 dark:tw-border-gray-700 dark:tw-bg-gray-900">
                <footer class="tw-flex tw-justify-between tw-items-center tw-mb-2">
                    <div class="tw-flex tw-items-center">
                        <p class="tw-inline-flex tw-items-center tw-mr-3 tw-text-sm tw-text-gray-900 dark:tw-text-white"><img
                                class="tw-mr-2 tw-w-6 tw-h-6 tw-rounded-full"
                                src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                                alt="Helene Engels">Helene Engels</p>
                        <p class="tw-text-sm tw-text-gray-600 dark:tw-text-gray-400"><time pubdate datetime="2022-06-23"
                                title="June 23rd, 2022">Jun. 23, 2022</time></p>
                    </div>
                    <button id="dropdownComment4Button" data-dropdown-toggle="dropdownComment4"
                        class="tw-inline-flex tw-items-center tw-p-2 tw-text-sm tw-font-medium tw-text-center tw-text-gray-400 tw-bg-white tw-rounded-lg hover:tw-bg-gray-100 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-gray-50 dark:tw-bg-gray-900 dark:hover:tw-bg-gray-700 dark:focus:tw-ring-gray-600"
                        type="button">
                        <svg class="tw-w-5 tw-h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                            </path>
                        </svg>
                    </button>
                    <!-- Dropdown menu -->
                    <div id="dropdownComment4"
                        class="tw-hidden tw-z-10 tw-w-36 tw-bg-white tw-rounded tw-divide-y tw-divide-gray-100 tw-shadow dark:tw-bg-gray-700 dark:tw-divide-gray-600">
                        <ul class="tw-py-1 tw-text-sm tw-text-gray-700 dark:tw-text-gray-200"
                            aria-labelledby="dropdownMenuIconHorizontalButton">
                            <li>
                                <a href="#"
                                    class="tw-block tw-py-2 tw-px-4 hover:tw-bg-gray-100 dark:hover:tw-bg-gray-600 dark:hover:tw-text-white">Edit</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="tw-block tw-py-2 tw-px-4 hover:tw-bg-gray-100 dark:hover:tw-bg-gray-600 dark:hover:tw-text-white">Remove</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="tw-block tw-py-2 tw-px-4 hover:tw-bg-gray-100 dark:hover:tw-bg-gray-600 dark:hover:tw-text-white">Report</a>
                            </li>
                        </ul>
                    </div>
                </footer>
                <p class="tw-text-gray-500 dark:tw-text-gray-400">Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.</p>
                <div class="tw-flex tw-items-center tw-mt-4 tw-space-x-4">
                    <button type="button"
                        class="tw-flex items-center tw-text-sm text-gray-500 hover:tw-underline dark:tw-text-gray-400">
                        <svg aria-hidden="true" class="tw-mr-1 tw-w-4 tw-h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                        Reply
                    </button>
                </div>
            </article>
        </div>
    </section>
</template>
