import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import "./styles/App.css";
import { DarkModeProvider } from './context/darkModeContext';
import Home from '../src/components/home';
import Footer from './components/footer';
import Carrito from './components/carrito';
import Producto from './components/producto';
import Contacto from './components/contacto';
import Categoria from './components/categoria';

const App = () => {
  

    return (
        <>

        <DarkModeProvider props= {"hi"}>
          <BrowserRouter>
           <Navbar/>

            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/producto/:id" element={<Producto/>} />
              <Route path="/categoria/:id" element={<Categoria/>} />
              <Route path="/contacto" element={<Contacto/>} />
              <Route path="/carrito" element={<Carrito/>} />
              <Route path="*" element={<h1> Error 404 : Page Not Found </h1>}/>

            </Routes>


           <Footer/>
          </BrowserRouter>
        </DarkModeProvider>

        </>
    );
}

export default App;