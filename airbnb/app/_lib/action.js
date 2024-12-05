'use server';

import { signIn, signOut } from './auth';

export async function signInAction() {
  await signIn('google', {
    redirectTo: '/account',
  });
}

export async function signOutAction() {
  await signOut({ redirectTo: '/' });
}

/** we can name anything for Formdata provided by nextJS API */
export async function updateGuest(formData) {
  console.log(formData);
}
