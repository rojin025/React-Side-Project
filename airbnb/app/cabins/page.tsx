import { Suspense } from 'react';

import CabinList from '../_components/CabinList';
import Spinner from '../_components/Spinner';
import FilterNavBar from '../_components/FilterNavBar';

export const revalidate = 0;
// export const revalidate = 3600;

export const metadata = {
  title: 'Cabins',
};

interface PageProps {
  searchParams: {
    capacity?: string;
  };
}

export default async function page({
  searchParams: { capacity = 'all' },
}: PageProps) {
  const filter = capacity;

  return (
    <div>
      <h1 className='mb-5 text-4xl font-medium text-accent-400'>Cabins</h1>
      <p className='mb-10 text-lg text-primary-200'>
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <div className='mb-8 flex justify-end'>
        <FilterNavBar />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
}
