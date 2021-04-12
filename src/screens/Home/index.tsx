import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client/core';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';

import Table from '../../components/Table';
import { GetSellOrdersQuery } from '../../__generated__/graqhql-types';
import Button from '../../components/Button';

const GetSellOrders = gql`
  query GetSellOrders {
    getSellOrders {
      id
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
  const history = useHistory();
  const { data, loading, error } = useQuery<GetSellOrdersQuery>(GetSellOrders, {
    fetchPolicy: 'no-cache',
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div
      className={clsx({
        'w-max mx-auto grid grid-cols-1': !!data?.getSellOrders?.length,
        'w-full h-96 flex justify-center items-center': !data?.getSellOrders
          ?.length,
      })}
    >
      <Button onClick={() => history.push('/create-sell-order')}>
        Crear Orden
      </Button>
      {!!data?.getSellOrders?.length && (
        <Table headers={headers} data={data?.getSellOrders || []} />
      )}
    </div>
  );
}

export default Home;
