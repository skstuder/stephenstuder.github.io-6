<script>
	import { page } from '$app/stores';
</script>

<header>
	<div class="logo">
		<a href="/">
			<h3 class="text web">Stephen Studer</h3>
			<h3 class="text phone">SS</h3>
		</a>
	</div>

	<nav>

		<ul>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
			<li class:active={$page.path === '/todos'}><a sveltekit:prefetch href="/todos">Todos</a></li>
		</ul>

	</nav>


</header>

<style>
.logo {
	background: var(--orange);
	color: white;
	padding: 0px 20px;
	height: 100%;
}
.logo > a {
	text-decoration: none;
	color: white;
}
.web{
	display: none;
}
.phone {
	display: block;
}
.logo > a > h3 {
	transform: rotate(-10deg);
	margin: 0;
	margin-top: 15px;
	z-index: 5;
	position: relative;
}
.logo::after{
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 0;
    height: 0;
    border-color: var(--orange) transparent transparent;
    border-style: solid;
    border-width: 35px 65px 0 0;
    z-index: 1;

}
@media only screen and (min-width: 640px) {
	.logo::after{

    border-width: 35px 200px 0 0;

}
.web {
	display: block;
}
.phone {
	display: none;
}
}

</style>
