import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./cartwidget.module.css";

export const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <div className={styles.carrito}><i className="fa-solid fa-cart-shopping"><span className={styles.number}>({totalQuantity})</span></i></div>
    )
};
