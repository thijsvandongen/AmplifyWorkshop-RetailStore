import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, Authenticator } from '@aws-amplify/ui-react';

import '@aws-amplify/ui-react/styles.css';
import { Category, Recommended, Header, Footer, Product } from './components';

function App() {
  const baseURL = process.env.NODE_ENV === 'development' ? '/RetailStore' : '';

  return (
    <ThemeProvider>
      <Authenticator>
        <Router basename={baseURL}>
          <Header />
          <Routes>
            <Route path="/" element={<Recommended />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
          <Footer />
        </Router>
      </Authenticator>
    </ThemeProvider>

  );
}

export default App;
