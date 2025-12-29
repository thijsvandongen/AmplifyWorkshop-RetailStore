import { useState, useEffect } from 'react';
import { fetchAuthSession } from 'aws-amplify/auth';

import ProductCreateForm from './ProductCreateForm';
import ProductUpdateForm from './ProductUpdateForm';
import CategoryCreateForm from './CategoryCreateForm';
import CategoryUpdateForm from './CategoryUpdateForm';

import Modal from '@cloudscape-design/components/modal';
import Button from '@cloudscape-design/components/button';
import SpaceBetween from '@cloudscape-design/components/space-between';

export default function AdminControls(props) {
  const {
    productButtonText,
    categoryButtonText,
    showNewProduct,
    showNewCategory,
    alertHandler,
    product
  } = props;
  const [isAdmin, setIsAdmin] = useState(false);
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState(null);
  const [modalConfig, setModalConfig] = useState({
    showProduct: true,
    type: 'Create',
  });

  useEffect(() => {
    async function isAdminUser() {
      try {
        const user = await fetchAuthSession();
        setIsAdmin(user.tokens.accessToken.payload["cognito:groups"].includes('Admin'));
        setUser(user);
      } catch (err) {
        setIsAdmin(false);
        setUser(null);
      }
    }
    isAdminUser();
  }, []);

  const handleAction = (type, e) => {
    e.preventDefault();
    setModalConfig({
      showProduct: type === 'product',
      type: productButtonText.includes("Edit") ? 'Update' : 'Create'
    });
    setVisible(true);
  };

  const handleSuccess = (fields) => {
    alertHandler({
      type: 'success',
      message: 'Successfully submitted new item!'
    });
    setVisible(false);
  };

  const handleError = (fields, msg) => {
    alertHandler({
      type: 'error',
      message: `There was an issue submitting your new item: ${msg}`
    });
    setVisible(false);
  };

  return (
    <>
      {(user !== undefined && isAdmin)
      ? <>
          <SpaceBetween direction="horizontal" size="xs">
            {showNewProduct
            ? <Button variant="primary" onClick={(e) => handleAction("product", e)}>
                {productButtonText}
              </Button>
            : null
            }
            {showNewCategory
            ? <Button variant="primary" onClick={(e) => handleAction("category", e)}>
                {categoryButtonText}
              </Button>
            : null
            }
          </SpaceBetween>
          <Modal
            onDismiss={() => setVisible(false)}
            visible={visible}
            closeAriaLabel="Close modal"
            header={modalConfig.showProduct ? productButtonText : categoryButtonText}
            modalRoot={document.getElementById('top-nav')}
          >
            {modalConfig.showProduct && modalConfig.type === 'Create'
            ? <ProductCreateForm onSuccess={handleSuccess} onError={handleError}/>
            : null
            }
            {modalConfig.showProduct && modalConfig.type === 'Update'
            ? <ProductUpdateForm product={product} onSuccess={handleSuccess} onError={handleError}/>
            : null
            }
            {!modalConfig.showProduct && modalConfig.type === 'Create'
            ? <CategoryCreateForm onSuccess={handleSuccess} onError={handleError} />
            : null
            }
            {!modalConfig.showProduct && modalConfig.type === 'Update'
            ? <CategoryUpdateForm onSuccess={handleSuccess} onError={handleError} />
            : null
            }
          </Modal>
        </>
      : <></>
      }
    </>
  );
}