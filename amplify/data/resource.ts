import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const retailStoreSchema = a.schema({
  Product: a.model({
    id: a.id().required(),
    name: a.string().required(),
    description: a.string(),
    price: a.float(),
    current_stock: a.integer(),
    image: a.string(),
    rating: a.float(),
    style: a.string(),
    categoryProductsId: a.id(),
    category: a.belongsTo('Category', 'categoryProductsId'),
  }).authorization(allow => [allow.publicApiKey()]),
    Category: a.model({
    id: a.id().required(),
    name: a.string().required(),
    description: a.string(),
    image: a.string(),
    styles: a.string().array(),
    products: a.hasMany('Product', 'categoryProductsId'),
  }).authorization(allow => [allow.publicApiKey()])s
});

export type Schema = ClientSchema<typeof retailStoreSchema>;

export const data = defineData({
  schema: retailStoreSchema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 7,
    }
  }
});