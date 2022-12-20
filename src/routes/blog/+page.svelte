<script>
	import BlogOne from '../assets/blogs/tips-for-learning-a-large-new-codebase-quickly.md';
	import BlogTwo from '../assets/blogs/should-i-become-a-front-end-developer.md';
	import NotFound from '../views/NotFound.vue';
	export default {
		components: {
			BlogOne,
			BlogTwo,
			NotFound
		}
	};
</script>

<template>
	<main>
		<BlogOne
			v-if="
            $route.params.title === 'tips-for-learning-a-large-new-codebase-quickly'
          "
		/>
		<BlogTwo
			v-else-if="
            $route.params.title === 'should-i-become-a-front-end-developer'
          "
		/>
		<NotFound v-else />
	</main>
</template>
