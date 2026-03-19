import React from "react";

const Banner = () => {
  const banners = [
    "https://via.placeholder.com/800x200?text=Banner+1",
    "https://via.placeholder.com/800x200?text=Banner+2",
    "https://via.placeholder.com/800x200?text=Banner+3",
  ];

  return (
    <div style={styles.bannerContainer}>
      {banners.map((url, index) => (
        <img key={index} src={url} alt={`Banner ${index + 1}`} style={styles.banner} />
      ))}
    </div>
  );
};

const styles = {
  bannerContainer: { display: "flex", overflowX: "auto", gap: "10px", padding: "10px" },
  banner: { width: "100%", maxHeight: "200px", borderRadius: "10px" },
};

export default Banner;