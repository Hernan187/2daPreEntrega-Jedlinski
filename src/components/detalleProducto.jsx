import React from 'react';

const DetalleProducto = ({producto}) => {
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
                    <button className='btn btn-dark'> Buy Product </button>
                </div>
            
            </div>
            </div>
        </>
    );
}

export default DetalleProducto;
