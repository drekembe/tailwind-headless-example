import { Button } from '@supa/components';
import { BeakerIcon } from '@heroicons/react/24/solid';
export default function Page() {
  return (
    <div className="compact">
      <div className="bg-lime-300 p-5 compact:p-2 compact:text-sm transition-all hover:bg-slate-300">
        page
      </div>
      <div>
        <Button intent="primary" size="medium">
          Helo
        </Button>
      </div>
    </div>
  );
}
