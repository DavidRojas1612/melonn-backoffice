import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client/core';
import { GetSellOrderDetailQuery } from '../../__generated__/graqhql-types';
import OrderInfo from './components/OrderInfo';
import ShippingInfo from './components/ShippingInfo';
import PromisesDates from './components/PromisesDates';
import LineItems from './components/LineItems';

const GetSellOrderDetail = gql`
  query GetSellOrderDetail($id: ID) {
    order_information: getSellOrders(id: $id) {
      external_order_number
      buyer_full_name
      buyer_phone_number
      buyer_email
    }
    shipping_info: getSellOrders(id: $id) {
      shipping_address
      shipping_city
      shipping_region
      shipping_country
    }
    promises_dates: getSellOrders(id: $id) {
      pack_promise_min
      pack_promise_max
      ship_promise_min
      ship_promise_max
      delivery_promise_min
      delivery_promise_max
      ready_pickup_promise_min
      ready_pickup_promise_max
    }
    line_items: getSellOrders(id: $id) {
      lineItems {
        product_name
        product_qty
        product_weight
      }
    }
  }
`;

function SellOrderDetail() {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useQuery<GetSellOrderDetailQuery>(
    GetSellOrderDetail,
    {
      variables: { id },
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div className="mx-auto w-240 grid p-10 grid-cols-2 gap-4">
      <OrderInfo data={data?.order_information?.[0] || {}} />
      <ShippingInfo data={data?.shipping_info?.[0] || {}} />
      <PromisesDates data={data?.promises_dates?.[0] || {}} />
      <LineItems data={data?.line_items?.[0] || {}} />
    </div>
  );
}

export default SellOrderDetail;
