<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import '../reset.css';
	let consoleSignatureStyle = "font-size: 16px;" +
  	"background: linear-gradient(to right, #f2771a, #1b2d45);" +
  	"color: white;" +
  	"text-align: center;" +
  	"padding: 10px 15px;" +
  	"width: 100%;" +
  	"border-radius: 20px;";

	let consoleSignatureText = "%cQ: How do you help JavaScript Errors? \nA: You console them.";

	console.log(consoleSignatureText, consoleSignatureStyle);
</script>

<Header />

<main>
	<slot />
</main>
