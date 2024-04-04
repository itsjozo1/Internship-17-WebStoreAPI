import Product from './pages/Product/Product';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
