import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail.js';
import { useParams } from 'react-router-dom';

// FireBase:
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig.js';

function ItemDetailContainer () {

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams();

    useEffect(()=> {
        setLoading(true)

        const docRef = doc(db, 'products', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productsAdapted = { id: response.id, ...data}
                setProduct(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [itemId])

    return(
        
        <div className='ItemDetailContainer is-flex is-justify-content-center is-align-items-center columns'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;