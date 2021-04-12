import React from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import { DEFAULT_VALUES, FieldsFormType } from './constant';
import OrderInfoForm from './components/OrderInfoForm';
import ShippingForm from './components/ShippingForm';
import LineItemsForm from './components/LineItemsForm';
import Button from '../../components/Button';

const createSellerOrder = gql`
  mutation createSellOrder($sellORder: SellOrderInput) {
    createSellOrder(cInput: $sellORder) {
      id
      creation_date
    }
  }
`;

function CreateSellOrder() {
  const history = useHistory();
  const [create] = useMutation(createSellerOrder, {
    onCompleted: () => {
      history.push('/');
    },
  });
  const { register, handleSubmit, control } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: DEFAULT_VALUES,
    shouldFocusError: true,
  });

  const { isValid } = useFormState({
    control,
  });

  const handleOnSubmit = (dataReq: FieldsFormType) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { shipping_method, lineItems, ...restDataReq } = dataReq;
    const newLineItems = lineItems.map(
      ({ product_name, product_qty, product_weight }) => ({
        product_name,
        product_qty: +product_qty,
        product_weight: +product_weight,
      })
    );
    const newDataReq = {
      ...restDataReq,
      shipping_method: shipping_method.value,
      lineItems: newLineItems,
    };
    create({ variables: { sellORder: newDataReq } });
  };

  return (
    <div className="w-full py-5">
      <form
        id="create"
        className="w-max mx-auto"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <div className="block w-max py-6">
          <OrderInfoForm register={register} control={control} />
          <ShippingForm register={register} />
          <LineItemsForm register={register} control={control} />
        </div>
        <div className="w-full flex justify-end">
          <Button variant="primary" disabled={!isValid} type="submit">
            crear
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CreateSellOrder;
