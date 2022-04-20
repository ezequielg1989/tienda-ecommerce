import './App.css';
import Home from './component/Home/Home';
import NavBar from './component/NavBar/NavBar';
import {Routes,Route} from 'react-router-dom'
import Products from './component/Products/Products';
import Product from './component/Product/Product';
import About from './component/About/About';
import Cart  from './component/Cart/Cart';
import Checkout from './component/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Products" element={<Products/>}/>
        <Route exact path="/Product/:id" element={<Product/>}/>
        <Route exact path="Cart" element={<Cart/>}/>
        <Route exact path="Checkout" element={<Checkout/>}/>
        <Route exact path="/About" element={<About/>}/>
      </Routes>  
    </div>
  );
}

export default App;
