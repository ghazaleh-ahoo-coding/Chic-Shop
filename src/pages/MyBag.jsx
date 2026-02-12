import { useNavigate } from "react-router-dom";
import "./Shop.css";

function MyBag({ bag, setBag }) {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setBag((prev) => prev.filter((item) => item.id !== id));
  };

  const handleBuy = (item) => {
    alert(`Thank you for buying ${item.name} for $${item.price}!`);
    setBag((prev) => prev.filter((i) => i.id !== item.id));
  };

  return (
    <div className="shop-container">
      <h1>Your Bag</h1>

      {bag.length === 0 ? (
        <p>Your bag is empty.</p>
      ) : (
        <ul>
          {bag.map((item) => (
            <li key={item.id}>
              <b>{item.name}</b> - ${item.price}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
              <button onClick={() => handleBuy(item)}>Buy</button>
            </li>
          ))}
        </ul>
      )}

      {/* Fake button to test 404 */}
      <button
        className="fake-404-btn"
        onClick={() => navigate("/this-page-does-not-exist")}
      >
        Back to Home
      </button>
    </div>
  );
}

export default MyBag;
