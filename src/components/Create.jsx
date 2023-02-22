import {useState} from "react";
import {useNavigate} from "react-router-dom"

import {collection, addDoc} from "firebase/firestore"
import { db } from "../firebaseConfig/firebase.js"
import { async } from "@firebase/util";

const Create = ()=>{
    // logica de creacion de un producto
    const [description, setDescription] = useState("")
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()
    const productsColletion = collection(db, "dctoys")
    const store = async (e)=>{
        e.preventDefault()
        await addDoc(productsColletion, {
            descripcion: description,
            stock: stock
            }
        )
        navigate("/")
    }
    // aca va el renderizado
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Crear Producto</h1>
                    <form onSubmit={store}>
                        <div className="mb-3">
                            <lavel className="form-label">Descripción</lavel>
                            <input type="text" className="form-control" value={description} 
                            placeholder='Descripción del producto' onChange={(e)=>setDescription(e.target.value)}/>
                        </div>
                        <div className="mb-3">    
                            <lavel className="form-label">Stock</lavel>
                            <input type="number" className="form-control" value={stock} 
                            placeholder="Cantidad de producto" onChange={(e)=>setStock(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Crear</button>
                    </form>
                </div>
            </div>
        </div>

    )

}
export default Create