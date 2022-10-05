import React, {useState, useEffect} from 'react';
import { consultar } from '../functions/functions';
import Main from './main';
import {Link} from 'react-router-dom';

const Home = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        consultar().then(productos => {
            
            const cardProducto = productos.map(producto => 
                <div className="card cardProducto" key={producto.id}>
                    <img src={"./img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                        <div className="card-body">
                            <h5 className="card-title"> Model: {producto.nombre}</h5>
                            {/* <p className="card-text"> Modelo: {producto.nombre}</p> */}
                            <p className="card-text"> Brand : {producto.marca}</p>
                            <p className="card-text"> Price : {producto.precio}</p>
                            <p className="card-text"> Stock : {producto.stock}</p>
                            <button className='btn btn-danger'> <Link className='nav-link' to={"/producto/" + producto.id}> See Product </Link> </button>
                    </div>
                </div>)
            
            setProductos(cardProducto) } )
    }, []);


    return (
        <div className="row">
            <Main/>
            <div className='xd'>
            {productos}     
            </div>
        </div>      
        
        
    );
}

export default Home;