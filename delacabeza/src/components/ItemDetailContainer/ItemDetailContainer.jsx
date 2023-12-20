import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebaseConfig";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import styles from "./itemdetailcontainer.module.css"


export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [item, setItem] = useState();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            try {
                const itemRef = doc(db, "products", id)
                const docItem = await getDoc(itemRef)
                if (docItem.exists()) {
                    setItem({ id: docItem.id, ...docItem.data() })
                } else {
                    Swal.fire({
                        title: "Producto no Encontrado!",
                        icon: "error",
                    });
                }
            } catch (error) {
                console.log(error);
            }
            setIsLoading(false)
        }

        fetchData()
    }, [id])

    return (
        <div className={styles.detail}>
            {isLoading ? <div className={styles.loading}><i className="fa-solid fa-spinner fa-spin"></i><span> Cargando</span></div> : item && <ItemDetail {...item} />}
        </div>
    )

}

