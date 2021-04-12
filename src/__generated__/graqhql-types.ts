import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

export type LineItems = {
  __typename?: 'LineItems';
  product_name?: Maybe<Scalars['String']>;
  product_qty?: Maybe<Scalars['String']>;
  product_weight?: Maybe<Scalars['Int']>;
};

export type LineItemsInput = {
  product_name: Scalars['String'];
  product_qty: Scalars['String'];
  product_weight: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createSellOrder?: Maybe<SellOrder>;
};

export type MutationCreateSellOrderArgs = {
  cInput?: Maybe<SellOrderInput>;
};

export type Query = {
  __typename?: 'Query';
  getSellOrders?: Maybe<Array<Maybe<SellOrder>>>;
  getShippingMethods?: Maybe<Array<Maybe<ShippingMethods>>>;
};

export type QueryGetSellOrdersArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type SellOrder = {
  __typename?: 'SellOrder';
  id?: Maybe<Scalars['ID']>;
  seller_store?: Maybe<Scalars['String']>;
  shipping_method?: Maybe<Scalars['String']>;
  external_order_number?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  buyer_full_name?: Maybe<Scalars['String']>;
  buyer_phone_number?: Maybe<Scalars['String']>;
  buyer_email?: Maybe<Scalars['String']>;
  shipping_address?: Maybe<Scalars['String']>;
  shipping_city?: Maybe<Scalars['String']>;
  shipping_region?: Maybe<Scalars['String']>;
  shipping_country?: Maybe<Scalars['String']>;
  lineItems?: Maybe<Array<Maybe<LineItems>>>;
  creation_date?: Maybe<Scalars['String']>;
  internal_order_number?: Maybe<Scalars['String']>;
  pack_promise_min?: Maybe<Scalars['String']>;
  pack_promise_max?: Maybe<Scalars['String']>;
  ship_promise_min?: Maybe<Scalars['String']>;
  ship_promise_max?: Maybe<Scalars['String']>;
  delivery_promise_min?: Maybe<Scalars['String']>;
  delivery_promise_max?: Maybe<Scalars['String']>;
  ready_pickup_promise_min?: Maybe<Scalars['String']>;
  ready_pickup_promise_max?: Maybe<Scalars['String']>;
};

export type SellOrderInput = {
  seller_store: Scalars['String'];
  shipping_method: Scalars['Int'];
  external_order_number: Scalars['String'];
  email: Scalars['String'];
  buyer_full_name: Scalars['String'];
  buyer_phone_number: Scalars['String'];
  buyer_email: Scalars['String'];
  shipping_address: Scalars['String'];
  shipping_city: Scalars['String'];
  shipping_region: Scalars['String'];
  shipping_country: Scalars['String'];
  lineItems?: Maybe<Array<Maybe<LineItemsInput>>>;
};

export type ShippingMethods = {
  __typename?: 'ShippingMethods';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type GetShippingMethodsQueryVariables = Exact<{ [key: string]: never }>;

export type GetShippingMethodsQuery = { __typename?: 'Query' } & {
  getShippingMethods?: Maybe<
    Array<
      Maybe<
        { __typename?: 'ShippingMethods' } & {
          value: ShippingMethods['id'];
          label: ShippingMethods['name'];
        }
      >
    >
  >;
};

export type GetSellOrdersQueryVariables = Exact<{ [key: string]: never }>;

export type GetSellOrdersQuery = { __typename?: 'Query' } & {
  getSellOrders?: Maybe<
    Array<
      Maybe<
        { __typename?: 'SellOrder' } & Pick<
          SellOrder,
          | 'id'
          | 'email'
          | 'seller_store'
          | 'external_order_number'
          | 'creation_date'
          | 'shipping_method'
        >
      >
    >
  >;
};

export type GetSellOrderDetailQueryVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
}>;

export type OrderInformation = Maybe<
  { __typename?: 'SellOrder' } & Pick<
    SellOrder,
    | 'external_order_number'
    | 'buyer_full_name'
    | 'buyer_phone_number'
    | 'buyer_email'
  >
>;

export type ShippingInfo = Maybe<
  { __typename?: 'SellOrder' } & Pick<
    SellOrder,
    | 'shipping_address'
    | 'shipping_city'
    | 'shipping_region'
    | 'shipping_country'
  >
>;

export type PromisesDates = Maybe<
  { __typename?: 'SellOrder' } & Pick<
    SellOrder,
    | 'pack_promise_min'
    | 'pack_promise_max'
    | 'ship_promise_min'
    | 'ship_promise_max'
    | 'delivery_promise_min'
    | 'delivery_promise_max'
    | 'ready_pickup_promise_min'
    | 'ready_pickup_promise_max'
  >
>;

export type LineItemsResponse = Maybe<
  { __typename?: 'SellOrder' } & {
    lineItems?: Maybe<
      Array<
        Maybe<
          { __typename?: 'LineItems' } & Pick<
            LineItems,
            'product_name' | 'product_qty' | 'product_weight'
          >
        >
      >
    >;
  }
>;

export type GetSellOrderDetailQuery = { __typename?: 'Query' } & {
  order_information?: Maybe<Array<OrderInformation>>;
  shipping_info?: Maybe<Array<ShippingInfo>>;
  promises_dates?: Maybe<Array<PromisesDates>>;
  line_items?: Maybe<Array<LineItemsResponse>>;
};

export const GetShippingMethodsDocument = gql`
  query GetShippingMethods {
    getShippingMethods {
      value: id
      label: name
    }
  }
`;

/**
 * __useGetShippingMethodsQuery__
 *
 * To run a query within a React component, call `useGetShippingMethodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShippingMethodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShippingMethodsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetShippingMethodsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetShippingMethodsQuery,
    GetShippingMethodsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetShippingMethodsQuery,
    GetShippingMethodsQueryVariables
  >(GetShippingMethodsDocument, options);
}
export function useGetShippingMethodsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetShippingMethodsQuery,
    GetShippingMethodsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetShippingMethodsQuery,
    GetShippingMethodsQueryVariables
  >(GetShippingMethodsDocument, options);
}
export type GetShippingMethodsQueryHookResult = ReturnType<
  typeof useGetShippingMethodsQuery
>;
export type GetShippingMethodsLazyQueryHookResult = ReturnType<
  typeof useGetShippingMethodsLazyQuery
>;
export type GetShippingMethodsQueryResult = Apollo.QueryResult<
  GetShippingMethodsQuery,
  GetShippingMethodsQueryVariables
>;
export const GetSellOrdersDocument = gql`
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

/**
 * __useGetSellOrdersQuery__
 *
 * To run a query within a React component, call `useGetSellOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSellOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSellOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSellOrdersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetSellOrdersQuery,
    GetSellOrdersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSellOrdersQuery, GetSellOrdersQueryVariables>(
    GetSellOrdersDocument,
    options
  );
}
export function useGetSellOrdersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSellOrdersQuery,
    GetSellOrdersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetSellOrdersQuery, GetSellOrdersQueryVariables>(
    GetSellOrdersDocument,
    options
  );
}
export type GetSellOrdersQueryHookResult = ReturnType<
  typeof useGetSellOrdersQuery
>;
export type GetSellOrdersLazyQueryHookResult = ReturnType<
  typeof useGetSellOrdersLazyQuery
>;
export type GetSellOrdersQueryResult = Apollo.QueryResult<
  GetSellOrdersQuery,
  GetSellOrdersQueryVariables
>;
export const GetSellOrderDetailDocument = gql`
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

/**
 * __useGetSellOrderDetailQuery__
 *
 * To run a query within a React component, call `useGetSellOrderDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSellOrderDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSellOrderDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSellOrderDetailQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetSellOrderDetailQuery,
    GetSellOrderDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetSellOrderDetailQuery,
    GetSellOrderDetailQueryVariables
  >(GetSellOrderDetailDocument, options);
}
export function useGetSellOrderDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSellOrderDetailQuery,
    GetSellOrderDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetSellOrderDetailQuery,
    GetSellOrderDetailQueryVariables
  >(GetSellOrderDetailDocument, options);
}
export type GetSellOrderDetailQueryHookResult = ReturnType<
  typeof useGetSellOrderDetailQuery
>;
export type GetSellOrderDetailLazyQueryHookResult = ReturnType<
  typeof useGetSellOrderDetailLazyQuery
>;
export type GetSellOrderDetailQueryResult = Apollo.QueryResult<
  GetSellOrderDetailQuery,
  GetSellOrderDetailQueryVariables
>;
