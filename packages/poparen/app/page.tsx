import { cx } from 'class-variance-authority';
import { Button } from '@supa/components/button/button';
export default function Page() {
  const classes = cx([
    'transform transition-all absolute top-0',
    'left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs',
    'peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2',
    'group-focus-within:-translate-y-full',
    'peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0',
  ]);
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
      <div>
        <div className="w-56 relative group">
          <input
            type="text"
            id="username"
            required
            className="w-full h-10 px-4 text-sm peer bg-gray-100 outline-none"
          />
          <label htmlFor="username" className={classes}>
            Username
          </label>
        </div>
      </div>
    </div>
  );
}
