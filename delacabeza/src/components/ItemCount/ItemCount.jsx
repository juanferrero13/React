import { useState } from "react";
import styles from "./itemcount.module.css";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            return setCount(count + 1);
        }
        setCount(count);
    };

    const decrement = () => {
        if (count === 1) {
            return setCount(1);
        }
        setCount(count - 1);
    };


    return (
        <div>
            <div className={styles.itemCount}>
                <button className={styles.operator} onClick={increment}>
                    +
                </button>
                <strong>{count}</strong>
                <button className={styles.operator} onClick={decrement}>
                    -
                </button>
            </div>
            <button className={styles.agregarAlCarrito} onClick={() => onAdd(count)}>AGREGAR AL CARRITO</button>
        </div>
    );
};

