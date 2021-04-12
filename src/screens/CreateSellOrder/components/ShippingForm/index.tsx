import React from 'react';
import { UseFormRegister } from 'react-hook-form';

import Input from '../../../../components/Input';

import { FieldsForm, FieldsFormType } from '../../constant';

interface Props {
  register: UseFormRegister<FieldsFormType>;
}

function ShippingForm({ register }: Props) {
  return (
    <section className="shadow w-150 p-4 border-b border-gray-200 sm:rounded-lg mb-6 grid grid-cols-2 gap-4">
      <h2 className="text-3xl font-semibold row-start-1 col-start-1 col-span-2">
        Información de envío
      </h2>
      <Input
        type="text"
        placeholder="Dirección de envio"
        label="Dirección"
        {...register(FieldsForm.SHIPPING_ADDRESS)}
      />
      <Input
        type="text"
        placeholder="Ciudad de envío"
        label="Ciudad"
        {...register(FieldsForm.SHIPPING_CITY)}
      />
      <Input
        type="text"
        placeholder="Región de envío"
        label="Región"
        {...register(FieldsForm.SHIPPING_REGION)}
      />
      <Input
        type="text"
        placeholder="País de envío"
        label="País"
        {...register(FieldsForm.SHIPPING_COUNTRY)}
      />
    </section>
  );
}

export default ShippingForm;
