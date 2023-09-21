import { defineMiddleware } from 'astro:middleware';
import { url, api } from '@lib/helpers';

export const user = defineMiddleware(async ({ locals, request, redirect }, next) => {
	// If page url starts with '/u', then we know this is a user page.
	if (!new URL(request.url).pathname.startsWith('/u')) {
		return next();
	}

	// Check if the user is authenticated.
	if (!locals.isAuthenticated) {
		// If not, redirect to the login page.
		return redirect(url('auth/login'));
	}

	// Get User data from the API.
	const authenticationHeader = locals.authHeader as string;
	const userResponse = await (
		await fetch(api('auth/user'), {
			method: 'GET',
			headers: {
				Authorization: authenticationHeader,
			},
		})
	).json();

	// If the user is not found, redirect to the login page.
	if (!userResponse || userResponse?.statusCode <= 400) {
		return redirect(url('auth/login'));
	}

	// Otherwise, set the user data in the locals.
	locals.user = userResponse as User;

	return next();
});

export default user;
