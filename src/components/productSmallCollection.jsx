import { Collection } from '@aws-amplify/ui-react';
import { getOverrideProps } from './utils';
import { generateClient } from 'aws-amplify/api';

import ProductSmall from './productSmall';

/** @type {ReturnType<typeof generateClient<import('../../amplify/data/resource').Schema>} */
const client = generateClient();

export default function ProductSmallCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  
  const fetchItems = async () => {
    const { data: results, errors } = await client.models.Product.list();
    return results;
  };

  const items = itemsProp !== undefined ? itemsProp : fetchItems();
  return (
    <Collection
      type="list"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={10}
      direction="row"
      alignItems="stretch"
      justifyContent="center"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "ProductSmallCollection")}
    >
      {(item, index) => (
        <ProductSmall
          product={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ProductSmall>
      )}
    </Collection>
  );
}
