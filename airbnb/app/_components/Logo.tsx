import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/logo.png';

function Logo() {
  return (
    <Link href='/' className='z-10 flex items-center gap-4'>
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}
      <Image
        src={logo}
        height='60'
        width='60'
        quality={50}
        alt='The AirBnB logo'
        className='rounded-full'
      />
      <span className='hidden text-xl font-semibold text-primary-100 sm:block'>
        The AirBnB
      </span>
    </Link>
  );
}

export default Logo;
