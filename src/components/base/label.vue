<template>
	<label class="mb-2 block text-sm font-medium text-gray-900 dark:text-white" :for="props.for">
		<slot />
	</label>
</template>

<script setup lang="ts">
const props = defineProps({
	for: {
		type: String,
		required: true,
	},
});
</script>
