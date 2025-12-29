/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      createdAt
      description
      id
      image
      name
      products {
        nextToken
        __typename
      }
      styles
      updatedAt
      __typename
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      category {
        createdAt
        description
        id
        image
        name
        styles
        updatedAt
        __typename
      }
      categoryProductsId
      createdAt
      current_stock
      description
      id
      image
      name
      owner
      price
      rating
      style
      updatedAt
      __typename
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCategories(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        description
        id
        image
        name
        styles
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProducts(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        categoryProductsId
        createdAt
        current_stock
        description
        id
        image
        name
        owner
        price
        rating
        style
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
