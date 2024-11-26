import { signIn } from '@/app/_lib/action';

function SignInButton() {
  return (
    <form action={signIn}>
      <button className='flex items-center gap-6 border border-primary-300 px-10 py-4 text-lg font-medium'>
        <img
          src='https://authjs.dev/img/providers/google.svg'
          alt='Google logo'
          height='24'
          width='24'
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
