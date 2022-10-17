import React, {useContext, useEffect, useState} from 'react';
import { CarritoContext } from '../context/carritoContext';
// import { mostrarCarrito } from '../functions/functions';

const Carrito = () => {
    const {carrito, agregarProducto, quitarProducto} = useContext(CarritoContext)
    const [carritoLocal, setCarritoLocal] = useState([]);

    useEffect(() => {
        const prodMostrar  = carrito.map(producto => 
            <div className="card cardProducto" key={producto.id}>
                    <img src={"./img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text">Price: {producto.precio}</p>
                            <p className="card-text">Amount: {producto.cantidad}</p>
                            <p className="card-text">Total Price: {producto.precio * producto.cantidad}</p>
                            <button className='btn btn-dark' onClick={() => quitarProducto(producto)}>Delete</button>
                            <p> </p>
                            <button className='btn btn-dark' > Buy Product </button>
                    </div>
                </div>)
        setCarritoLocal(prodMostrar)
    }, [carrito]);
    
   const app = (carrito.length != 0) ? <div className='row'> {carritoLocal} </div> : <> <h1> Your Cart is Empty </h1></>
          
    return app
}

export default Carrito;
