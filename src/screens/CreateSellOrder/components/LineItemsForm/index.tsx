import React from 'react';
import { useFieldArray, UseFormRegister, Control } from 'react-hook-form';

import Input from '../../../../components/Input';

import { FieldsForm, FieldsFormType } from '../../constant';

interface Props {
  register: UseFormRegister<FieldsFormType>;
  control: Control<FieldsFormType>;
}

function LineItemsForm({ register, control }: Props) {
  const { fields, append, remove } = useFieldArray({
    name: FieldsForm.LINEITEMS,
    control,
  });

  return (
    <section className="shadow w-150 p-4 border-b border-gray-200 sm:rounded-lg mb-6 grid grid-cols-1 gap-4">
      <h2 className="text-3xl font-semibold">Artículos en línea</h2>
      {fields.map((field, index) => {
        return (
          <section className="grid grid-cols-4 gap-3" key={field.id}>
            <Input
              type="text"
              placeholder="Nombre del producto"
              label="Nombre"
              {...register(
                `${FieldsForm.LINEITEMS}.${index}.product_name` as const,
                {
                  required: true,
                }
              )}
            />
            <Input
              type="number"
              placeholder="Cantidad"
              label="Cantidad"
              {...register(
                `${FieldsForm.LINEITEMS}.${index}.product_qty` as const,
                {
                  required: true,
                }
              )}
            />
            <Input
              type="number"
              placeholder="Peso"
              label="Peso"
              {...register(
                `${FieldsForm.LINEITEMS}.${index}.product_weight` as const,
                {
                  required: true,
                }
              )}
            />
            <button type="button" onClick={() => remove(index)}>
              Borrar
            </button>
          </section>
        );
      })}
      <button
        type="button"
        onClick={() =>
          append({
            name: '',
            quantity: 0,
            price: 0,
          })
        }
      >
        Agregar
      </button>
    </section>
  );
}

export default LineItemsForm;
