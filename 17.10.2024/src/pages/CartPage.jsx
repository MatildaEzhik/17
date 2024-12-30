import { Header } from "../components/Header";
import { Card } from "../UI/Card";

export function CartPage() {
    return (
        <main>
            <Header></Header>
            <h1>Cart</h1>
            {products.map((product) => (
                <Card
                    key={product.id}
                    title={product.title}
                    price={product.price}
                />
            ))}
        </main>
    )
}