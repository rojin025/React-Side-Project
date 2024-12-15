import { signInAction } from '@/app/_lib/action';

import Image from 'next/image';

function SignInDemoButton() {
  return (
    <form action={signInAction}>
      <button className='flex items-center gap-6 border border-primary-300 px-10 py-4 text-lg font-medium'>
        <span>Continue with Demo</span>
      </button>
    </form>
  );
}

export default SignInDemoButton;
