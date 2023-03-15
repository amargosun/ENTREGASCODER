// import { arregloProductos } from "./baseDatos/baseDatos";
import { db } from "../firebaseConfig/firebase.js"
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import './styles/ItemListContainer.css';
import { collection, getDocs, query, where} from 'firebase/firestore'

export function ItemListContainer() {
    const {tipoProducto} = useParams();
    const [productos, setProductos] = useState([]);
    const arregloProductos = collection (db,"productos")
    useEffect(()=>{
        if(tipoProducto){
            const filtroCategoria = query(arregloProductos, where('categoria', '==', tipoProducto))
            getDocs(filtroCategoria)
            .then(data=>setProductos(data.docs.map(doc=>({...doc.data(),id:doc.id}))))
        } else{
            getDocs(arregloProductos)
            .then(data=>setProductos(data.docs.map(doc=>({...doc.data(),id:doc.id}))))
        }
    },[tipoProducto])

    return(
        <>
            <div className="item-list-container">
                <p className="titulolist">{!tipoProducto ? 'Catálogo' : tipoProducto[0].toUpperCase()+tipoProducto.substring(1)}</p>
                <ItemList items={productos}/>
            </div>
        </>
    )
}