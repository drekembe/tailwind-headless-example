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
      primary: 'bg-primary text-white hover:text-blue-200',
      secondary: 'bg-green-500 text-white hover:text-green-200',
    },
    size: {
      small: 'p-2 text-sm',
      medium: 'p-4 text-md',
    },
    fullWidth: {
      true: 'w-full',
    },
    outline: {
      true: [],
    },
    disabled: {
      true: 'opacity-50',
    },
  },
  compoundVariants: [
    {
      intent: 'primary',
      outline: true,
      class: 'bg-white outline outline-primary outline-1 text-primary',
    },
  ],
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
    outline: false,
  },
});

const innerCva = cva('text-pink-600', {
  variants: {
    intent: {
      primary: 'animate-spin',
      secondary: [],
    },
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
      <div className={innerCva({ intent })}>ok</div>
    </button>
  );
}

export default Button;
