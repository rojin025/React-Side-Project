import { signInDemoAction } from '@/app/_lib/action';

function SignInDemoButton() {
  return (
    <form action={signInDemoAction}>
      <button className='flex items-center gap-6 border border-primary-300 px-10 py-4 text-lg font-medium'>
        <span>Continue with Demo</span>
      </button>
    </form>
  );
}

export default SignInDemoButton;
