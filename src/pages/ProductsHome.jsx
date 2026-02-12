import { useNavigate, Outlet } from "react-router-dom";
import "./Shop.css";

function ProductsHome() {
  const navigate = useNavigate();

  return (
    <div className="shop-container">
      <h1>Shop our four seasons collection</h1>
      <h5>Explore Chic Shop</h5>

      <button onClick={() => navigate("clothes")}>Go to Clothes</button>
      <button onClick={() => navigate("cosmetics")}>Go to Cosmetics</button>

      <div className="outlet-content">
        <Outlet />
      </div>
    </div>
  );
}

export default ProductsHome;
