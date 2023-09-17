import { defineMiddleware } from 'astro:middleware';
import { jwtVerify, importSPKI } from 'jose';

export const auth = defineMiddleware(async ({ locals, request }, next) => {
	// Get the Authorization header.
	const authHeader = request.headers.get('Authorization');
	if (!authHeader) {
		// If it's not present, the user is not authenticated.
		locals.userId = null;
		locals.isAuthenticated = false;
		return next();
	}

	// Remove the "Bearer " prefix to get the raw token.
	const rawToken = authHeader.replace('Bearer ', '');

	// Import the public key.
	const publicKey = await importSPKI(import.meta.env.JWT_PUBLIC_KEY, 'EdDSA');

	// Verify the token.
	try {
		const { payload } = await jwtVerify(rawToken, publicKey, {
			algorithms: ['EdDSA'],
			clockTolerance: 5,
			requiredClaims: ['sub'],
		});

		// If the token is valid, the user is authenticated.
		locals.authHeader = authHeader ?? undefined;
		locals.userId = payload.sub ?? null;
		locals.isAuthenticated = payload.sub !== undefined;
	} catch (e) {
		// If the token is invalid, the user is not authenticated.
		locals.userId = null;
		locals.isAuthenticated = false;
	}

	return next();
});

export default auth;
