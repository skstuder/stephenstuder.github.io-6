<script>
	import SvelteMarkdown from 'svelte-markdown'
	export let data;
	const source = data.blogs[0].bio;
</script>


  {#each data.blogs as blog}
  <SvelteMarkdown {source} />
  {/each}




