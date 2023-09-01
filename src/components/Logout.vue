<template></template>

<script setup lang="ts">
import { api, url } from '@lib/helpers';

fetch(api('auth/logout'), {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
	credentials: 'include',
})
	.then((response) => response.json())
	.then((data) => {
		console.log('Success:', data);
		window.location.href = url();
	})
	.catch((error) => {
		console.error('Error:', error);
	});

</script>
