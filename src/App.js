import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Element from './pages/element/Element';
import Page from './pages/page/Page';
import Blog from './pages/blog/Blog';
import Products from './pages/products/Products';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/element' element={<Element/>} />
        <Route path='/page' element={<Page/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/products/:productsId' element={<Products/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
