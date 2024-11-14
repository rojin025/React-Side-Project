import CabinCard from '@/app/_components/CabinCard';
import { getCabins } from '../_lib/data-service';

async function CabinList() {
  const cabins = await getCabins();

  if (!cabins) return null;

  return (
    <div>
      {cabins.map((cabin: any) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
