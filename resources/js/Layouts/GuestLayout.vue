<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/inertia-vue3';
</script>

<template>
    <section class="tw-bg-gradient-to-b tw-from-pink-900 tw-to-pink-600 tw-min-h-screen">
        <div class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-6 tw-mx-auto tw-space-y-10 tw-pb-10 tw-pt-8 lg:tw-pt-12">
            <div class="tw-mx-auto tw-max-w-screen-lg tw-text-center">
                <div class="tw-flex tw-gap-x-12">
                    <div class="tw-flex tw-w-28 tw-h-28 tw-justify-center tw-items-center">
                        <img src="/capsu_logo.png" alt="" class="tw-w-20">
                    </div>
                    <Link href="/" class="tw-flex tw-items-center">
                        <h1 class="tw-text-4xl tw-font-extrabold tw-tracking-tight tw-leading-none tw-text-white md:tw-text-5xl lg:tw-text-5xl dark:tw-text-white">Database Information System for BSIT Student</h1>
                    </Link>
                    <div class="tw-flex tw-w-28 tw-h-28 tw-justify-center tw-items-center">
                        <img src="/it_logo.jpeg" alt="" class="tw-w-20">
                    </div>
                </div>
            </div>

            <slot />
        </div>
    </section>
</template>
