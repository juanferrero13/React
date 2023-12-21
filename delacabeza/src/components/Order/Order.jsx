import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useContext, useState } from "react"
import { db } from "../../config/firebaseConfig"
import { CartContext } from "../../context/CartContext"
import styles from "./order.module.css"


export const Order = () => {
    const { cartItems, totalCartItems, clearCartItems } = useContext(CartContext)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [confirmEmail, setConfirmEmail] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [phone, setPhone] = useState("")
    const [orderId, setOrderId] = useState("")


    const addOrderDB = async (cartProducts, userData, total) => {
        const newOrder = {
            buyer: userData,
            items: cartProducts,
            data: serverTimestamp(),
            total
        }

        const getOrder = await addDoc(collection(db, "orders"), newOrder)
        setOrderId(getOrder.id)
    }

    const handleForm = (e) => {
        e.preventDefault()
        addOrderDB(cartItems, { name, email, phone }, totalCartItems)
        if (email !== confirmEmail) {
            Swal.fire({
                title: "Los e-mails no coinciden!",
                icon: "error",
                timer: 3000
            })
            return;
        } else if (cartItems.length === 0) {
            Swal.fire({
                title: "Carrito vacio!",
                icon: "warning",
                timer: 3000
            })
            return;
        } else {
            setName("")
            setPhone("")
            setEmail("")
            setConfirmEmail("")
            clearCartItems()
            setIsSubmitting(true)
            Swal.fire({
                title: "Compra Exitosa!",
                icon: "success",
                timer: 2000
            })
        }
    }

    if (isSubmitting && orderId) {
        return (
            <div className={styles.order}>
                <h3>¡Muchas gracias por tu compra!</h3>
                <p>Tu código de orden es: {orderId}</p>
            </div>
        )
    }

    return (
        <form className={styles.form} onSubmit={handleForm}>
            <h3 className={styles.title}>Confirmación de Compra</h3>
            <label className={styles.label}>Nombre Completo <input className={styles.input} type="text" value={name} onChange={(e) => setName(e.target.value)} /></label>
            <label className={styles.label}>E-mail <input className={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
            <label className={styles.label}>Confirmar E-mail <input className={styles.input} type="email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} /></label>
            <label className={styles.label}>Teléfono <input className={styles.input} type="number" value={phone} onChange={(e) => setPhone(e.target.value)} /></label>
            <button className={styles.comprar} type="submit">Realizar compra</button>
        </form>
    )
}
