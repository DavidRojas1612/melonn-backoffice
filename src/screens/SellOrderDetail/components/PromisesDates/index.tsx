import React from 'react';
import { format } from 'date-fns';
import FieldText from '../../../../components/FieldText';
import { PromisesDates as PromisesDatesType } from '../../../../__generated__/graqhql-types';

interface Props {
  variant?: string;
  data: PromisesDatesType;
}

const formatDate = (date?: string | null) => {
  return date ? format(new Date(date), "MMM d 'a las' haaa") : null;
};

function PromisesDates({ variant, data }: Props) {
  return (
    <div className={variant}>
      <h1 className="font-poppins text-xl px-6 py-4 tracking-wide">
        Fechas de promesa
      </h1>
      <div className="shadow w-max overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <div className="grid grid-cols-2 gap-2">
          <FieldText
            title="Pack fecha minima"
            label={formatDate(data?.pack_promise_min) || 'N/A'}
          />
          <FieldText
            title="Pack fecha máxima"
            label={formatDate(data?.pack_promise_max) || 'N/A'}
          />
          <FieldText
            title="Envio fecha minima"
            label={formatDate(data?.ship_promise_min) || 'N/A'}
          />
          <FieldText
            title="Envio fecha máxima"
            label={formatDate(data?.ship_promise_max) || 'N/A'}
          />
          <FieldText
            title="Entrega fecha minima"
            label={formatDate(data?.delivery_promise_min) || 'N/A'}
          />
          <FieldText
            title="Entrega fecha máxima"
            label={formatDate(data?.delivery_promise_max) || 'N/A'}
          />
          <FieldText
            title="Recogida fecha minima"
            label={formatDate(data?.ready_pickup_promise_min) || 'N/A'}
          />
          <FieldText
            title="Recogida fecha máxima"
            label={formatDate(data?.ready_pickup_promise_max) || 'N/A'}
          />
        </div>
      </div>
    </div>
  );
}
PromisesDates.defaultProps = {
  variant: '',
};

export default PromisesDates;
