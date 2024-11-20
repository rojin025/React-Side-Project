import { getBookedDatesByCabinId, getSettings } from '../_lib/data-service';
import { CabinInterface } from './CabinList';
import DateSelector from './DateSelector';
import ReservationForm from './ReservationForm';

interface Props {
  cabin: CabinInterface;
}
async function Reservation({ cabin }: Props) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(String(cabin.id)),
  ]);

  return (
    <div className='grid min-h-[400px] grid-cols-2 border border-l-primary-800'>
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      <ReservationForm />
    </div>
  );
}

export default Reservation;
