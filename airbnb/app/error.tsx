'use client';

import Error from 'next/error';

interface HttpError extends Error {
  message: string;
  statusCode: number;
}

export default function ErrorPage({
  error,
  reset,
}: {
  error: HttpError;
  reset: () => void;
}) {
  return (
    <main className='flex flex-col items-center justify-center gap-6'>
      <h1 className='text-3xl font-semibold'>Something went wrong!</h1>
      <p className='text-lg'>{error.message}</p>

      <button
        className='inline-block bg-accent-500 px-6 py-3 text-lg text-primary-800'
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
