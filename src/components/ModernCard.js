import React, { useEffect, useState } from "react";
import "./ModernCard.css"; // Import CSS untuk styling

const ModernCard = () => {
  // State untuk menyimpan URL gambar
  const [imageUrl, setImageUrl] = useState("");

  // Mengambil gambar acak dari Picsum saat komponen pertama kali dimuat
  useEffect(() => {
    // Menghasilkan angka acak untuk query random
    const randomNum = Math.floor(Math.random() * 1000) + 1; // Angka acak untuk query random

    // Menggunakan URL dari Picsum Photos
    const fetchImage = () => {
      const imageUrl = `https://picsum.photos/400/300?random=${randomNum}`; // URL gambar acak dari Picsum
      setImageUrl(imageUrl); // Menyimpan URL gambar ke dalam state
    };

    fetchImage(); // Memanggil fungsi untuk mengambil gambar
  }, []); // Menjalankan hanya sekali saat komponen pertama kali dimuat

  return (
    <div className="card-container">
      <div className="card">
        {/* Menampilkan gambar jika imageUrl tersedia, jika tidak menggunakan gambar placeholder */}
        <img
          src={imageUrl || "https://via.placeholder.com/400x300"}
          alt="Card"
          className="card-image"
        />
        <div className="card-content">
          <h2 className="card-title">Modern Card</h2>
          <p className="card-description">
            Ini adalah contoh card modern dengan gambar acak yang diambil
            otomatis dari Picsum Photos.
          </p>
          <button className="card-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default ModernCard;
