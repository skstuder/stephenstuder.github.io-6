var ghpages = require('gh-pages');

ghpages.publish(
	'./build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/stephenstuder/stephenstuder.github.io', // Update to point to your repository
		user: {
			name: 'stephenstuder', // update to use your name
			email: 'stephenkstuder@gmail.com' // Update to use your email
		}
	},
	() => {
		console.log('Deploy Complete!');
	}
);
