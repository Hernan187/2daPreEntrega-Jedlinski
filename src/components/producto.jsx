import React, {useState, useEffect, useContext} from 'react';
import DetalleProducto from './detalleProducto';
import { useParams } from 'react-router-dom';
import { DarkModeContext } from '../context/darkModeContext';
import '../styles/App.css';

const Producto = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    const {darkMode} = useContext(DarkModeContext);

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
            <div className={darkMode ? 'darkMode card mb-3' : 'card mb-3'} data-aos="fade-right" style={{maxWidth: '540px'}}>
            <DetalleProducto producto={producto}/>
            </div>
        </>
    );
}

export default Producto;
