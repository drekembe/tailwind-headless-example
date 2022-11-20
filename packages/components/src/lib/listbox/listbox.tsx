'use client';
import { Fragment, useState } from 'react';
import { Listbox as ListboxH, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

/* eslint-disable-next-line */
export interface ListboxProps {}

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
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
        <div className="relative mt-1">
          <ListboxH.Button className="relative w-full cursor-default rounded-lg bg-white dark:bg-slate-700 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate dark:text-white">
              {selected.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400 dark:text-white"
                aria-hidden="true"
              />
            </span>
          </ListboxH.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
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
                        ? 'bg-amber-100 text-amber-900 dark:bg-slate-600 dark:text-amber-100'
                        : 'text-pink-500 dark:text-gray-50'
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
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
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
