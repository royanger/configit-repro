import { auth } from '@clerk/nextjs/server';
import { unauthorized } from 'next/navigation';

/**
 * Get the user id of the current user.
 *
 * This API looks in the auth token to get the user id, so its cheap to call.
 *
 * If the user is not logged in, this function will call the `notFound` vercel function, that gives a 404 error,
 * see https://nextjs.org/docs/app/api-reference/functions/not-found
 *
 * @returns the user id
 */
export async function getUserId() {
  const { userId } = await auth();
  if (!userId) {
    unauthorized();
  }
  return userId!;
}

/**
 * Try to get the user id of the current user.
 *
 * @returns the user id, or undefined if the user is not logged in.
 */
export async function tryGetUserId() {
  const { userId } = await auth();
  return userId || undefined;
}
