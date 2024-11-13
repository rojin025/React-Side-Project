import { getCabin } from '@/app/_lib/data-service';
import CabinCard from '@/app/_components/CabinCard';

async function CabinList() {
  const cabins = await getCabin();

  if (!cabins.length) return null;

  return (
    <div>
      {cabins.map((cabin: any) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
