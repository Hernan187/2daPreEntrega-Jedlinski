import React, {useState, useEffect} from 'react';
import { consultar } from '../functions/functions';
import Main from './main';

const Home = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        consultar().then(producto => setProductos(producto))
    }, []);


    return (
        <div className="row">
            <Main/>
            <div className='xd'>
            {productos}     
            </div>
        </div>      
        
        
    );
}

export default Home;