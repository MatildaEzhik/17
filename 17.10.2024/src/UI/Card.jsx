import { useDispatch } from "react-redux"
import { addInCart } from "../redux/slice/cart"

export function Card({ title, price, id }) {
    const dispatch = useDispatch()
    const handlerClick = (id) => {
        dispatch(addInCart({ product: { id, count: 1 } }))
    }
    
    return (
        <div className="card">
            <hgroup className="card__header">
                <h2 className="card__title">{title}</h2>
                <p className="card__price">${price}</p>
            </hgroup>
            <button onClick={() => handlerClick(id)} className="card__btn">Buy</button>
        </div>
    )
}