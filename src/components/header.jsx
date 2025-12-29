import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Modal from '@cloudscape-design/components/modal';
import ProgressBar from '@cloudscape-design/components/progress-bar';
import SpaceBetween from '@cloudscape-design/components/space-between';
import TopNavigation from '@cloudscape-design/components/top-navigation';

import { LoadSampleData } from '../utils/data-loader/loader';

export default function Header(props) {
  const { user, signOut } = { user: undefined, signOut: () => {} };
  const [visible, setVisible] = useState(false);
  const [loadDataVisible, setLoadDataVisible] = useState(false);
  const [categoryProgress, setCategoryProgress] = useState(0);
  const [categoryStatus, setCategoryStatus] = useState('in-progress');
  const [categoryResultText, setCategoryResultText] = useState('');
  const [productProgress, setProductProgress] = useState(0);
  const [productStatus, setProductStatus] = useState('in-progress');
  const [productResultText, setProductResultText] = useState('');
  let navigate = useNavigate();

  useEffect(() => {
    if (user?.userId !== undefined) {
      setVisible(false);
    }
  }, [user]);

  const handleUserProfileAction = (event) => {
    if (event.detail.id === 'signout' && user !== undefined) {
      signOut();
    }
    else if (event.detail.id === 'signout' && user === undefined) {
      setVisible(true);
    }
  };

  const loadDataCallback = (statusUpdate) => {
    setCategoryProgress(statusUpdate.categoryProgress);
    setCategoryStatus(statusUpdate.categoryStatus);
    setCategoryResultText(statusUpdate.categoryResultText);
    setProductProgress(statusUpdate.productProgress);
    setProductStatus(statusUpdate.productStatus);
    setProductResultText(statusUpdate.productResultText);
  };

  async function loadSampleData(e) {
    e.preventDefault();
    setLoadDataVisible(true);
    LoadSampleData(loadDataCallback);
  };

  return (
    <div id="top-nav">
    <TopNavigation
      identity={{
        title: "RetailStore",
        href: "/",
        onFollow: function(e) {
          e.preventDefault();
          navigate('/');
        },
        logo: {
          src: "https://d1.awsstatic.com/products/AWS-mobile/Mobile-v2/amplify-logo-circle.3c79537237d8ac81726fc61fe5e0c03f288e64ae.png",
          alt: 'Amplify RetailStore'
        }
      }}
      utilities={[
        {
          type: "menu-dropdown",
          iconName: 'settings',
          onItemClick: loadSampleData,
          items: [{
            id: "load-sample-data",
            text: "Load sample data"
          }]
        },
        {
          type: "menu-dropdown",
          text: (user && user.signInDetails) ? user.signInDetails?.loginId : "Profile",
          iconName: "user-profile",
          onItemClick: handleUserProfileAction,
          items: [
            { id: "signout", text: (user !== undefined) ? "Sign out" : "Sign in" }
          ]
        }
      ]}
      i18nStrings={{
        overflowMenuTriggerText: "More",
        overflowMenuTitleText: "All",
        overflowMenuBackIconAriaLabel: "Back",
        overflowMenuDismissIconAriaLabel: "Close menu"
      }}
    />
    <Modal
      onDismiss={() => setLoadDataVisible(false)}
      visible={loadDataVisible}
      closeAriaLabel="Close modal"
      header="Load sample data - status"
      modalRoot={document.getElementById('top-nav')}
    >
      <SpaceBetween direction="vertical" size="m">
        <ProgressBar
          value={categoryProgress}
          status={categoryStatus}
          additionalInfo="There are 20 categories for the RetailStore application"
          label="Category data load status"
          resultText={categoryResultText}
        />
        <ProgressBar
          value={productProgress}
          status={productStatus}
          additionalInfo="There are 2465 products for the RetailStore application"
          label="Product data load status"
          resultText={productResultText}
        />
      </SpaceBetween>
    </Modal>
    <Modal
      onDismiss={() => setVisible(false)}
      visible={visible}
      closeAriaLabel="Close modal"
      header="Please sign in or create an account"
      modalRoot={document.getElementById('top-nav')}
    >

    </Modal>
  </div>
  );
}