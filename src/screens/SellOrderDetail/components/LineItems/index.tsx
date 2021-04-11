import React from 'react';
import FieldText from '../../../../components/FieldText';
import { LineItemsResponse as LineItemsType } from '../../../../__generated__/graqhql-types';

interface Props {
  variant?: string;
  data: LineItemsType;
}

function LineItems({ variant, data }: Props) {
  return (
    <div className={variant}>
      <h1 className="font-poppins text-xl px-6 py-4 tracking-wide">
        Artículos de línea
      </h1>
      {data?.lineItems?.map((article) => (
        <div
          key={article?.product_name}
          className="shadow w-max overflow-hidden border-b mb-4 border-gray-200 sm:rounded-lg"
        >
          <div className="grid grid-cols-2 gap-2">
            <FieldText
              title="Nombre del producto"
              label={article?.product_name || ''}
            />
            <FieldText title="Cantidad" label={article?.product_qty || ''} />
            <FieldText title="Peso" label={article?.product_weight || ''} />
          </div>
        </div>
      ))}
    </div>
  );
}
LineItems.defaultProps = {
  variant: '',
};

export default LineItems;
