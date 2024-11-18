'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function FilterNavBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set('capacity', filter);
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className='flex border border-l-primary-800'>
      <Button filter='all' handleFilter={handleFilter}>
        All Cabins
      </Button>
      <Button filter='small' handleFilter={handleFilter}>
        Small
      </Button>
      <Button filter='medium' handleFilter={handleFilter}>
        Medium
      </Button>
      <Button filter='large' handleFilter={handleFilter}>
        Large
      </Button>
    </div>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  filter: string;
  handleFilter: (filter: string) => void;
}

function Button({ children, filter, handleFilter }: ButtonProps) {
  return (
    <button
      className='px-5 py-2 hover:bg-primary-700'
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default FilterNavBar;
