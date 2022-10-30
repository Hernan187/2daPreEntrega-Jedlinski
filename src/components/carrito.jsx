import React, {useContext, useEffect, useState} from 'react';
import { CarritoContext } from '../context/carritoContext';
// import { mostrarCarrito } from '../functions/functions';
import {Link} from 'react-router-dom';
import { btnBuy } from '../functions/functions';

const Carrito = () => {
    const {carrito, agregarProducto, quitarProducto} = useContext(CarritoContext)
    const [carritoLocal, setCarritoLocal] = useState([]);
    const [PrecioTotal, setPrecioTotal] = useState(0);


  useEffect(() => {
    let total = 0;
    const prodMostrar  = carrito.map(producto => {
      total += (producto.precio * producto.cantidad);
      return (
        <div className="card cardProducto" key={producto.id}>
          <img src={producto.img} className="card-img-top" alt={producto.nombre} />
          <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">Price: {producto.precio}</p>
            <p className="card-text">Amount: {producto.cantidad}</p>
            <p className="card-text">Total Price: {producto.precio * producto.cantidad}</p>
            <button className='btn btn-dark' onClick={() => quitarProducto(producto)}>Delete</button>
            <p> </p>
          </div>
        </div>
      )
    });
    setPrecioTotal(total);
    setCarritoLocal(prodMostrar);
  }, [carrito]);
    
   const app = (carrito.length != 0) ? <div className='row'> {carritoLocal} <p> Total : {PrecioTotal}</p> <button className='btn btn-dark' onClick={btnBuy}> Buy Product </button> </div>  : <> <h1> Your Cart is Empty </h1> <Link className='nav-link' href='/' to="/" > <button className='btn btn-danger'> Go Home </button>  </Link> </>
          
    return app
}

export default Carrito;
