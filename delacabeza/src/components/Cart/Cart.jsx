import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import styles from "./cart.module.css"
import { Order } from "../Order/Order"

export const Cart = () => {

    const { cartItems, removeItem, clearCartItems, totalCartItems } = useContext(CartContext)

    return (
        <>
            <div className={styles.cart}>
                <h2 className={styles.title}>Carrito</h2>
                {cartItems.map((item) => (
                    <div key={item.id}>
                        <img className={styles.img} src={item.img} alt="" />
                        <p className={styles.name}>Nombre: {item.name}</p>
                        <p className={styles.price}>Precio por unidad: ${item.price}</p>
                        <p className={styles.quantity}>Cantidad: {item.quantity}</p>
                        <p className={styles.subtotal}>Subtotal: ${item.subtotal}</p>
                        <button className={styles.removeItem} onClick={() => removeItem(item.id)}>Eliminar Producto</button>
                        <br />
                        <hr />
                    </div>
                ))}
                <h3 className={styles.total}>TOTAL DE LA COMPRA: ${totalCartItems}</h3>
                <button className={styles.removeCart} onClick={() => clearCartItems()}>Eliminar Carrito</button>
            </div>
            <Order/>
        </>
    )
}

