import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { getProductById } from '../../asyncMock.js';
import ItemDetail from '../ItemDetail/ItemDetail.js';
import { useParams } from 'react-router-dom';

function ItemDetailContainer () {

    const [product, setProduct] = useState(null);

    const { itemId } = useParams();

    // console.log('El ID de este producto es:', itemId);

    useEffect(()=> {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error=> {
                console.error(error)
            })
    }, [itemId])

    return(
        
        <div className='ItemDetailContainer is-flex is-justify-content-center is-align-items-center columns'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;