import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './pages/ProductList/ProductList';
import Cart from './pages/Cart/Cart';
import Topbar from './components/Header/Topbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Topbar />
      <Routes>
        <Route exact path="/" component={ProductList} />
        <Route path="/cart" component={Cart} />
        {/* <Route path="/login" component={Login} /> */}
        {/* <Route path="/register" component={Register} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
