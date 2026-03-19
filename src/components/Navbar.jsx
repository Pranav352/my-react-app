import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Byte2Boss</div>
      <input type="text" placeholder="Search products..." style={styles.search} />
      <div style={styles.icons}>
        <span style={styles.icon}>🛒 Cart</span>
        <span style={styles.icon}>👤 Login</span>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "#f5f5f5",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  logo: { fontWeight: "bold", fontSize: "22px" },
  search: { padding: "5px", width: "40%", borderRadius: "5px", border: "1px solid #ccc" },
  icons: { display: "flex", gap: "15px" },
  icon: { cursor: "pointer" },
};

export default Navbar;