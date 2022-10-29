import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'animate.css'
import {CartContextProvider} from './context/cartContext'
import CartView from './components/CartView/CartView';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <div className='container'>
          <div className='col-12'>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer/>} />
              <Route path="*" element={<h4>Te perdiste<br/>Error 404</h4>}/>
              <Route path="/category/:id" element={<ItemListContainer />}/> 
              <Route path="/cart" element={<CartView />}/> 
            </Routes>
            </div>
        </div>
        
      </BrowserRouter>
    </CartContextProvider>
      
  );
}

export default App;
