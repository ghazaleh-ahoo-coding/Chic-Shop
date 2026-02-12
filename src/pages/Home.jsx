import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const goToBag = () => {
    navigate("/mybag");
  };
  const goToProducts = () => {
    navigate("/products");
  };

  return (
    <div className="home-container">
      <h1>Welcome to Chic Online Shop</h1>
      <h2>Shop smart. Live Chic.</h2>
      <section>
        <p>
          At Chic, we deliver quality products at fair prices quickly. With just a click,
          your order is on its way, and in no time, it’s in your hands.
        </p>
        <div>
          <button onClick={goToBag}>🛍️ Bag</button>
          <button onClick={goToProducts}>⏩ Products</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
