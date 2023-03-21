import { createContext, useState } from "react";
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [productCartList, setProductCartList] = useState([]);
    const [formularioValido, setFormularioValido] = useState(false)
    const [emailInput, setEmailInput] = useState({email:'',email2:''})
    const [clieInput, setClieInput] = useState({nombre:'', email:'', telefono:''})
    const suma = productCartList.reduce((acumulador, item) => acumulador + item.totalPrice,0)
    const [idCompra, setIdCompra] = useState('')
    let date = new Date();
    const order = {
        cliente: {
            nombre: clieInput.nombre,
            email: clieInput.email,
            telefono: clieInput.telefono
        },
        fecha: date.toLocaleDateString(),
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
        .then(({id})=>setIdCompra(id)) 
        clearProductCartList()
    }

    const datosClie = (e) => {
        const clieInputValue = e.target.value.trim();
        const clieInputFieldName = e.target.name;
        const newClieInput = {...clieInput, [clieInputFieldName]:clieInputValue};
        setClieInput(newClieInput);
    };

    const validarEmail = (e) => {
        const emailInputValue = e.target.value.trim();
        const emailInputFieldName = e.target.name;
        const newEmailInput = {...emailInput, [emailInputFieldName]:emailInputValue};
        setEmailInput(newEmailInput);
        if (newEmailInput.email.length > 0 && newEmailInput.email2.length > 0 && newEmailInput.email === newEmailInput.email2) {
            setFormularioValido(true);
        } else {
            setFormularioValido(false);
        }
    };

    return(
        <CartContext.Provider value={{productCartList, suma, formularioValido, idCompra,addProduct, 
        removeProduct, clearProductCartList, isInCart, getTotalProducts, grabarOrden, validarEmail,datosClie}}>
            {children}
        </CartContext.Provider>
    )
}