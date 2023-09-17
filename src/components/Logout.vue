<template></template>

<script setup lang="ts">
import { api, url } from '@lib/helpers';

fetch(api('auth/logout'), {
	method: 'POST',
	credentials: 'include',
}).then(() => {
	window.location.href = url();
});
</script>
