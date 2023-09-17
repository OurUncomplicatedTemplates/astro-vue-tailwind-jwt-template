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
			<h2 class="text-2xl font-bold text-gray-900 dark:text-white">Create a Free Account</h2>
			<form class="mt-8 space-y-6" @submit.prevent="onSubmit" ref="form">
				<div>
					<label for="name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
						>Name</label
					>
					<input
						v-model="formFields.name"
						type="text"
						name="name"
						id="name"
						class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm"
						placeholder="John Doe"
						required
					/>
				</div>
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
						ref="password"
						v-model="formFields.password"
						type="password"
						name="password"
						id="password"
						placeholder="••••••••"
						class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm"
						required
					/>
				</div>
				<div>
					<label
						for="confirm-password"
						class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
						>Confirm password</label
					>
					<input
						ref="confirmPassword"
						v-model="formFields.confirmPassword"
						type="password"
						name="confirm-password"
						id="confirm-password"
						placeholder="••••••••"
						class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm"
						required
					/>
				</div>
				<div>
					<button
						type="submit"
						class="w-full rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto"
					>
						Create account
					</button>
					<span v-if="errorMessage" class="mb-4 ml-2 w-full text-xs text-red-600">{{
						errorMessage
					}}</span>
				</div>
				<div class="text-sm font-medium text-gray-500 dark:text-gray-400">
					Already have an account?
					<a
						:href="url('auth/login')"
						class="text-primary-700 hover:underline dark:text-primary-500"
						>Login here</a
					>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup lang="ts">
import { asset, api, url } from '@lib/helpers';
import { SITE_TITLE_SHORT } from '@lib/constants';
import { ref } from 'vue';

const form = ref<HTMLFormElement>();
const password = ref<HTMLInputElement>();
const confirmPassword = ref<HTMLInputElement>();

const formFields = ref({
	name: 'John Doe',
	email: 'test@test.com',
	password: 'test@test.com',
	confirmPassword: 'test@test.com',
});

const errorMessage = ref<null | string>(null);

function onSubmit() {
	console.log(formFields.value);

	errorMessage.value = null;

	if (formFields.value.password !== formFields.value.confirmPassword) {
		errorMessage.value = 'Passwords do not match';
	}

	if (!form.value?.checkValidity() || errorMessage.value) {
		form.value?.reportValidity();
		return;
	}

	fetch(api('auth/register'), {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			name: formFields.value.name,
			email: formFields.value.email,
			password: formFields.value.password,
		}),
	})
		.then(async (response) => {
			if (!response.ok) {
				if (response.status === 400) {
					const json = await response.json();
					errorMessage.value = json.message;

					throw new Error(json);
				}

				throw new Error(await response.text());
			}

			return response.json();
		})
		.then((data) => {
			console.log('Success:', data);
			window.location.href = url('auth/login');
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}
</script>
