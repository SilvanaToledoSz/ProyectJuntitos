import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'animate.css'
import {CartContextProvider} from './context/cartContext'
import CartView from './components/CartView/CartView';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';

function App() {
  return (
    
      <CartContextProvider>
        <BrowserRouter>          
          <header>
          <NavBar/>
          </header>
          <main>
            <div className='container'>
              <div className='col-12'>
                <Routes>
                  <Route path="/" element={<ItemListContainer />} />
                  <Route path="/item/:id" element={<ItemDetailContainer/>} />
                  <Route path="*" element={<Error />} />
                  <Route path="/category/:id" element={<ItemListContainer />}/> 
                  <Route path="/cart" element={<CartView />}/> 
                </Routes>
                </div>
            </div>
          </main>
          <footer>
            <Footer/>
          </footer>
        </BrowserRouter>
      </CartContextProvider>    
      
  );
}

export default App;
