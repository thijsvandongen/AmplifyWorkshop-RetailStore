/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct(
    $filter: ModelSubscriptionProductFilterInput
    $owner: String
  ) {
    onCreateProduct(filter: $filter, owner: $owner) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct(
    $filter: ModelSubscriptionProductFilterInput
    $owner: String
  ) {
    onDeleteProduct(filter: $filter, owner: $owner) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct(
    $filter: ModelSubscriptionProductFilterInput
    $owner: String
  ) {
    onUpdateProduct(filter: $filter, owner: $owner) {
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
