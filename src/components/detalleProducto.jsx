import React, {useState, useContext} from 'react';
import { CarritoContext } from '../context/carritoContext';

const DetalleProducto = ({producto}) => {

    const [cantidad, setCantidad] = useState(1);

    const {carrito, agregarProducto, quitarProducto} = useContext(CarritoContext)

    const cantidadProducto = (operacion) => {
        if (operacion == "+") {
            if (cantidad < producto.stock) {
                setCantidad(cantidad + 1)
        } } else {
            if (cantidad > 1) {
                setCantidad(cantidad - 1)
            }
        }
     }

    return (
        <>
            <div className="row g-0">
            <div className="col-md-4">
             <img src={`../img/${producto.img}`} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
                <div className='card-body'>
                    <h5 className='card-title'> Model: {producto.nombre}  </h5>
                    <p className='card-text'> Brand: {producto.marca} </p>
                    <p className='card-text'> Price : {producto.precio}  </p>
                    <p className='card-text'> Stock : {producto.stock} </p>
                    <p className='card-text'> {cantidad} </p>
                    
                    <button className='btn btn-outline-dark' onClick={ () => cantidadProducto("-") } > - </button>
                    <button className='btn btn-outline-dark' onClick={ () => cantidadProducto("+") } > + </button>
                    <button className='btn btn-dark' onClick={ () => agregarProducto(producto, cantidad) } > Add To Cart </button>
                </div>
            
            </div>
            </div>
        </>
    );
}

export default DetalleProducto;
