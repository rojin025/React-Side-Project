'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { auth, signIn, signOut } from './auth';
import { supabase } from './supabase';

import { getBookings } from './data-service';

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

export async function deleteBooking(bookingId) {
  const session = await auth();
  if (!session) throw new Error('User most Logged in.');

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId))
    throw new Error('Unathorized Delete process.');

  // const { data, error } = await supabase
  //   .from('bookings')
  //   .delete()
  //   .eq('id', bookingId);

  // if (error) {
  //   console.error(error);
  //   throw new Error('Booking could not be deleted');
  // }

  console.log('Delete successfully', bookingId, guestBookingIds);

  revalidatePath('/account/reservations');
  // return data;
}

export async function updateBooking(formData) {
  const bookingId = Number(formData.get('bookingId'));

  // 1 Authed
  const session = await auth();
  if (!session) throw new Error('Must be logged in!');

  // 2 Authorized
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId))
    throw new Error('Unauthorized Update Process.');

  // 3 Build updated Data
  const updatedBooking = {
    numGuests: Number(formData.get('numGuests')),
    observations: formData.get('observations').slice(0, 1000),
  };

  // 4 Mutate
  const { error } = await supabase
    .from('bookings')
    .update(updatedBooking)
    .eq('id', bookingId)
    .select()
    .single();

  // 5 Error handling
  if (error) throw new Error('Unable to update Booking');

  // 6 Revalidate
  revalidatePath(`/account/reservations/edit/${bookingId}`);
  revalidatePath('/account/reservations');

  // 7 Redirect
  redirect('/account/reservations');
}
