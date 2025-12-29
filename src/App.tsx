import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '@aws-amplify/ui-react/styles.css';
import { ThemeProvider } from '@aws-amplify/ui-react';
import { Category, Recommended, Header, Footer, Product } from './components';

function App() {
  const baseURL = process.env.NODE_ENV === 'development' ? '/RetailStore' : '';

  return (
    <ThemeProvider>
        <Router basename={baseURL}>
          <Header />
          <Routes>
            <Route path="/" element={<Recommended />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
          <Footer />
        </Router>
    </ThemeProvider>
  );
}

export default App;
