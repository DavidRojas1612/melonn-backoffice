import clsx from 'clsx';
import React from 'react';

interface Props {
  title: string;
  label: string | number;
  capitalize?: boolean;
}
function FieldText({ title, label, capitalize }: Props) {
  return (
    <div className="px-6 py-4">
      <span className="text-sm text-gray-500">{title}</span>
      <h3
        className={clsx('text-sm text-gray-900', {
          capitalize,
        })}
      >
        {label}
      </h3>
    </div>
  );
}

FieldText.defaultProps = {
  capitalize: false,
};

export default FieldText;
