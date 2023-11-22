import { Item } from "../Item/Item"
import styles from "./itemlist.module.css"

export const ItemList = ({ products }) => {
    return (
        <div className={styles.itemList}>
            {products.map(product => <Item key={product.id} {...product} />)}
        </div>
    )
}