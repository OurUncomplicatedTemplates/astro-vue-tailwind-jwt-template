// NOTE: These helpers are useful for unifying paths, app-wide
export function url(path = '') {
	return `${import.meta.env.BASE_URL}${path}`;
}

export function api(path = '') {
	return `${import.meta.env.PUBLIC_API_URL}${path}`;
}

// TODO: Remove old local assets from git history (to make cloning snappier).
export function asset(path: string) {
	return `/${path}`;
}
