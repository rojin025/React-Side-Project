'use client';

import ReservationCard from '@/app/_components/ReservationCard';

import deleteBooking from '@/app/_lib/action';

async function ReservationList({ bookings }) {
  async function handleDelete(bookingId) {
    await deleteBooking(bookingId);
  }

  return (
    <ul className='space-y-6'>
      {bookings.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default ReservationList;
