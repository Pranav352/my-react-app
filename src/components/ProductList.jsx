import React from "react";

const ProductList = () => {
  const products = [
    { name: "Smartphone", price: "$299", image: "https://via.placeholder.com/150" },
    { name: "Headphones", price: "$49", image: "https://via.placeholder.com/150" },
    { name: "Sneakers", price: "$79", image: "https://via.placeholder.com/150" },
    { name: "Backpack", price: "$39", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div style={styles.container}>
      {products.map((product, index) => (
        <div key={index} style={styles.card}>
          <img src={product.image} alt={product.name} style={styles.image} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: { display: "flex", gap: "20px", padding: "10px", overflowX: "auto" },
  card: {
    minWidth: "150px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "10px",
    textAlign: "center",
    background: "#fff",
  },
  image: { width: "100%", borderRadius: "5px" },
};

export default ProductList;