import { clothes } from "../data/products";   
import { Link } from "react-router-dom";
import "./Shop.css";

function Clothes({ bag, setBag }) {
  const addToBag = (item) => {
    setBag([...bag, item]);
  };

  return (
    <div className="shop-container">
      <h2>Clothes</h2>

      {clothes.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>${item.price}</p>

          <button onClick={() => addToBag(item)}>Add to Bag</button>
          <Link to={`/products/${item.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default Clothes;
