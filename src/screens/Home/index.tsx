import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client/core';
import Table from '../../components/Table';
import { GetSellOrdersQuery } from '../../__generated__/graqhql-types';

const GetSellOrders = gql`
  query GetSellOrders {
    getSellOrders {
      id
      email
      seller_store
      external_order_number
      creation_date
      shipping_method
    }
  }
`;

const headers = [
  {
    label: 'numero de orden',
    accessor: 'external_order_number',
  },
  {
    label: 'vendedor',
    accessor: 'seller_store',
  },
  {
    label: 'fecha de creacion',
    accessor: 'creation_date',
    type: 'date',
  },
  {
    label: 'método de pago',
    accessor: 'shipping_method',
  },
  {
    label: '',
    accessor: 'id',
    type: 'detail',
  },
];

function Home() {
  const { data, loading, error } = useQuery<GetSellOrdersQuery>(GetSellOrders);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return <Table headers={headers} data={data?.getSellOrders || []} />;
}

export default Home;
