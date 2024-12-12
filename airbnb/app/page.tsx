import Link from 'next/link';
import Image from 'next/image';
import bg from '@/public/bg.png';

export default function Home() {
  return (
    <main className='mt-24'>
      <Image
        src={bg}
        fill
        placeholder='blur'
        quality={80}
        className='object-cover object-top'
        alt='Forests with welcoming home'
      />

      <div className='relative z-10 text-center'>
        <h1 className='mb-10 text-8xl font-normal tracking-tight text-primary-50'>
          Welcome Home.
        </h1>
        <Link
          href='/cabins'
          className='bg-accent-400 px-8 py-6 text-lg font-semibold text-primary-800 transition-all hover:bg-accent-600'
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
