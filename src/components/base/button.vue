<template>
	<button
		:type="props.type"
		:class="buttonClasses"
		class="w-full rounded-lg px-5 py-3 text-center text-base font-medium focus:ring-4 sm:w-auto"
		@click="emit('click')"
	>
		<slot />
	</button>
</template>

<script lang="ts">
export enum ButtonColor {
	Primary = 'primary',
	Secondary = 'secondary',
}
</script>

<script setup lang="ts">
import { computed, type PropType } from 'vue';

const buttonClasses = computed(() => {
	switch (props.color) {
		case ButtonColor.Primary:
			return 'bg-primary-700 text-white hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800';
		case ButtonColor.Secondary:
			return 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-100 dark:bg-primary-400 dark:hover:bg-primary-500 dark:focus:ring-primary-600';
	}
});

const props = defineProps({
	type: {
		type: String as PropType<'submit' | 'reset' | 'button'>,
		required: true,
	},
	color: {
		type: String as PropType<ButtonColor>,
		required: true,
	},
});

const emit = defineEmits(['click']);
</script>
