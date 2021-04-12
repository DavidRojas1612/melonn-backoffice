const DEFAULT_VALUES = {
  seller_store: '',
  shipping_method: { label: '', value: '' },
  external_order_number: '',
  buyer_full_name: '',
  buyer_phone_number: '',
  buyer_email: '',
  shipping_address: '',
  shipping_city: '',
  shipping_region: '',
  shipping_country: '',
  lineItems: [{ product_name: '', product_qty: 0, product_weight: 0 }],
};

export type FieldsFormType = typeof DEFAULT_VALUES;

enum FieldsForm {
  SELLER_STORE = 'seller_store',
  SHIPPING_METHOD = 'shipping_method',
  EXTERNAL_ORDER_NUMBER = 'external_order_number',
  EMAIL = 'email',
  BUYER_FULL_NAME = 'buyer_full_name',
  BUYER_PHONE_NUMBER = 'buyer_phone_number',
  BUYER_EMAIL = 'buyer_email',
  SHIPPING_ADDRESS = 'shipping_address',
  SHIPPING_CITY = 'shipping_city',
  SHIPPING_REGION = 'shipping_region',
  SHIPPING_COUNTRY = 'shipping_country',
  LINEITEMS = 'lineItems',
}

export { DEFAULT_VALUES, FieldsForm };
