'use client';
import { Fragment, useState } from 'react';
import { Listbox as ListboxH, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { cx } from 'class-variance-authority';

/* eslint-disable-next-line */
export interface ListboxProps {}

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
];

export function Listbox(props: ListboxProps) {
  const [selected, setSelected] = useState(people[0]);
  return (
    <div className="w-72">
      <ListboxH value={selected} onChange={setSelected}>
        <div className="relative">
          <ListboxH.Button
            className={cx([
              'relative w-full cursor-default text-left sm:text-sm rtl:text-right',
              'py-4 pl-3 pr-10 rounded-lg compact:py-2 rtl:pl-10 rtl:pr-3',
              'bg-zinc-50 dark:bg-slate-700',
              'shadow-inner hover:shadow-zinc-300 dark:hover:shadow-slate-800/80',
              'focus:outline-none focus-visible:border-indigo-500',
              'focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
              'focus-visible:ring-offset-2 focus-visible:ring-offset-secondary',
            ])}
          >
            <span className="block truncate dark:text-white">
              {selected.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center ltr:pr-2 rtl:pl-2">
              <ChevronDownIcon
                className="h-5 w-5 text-gray-800 dark:text-white ui-open:rotate-180 transition-transform"
                aria-hidden="true"
              />
            </span>
          </ListboxH.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            enter="transition ease-in duartion-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxH.Options className="absolute mt-1 max-h-60 w-full overflow-auto z-10 rounded-md bg-white dark:bg-slate-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <ListboxH.Option
                  key={personIdx}
                  className={({ active }: { active: boolean }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? 'bg-zinc-100 text-inherit dark:bg-slate-700 dark:text-secondary'
                        : 'text-inherit dark:text-gray-50'
                    }`
                  }
                  value={person}
                >
                  {({ selected }: { selected: boolean }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-600 dark:text-secondary">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </ListboxH.Option>
              ))}
            </ListboxH.Options>
          </Transition>
        </div>
      </ListboxH>
    </div>
  );
}
