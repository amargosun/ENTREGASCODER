import { createContext, useState } from "react";
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [productCartList, setProductCartList] = useState([]);
    const [formularioValido, setFormularioValido] = useState(false)
    console.log(formularioValido);
    const suma = productCartList.reduce((acumulador, item) => acumulador + item.totalPrice,0)
    const order = {
        cliente: {
            nombre: 'Juan Perez',
            email: 'jperez@mail.com',
            telefono: '3493567616',
            direccion: 'San Martín 180 - 2322 Sunchales (Sta. Fe)'
        },
        items: productCartList.map(producto => ({id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: producto.quantity,})),
        total: suma
    }

    const isInCart = (id)=>{
        const elementExists = productCartList.some((elemento)=>elemento.id === id);
        return elementExists;
    }

    const addProduct = (product, qty)=>{
        const newList = [...productCartList];
        if(isInCart(product.id)){
            const productIndex = productCartList.findIndex(element=>element.id===product.id);
            newList[productIndex].quantity = newList[productIndex].quantity + qty;
            newList[productIndex].totalPrice = newList[productIndex].quantity * newList[productIndex].precio;
            setProductCartList(newList)
        } else{
            const newProduct={...product, quantity:qty, totalPrice: qty*product.precio}           
            const newList = [...productCartList];
            newList.push(newProduct);
            setProductCartList(newList);
        }
    }

    const removeProduct = (idProduct)=>{
        const copyArray = [...productCartList];
        const newArray = copyArray.filter(elm=>elm.id !== idProduct);
        setProductCartList(newArray);
    }

    const clearProductCartList=()=>{
        setProductCartList([])
    }

    const getTotalProducts = ()=>{
        const totalProducts = productCartList.reduce((acc,item)=>acc + item.quantity,0);
        return totalProducts;
    }
    
    const grabarOrden = ()=>{
        const db = getFirestore()
        const ordersCollection = collection(db, 'ordenes')
        addDoc(ordersCollection, order)
        .then(({id})=>console.log(id))
        // bajastock()
        clearProductCartList()
    }

    // const bajastock=()=>{
    //     const stock = productCartList.map(producto => (
            
    //     ))
    // }

    const validarEmail = (email, email2) => {
        let valido = false;
        if (email === email2) {
            valido = true;
        }
        setFormularioValido(valido)
    };

    return(
        <CartContext.Provider value={{productCartList, suma, formularioValido, addProduct, 
        removeProduct, clearProductCartList, isInCart, getTotalProducts, grabarOrden, validarEmail}}>
            {children}
        </CartContext.Provider>
    )
}