import './App.css';
import NavBar from './components/NavBar';
import './Estilos.css';
import ItemListContainer from './components/container/ItemListContainer';
import { ItemDetailContainer } from './components/container/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Carrito from './components/Carrito';
import CartContextProvider from './context/CartContextProvider';



function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          < NavBar marca="Espasandin" s1="Inicio" s2="Remeras" s3="Camperas"/>
        </header>
        <Routes>
          <Route exact path="/" element={< ItemListContainer />} />
          <Route exact path="/categoria/:idcate" element={< ItemListContainer />} />
          <Route exact path="/detalle/:id" element={< ItemDetailContainer />} />
          <Route exact path="/carrito" element={<Carrito/>} />
          
        </Routes>
      </div>
    </BrowserRouter>
    </CartContextProvider>
    
  );
}

export default App;
