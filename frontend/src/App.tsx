import React from "react";
import "./App.css";
import { sampleProducts } from "./data";

function App() {
  // const [count, setCount] = useState<number>(0);
  return (
    <div className="App">
      <header>TS Amazon</header>
      <main>
        {sampleProducts.map((product) => (
          <li key={product.slug}>
            <img src={product.image} alt="" className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.brand}</p>
          </li>
        ))}
      </main>
      <footer>All Rights Reserved</footer>
    </div>
  );
}

export default App;
