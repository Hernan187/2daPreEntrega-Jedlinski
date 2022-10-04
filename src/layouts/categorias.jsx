import {Link} from 'react-router-dom'

const Categorias = () => {
    return (
      <>
        <li className="nav-item">
          <Link className="nav-link active" to="/" > Home </Link>
    
      </li>
      <li className="nav-item">
      <Link className="nav-link active" to="/contacto" > Contact </Link>
      </li> 
      </>
  );
}

export default Categorias;
