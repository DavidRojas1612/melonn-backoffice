import React from 'react';
import { Control, useController } from 'react-hook-form';
import SelectRC from 'react-select';

import { SelectedObjectType } from '../../utils/types';

interface Props {
  options: SelectedObjectType[] | [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  placeholder?: string;
  rules?: Record<string, unknown>;
  label?: string;
  isLoading?: boolean;
  disabled?: boolean;
  defaultValue?: SelectedObjectType;
}

function Select({
  options = [],
  control,
  isLoading = false,
  name,
  placeholder,
  label,
  disabled,
  defaultValue,
}: Props) {
  const { field } = useController({
    control,
    name,
    rules: { required: true },
  });

  return (
    <div className="mb-5">
      <label className="block text-sm" htmlFor={name}>
        {label}
      </label>
      <SelectRC
        isDisabled={disabled}
        inputId={name}
        options={options}
        placeholder={placeholder}
        isLoading={isLoading}
        styles={{
          control: (styles, { isFocused }) => ({
            ...styles,
            backgroundColor: '#FFF',
            boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
            border: isFocused
              ? `1px solid #201853`
              : `1px solid rgba(209, 213, 219, 1)`,
            '::placeholder': {
              fontSize: '0.875rem',
              lineHeight: '1.25rem',
              color: 'rgb(229, 231, 235)',
            },
          }),
        }}
        defaultValue={defaultValue}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...field}
      />
    </div>
  );
}

Select.defaultProps = {
  placeholder: '',
  rules: {},
  label: '',
  isLoading: false,
  disabled: false,
  defaultValue: {
    label: '',
    value: '',
  },
};

export default Select;
