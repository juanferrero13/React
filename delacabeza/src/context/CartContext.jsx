import { useEffect } from "react";
import { createContext, useState } from "react";

//Creamos el contexto
export const CartContext = createContext(null)

//Creamos el provider
export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [totalCartItems, setTotalCartItems] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)

    const addItem = (item, quantity) => {
        const { id, name, price, img } = item
        //Con este metodo buscamos la posicion indice del producto en el carrito
        const index = cartItems.findIndex(product => product.id === id)

        if (index !== -1) {
            //Hacemos copia del state para no manipularlo directamente
            const cartItemsCopy = [...cartItems]
            //Modificamos la cantidad del producto aumentando el valor con la cantidad recibida
            cartItemsCopy[index].quantity += quantity
            //Modificamos el subtotal con la nueva cantidad
            cartItemsCopy[index].subtotal = cartItemsCopy[index].quantity * cartItemsCopy[index].price
            //Seteamos el valor del state con la copia que modificamos
            setCartItems(cartItemsCopy)
        } else {
            //Si no encuentra ningun producto seteamos el carrito con el nuevo item
            const newItem = {
                id,
                name,
                price,
                quantity,
                img,
                subtotal: quantity * price
            }
            setCartItems([...cartItems, newItem])
        }
    }

    const removeItem = (id) => {
        //Funcion para eliminar un producto del carrito
        const arrayFilter = cartItems.filter(item => item.id !== id)
        setCartItems(arrayFilter)
    }

    //funcion para vaciar todo el carrito
    const clearCartItems = () => {
        setCartItems([])
    }

    //Funcion para calcular el total del carrito
    const handleTotal = () => {
        const total = cartItems.reduce((acum, item) => acum + item.subtotal, 0)
        setTotalCartItems(total)
    }

    //Funcion para calcular la cantidad de productos agregados al carritos
    const handleTotalQuantity = () => {
        const total = cartItems.reduce((acum, item) => acum + item.quantity, 0)
        setTotalQuantity(total)
    }

    useEffect(() => {
        handleTotal()
        handleTotalQuantity()
    }, [cartItems])


    const productValue = {
        cartItems,
        totalCartItems,
        totalQuantity,
        addItem,
        removeItem,
        clearCartItems
    }

    return <CartContext.Provider value={productValue}> {children} </CartContext.Provider>
}