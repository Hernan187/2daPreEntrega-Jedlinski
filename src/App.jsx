import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import "./styles/App.css";
import Home from '../src/components/home';
import Footer from './components/footer';
import Carrito from './components/carrito';
import Producto from './components/producto';
import Contacto from './components/contacto';
import Categoria from './components/categoria';

const App = () => {
  

    return (
        <>

          <BrowserRouter>
           <Navbar/>

            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/producto/:id" element={<Producto/>} />
              <Route path="/categoria/:id" element={<Categoria/>} />
              <Route path="/contacto" element={<Contacto/>} />
              <Route path="/carrito" element={<Carrito/>} />

            </Routes>


           <Footer/>
          </BrowserRouter>

        </>
    );
}

export default App;