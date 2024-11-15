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

async function CabinList() {
  const cabins: CabinInterface[] | null = await getCabins();

  if (!cabins) return null;

  return (
    <div>
      {cabins.map((cabin: CabinInterface) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
