import Image from 'next/image';

import { EyeSlashIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/solid';

import TextExpander from '@/app/_components/TextExpander';

import Reservation from '@/app/_components/Reservation';
import { getCabin, getCabins } from '@/app/_lib/data-service';
import { Suspense } from 'react';
import Spinner from '@/app/_components/Spinner';

// export const metadata = {
//   title: "Cabin",
// };

interface Params {
  cabinId: string;
}

interface MetadataInterface {
  title: string;
}

export const revalidate = 10;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<MetadataInterface> {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
}

export async function generateStaticParams() {
  const cabins = await getCabins();

  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

  return ids;
}

export default async function Page({
  params,
}: {
  params: { cabinId: string };
}) {
  const cabin = await getCabin(params.cabinId);

  const { name, maxCapacity, image, description } = cabin;

  return (
    <div className='mx-auto mt-8 max-w-6xl'>
      <div className='mb-24 grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 px-10 py-3'>
        <div className='relative -translate-x-3 scale-[1.15]'>
          <Image
            src={image}
            fill
            className='object-cover'
            alt={`Cabin  ${name}`}
          />
        </div>

        <div>
          <h3 className='mb-5 w-[150%] translate-x-[-254px] bg-primary-950 p-6 pb-1 text-7xl font-black text-accent-100'>
            {name}
          </h3>

          <p className='mb-10 text-lg text-primary-300'>
            <TextExpander>{description}</TextExpander>
          </p>

          <ul className='mb-7 flex flex-col gap-4'>
            <li className='flex items-center gap-3'>
              <UsersIcon className='h-5 w-5 text-primary-600' />
              <span className='text-lg'>
                For up to <span className='font-bold'>{maxCapacity}</span>{' '}
                guests
              </span>
            </li>
            <li className='flex items-center gap-3'>
              <MapPinIcon className='h-5 w-5 text-primary-600' />
              <span className='text-lg'>
                Located in the heart of the{' '}
                <span className='font-bold'>Dolomites</span> (Italy)
              </span>
            </li>
            <li className='flex items-center gap-3'>
              <EyeSlashIcon className='h-5 w-5 text-primary-600' />
              <span className='text-lg'>
                Privacy <span className='font-bold'>100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className='mb-8 text-center text-5xl font-semibold text-accent-400'>
          Reserve {name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
