import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './pages/ProductList/ProductList';
import Cart from './pages/Cart/Cart';
import Topbar from './components/Header/Topbar';
import Footer from './components/Footer/Footer';
import ProductInfo from './pages/Product/ProductInfo';

function App() {
  return (
    <div className='App flex flex-col min-h-screen relative'>
      <Topbar />
      <main className="flex-grow overflow-auto pt-[4rem]">
        <Routes>
          <Route path="/" element={<ProductList/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/:id" element={<ProductInfo/>} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </main>
      <Footer className="flex-shrink-0" />
    </div>
  );
}

export default App;
