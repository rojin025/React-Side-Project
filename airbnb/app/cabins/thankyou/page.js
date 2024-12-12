import Link from 'next/link';

export default function Page() {
  return (
    <div className='mt-4 space-y-6 text-center'>
      <h1 className='text-3xl font-semibold'>
        Thank you for your reservations!
      </h1>
      <Link
        href='/account/reservations'
        className='test-xl inline-block text-accent-500 underline'
      >
        Manage your reservations
      </Link>
      <br />
      <Link href='/' className='test-xl inline-block text-accent-500 underline'>
        Home
      </Link>
    </div>
  );
}
