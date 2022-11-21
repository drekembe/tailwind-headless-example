import './tailwind-imports.css';
import { useEffect, useState } from 'react';
import { DirectionProvider } from '@radix-ui/react-direction';

export const parameters = {
  darkMode: {
    darkClass: 'dark',
    lightClass: 'light',
    stylePreview: true,
  },
  theme: {
    default: 'cargox',
    list: [
      { name: 'cargox', class: 'theme-cargox', color: '#FF33aa' },
      { name: 'est', class: 'theme-est', color: '#33FFaa' },
    ],
  },
};

const wls = ['theme-cargox', 'theme-est', 'theme-uganda'];

export const decorators = [
  (Story) => {
    const [dir, setDir] = useState('ltr');
    const [wl, setWl] = useState(0);
    const [compact, setCompact] = useState(false);
    const currentWl = wls[wl];
    useEffect(
      () => document.getElementsByTagName('html')[0].setAttribute('dir', dir),
      [dir]
    );
    return (
      <div className="flex">
        <div className={`grow ${currentWl}${compact ? ' compact' : ''}`}>
          <DirectionProvider dir={dir}>
            <Story />
          </DirectionProvider>
        </div>
        <div
          className={`flex-none flex flex-col justify-start space-y-4 items-end`}
        >
          <button
            className="bg-zinc-200 dark:bg-zinc-800 rounded-full p-2 text-sm pl-4 pr-4 text-zinc-500 hover:dark:bg-zinc-700"
            onClick={() => setDir((dir) => (dir === 'ltr' ? 'rtl' : 'ltr'))}
          >
            {dir}
          </button>
          <button
            className="bg-zinc-200 dark:bg-zinc-800 rounded-full p-2 text-sm pl-4 pr-4 text-zinc-500 hover:dark:bg-zinc-700"
            onClick={() => setWl((wl) => (wl + 1) % 3)}
          >
            {currentWl}
          </button>
          <button
            className="bg-zinc-200 dark:bg-zinc-800 rounded-full p-2 text-sm pl-4 pr-4 text-zinc-500 hover:dark:bg-zinc-700"
            onClick={() => setCompact((c) => !c)}
          >
            {compact ? 'compact' : 'regular'}
          </button>
        </div>
      </div>
    );
  },
];
