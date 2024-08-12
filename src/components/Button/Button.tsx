import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import Icon from '@/components/Icon/Icon';

type variantType = 'primary' | 'white' | 'transparent';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: variantType;
  label?: string;
  rounded?: boolean;
  iconId?: string;
  fullWidth?: boolean;
  size?: 'S' | 'M';
};

const Button: React.FC<ButtonProps> = ({
  variant,
  label,
  iconId,
  rounded = false,
  fullWidth = false,
  size = 'M',
  ...rest
}) => {
  return (
    <button
      className={clsx(
        'border-none rounded-md shadow-sm text-base font-bold cursor-pointer flex justify-center gap-2',
        {
          'rounded-full': rounded,
          'w-full': fullWidth,
          'bg-bold-red-normal text-white hover:bg-bold-red-hover':
            variant === 'primary',
          'bg-white text-bold-blue hover:bg-bold-light-grey':
            variant === 'white',
          'p-2': size === 'S',
          'py-4 px-6': size === 'M',
        },
      )}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {label}
      {iconId && <Icon iconId={iconId} />}
    </button>
  );
};

export default Button;
