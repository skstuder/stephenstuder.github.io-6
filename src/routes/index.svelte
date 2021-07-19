<script context="module">
	export const prerender = true;
</script>

<script>
	import { fly } from 'svelte/transition';
	import stephenImg from '/static/stephen.png';
	import bubbleImg from '/static/bubble.png';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section in:fly={{ y: -50, duration: 250, delay: 300 }} out:fly={{ y: -50, duration: 250 }}>
	<div class="flex flex-align-center flex-justify-center w-100 mb-5">
		<div>
			<img src={stephenImg} alt="cartoon Stephen" />
			<img class="bubble big-screen-bubble" src={bubbleImg} alt="speech bubble" />
			<p class="bubble big-screen-bubble-text">"Wide monitor, nice!"</p>
		</div>
		<div class="contact">
			<h2 class="m-0 p-0">Get in Contact</h2>
			<span class="social flex flex-row flex-align-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-linkedin"
				>
					<path
						d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
					/>
					<rect x="2" y="9" width="4" height="12" />
					<circle cx="4" cy="4" r="2" />
				</svg>
				<a target="_blank" href="https://linkedin.com/in/stephenkstuder"
					>- linkedin.com/in/stephenkstuder/</a
				>
			</span>
			<span class="social flex flex-row flex-align-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-github"
				>
					<path
						d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
					/>
				</svg>
				<a target="_blank" href="https://github.com/stephenstuder">- github.com/stephenstuder</a>
			</span>
			<span class="social flex flex-row flex-align-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-mail"
				>
					<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
					<polyline points="22,6 12,13 2,6" />
				</svg>

				<a href="#">- stephenkstuder@gmail.com</a>
			</span>
		</div>
	</div>
	<div class="card p-5">
		<h3>
			Front End Developer | Vue.js Specialist | Husband | Father | Motocrosser | Coffee Addict |
			English Bulldog Dad | Flowboarder | Fan of physical activity | Former Bartender | Arizona
			Native
		</h3>
	</div>
</section>

<style>
	h3 {
		font-size: var(--h2);
		word-spacing: 15px;
		font-family: var(--bodyFont);
		font-weight: bold;
	}
	.m-0 {
		margin: 0;
		padding: 0;
	}
	.w-100 {
		width: 100%;
	}
	.mb-5 {
		margin-bottom: 50px;
	}
	.p-5 {
		padding: 76px;
	}
	.flex-justify-center {
		justify-content: center;
	}
	img {
		margin-right: 50px;
	}
	.bubble {
		display: none;
	}
	.social a {
		margin: 10px;
		padding: 1px;
		text-decoration: none;
		color: var(--black);
	}
	.social:hover {
		text-decoration: underline;
	}

	@media only screen and (max-width: 640px) {
		img {
			margin-right: 0px;
		}
	}
	@media only screen and (min-width: 1800px) {
		img {
			width: 400px;
			height: 400px;
		}
		.bubble {
			display: block;
		}
		.big-screen-bubble {
			transform: rotate(-20deg);
			position: absolute;
			top: 220px;
			width: 190px;
			height: 160px;
		}
		.big-screen-bubble-text {
			position: absolute;
			top: 270px;
			width: 150px;
			margin-left: 30px;
			font-size: 12px;
		}
		.p-5 {
			padding: 54px;
		}
	}
</style>
