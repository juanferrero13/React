import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebaseConfig";
import { ItemList } from "../ItemList/ItemList";
import styles from "./itemlistcontainer.module.css";


export const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const getProductsDB = (category) => {
        const myProducts = category ?
            query(collection(db, "products"),
                where("category", "==", category)) : query(collection(db, "products"))
        getDocs(myProducts)
            .then(resp => {
                if (resp.size === 0) {
                    console.log("No hay productos en la base de datos");
                }
                const productList = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setProducts(productList)
                setIsLoading(false)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getProductsDB(category)
    }, [category])

    return (
        <>{isLoading ? <div className={styles.loading}><i className="fa-solid fa-spinner fa-spin"></i><span> Cargando</span></div> : <ItemList products={products} />}</>
    )
}