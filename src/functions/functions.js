export const consultar = async () => {
    const response = await fetch('./json/products.json')
    const productos = await response.json()
    const cardProducto = productos.map(producto => 
        <div className="card cardProducto" key={producto.id}>
            <img src={"./img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                <div className="card-body">
                    <h5 className="card-title"> Model: {producto.nombre}</h5>
                    {/* <p className="card-text"> Modelo: {producto.nombre}</p> */}
                    <p className="card-text"> Brand : {producto.marca}</p>
                    <p className="card-text"> Price : {producto.precio}</p>
                    <p className="card-text"> Stock : {producto.stock}</p>
                    <button className='btn btn-danger'> See Product </button>
            </div>
        </div>)

    return cardProducto
}