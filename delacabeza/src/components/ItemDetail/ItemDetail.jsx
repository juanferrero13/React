import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ name, description, img, price, stock }) => {

    const onAdd = (items) => {
        alert(`Se agregaron ${items} al carrito`)
    }

    return (
        <div>
            <div>
                <div>
                    <h5>{name}</h5>
                    <img src={img} alt="" />
                    <p> {description} </p>
                    <p>Precio: {price} </p>
                    <ItemCount stock={stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    );
};