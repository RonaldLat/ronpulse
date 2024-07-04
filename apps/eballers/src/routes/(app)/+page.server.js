export const load = ({ locals }) => {
	// const { pathname } = url;
	console.log(locals);

	return {
		pb: structuredClone(locals)
	};
};
