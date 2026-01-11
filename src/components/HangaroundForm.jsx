import "./hangaroundForm.css";
import patchImage from "../assets/images/PARCHE_PERROS.png";
import { useState } from "react";

export default function HangaroundForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = Object.fromEntries(new FormData(e.target));

    try {
      const response = await fetch("https://perros-mg.onrender.com/api/hangaround", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Server Error");

      alert("🐺 Solicitud enviada. La manada te evaluará pronto.");
      e.target.reset();
    } catch (err) {
      alert("❌ No se pudo conectar con el servidor del club.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <img src={patchImage} className="form-logo" alt="Logo Perros MG" />

        <header className="form-header">
          <h2>REGISTRO HANGAROUND</h2>
          <p>PERROS 17 MOTO GROUP</p>
        </header>

        <form className="epic-form" onSubmit={handleSubmit}>
          {/* Fila 1: Nombre */}
          <div className="input-group">
            <input name="nombre" placeholder="NOMBRE COMPLETO" required />
          </div>

          {/* Fila 2: Edad y Apodo */}
          <div className="input-row">
            <input name="edad" placeholder="EDAD" required />
            <input name="apodo" placeholder="APODO / ALIAS" />
          </div>

          {/* Fila 3: País y Ciudad (NUEVOS) */}
          <div className="input-row">
            <input name="pais" placeholder="PAÍS" required />
            <input name="ciudad" placeholder="CIUDAD" required />
          </div>

          {/* Fila 4: Email y WhatsApp */}
          <div className="input-row">
            <input name="email" type="email" placeholder="CORREO ELECTRÓNICO" required />
            <input name="celular" placeholder="WHATSAPP" required />
          </div>

          {/* Fila 5: Redes Sociales (NUEVO) */}
          <div className="input-group">
            <input name="redes" placeholder="REDES SOCIALES (INSTAGRAM / FB)" />
          </div>

          {/* Fila 6: Moto y CC */}
          <div className="input-row">
            <input name="moto" placeholder="MODELO DE MOTO" />
            <input name="cc" placeholder="CILINDRADA" />
          </div>

          <button type="submit" className="tech-button" disabled={loading}>
            <span className="btn-text">
              {loading ? "PROCESANDO..." : "UNIRSE A LA MANADA"}
            </span>
            <div className="btn-scanner"></div>
          </button>
        </form>
      </div>
    </div>
  );
}