import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <section style={{ padding: "20px" }}>
        <h2>Categories</h2>
        <CategoryList />
      </section>
      <section style={{ padding: "20px" }}>
        <h2>Featured Products</h2>
        <ProductList />
      </section>
    </div>
  );
};

export default HomePage;