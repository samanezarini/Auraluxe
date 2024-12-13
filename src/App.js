import './App.css';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar.js';
import Products from './components/products/Products';

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Banner />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
