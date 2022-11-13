import { CMS_API_KEY } from '$env/static/private';
import type { Load } from '@sveltejs/kit';
export const prerender = true;

export const load: Load = async ({ fetch }) => {
	try {
		const event = await fetch('https://606kpqbt4t.microcms.io/api/v1/contents', {
			headers: { 'X-MICROCMS-API-KEY': CMS_API_KEY }
		});
		if (!event.ok) throw Error();
		return event.json();
	} catch {
		return { error: true };
	}
};
