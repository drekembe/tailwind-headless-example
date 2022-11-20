import { Button } from '@supa/components/button/button';
export default function Page() {
  return (
    <div className="compact">
      <div className="bg-lime-300 p-5 compact:p-2 compact:text-sm transition-all hover:bg-slate-300">
        page
      </div>
      <div className="flex flex-row space-x-4 pl-4 pr-4 mt-4">
        <div className="rounded h-16 bg-pink-500 grow p-4 text-white">helo</div>
        <div className="rounded h-16 bg-pink-500 flex-none p-4 text-white">
          helo
        </div>
      </div>
      <div>
        <Button>helo</Button>
      </div>
      <div></div>
    </div>
  );
}
