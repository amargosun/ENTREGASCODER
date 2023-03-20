import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [productCartList, setProductCartList] = useState([]);
    const [totalCompra, setTotalCompra] = useState(0)
    console.log(productCartList);
    console.log(totalCompra);

    const isInCart = (id)=>{
        const elementExists = productCartList.some((elemento)=>elemento.id === id);
        return elementExists;
    }

    const addProduct = (product, qty)=>{
        const newList = [...productCartList];
        //verifico si el producto existe en el arreglo
        // si existe, actualice la propiedad quantity de ese producto
        if(isInCart(product.id)){
            const productIndex = productCartList.findIndex(element=>element.id===product.id);
            newList[productIndex].quantity = newList[productIndex].quantity + qty;
            newList[productIndex].totalPrice = newList[productIndex].quantity * newList[productIndex].precio;
            setProductCartList(newList)
        } else{
        //si no existe, agregue el producto al listado
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
    
    const totalOrden=()=>{
        const suma = productCartList.reduce((acumulador, item) => acumulador + item.totalPrice,0)
        return setTotalCompra(suma)
    }

    return(
        <CartContext.Provider value={{productCartList, addProduct, 
        removeProduct, clearProductCartList, isInCart, getTotalProducts, totalOrden}}>
            {children}
        </CartContext.Provider>
    )
}