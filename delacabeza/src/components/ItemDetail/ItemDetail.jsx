import { useContext } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import styles from "./itemdetail.module.css";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom"

export const ItemDetail = ({ id, name, img, price, stock, description }) => {
    //Me traigo la funcion addItem de mi CartContext
    const { addItem } = useContext(CartContext)

    const onAdd = (items) => {
        //Utilizamos la funcion addItem
        addItem({
            id,
            name,
            description,
            img,
            price,
            stock
        }, items);
        //Utilizo una alerta para mostrar que el producto fue agregado al carrito
        Swal.fire({
            position: "top-end",
            titleText: "Producto Agregado!",
            showConfirmButton: false,
            timer: 1500
        });
        // console.log(`producto ID: ${id} agregado al carrito`)
    }

    return (
        <>
            <div className={styles.itemDetail}>
                <div className={styles.itemDetail_cart}>
                    <img className={styles.itemDetail_img} src={img} alt="" />
                    <p className={styles.itemDetail_title}>{name}</p>
                    <p className={styles.itemDetail_des}>"{description}"</p>
                    <p className={styles.itemDetail_price}>${price} </p>
                    <ItemCount className={styles.itemDetail_count} stock={stock} onAdd={onAdd} id={id} />
                </div>
            </div>
            <div>
                <Link to="/cart">
                    <button className={styles.button}>Terminar compra</button>
                </Link>
            </div>
        </>
    );
};







// import { ItemCount } from "../ItemCount/ItemCount";
// import styles from "./itemdetail.module.css";

// export const ItemDetail = ({id, name, img, price, stock, description }) => {

//     const onAdd = () => {
//         Swal.fire({
//             position: "top-end",
//             titleText: "Producto Agregado!",
//             showConfirmButton: false,
//             timer: 1500
//         });
//         console.log(`producto ID: ${id} agregado al carrito`)
//     }

//     return (
//         <div className={styles.itemDetail}>
//             <div className={styles.itemDetail_cart}>
//                 <img className={styles.itemDetail_img} src={img} alt="" />
//                 <p className={styles.itemDetail_title}>{name}</p>
//                 <p className={styles.itemDetail_des}>"{description}"</p>
//                 <p className={styles.itemDetail_price}>${price} </p>
//                 <ItemCount className={styles.itemDetail_count} stock={stock} onAdd={onAdd} id={id} />
//             </div>
//         </div>
//     );
// };