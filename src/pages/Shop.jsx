import ProductCard from "../components/ProductCard";
import { useQuery } from "@tanstack/react-query";

const Shop = () => {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`http://localhost:5000/products`).then((res) => res.json()),
  });

  return (
    <div>
      <div className="page-banner">
        <div className="page-banner__details">
          <div className="page-banner__details__title">
            <h1>Our E-commerce Website</h1>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="section__head">
            <div className="product__details__title">
              <h2>All Products</h2>
            </div>
          </div>
          <div className="section__content">
            <div className="grid three">
              {products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
