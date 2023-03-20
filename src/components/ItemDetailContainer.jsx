import { db } from "../firebaseConfig/firebase.js"
import React, { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore'

function ItemDetailContainer() {
    const [producto, setProducto] = useState();
    const { itemid } = useParams();

    const getItemById = async () => {
        const docu = doc(db, "productos", itemid)
        const document = await getDoc(docu) 
        const result = {id: document.id, ...document.data()}
        setProducto(result);
    }
    useEffect(() => {
        getItemById()
    }, []);

    return (
        <section id="menu" className="text-center container">
        <div className="container">
            <div className="item-detail-container">
                {producto ? <ItemDetail item={producto} />  
                : 
                <h1></h1>}
            </div>
        </div>
        </section>
    );
}
    
export default ItemDetailContainer;
