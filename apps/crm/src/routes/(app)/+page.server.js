/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	// console.log('Locals object:', locals);

	// You can also log specific properties of locals if you know they exist
	// For example, if you have a user property:
	// console.log('User from locals:', locals.user);

	// Return an empty object or any data you want to pass to the page
	return {};
}
