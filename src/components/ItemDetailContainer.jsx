import { db } from "../firebaseConfig/firebase.js"
import React, { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore'

function ItemDetailContainer() {
    const [producto, setProducto] = useState([]);
    const { itemid } = useParams();
    console.log(producto);
    const getItemById = async () => {
        const docu = doc(db, "productos", itemid)
        const document = await getDoc(docu) 
        const result = {id: document.id, ...document.data()}
        if (result.exists()) {
            setProducto(result);
        } else {
            console.log("este producto no existe");
        }
    }
    useEffect(() => {
        getItemById()
    }, []);

    return (
        <section id="menu" className="text-center container">
        
        <div className="container">
            <div className="">
                <ItemDetail detalle={producto} />
            </div>
        </div>
        </section>
    );
}
    
export default ItemDetailContainer;
