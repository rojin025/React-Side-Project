'use server';

import { revalidatePath } from 'next/cache';
import { auth, signIn, signOut } from './auth';
import { supabase } from './supabase';

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
  // console.log('Update: ', formData);

  const session = await auth();
  if (!session) throw new error('User Must be logged in.');

  const [nationality, countryFlag] = formData.get('nationality').split('%');
  const nationalID = formData.get('nationalID');

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error('Invalid National ID');

  const updatedData = { nationalID, nationality, countryFlag };

  console.log(updatedData);

  const { data, error } = await supabase
    .from('guests')
    .update(updatedData)
    .eq('id', session.user.guestId);

  console.log('updated successfully');
  revalidatePath('/account/profile');
}
