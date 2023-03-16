import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [productCartList, setProductCartList] = useState([]);

    const isInCart = (id)=>{
        const elementExists = productCartList.some((elemento)=>elemento.id === id);
        return elementExists;
    }
    const addProduct = (item, count)=>{
        const newList = [...productCartList];
        //verifico si el producto existe en el arreglo
        // si existe, actualice la propiedad quantity de ese producto
        if(isInCart(item.id)){
            const productIndex = productCartList.findIndex(element=>element.id===item.id);
            newList[productIndex].quantity = newList[productIndex].quantity + count;
            newList[productIndex].totalPrice = newList[productIndex].quantity * newList[productIndex].price;
            setProductCartList(newList)
        } else{
        //si no existe, agregue el producto al listado
            const newProduct={...item, quantity:count, totalPrice: count*item.price}
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
    return(
        <CartContext.Provider value={{productCartList,addProduct, removeProduct, clearProductCartList, isInCart, getTotalProducts}}>
            {children}
        </CartContext.Provider>
    )
}