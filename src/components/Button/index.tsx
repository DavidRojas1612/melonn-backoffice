import clsx from 'clsx';
import React from 'react';

interface Props {
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  children: React.ReactNode;
}

function Button({ variant, onClick, type, children, disabled }: Props) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'text-base text-white h-12 px-6 py-2 rounded-lg disabled:opacity-50',
        {
          'bg-primary': variant === 'primary',
          'bg-secondary': variant === 'secondary',
        }
      )}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  variant: 'primary',
  type: 'button',
  onClick: () => {},
  disabled: false,
};

export default Button;
