import { useNavigate, useParams } from "react-router-dom";
import { clothes, cosmetics } from "../data/products";
import "./Shop.css";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [...clothes, ...cosmetics];
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="shop-container">
        <h1>Product not found</h1>
        <button onClick={() => navigate("/products")}>Back to Products</button>
      </div>
    );
  }

  return (
    <div className="shop-container">
      <h1>{product.name}</h1>
      <p><b>Price:</b> ${product.price}</p>
      <p>{product.description}</p>

      <div>
        <button onClick={() => navigate(-1)}>🔙 Back</button>
      </div>
    </div>
  );
}
