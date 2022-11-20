'use client';
import { cva, VariantProps } from 'class-variance-authority';
/* eslint-disable-next-line */
export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonCva> {
  icon?: React.ReactNode;
}

const buttonCva = cva([`rounded-lg drop-shadow-md hover:shadow-primary`], {
  variants: {
    intent: {
      primary: 'bg-primary text-white hover:text-blue-200 rtl:text-pink-500',
      secondary: 'bg-secondary text-white hover:text-green-200',
    },
    size: {
      small: 'p-2 compact:p-1 text-sm compact:text-xs w-24 compact:w-18',
      medium: 'p-4 compact:p-2 text-md compact:text-sm w-36 compact:w-24',
    },
    fullWidth: {
      true: 'w-full',
    },
    outline: {
      true: 'bg-white dark:bg-zinc-800 outline outline-1',
    },
    disabled: {
      true: 'opacity-50',
    },
  },
  compoundVariants: [
    {
      intent: 'primary',
      outline: true,
      class: ['text-primary dark:text-white outline-primary'],
    },
    {
      intent: 'secondary',
      outline: true,
      class: ['text-primary dark:text-secondary outline-secondary'],
    },
  ],
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
    outline: false,
  },
});

export function Button({
  intent,
  size,
  icon,
  disabled,
  outline,
  fullWidth,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={buttonCva({ intent, size, outline, disabled, fullWidth })}
      {...rest}
    >
      {icon ? (
        <>
          {icon}
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
}
