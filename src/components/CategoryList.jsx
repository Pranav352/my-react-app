import React from "react";

const CategoryList = () => {
  const categories = [
    "Electronics",
    "Clothing",
    "Home & Kitchen",
    "Books",
    "Sports",
  ];

  return (
    <div style={styles.container}>
      {categories.map((category, index) => (
        <div key={index} style={styles.card}>
          {category}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: { display: "flex", gap: "15px", padding: "10px", overflowX: "auto" },
  card: {
    minWidth: "120px",
    textAlign: "center",
    padding: "20px",
    background: "#f0f0f0",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default CategoryList;