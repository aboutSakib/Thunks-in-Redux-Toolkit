import { useState } from "react";
import { useCreateProductMutation } from "../store/features/products/productApi";

const AddProductForm = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
  });

  const [addProduct] = useCreateProductMutation();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
  };

  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <p>Title:</p>
        <input
          value={product.title}
          onChange={handleChange}
          name="title"
          style={{ display: "block", width: "80%" }}
          required
        />
        <br />
        <p>Price:</p>

        <input
          value={product.price}
          onChange={handleChange}
          name="price"
          style={{ display: "block", width: "80%" }}
          type="number"
          required
        />
        <br />

        <p>Description:</p>
        <input
          value={product.description}
          onChange={handleChange}
          name="description"
          style={{ display: "block", width: "80%" }}
          type="text"
          required
        />
        <br />
        <p>Image URL:</p>

        <input
          onChange={handleChange}
          name="image"
          style={{ display: "block", width: "80%" }}
          type="text"
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default AddProductForm;
