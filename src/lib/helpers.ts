export const url = (path = '') => {
	return `${import.meta.env.BASE_URL}${path}`;
};

export const api = (path = '') => {
	return `${import.meta.env.PUBLIC_API_URL}${path}`;
};

export const asset = (path: string) => {
	return `/${path}`;
};
