<template>
	<div
		class="mt-6 flex items-center rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-gray-700 dark:text-red-400"
		role="alert"
		:class="buttonClasses"
	>
		<svg
			class="mr-3 inline h-4 w-4 flex-shrink-0"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
		>
			<path
				d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
			/>
		</svg>
		<div><slot /></div>
	</div>
</template>

<script lang="ts">
export enum AlertType {
	Info = 'info',
	Danger = 'danger',
	Success = 'success',
	Warning = 'warning',
}
</script>

<script setup lang="ts">
import { computed, type PropType } from 'vue';

const buttonClasses = computed(() => {
	switch (props.type) {
		case AlertType.Info:
			return 'bg-blue-50 text-blue-800 dark:bg-gray-700 dark:text-blue-400';
		case AlertType.Danger:
			return 'bg-red-50 text-red-800 dark:bg-gray-700 dark:text-red-400';
		case AlertType.Success:
			return 'bg-green-50 text-green-800 dark:bg-gray-700 dark:text-green-400';
		case AlertType.Warning:
			return 'bg-yellow-50 text-yellow-800 dark:bg-gray-700 dark:text-yellow-400';
	}
});

const props = defineProps({
	type: {
		type: String as PropType<AlertType>,
		required: true,
	},
});
</script>
