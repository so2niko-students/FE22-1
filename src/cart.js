import { useContext } from "react";
import { CartContext } from "./my-context";

export default function Cart(){
    const {cart, setCart} = useContext(CartContext);
    const {weight, count, price, total} = cart;
    return (<div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {price}UAH {weight}g. in Cart {count} elements
    </button>
    <ul className="dropdown-menu">
      <li></li>
      {total.map((name, i) => <li key={i} className="m-1">{name}</li>)}
    </ul>
  </div>)
}