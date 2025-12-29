import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import { useBreakpointValue } from '@aws-amplify/ui-react';

import Navigation from './navigation';
import AdminControls from './adminControls';
import ProductSmallCollection from './productSmallCollection';

import AppLayout from '@cloudscape-design/components/app-layout';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import ContentLayout from '@cloudscape-design/components/content-layout';
import Alert from '@cloudscape-design/components/alert';
import SpaceBetween from '@cloudscape-design/components/space-between';
import { type Schema } from '../../amplify/data/resource';

interface AlertStatus {
  type: string,
  message: string
}

export default function Recommended() {
  const [products, setProducts] = useState<Schema["Product"]["type"][]>([]);

  const [showAlert, setShowAlert] = useState(false);
  const [alertStatus, setAlertStatus] = useState({
    type: 'success',
    message: 'Success!',
  });

  useEffect(() => {
    // Query products and limit to the top 5 top rated products
    const client = generateClient<Schema>();
    async function queryProduct() {
      if (products.length === 0) {
        try {
          const { errors, data: topProducts } =
            await client.models.Product.list({
              limit: 5,
            });
          if (errors) throw errors;
          setProducts(
            topProducts.sort((a, b) => (a.rating! > b.rating! ? 1 : -1))
          );
        } catch (error) {
          console.log("Error retrieving products", error);
        }
      }
    }
    queryProduct();
  }, []);

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

  const alertHandler = (alertStatus: AlertStatus) => {
    setAlertStatus(alertStatus);
    setShowAlert(true);
  };

  // override collection properties and set page size based on screen size
  const overrides = {
    ProductSmallCollection: {
      itemsPerPage: useBreakpointValue({
        base: "1",
        small: "1",
        medium: "2",
        large: "3",
        xl: "4",
        xxl: "5",
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
                description="Top products"
                actions={
                  <AdminControls
                    showNewProduct={true}
                    showNewCategory={true}
                    productButtonText={"New Product"}
                    categoryButtonText={"New Category"}
                    alertHandler={alertHandler}
                    product={null}
                  />
                }
              >
                Recommended
              </Header>
              {showAlert ? (
                <Alert type="success">{alertStatus.message}</Alert>
              ) : null}
            </SpaceBetween>
          }
        >
          <Container>
            <ProductSmallCollection items={products} overrides={overrides} />
          </Container>
        </ContentLayout>
      }
    />
  );
}
