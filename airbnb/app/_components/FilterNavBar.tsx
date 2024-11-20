'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function FilterNavBar() {
  const urlSearchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = urlSearchParams.get('capacity') ?? 'all';

  function handleFilter(filter: string) {
    const searchParams = new URLSearchParams(urlSearchParams);
    searchParams.set('capacity', filter);
    router.replace(`${pathname}?${searchParams.toString()}`);
  }

  return (
    <div className='flex border border-l-primary-800'>
      <Button
        filter='all'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All Cabins
      </Button>
      <Button
        filter='small'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        2&mdash;3 guests
      </Button>
      <Button
        filter='medium'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7 guests
      </Button>
      <Button
        filter='large'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  filter: string;
  handleFilter: (filter: string) => void;
  activeFilter: string;
}

function Button({ children, filter, handleFilter, activeFilter }: ButtonProps) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${activeFilter === filter ? 'bg-primary-700 text-primary-50' : ''}`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default FilterNavBar;
