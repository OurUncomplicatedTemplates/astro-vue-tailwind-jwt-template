<template>
	<div class="w-full flex flex-col items-center justify-center px-6 pt-8 mx-auto pt:mt-0 dark:bg-gray-900">
		<a :href="url()" class="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white">
			<img :src="asset('images/logo.svg')" alt="Logo" class="mr-4 h-11" />
			<span>{{ SITE_TITLE_SHORT }}</span>
		</a>
		<!-- Card -->
		<div class="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
			<h2 class="text-2xl font-bold text-gray-900 dark:text-white">Sign in to platform</h2>
			<div class="mt-8 space-y-6">
				<div>
					<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
					<input v-model="formFields.email" type="email" name="email" id="email"
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						placeholder="name@company.com" required />
				</div>
				<div>
					<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
					<input v-model="formFields.password" type="password" name="password" id="password" placeholder="••••••••"
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						required />
				</div>
				<div class="flex items-start flex-wrap">
					<a :href="url('auth/forgot-password')"
						class="ml-auto mt-4 text-left text-sm text-primary-700 hover:underline dark:text-primary-500 w-full">Lost
						Password?</a>
				</div>
				<button @click="onSubmit" class="w-full px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login
					to your account</button>
				<div class="text-sm font-medium text-gray-500 dark:text-gray-400">
					Not registered? <a :href="url('auth/register')" class="text-primary-700 hover:underline dark:text-primary-500">Create account</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { asset, api, url } from '@lib/helpers';
import { SITE_TITLE_SHORT } from '@lib/constants';
import { ref } from 'vue';

const formFields = ref({
	email: 'test@test.com',
	password: 'test@test.com',
});

function onSubmit() {
	console.log(formFields.value);
}

</script>
