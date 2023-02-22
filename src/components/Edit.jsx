import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js";

const Edit = () => {
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState(0);
    const navigate = useNavigate();
    const { id } = useParams();
    const update = async (e) => {
        e.preventDefault();
        const product = doc(db, "dctoys", id);
        const data = {
        descripcion: description,
        stock: stock,
        };
        await updateDoc(product, data);
    };
    navigate("/");

    const getProductById = async (id) => {
        const product = getDoc(doc(db, "dctoys", id));
        if (product.exists()) {
            setDescription(product.data().descripcion);
            setStock(product.data().stock);
        } else {
            console.log("este producto no existe");
        //iria un swet alert
        }
    }
    useEffect(() => {
        getProductById(id)
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                <h1>Actualizar Producto</h1>
                <form onSubmit={update}>
                    <div className="mb-3">
                    <lavel className="form-label">Descripción</lavel>
                    <input
                        type="text"
                        className="form-control"
                        value={description}
                        placeholder="Descripción del producto"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    </div>
                    <div className="mb-3">
                    <lavel className="form-label">Stock</lavel>
                    <input
                        type="number"
                        className="form-control"
                        value={stock}
                        placeholder="Cantidad de producto"
                        onChange={(e) => setStock(e.target.value)}
                    />
                    </div>
                    <button type="submit" className="btn btn-primary">
                    Modificar
                    </button>
                </form>
                </div>
            </div>
        </div>
    );
};
export default Edit;
