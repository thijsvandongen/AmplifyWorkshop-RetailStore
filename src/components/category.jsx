import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { generateClient } from 'aws-amplify/api';
import { useBreakpointValue } from '@aws-amplify/ui-react';

import Navigation from './navigation';
import AdminControls from './adminControls';
import ProductMediumCollection from './productMediumCollection';

import AppLayout from '@cloudscape-design/components/app-layout';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import ContentLayout from '@cloudscape-design/components/content-layout';
import Alert from '@cloudscape-design/components/alert';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Multiselect from '@cloudscape-design/components/multiselect';

/** @type {ReturnType<typeof generateClient<import('../../amplify/data/resource').Schema>} */
const client = generateClient();

export default function Category() {
  // this component is used when something hits /category/{name}
  // name is used to represent the category we are viewing
  const { name } = useParams();
  const [prevName, setPrevName] = useState(''); //prevName allows us to see if the category has changed
  const [products, setProducts] = useState([]); //products is a list of the products to display filtered down
  const [allStyles, setAllStyles] = useState([]); //allStyles is a list of all the styles for building the filters
  const [filteredStyles, setFilteredStyles] = useState([]); //filteredStyles is a list of styles that are selected for filtering
  const [, setCategoryId] = useState(''); //categoryId for use in subscription filtering
  const [, setFilterStyleList] = useState([]); // filter list with style labels for use in subscription filtering
  const [showAlert, setShowAlert] = useState(false);
  const [alertStatus, setAlertStatus] = useState({
    type: 'success',
    message: 'Success!',
  });
  
  useEffect(() => {
    // Query for categories to get all the styles that make up that category
    // so we can build the filter display
    async function queryCategory() {
      try {
        const { data: categories, errors } = await client.models.Category.list({
          filter: { name: { eq: name } },
        });
        if (categories) {
          setAllStyles(Object.values(categories[0].styles)); 
          setCategoryId(categories[0].id);
          return categories[0].id;
        }
      } catch (error) {
        console.log("Error retrieving category", error);
      }
    }

    // queryProduct is used to query the products and filter by category and filtered again
    // based on any selected filters
    async function queryProduct() {
      try {
        const { data: categories, errors } = await client.models.Category.list({
          filter: { name: { eq: name } },
        });
        if (categories) {
          const { data: products, errors } = await client.models.Product.list({
            limit: 3000,
            filter: { categoryProductsId: { eq: categories[0].id } },
          });
          
          const filterList = filteredStyles.map((style) => {
            return style.label;
          });
          setFilterStyleList(filterList);

          // Filter the results if a style is selected
          setProducts(
            products.filter(
              (product) =>
                filterList.includes(product.style) ||
                filteredStyles.length === 0
            )
          );
        }
      } catch (error) {
        console.log("Error retrieving posts", error);
      }
    }

    if (prevName !== name || prevName !== "") {
      if (prevName !== name) {
        setFilteredStyles([]);
      }
      queryCategory();
      setPrevName(name);
      queryProduct();
    }
  }, [name, filteredStyles, prevName]);

  useEffect(() => {
    if (showAlert) {
      const timeId = setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      return () => {
        clearTimeout(timeId);
      };
    }
  }, [showAlert]);

  const alertHandler = (alertStatus) => {
    setAlertStatus(alertStatus);
    setShowAlert(true);
  };

  // overrides for our collection
  // Change the style of the collection to be a list on smaller screen formats and grid
  // on larger formats. Also change the items displayed depending on the screen size
  const overrides = {
    ProductMediumCollection: {
      type: useBreakpointValue({
        small: "list",
        base: "list",
        medium: "grid",
      }),
      itemsPerPage: useBreakpointValue({
        base: "5",
        small: "5",
        medium: "10",
        large: "10",
        xl: "10",
      }),
    },
  };

  return (
    <AppLayout
      navigation={<Navigation activeHref="/" />}
      toolsHide={true}
      navigationWidth={200}
      minContentWidth={1000}
      maxContentWidth={2000}
      content={
        <ContentLayout
          header={
            <SpaceBetween size="m">
              <Header
                variant="h1"
                actions={
                  <AdminControls
                    showNewProduct={true}
                    showNewCategory={false}
                    productButtonText={"New Product"}
                    categoryButtonText={"New Category"}
                    alertHandler={alertHandler}
                    product={null}
                  />
                }
              >
                {`Products - ${name}`}
              </Header>
              {showAlert
              ? <Alert type={alertStatus.type}>{alertStatus.message}</Alert>
              : null
              }
              <Multiselect
                selectedOptions={filteredStyles}
                onChange={({detail}) => {
                  setFilteredStyles(detail.selectedOptions)
                }}
                deselectAriaLabel={e => `Remove ${e.label}`}
                options={
                  allStyles.map((style) => {
                    return {
                      label: style,
                      value: style
                    }
                  })
                }
                placeholder="Select styles"
                selectedAriaLabel="Selected"
              />
            </SpaceBetween>
          }
        >
          <Container>
            <ProductMediumCollection
              items={products}
              overrides={overrides}
            />
          </Container>
        </ContentLayout>
      }
    />
  );
}