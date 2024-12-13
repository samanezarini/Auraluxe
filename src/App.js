import './App.css';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar.js';
import Products from './components/products/Products';

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Banner />
      <Products />
    </div>
  );
}

export default App;
