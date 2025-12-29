/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $condition: ModelCategoryConditionInput
    $input: CreateCategoryInput!
  ) {
    createCategory(condition: $condition, input: $input) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $condition: ModelProductConditionInput
    $input: CreateProductInput!
  ) {
    createProduct(condition: $condition, input: $input) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $condition: ModelCategoryConditionInput
    $input: DeleteCategoryInput!
  ) {
    deleteCategory(condition: $condition, input: $input) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $condition: ModelProductConditionInput
    $input: DeleteProductInput!
  ) {
    deleteProduct(condition: $condition, input: $input) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $condition: ModelCategoryConditionInput
    $input: UpdateCategoryInput!
  ) {
    updateCategory(condition: $condition, input: $input) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $condition: ModelProductConditionInput
    $input: UpdateProductInput!
  ) {
    updateProduct(condition: $condition, input: $input) {
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
