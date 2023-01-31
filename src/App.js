import "./App.css";
import CoffeCard from "./coffee-card";
import Cart from "./cart";
import { MyContext } from "./my-context";

const coffeeBase = [
  {
    country: "Brazil",
    name: "Santos",
    type: "arabic",
    weight: 1000,
    price : 100
  },
  {
    country: "Brazil",
    name: "Mogiana",
    type: "arabic",
    weight: 500,
    price : 90
  },
  {
    country: "Peru",
    name: "Amazonas Monte Verde",
    type: "arabic",
    weight: 1000,
    price : 103
  },
  {
    country: "Ethipia, Brazil, India",
    name: "Tenikara Tafachi",
    type: "mix",
    weight: 750,
    price : 87
  },
];

function App() {
  return (
    <MyContext>
      <div className="App">
        <Cart />
        <div className="d-flex">
          {coffeeBase.map((el, i) => (
            <CoffeCard val={el} key={i} />
          ))}
        </div>
      </div>
    </MyContext>
  );
}

export default App;
