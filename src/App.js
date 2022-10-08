import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'animate.css'


function App() {
  return (
    
      <BrowserRouter>
        <NavBar/>
        <div className='container'>
          <div className='col-12'>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer/>} />
              <Route path="*" element={<h4>Te perdiste<br/>Error 404</h4>}/>
              <Route path="/category/:id" element={<ItemListContainer />}/> 
                
              
            </Routes>
            </div>
        </div>
        
      </BrowserRouter>
      
  );
}

export default App;
