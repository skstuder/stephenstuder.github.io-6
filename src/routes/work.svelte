<script>

</script>


<div class="card flex">
	<ul class="flex flex-col work">
		<h1 class="heading">Experience: Mid-Level</h1>
		<li><h3>Trek Bicycle Corp</h3><span class="bg-green-400 highlight">User Interface Developer | October 2020 - Current</span></li>
		<li><h3>Centuri Contruction </h3><span class="test">Application Developer | May 2020 - Ocotober 2020</span></li>
		<li><h3>JOA Software</h3><span> Frontend Developer | May 2019 - May 2020</span></li>
	</ul>
	<div class="contact">
		<h2>Get in Contact</h2>
		<span class="social">
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
				<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
				<rect x="2" y="9" width="4" height="12"></rect>
				<circle cx="4" cy="4" r="2"></circle>
			</svg>
			<a target="_blank" href="https://linkedin.com/in/stephenkstuder">- linkedin.com/in/stephenkstuder/</a>
		</span>
		<span class="social">
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
				></path>
			</svg>
			<a target="_blank" href="https://github.com/stephenstuder">- github.com/stephenstuder</a>
		</span>
		<span class="social">
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
				<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
				<polyline points="22,6 12,13 2,6"></polyline>
			</svg>

			<a href="#">- stephenkstuder@gmail.com</a>
		</span>
	</div>
</div>

<style>
	.flex-col {
		flex-direction: column;
	}
	h3 {
		font-size: var(--h4);
		margin-bottom: 0;
	}
	.heading {
		background: var(--white);
		color: var(--textColor);
		padding: 10px 20px;
		font-size: 3rem;
		display:inline;	
		margin-bottom: 0;
		width: fit-content;		
	}
	h1 {
		font-size: 3rem;
	}
	a {
		color: white;
		margin-bottom: 10px;
	}
	p {
		word-spacing: 3px;
	}
	.social a {
		margin: 10px;
		padding: 1px;
		text-decoration: none;
	}
	.work {
		flex: 2;
	}
	.contact {
		flex: 1;
	}
	.social {
		display: flex; 
		justify-content: flex-start;
		align-items: center;
	}
	.social:hover {
		text-decoration: underline;
	}
	@media only screen and (max-width: 900px) {
		.flex {
			flex-direction: column;	
		}
	}

</style>
