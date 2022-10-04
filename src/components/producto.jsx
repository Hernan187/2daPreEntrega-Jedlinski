import React, {useState, useEffect} from 'react';
import DetalleProducto from './detalleProducto';
import { useParams } from 'react-router-dom';

const Producto = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams

    useEffect(() => {

        fetch('./json/products.json')
        .then(response => response.json())
        .then(data => {
            const miProducto = data.find(productoArray => productoArray.id === id)
            setProducto(miProducto)
        })

       
    }, [])

    return (
        <>
            <div className="card mb-3" style={{maxWidth: '540px'}}>
            <DetalleProducto producto={producto}/>
            </div>
        </>
    );
}

export default Producto;
