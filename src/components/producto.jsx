import React, {useState, useEffect} from 'react';
import DetalleProducto from './detalleProducto';
import { useParams } from 'react-router-dom';
import '../styles/App.css';

const Producto = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams()

    useEffect(() => {

        fetch('../json/products.json')
        .then(response => response.json())
        .then(data => {
            const miProducto = data.find(productoArray => productoArray.id === id)
            setProducto(miProducto)
            console.log(miProducto);
        })

       
    }, [])

    return (
        <>
            <div className="card mb-3 all" data-aos="fade-right" style={{maxWidth: '540px'}}>
            <DetalleProducto producto={producto}/>
            </div>
        </>
    );
}

export default Producto;
