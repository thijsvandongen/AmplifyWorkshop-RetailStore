/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Category = {
  __typename: "Category",
  createdAt: string,
  description?: string | null,
  id: string,
  image?: string | null,
  name: string,
  products?: ModelProductConnection | null,
  styles?: Array< string | null > | null,
  updatedAt: string,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type Product = {
  __typename: "Product",
  category?: Category | null,
  categoryProductsId?: string | null,
  createdAt: string,
  current_stock?: number | null,
  description?: string | null,
  id: string,
  image?: string | null,
  name: string,
  owner?: string | null,
  price?: number | null,
  rating?: number | null,
  style?: string | null,
  updatedAt: string,
};

export type ModelCategoryFilterInput = {
  and?: Array< ModelCategoryFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelCategoryFilterInput | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  styles?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type ModelProductFilterInput = {
  and?: Array< ModelProductFilterInput | null > | null,
  categoryProductsId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  current_stock?: ModelIntInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelProductFilterInput | null,
  or?: Array< ModelProductFilterInput | null > | null,
  owner?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  rating?: ModelFloatInput | null,
  style?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelFloatInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelCategoryConditionInput = {
  and?: Array< ModelCategoryConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelCategoryConditionInput | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  styles?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateCategoryInput = {
  description?: string | null,
  id?: string | null,
  image?: string | null,
  name: string,
  styles?: Array< string | null > | null,
};

export type ModelProductConditionInput = {
  and?: Array< ModelProductConditionInput | null > | null,
  categoryProductsId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  current_stock?: ModelIntInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelProductConditionInput | null,
  or?: Array< ModelProductConditionInput | null > | null,
  owner?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  rating?: ModelFloatInput | null,
  style?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateProductInput = {
  categoryProductsId?: string | null,
  current_stock?: number | null,
  description?: string | null,
  id?: string | null,
  image?: string | null,
  name: string,
  price?: number | null,
  rating?: number | null,
  style?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type DeleteProductInput = {
  id: string,
};

export type UpdateCategoryInput = {
  description?: string | null,
  id: string,
  image?: string | null,
  name?: string | null,
  styles?: Array< string | null > | null,
};

export type UpdateProductInput = {
  categoryProductsId?: string | null,
  current_stock?: number | null,
  description?: string | null,
  id: string,
  image?: string | null,
  name?: string | null,
  price?: number | null,
  rating?: number | null,
  style?: string | null,
};

export type ModelSubscriptionCategoryFilterInput = {
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  image?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  styles?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionProductFilterInput = {
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  categoryProductsId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  current_stock?: ModelSubscriptionIntInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  image?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
  owner?: ModelStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  rating?: ModelSubscriptionFloatInput | null,
  style?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionFloatInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    createdAt: string,
    description?: string | null,
    id: string,
    image?: string | null,
    name: string,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    styles?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    category?:  {
      __typename: "Category",
      createdAt: string,
      description?: string | null,
      id: string,
      image?: string | null,
      name: string,
      styles?: Array< string | null > | null,
      updatedAt: string,
    } | null,
    categoryProductsId?: string | null,
    createdAt: string,
    current_stock?: number | null,
    description?: string | null,
    id: string,
    image?: string | null,
    name: string,
    owner?: string | null,
    price?: number | null,
    rating?: number | null,
    style?: string | null,
    updatedAt: string,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      createdAt: string,
      description?: string | null,
      id: string,
      image?: string | null,
      name: string,
      styles?: Array< string | null > | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      categoryProductsId?: string | null,
      createdAt: string,
      current_stock?: number | null,
      description?: string | null,
      id: string,
      image?: string | null,
      name: string,
      owner?: string | null,
      price?: number | null,
      rating?: number | null,
      style?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateCategoryMutationVariables = {
  condition?: ModelCategoryConditionInput | null,
  input: CreateCategoryInput,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    createdAt: string,
    description?: string | null,
    id: string,
    image?: string | null,
    name: string,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    styles?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type CreateProductMutationVariables = {
  condition?: ModelProductConditionInput | null,
  input: CreateProductInput,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    category?:  {
      __typename: "Category",
      createdAt: string,
      description?: string | null,
      id: string,
      image?: string | null,
      name: string,
      styles?: Array< string | null > | null,
      updatedAt: string,
    } | null,
    categoryProductsId?: string | null,
    createdAt: string,
    current_stock?: number | null,
    description?: string | null,
    id: string,
    image?: string | null,
    name: string,
    owner?: string | null,
    price?: number | null,
    rating?: number | null,
    style?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  condition?: ModelCategoryConditionInput | null,
  input: DeleteCategoryInput,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    createdAt: string,
    description?: string | null,
    id: string,
    image?: string | null,
    name: string,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    styles?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  condition?: ModelProductConditionInput | null,
  input: DeleteProductInput,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    category?:  {
      __typename: "Category",
      createdAt: string,
      description?: string | null,
      id: string,
      image?: string | null,
      name: string,
      styles?: Array< string | null > | null,
      updatedAt: string,
    } | null,
    categoryProductsId?: string | null,
    createdAt: string,
    current_stock?: number | null,
    description?: string | null,
    id: string,
    image?: string | null,
    name: string,
    owner?: string | null,
    price?: number | null,
    rating?: number | null,
    style?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  condition?: ModelCategoryConditionInput | null,
  input: UpdateCategoryInput,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    createdAt: string,
    description?: string | null,
    id: string,
    image?: string | null,
    name: string,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    styles?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  condition?: ModelProductConditionInput | null,
  input: UpdateProductInput,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    category?:  {
      __typename: "Category",
      createdAt: string,
      description?: string | null,
      id: string,
      image?: string | null,
      name: string,
      styles?: Array< string | null > | null,
      updatedAt: string,
    } | null,
    categoryProductsId?: string | null,
    createdAt: string,
    current_stock?: number | null,
    description?: string | null,
    id: string,
    image?: string | null,
    name: string,
    owner?: string | null,
    price?: number | null,
    rating?: number | null,
    style?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    createdAt: string,
    description?: string | null,
    id: string,
    image?: string | null,
    name: string,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    styles?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
  owner?: string | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    category?:  {
      __typename: "Category",
      createdAt: string,
      description?: string | null,
      id: string,
      image?: string | null,
      name: string,
      styles?: Array< string | null > | null,
      updatedAt: string,
    } | null,
    categoryProductsId?: string | null,
    createdAt: string,
    current_stock?: number | null,
    description?: string | null,
    id: string,
    image?: string | null,
    name: string,
    owner?: string | null,
    price?: number | null,
    rating?: number | null,
    style?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    createdAt: string,
    description?: string | null,
    id: string,
    image?: string | null,
    name: string,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    styles?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
  owner?: string | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    category?:  {
      __typename: "Category",
      createdAt: string,
      description?: string | null,
      id: string,
      image?: string | null,
      name: string,
      styles?: Array< string | null > | null,
      updatedAt: string,
    } | null,
    categoryProductsId?: string | null,
    createdAt: string,
    current_stock?: number | null,
    description?: string | null,
    id: string,
    image?: string | null,
    name: string,
    owner?: string | null,
    price?: number | null,
    rating?: number | null,
    style?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    createdAt: string,
    description?: string | null,
    id: string,
    image?: string | null,
    name: string,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    styles?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
  owner?: string | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    category?:  {
      __typename: "Category",
      createdAt: string,
      description?: string | null,
      id: string,
      image?: string | null,
      name: string,
      styles?: Array< string | null > | null,
      updatedAt: string,
    } | null,
    categoryProductsId?: string | null,
    createdAt: string,
    current_stock?: number | null,
    description?: string | null,
    id: string,
    image?: string | null,
    name: string,
    owner?: string | null,
    price?: number | null,
    rating?: number | null,
    style?: string | null,
    updatedAt: string,
  } | null,
};
