import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { consultar } from "../functions/functions";

const Categoria = () => {


    const [productos, setProductos] = useState([]);
    const {id} = useParams()
    useEffect(() => {


        
        consultar('../json/products.json').then(productos => {
            const productoCategoria = productos.filter(producto => producto.idCategory == id)

            const cardProducto = productoCategoria.map(producto => 
                <div className="card cardProducto" key={producto.id}>
                    <img src={"../img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                        <div className="card-body">
                            <h5 className="card-title"> Model: {producto.nombre}</h5>
                            {/* <p className="card-text"> Modelo: {producto.nombre}</p> */}
                            <p className="card-text"> Brand : {producto.marca}</p>
                            <p className="card-text"> Price : {producto.precio}</p>
                            <p className="card-text"> Stock : {producto.stock}</p>
                            <button className='btn btn-danger'> <Link className='nav-link' to={"/producto/" + producto.id}> See Product </Link> </button>
                    </div>
                </div>)
            console.log(productoCategoria);
            setProductos(cardProducto)
        })
        
    }, [id]);

    return (
        <div className="row" data-aos="fade-in" >
            {productos}
        </div>
    );
}

export default Categoria;
