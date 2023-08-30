import type { APIRoute } from 'astro';
import { url } from '../../lib/data.js';

export const GET: APIRoute = ({ redirect }) =>  {
	// Send request to backend to logout
  return redirect(url(), 302);
}
