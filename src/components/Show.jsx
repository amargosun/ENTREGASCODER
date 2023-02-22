import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { collection, getDocs, deleteDoc, doc, startAfter } from 'firebase/firestore'
import { db } from "../firebaseConfig/firebase.js"

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Show = ()=>{
    // 1 configurar hooks
    const [products, setProducts] = useState([])

    // 2 referenciar a la db de firestore
    const productsCollection = collection (db,"dctoys")

    // 3 funcion para mostrar todos los documentos (registros)
    const getProducts = async ()=>{
        const data = await getDocs (productsCollection)
        setProducts(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }

    // 4 funcion para eliminar un documento (registro)
    const deleteProduct = async(id)=>{
        const productDoc = doc(db, "dctoys", id)
        await deleteDoc (productDoc)
        getProducts()
    }

    // 5 funcion para la confirmación de la eliminacion (sweet alert)
    const confirmDelete = (id)=>{
        Swal.fire({
            title: 'Está seguro de Eliminar el Registro?',
            text: "Esto no podrá Revertirse",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminarlo'
        })
        .then((result) => {
            if (result.isConfirmed) {
                deleteProduct(id)
                Swal.fire(
                'Eliminado!',
                'El Registro fue eliminado',
                'success'
                )
            }
        })
    }

    // 6 useEffect (ACTUALIZA EL COMPONENTE)
    useEffect(()=>{
        getProducts()
    },[])

    // 7 devolver la vista

    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="d-grid gap-2">
                        <Link to="/create" className="btn btn-secondary mt-2 mb-2">Crear</Link>
                    </div>
                    <table className="table table-dark table hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Descripción</th>
                                <th>Stock</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product)=>{
                                return(
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.descripcion}</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <Link to={`/edit/${product.id}`} className="btn btn-light"><i className='fa-solid fa-pencil'></i></Link>
                                        <button onClick={()=>{confirmDelete(product.id)}} className="btn btn-danger"><i className='fa-solid fa-trash'></i></button>
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}

export default Show