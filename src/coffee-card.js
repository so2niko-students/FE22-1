import { useContext } from "react";
import { CartContext } from "./my-context";

export default function CoffeCard({val}){
    const {name, country, weight, type, price} = val;
    const {cart, setCart} = useContext(CartContext);
    return (
    <div className="card m-3 w-50">
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{country} , {type}</h6>
            <p className="card-text">{weight}g, {price} UAH for 100g</p>
            <button onClick={() => {
                setCart({
                    weight : cart.weight + 100,
                    count : cart.count + 1,
                    price : cart.price + price,
                    total : [...cart.total, name]
                });
            }}>Add to cart</button>
        </div>
    </div>);
}
