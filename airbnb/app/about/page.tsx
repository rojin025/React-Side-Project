import Image from 'next/image';
import image1 from '@/public/about-1.jpg';
import { getCabins } from '../_lib/data-service';

export const revalidate = 0;

export const metadata = {
  title: 'About us',
};

export default async function Page() {
  const cabins = await getCabins();

  return (
    <div className='grid grid-cols-5 items-center gap-x-24 gap-y-32 text-lg'>
      <div className='col-span-3'>
        <h1 className='mb-10 text-4xl font-medium text-accent-400'>
          Welcome to The AirBnB
        </h1>

        <div className='space-y-8'>
          <p>
            Nestled in the serene embrace of the Italian Dolomites, our
            family-run retreat offers a harmonious blend of nature&apos;s beauty
            and comfortable living. Built with love and a deep respect for the
            land, this is more than a destination—it&apos;s a tradition of
            sharing the joys of our mountains with yours.
          </p>
          <p>
            Our {cabins.length} luxurious cabins are designed to be a cozy
            sanctuary, where you can reconnect with loved ones. But the true
            magic lies beyond your doorstep, in the expansive forests, rolling
            meadows, and starlit skies. This is where families come together,
            creating memories around campfires, hiking scenic trails, or soaking
            in private hot tubs under a canopy of stars.
          </p>
          <p>
            What makes us special isn&apos;t just the stunning landscape but the
            personal touch we bring to every stay. From the fresh-baked goods we
            deliver to your door to the stories of our family&apos;s history in
            the region, you&apos;ll feel like part of our extended family.
          </p>
        </div>
      </div>

      <div className='col-span-2'>
        <Image
          src={image1}
          alt='Family sitting around a fire pit in front of cabin'
          placeholder='blur'
          quality={80}
        />
      </div>

      <div className='relative col-span-2 aspect-square'>
        <Image
          src='/about-2.jpg'
          fill
          className='object-cover'
          alt='Family that manages The AirBnB'
        />
      </div>

      <div className='col-span-3'>
        <h1 className='mb-10 text-4xl font-medium text-accent-400'>
          Managed by our family since 1980
        </h1>

        <div className='space-y-8'>
          <p>
            Since 1980, The AirBnB has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we&apos;ve maintained the essence of The AirBnB,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you&apos;re not just a
            guest; you&apos;re part of our extended family. So join us at The
            AirBnB soon, where tradition meets tranquility, and every visit is
            like coming home.
          </p>

          <div>
            <a
              href='/cabins'
              className='mt-4 inline-block bg-accent-500 px-8 py-5 text-lg font-semibold text-primary-800 transition-all hover:bg-accent-600'
            >
              Explore our luxury cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
