import {Link} from 'react-router-dom';
import Categorias from '../layouts/categorias';
import Dropdown from '../layouts/dropdown';
import CartWidget from '../layouts/cartWidget';

const Navbar = () => {
  const listaT = ["Decks", "Trucks", "Wheels"]
  
    return (
        <> 
  
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarColor01">
                  <ul className="navbar-nav me-auto">
                    <Categorias/>
                    <Dropdown lista={listaT}/>
                  </ul>
                  <Link className="nav-link" to="/carrito" > <CartWidget/> </Link>
                  <a className="nav-link" href='/' to="/" id='elshop'>SkateShop.</a>
                </div>
              </div>
            </nav>
        </>
    );
}

export default Navbar;
