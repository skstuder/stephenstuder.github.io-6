<script>
	import BlogOne from '../../../blogs/tips-for-learning-a-large-new-codebase-quickly.md';
	import BlogTwo from '../../../blogs/should-i-become-a-front-end-developer.md';

	export let data;
</script>

{#if data.slug === 'tips-for-learning-a-large-new-codebase-quickly'}
	<BlogOne />
{/if}
{#if data.slug === 'should-i-become-a-front-end-developer'}
	<BlogTwo />
{/if}
