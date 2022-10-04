import React from 'react';
// import {Link} from 'react-router-dom'

const Dropdow = ({lista}) => {
    return (
        <>
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"> Products </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">{lista[0]}</a>
            <a className="dropdown-item" href="#">{lista[1]}</a>
            <a className="dropdown-item" href="#">{lista[2]}</a>
          </div>
        </li>  
        </>
    );
}

export default Dropdow;
