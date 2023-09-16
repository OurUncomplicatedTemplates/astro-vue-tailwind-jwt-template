<template>
	<div
		class="pt:mt-0 mx-auto flex w-full flex-col items-center justify-center px-6 pt-8 dark:bg-gray-900"
	>
		<a
			:href="url()"
			class="mb-8 flex items-center justify-center text-2xl font-semibold dark:text-white lg:mb-10"
		>
			<img :src="asset('images/logo.svg')" alt="Logo" class="mr-4 h-11" />
			<span>{{ SITE_TITLE_SHORT }}</span>
		</a>
		<!-- Card -->
		<div class="w-full max-w-xl space-y-8 rounded-lg bg-white p-6 shadow dark:bg-gray-800 sm:p-8">
			<h2 class="text-2xl font-bold text-gray-900 dark:text-white">Sign in to platform</h2>
			<div class="mt-8 space-y-6">
				<div>
					<label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
						>Your email</label
					>
					<input
						v-model="formFields.email"
						type="email"
						name="email"
						id="email"
						class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm"
						placeholder="name@company.com"
						required
					/>
				</div>
				<div>
					<label for="password" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
						>Your password</label
					>
					<input
						v-model="formFields.password"
						type="password"
						name="password"
						id="password"
						placeholder="••••••••"
						class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm"
						required
					/>
				</div>
				<div class="flex flex-wrap items-start">
					<a
						:href="url('auth/forgot-password')"
						class="ml-auto mt-4 w-full text-left text-sm text-primary-700 hover:underline dark:text-primary-500"
						>Lost Password?</a
					>
				</div>
				<button
					@click="onSubmit"
					class="w-full rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto"
				>
					Login to your account
				</button>
				<div class="text-sm font-medium text-gray-500 dark:text-gray-400">
					Not registered?
					<a
						:href="url('auth/register')"
						class="text-primary-700 hover:underline dark:text-primary-500"
						>Create account</a
					>
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

	fetch(api('auth/login'), {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include',
		body: JSON.stringify(formFields.value),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log('Success:', data);
			window.location.href = url('u');
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}
</script>
