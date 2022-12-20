import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (params.slug === 'tips-for-learning-a-large-new-codebase-quickly') {
		return {
			slug: params.slug
		};
	}
	if (params.slug === 'should-i-become-a-front-end-developer') {
		return {
			slug: params.slug
		};
	}

	throw error(404, 'Not found');
}
