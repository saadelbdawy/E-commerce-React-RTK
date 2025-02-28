import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Features/Cartslice";
import "./products.css";

import Navbar from "../Components/Navbar";

const Products= () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState(""); // Search query state
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data.products);
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Navbar />

      {/* Search Box */}
      <div className="search-container">
        <input 
          type="text"
          placeholder="Search for products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="searchbox"
        />
      </div>

      {/* Products List */}
      <div className="products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.title}</h3>
              <img src={product.thumbnail} alt={product.title} />
              <p>{product.price} USD</p>
              <button onClick={() => dispatch(addToCart(product))}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Products;
