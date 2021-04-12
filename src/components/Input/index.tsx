import React from 'react';

interface Props extends React.HTMLProps<HTMLInputElement> {
  label: string;
  placeholder: string;
  type: 'text' | 'number';
  name: string;
}

function Input(
  { label, placeholder, type, name, ...props }: Props,
  ref: React.ComponentProps<'input'>['ref']
) {
  return (
    <label htmlFor={name} className="block mb-5 text-sm">
      <span>{label}</span>
      <input
        {...props}
        type={type}
        placeholder={placeholder}
        name={name}
        ref={ref}
        className="py-2 px-4 w-full border focus:outline-none focus:ring-indigo-500 focus:border-primary block shadow-md sm:text-sm border-gray-300 rounded-md"
      />
    </label>
  );
}

export default React.forwardRef(Input);
/* eslint-enable react/jsx-props-no-spreading */
