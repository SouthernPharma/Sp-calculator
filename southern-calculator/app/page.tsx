"use client";
import { useState } from "react";
const products = [
  {
    name: "Retatrutide 20mg",
    mg: 20,
    image: "/images/reta.png",
  },
  {
    name: "Tirzepatide 30mg",
    mg: 30,
    image: "/images/tirz.png",
  },
  {
    name: "Tesamorelin 10mg",
    mg: 10,
    image: "/images/tesa.png",
  },
  {
    name: "GHK-CU 50mg",
    mg: 50,
    image: "/images/ghkcu.png",
  },
];
export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(products["0"]);
  const [dose, setDose] = useState("0");
  const totalLiquid = 2;
const maxClicks = 60;
const mlPerClick = totalLiquid / maxClicks;

const mgPerMl = selectedProduct.mg / totalLiquid;
const mgPerClick = mgPerMl * mlPerClick;

const clicksRequired = Math.round(Number(dose) / mgPerClick);
const liquidVolume = (clicksRequired * mlPerClick).toFixed(2);
  return (
  <>
<div className="particles">
  {[...Array(30)].map((_, i) => (
    <span
      key={i}
      className="particle"
      style={{
        left: `${(i * 7) % 100}%`,
animationDuration: `${8 + (i % 10)}s`,
animationDelay: `${i % 5}s`,
      }}
    />
  ))}
</div>
    <main className="container fadeIn">
      <div style={{ marginBottom: "50px" }}>
        <h1 className="mainTitle goldGlow">SouthernPharma</h1>
        <p className="subtitle">
          Interactive Premium Pen Dose Calculator
        </p>
      </div>
      <div className="grid">
        <div className="card fadeIn">
  <h2
    style={{
      fontSize: "40px",
      marginBottom: "25px",
    }}
  >
    Product
  </h2>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <img
      src={selectedProduct.image}
      className="productImage"
      alt={selectedProduct.name}
      style={{
        width: "100%",
        maxWidth: "320px",
        borderRadius: "24px",
        boxShadow: "0 0 40px rgba(255,215,0,0.25)",
        transition: "all 0.4s ease",
        cursor: "pointer",
      }}
      onMouseOver={(e) => {
  e.currentTarget.style.transform = "scale(1.03)";
}}

onMouseOut={(e) => {
  e.currentTarget.style.transform = "scale(1)";
}}
    />
  </div>
</div>
        <div className="card">
          <h2 className="sectionTitle">Pen Settings</h2>
          <div style={{ marginBottom: "25px" }}>
            <label className="label">Product</label>
            <select
              value={selectedProduct.name}
              onChange={(e) => {
                const product = products.find(
                  (p) => p.name === e.target.value
                );
                if (product) {
                  setSelectedProduct(product);
                }
              }}
            >
              {products.map((product) => (
                <option key={product.name} value={product.name}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>
          <div style={{ marginBottom: "30px" }}>
            <label className="label">Target Dose (mg)</label>
            <input
  type="text"
  inputMode="decimal"
  value={dose}
  onChange={(e) => {
  const value = e.target.value.replace(/^0+(?=\d)/, "");
  setDose(value);
}}
            />
          </div>
          <div className="infoCard">
            <h3 style={{ marginBottom: "20px" }}>Pen Information</h3>
            <div className="infoRow">
              <span>Total Liquid</span>
              <strong>{totalLiquid}ml</strong>
            </div>
            <div className="infoRow">
              <span>Max Clicks Per Dial</span>
<strong>{maxClicks}</strong>
            </div>
            <div className="infoRow">
              <span>Mg Per Click</span>
              <strong>{mgPerClick.toFixed(3)}mg</strong>
            </div>
          </div>
        </div>
        <div className="card">
          <h2 className="sectionTitle">Results</h2>
          <div className="resultBox fadeIn">
            <p className="resultLabel">Clicks Required</p>
            <div className="bigNumber goldGlow pulse">
              {clicksRequired}
            </div>
          </div>
          <div className="resultBox fadeIn">
            <p className="resultLabel">Liquid Volume</p>
            <div className="bigNumber goldGlow pulse">
              {liquidVolume}ml
            </div>
          </div>
          <div className="goldPanel">
            <p>
              1 click = 0.01ml
            </p>
            <p>
              All SouthernPharma cartridges are mixed with 2ml BAC water.
            </p>
          </div>
        </div>
      </div>
    </main>
</>
)
}
