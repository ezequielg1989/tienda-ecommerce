import './App.css';
import Home from './component/Home/Home';
import NavBar from './component/NavBar/NavBar';
import {Routes,Route} from 'react-router-dom'
import Products from './component/Products/Products';
import Product from './component/Product/Product';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Products" element={<Products/>}/>
        <Route exact path="/Product/:id" element={<Product/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
