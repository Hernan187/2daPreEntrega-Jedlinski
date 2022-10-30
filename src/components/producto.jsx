import React, {useState, useEffect, useContext} from 'react';
import DetalleProducto from './detalleProducto';
import { useParams } from 'react-router-dom';
import { getProduct } from '../functions/firebase';
import { DarkModeContext } from '../context/darkModeContext';
import '../styles/App.css';

const Producto = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    const {darkMode} = useContext(DarkModeContext);

    useEffect(() => {

        getProduct(id).then(prod => {
            setProducto(prod)
        })

       
    }, [])

    if (producto.length != 0) {
    return (
        <>
            <div className={darkMode ? 'darkMode card mb-3' : 'card mb-3'} data-aos="fade-right" style={{maxWidth: '540px'}}>
            <DetalleProducto producto={producto}/>
            </div>
        </>
    )
}}

export default Producto;
