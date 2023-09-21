import { sequence } from 'astro:middleware';
import { auth } from './auth';
import { user } from './user';

export const onRequest = sequence(auth, user);
