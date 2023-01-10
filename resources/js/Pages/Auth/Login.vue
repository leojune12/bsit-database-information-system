<script setup>
import Checkbox from '@/Components/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <section class="tw-bg-gradient-to-b tw-from-pink-900 tw-to-pink-600">
        <div class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-6 tw-py-8 tw-mx-auto tw-h-screen lg:tw-py-12">
            <div class="tw-mx-auto tw-max-w-screen-lg tw-text-center tw-basis-3/5">
                <div class="tw-flex tw-gap-x-12">
                    <div class="tw-flex tw-w-28 tw-h-28 tw-justify-center tw-items-center">
                        <img src="/capsu_logo.png" alt="" class="tw-w-20">
                    </div>
                    <Link href="/" class="tw-flex tw-items-center">
                        <h1 class="tw-text-4xl tw-font-extrabold tw-tracking-tight tw-leading-none tw-text-white md:tw-text-5xl lg:tw-text-5xl dark:tw-text-white">Database Information System for BSIT Student</h1>
                    </Link>
                    <div class="tw-flex tw-w-28 tw-h-28 tw-justify-center tw-items-center">
                        <img src="/capsu_logo.png" alt="" class="tw-w-20">
                    </div>
                </div>
            </div>
            <div class="tw-w-full tw-bg-white tw-rounded-lg tw-shadow dark:tw-border md:tw-mt-0 sm:tw-max-w-md xl:tw-p-0 dark:tw-bg-gray-800 dark:tw-border-gray-700">
                <div class="tw-p-6 tw-space-y-4 md:tw-space-y-6 sm:tw-p-8">
                    <h1 class="tw-text-xl tw-font-bold tw-leading-tight tw-tracking-tight tw-text-gray-900 md:tw-text-2xl dark:tw-text-white">
                        Welcome back!
                    </h1>
                    <form @submit.prevent="submit" class="tw-space-y-4 md:tw-space-y-6" action="#">
                        <div>
                            <label for="email" class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                v-model="form.email"
                                class="tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:tw-ring-blue-600 focus:tw-border-blue-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500"
                                placeholder="Email"
                                required=""
                            >
                        </div>
                        <div>
                            <label for="password" class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                v-model="form.password"
                                placeholder="Password"
                                class="tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:tw-ring-blue-600 focus:tw-border-blue-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500"
                                required=""
                            >
                        </div>
                        <div class="tw-flex tw-items-center tw-justify-between">
                            <div class="tw-flex tw-items-center">
                                <div class="tw-block">
                                    <label class="tw-flex tw-items-center">
                                        <Checkbox name="remember" v-model:checked="form.remember" />
                                        <span class="tw-ml-2 tw-text-sm tw-text-gray-600">Remember me</span>
                                    </label>
                                </div>
                            </div>
                            <Link
                                v-if="canResetPassword"
                                :href="route('password.request')"
                                class="tw-underline tw-text-sm tw-text-gray-600 hover:tw-text-gray-900 tw-rounded-md focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-indigo-500"
                            >
                                Forgot password?
                            </Link>
                        </div>
                        <button type="submit" :class="[form.processing ? 'tw-opacity-25' : '', 'tw-w-full tw-text-white tw-bg-pink-600 hover:tw-bg-pink-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-pink-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center dark:tw-bg-pink-600 dark:hover:tw-bg-pink-800 dark:focus:tw-ring-pink-900']"
                        :disabled="form.processing"
                        >
                            Sign in
                        </button>
                        <!-- <PrimaryButton class="tw-ml-4" :class="{ 'tw-opacity-25': form.processing }" :disabled="form.processing">
                            Log in
                        </PrimaryButton> -->
                        <p class="tw-text-sm tw-font-light tw-text-gray-500 dark:tw-text-gray-400">
                            Don’t have an account yet? <Link href="/register" class="tw-font-medium tw-text-blue-600 hover:tw-underline dark:tw-text-blue-500">Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
