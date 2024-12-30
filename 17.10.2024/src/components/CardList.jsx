import { useSelector } from "react-redux";
import { Card } from "../UI/Card";

export function CardList() {
    const { products } = useSelector(state => state.product)

    return (
        <div className="card__list">
            <h2 className="title">Cards</h2>
            <section className="list">
                {products.map((card, index) => (
                    <Card key={card.id} id={card.id} title={card.title} price={card.price} />
                ))}
            </section>
        </div>
    )
}