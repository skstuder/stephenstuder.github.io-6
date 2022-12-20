<script>
	let toggleMenu = false;
	let isDesktop = false;

	$: innerWidth = onResize(innerWidth);

	function onResize(innerWidth) {
		if (window.innerWidth > 600) {
			isDesktop = true;
		} else {
			isDesktop = false;
		}
	}
</script>

<svelte:window bind:innerWidth />

{#if isDesktop}
	<header>
		<a href="/">Stephen Studer</a>
		<nav>
			<div>
				<a href="/about">About</a>
				<a href="/projects">Projects</a>
				<a href="/blogs">Blog</a>
			</div>
		</nav>
	</header>
{:else}
	<header class="hamburger-menu">
		<div
			id="nav-icon3"
			class:open={toggleMenu}
			on:click={() => (toggleMenu = !toggleMenu)}
			on:keydown={() => (toggleMenu = !toggleMenu)}
		>
			<span />
			<span />
			<span />
			<span />
		</div>
	</header>
{/if}

{#if toggleMenu}
	<div class="flex flex-col drop-menu">
		<a on:click={() => (toggleMenu = !toggleMenu)} class="drop-menu-item" href="/">Home</a>
		<a on:click={() => (toggleMenu = !toggleMenu)} class="drop-menu-item" href="/about">About</a>

		<a on:click={() => (toggleMenu = !toggleMenu)} class="drop-menu-item" href="/projects"
			>Projects</a
		>
		<a on:click={() => (toggleMenu = !toggleMenu)} class="drop-menu-item" href="/blogs">Blog</a>
	</div>
{/if}

<style>
	.hamburger-menu {
		justify-content: flex-end;
		display: flex;
	}

	.drop-menu {
		height: fit-content;
		font-family: var(--headingFont);
		width: 55vw;
		margin-top: var(--headerHeight);
		background: #53526d;
		position: fixed;
		z-index: 1;
		border-radius: 10px;
		right: 0;
	}

	.drop-menu-item {
		text-align: center;
		padding: 10px;
		color: var(--offWhite);
	}

	#nav-icon3 {
		width: 30px;
		height: 25px;
		position: relative;
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-transition: 0.5s ease-in-out;
		-moz-transition: 0.5s ease-in-out;
		-o-transition: 0.5s ease-in-out;
		transition: 0.5s ease-in-out;
		cursor: pointer;
	}
	#nav-icon3 span {
		display: block;
		position: absolute;
		height: 5px;
		width: 100%;
		background: var(--offWhite);
		border-radius: 9px;
		opacity: 1;
		left: 0;
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-transition: 0.25s ease-in-out;
		-moz-transition: 0.25s ease-in-out;
		-o-transition: 0.25s ease-in-out;
		transition: 0.25s ease-in-out;
	}
	#nav-icon3 span:nth-child(1) {
		top: 0px;
	}

	#nav-icon3 span:nth-child(2),
	#nav-icon3 span:nth-child(3) {
		top: 10px;
	}

	#nav-icon3 span:nth-child(4) {
		top: 20.5px;
	}

	#nav-icon3.open span:nth-child(1) {
		top: 18px;
		width: 0%;
		left: 50%;
	}

	#nav-icon3.open span:nth-child(2) {
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
	}

	#nav-icon3.open span:nth-child(3) {
		-webkit-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
		-o-transform: rotate(-45deg);
		transform: rotate(-45deg);
	}

	#nav-icon3.open span:nth-child(4) {
		top: 18px;
		width: 0%;
		left: 50%;
	}
</style>
