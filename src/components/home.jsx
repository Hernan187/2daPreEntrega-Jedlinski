import React, {useState, useEffect, useContext} from 'react';
import { getProducts } from '../functions/firebase';
import { DarkModeContext } from '../context/darkModeContext';
import Main from './main';
import {Link} from 'react-router-dom';

const Home = () => {
    const [productos, setProductos] = useState([]);

    const {darkMode} = useContext(DarkModeContext);

    useEffect(() => {

        getProducts().then(productos => {
            const cardProducto = productos.map( producto => {                
                return (
                    <div className="card cardProducto" key={producto[0]}>
                        <img src={producto[1].img} className="card-img-top" alt={producto.nombre} />
                            <div className="card-body">
                                <h5 className="card-title"> Model: {producto[1].nombre}</h5>
                                <p className="card-text"> Brand : {producto[1].marca}</p>
                                <p className="card-text"> Price : {producto[1].precio}</p>
                                <p className="card-text"> Stock : {producto[1].stock}</p>
                                <button className='btn btn-danger'> <Link className='nav-link' to={`/producto/${producto[0]}`}> See Product </Link> </button>
                        </div>
                    </div> 
                )
            })
            
            setProductos(cardProducto) } )
    }, []);

    return (
        <div className={darkMode ? 'darkMode row' : 'row'}>
            <Main/>
            <div className='xd'>
            {productos}     
            </div>
            <p> {darkMode} </p>
        </div>      
        
        
    );
}

export default Home;