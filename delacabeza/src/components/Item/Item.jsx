import { Link } from "react-router-dom"
import { Button } from "../Button/Button"
import styles from "./item.module.css"

export const Item = ({ id, name, price, img }) => {
    return (
        <div className={styles.item}>
            <img src={img} alt="gorra" />
            <h4>{name}</h4>
            <p className={styles.item_price}>${price}</p>
            <Link to={`/item/${id}`}>
                <Button />
            </Link>
        </div>
    )
}
