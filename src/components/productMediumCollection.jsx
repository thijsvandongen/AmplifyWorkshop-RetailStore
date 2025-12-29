import { Collection } from '@aws-amplify/ui-react';
import { getOverrideProps } from './utils';
import { generateClient } from 'aws-amplify/api';

import ProductMedium from './productMedium';

/** @type {ReturnType<typeof generateClient<import('../../amplify/data/resource').Schema>} */
const client = generateClient();

export default function ProductMediumCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  
  const fetchItems = async () => {
    const { data: results, errors } = await client.models.Product.list();
    return results;
  };

  const items = itemsProp !== undefined ? itemsProp : fetchItems();
  return (
    <Collection
      type="grid"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={10}
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "ProductMediumCollection")}
    >
      {(item, index) => (
        <ProductMedium
          product={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ProductMedium>
      )}
    </Collection>
  );
}
