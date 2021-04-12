import React from 'react';
import FieldText from '../../../../components/FieldText';
import { ShippingInfo as ShippingInfoType } from '../../../../__generated__/graqhql-types';

interface Props {
  variant?: string;
  data: ShippingInfoType;
}

function ShippingInfo({ variant, data }: Props) {
  return (
    <div className={variant}>
      <h1 className="font-poppins text-xl px-6 py-4 tracking-wide">
        Datos de envío
      </h1>
      <div className="shadow w-full overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <div className="grid grid-cols-2 gap-2">
          <FieldText
            title="Direccion"
            label={data?.shipping_address || ''}
            capitalize
          />
          <FieldText title="Ciudad" label={data?.shipping_city || ''} />
          <FieldText title="Region" label={data?.shipping_region || ''} />
          <FieldText title="País" label={data?.shipping_country || ''} />
        </div>
      </div>
    </div>
  );
}
ShippingInfo.defaultProps = {
  variant: '',
};

export default ShippingInfo;
