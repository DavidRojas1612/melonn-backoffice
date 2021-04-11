import React from 'react';
import FieldText from '../../../../components/FieldText';
import { OrderInformation } from '../../../../__generated__/graqhql-types';

interface Props {
  variant?: string;
  data: OrderInformation;
}

function OrderInfo({ variant, data }: Props) {
  return (
    <div className={variant}>
      <h1 className="font-poppins text-xl px-6 py-4 tracking-wide">
        Información de la orden
      </h1>
      <div className="shadow w-max overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <div className="grid grid-cols-2 gap-2">
          <FieldText
            title="Nombre del comprador"
            label={data?.buyer_full_name || ''}
            capitalize
          />
          <FieldText
            title="Email del comprador"
            label={data?.buyer_email || ''}
          />
          <FieldText
            title="Telefono del comprador"
            label={data?.buyer_phone_number || ''}
          />
          <FieldText title="Orden" label={data?.external_order_number || ''} />
        </div>
      </div>
    </div>
  );
}
OrderInfo.defaultProps = {
  variant: '',
};

export default OrderInfo;
