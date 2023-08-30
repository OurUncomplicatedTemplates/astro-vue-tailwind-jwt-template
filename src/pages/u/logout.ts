import { url } from '../../lib/data.js';

export async function get({ params, redirect }) {
	// Send request to backend to logout

  return redirect(url(), 302);
}
