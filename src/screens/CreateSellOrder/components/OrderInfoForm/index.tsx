import React from 'react';
import { UseFormRegister, Control } from 'react-hook-form';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client/core';

import { GetShippingMethodsQuery } from '../../../../__generated__/graqhql-types';
import Input from '../../../../components/Input';
import Select from '../../../../components/Select';

import { FieldsForm, FieldsFormType } from '../../constant';
import { SelectedObjectType } from '../../../../utils/types';

interface Props {
  register: UseFormRegister<FieldsFormType>;
  control: Control<FieldsFormType>;
}

const getShippingMethods = gql`
  query GetShippingMethods {
    getShippingMethods {
      value: id
      label: name
    }
  }
`;

function OrderInfoForm({ register, control }: Props) {
  const { data: shippingMethods, loading } = useQuery<GetShippingMethodsQuery>(
    getShippingMethods
  );
  return (
    <section className="shadow w-150 p-4 border-b border-gray-200 sm:rounded-lg mb-6 grid grid-cols-2 gap-4">
      <h2 className="text-3xl font-semibold row-start-1 col-start-1 col-span-2">
        Información de orden
      </h2>
      <Input
        type="text"
        placeholder="Vendedor de la tienda"
        label="Vendedor"
        {...register(FieldsForm.SELLER_STORE)}
      />
      <Select
        control={control}
        isLoading={loading}
        label="Métodos de pago"
        placeholder="Método de pago"
        name={FieldsForm.SHIPPING_METHOD}
        options={
          (shippingMethods?.getShippingMethods as SelectedObjectType[]) || []
        }
        rules={{
          require: true,
        }}
      />
      <Input
        type="text"
        placeholder="Número de orden externo"
        label="Número de orden"
        {...register(FieldsForm.EXTERNAL_ORDER_NUMBER)}
      />
      <Input
        type="text"
        placeholder="Nombre completo del comprador"
        label="Nombre"
        {...register(FieldsForm.BUYER_FULL_NAME)}
      />
      <Input
        type="text"
        placeholder="Telénofo del comprador"
        label="Teléfono"
        {...register(FieldsForm.BUYER_PHONE_NUMBER)}
      />
      <Input
        type="text"
        placeholder="Email del comprador"
        label="Email"
        {...register(FieldsForm.BUYER_EMAIL)}
      />
    </section>
  );
}

export default OrderInfoForm;
