import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';
import './Button.scss';
import Icon from '../Icon/Icon';

type variantType = 'primary' | 'white' | 'transparent'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant: variantType;
  rounded?: boolean;
  iconId?: string;
};

const Button: React.FC<ButtonProps> = ({
  variant,
  label,
  iconId,
  rounded = false,
  ...rest
}) => {
  return (
    <button
      className={clsx(`button button__${variant}`, { button__rounded: rounded })}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {label}
      {iconId && <Icon iconId={iconId} />}
    </button>
  );
};

export default Button;
