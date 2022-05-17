import { useContext } from "react";

import { ProductsContext } from "../../Contexts/products.context";
import ProductCard from "../../Components/product-card/product-card.component";

import './shop.styles.css';

const ShopPage = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ShopPage;