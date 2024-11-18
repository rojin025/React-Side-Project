import CabinCard from '@/app/_components/CabinCard';
import { getCabins } from '../_lib/data-service';

export interface CabinInterface {
  id: number;
  created_at: string;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  image: string;
}

interface CabinListProps {
  filter: string;
}

async function CabinList({ filter }: CabinListProps) {
  console.log('CablinLIst:', filter);

  const cabins: CabinInterface[] | null = await getCabins();

  if (!cabins) {
    console.log('Cannot fetch Cabin.');
    return null;
  }

  let displayedCabins;

  if (filter === 'all') displayedCabins = cabins;
  else if (filter === 'small')
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  else if (filter === 'medium')
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );
  else if (filter === 'large')
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
  else displayedCabins = cabins;

  return (
    <div>
      {displayedCabins.length ? (
        displayedCabins.map((cabin: CabinInterface) => (
          <CabinCard cabin={cabin} key={cabin.id} />
        ))
      ) : (
        <h1 className='text-4xl text-primary-900'>
          Sorry; cannot find any cabin with that filter.
        </h1>
      )}
    </div>
  );
}

export default CabinList;
