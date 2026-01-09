import "./hangaroundForm.css";
import parche from "../assets/images/PARCHE_PERROS.png";
import { useState } from "react";

export default function HangaroundForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = Object.fromEntries(new FormData(e.target));

    try {
      const res = await fetch("https://perros-mg.onrender.com/api/hangaround", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

      if (!res.ok) throw new Error("error");

      alert("🐺 Solicitud enviada. La manada te evaluará.");
      e.target.reset();
    } catch (err) {
      alert("❌ No se pudo enviar el registro.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <img src={parche} className="form-logo" />

      <h2>Registro Hangaround 17MG</h2>

      <form onSubmit={handleSubmit}>
        <input name="nombre" placeholder="Nombre completo" required />
        <input name="edad" placeholder="Edad" required />
        <input name="apodo" placeholder="Apodo" />
        <input name="email" type="email" placeholder="Correo" required />
        <input name="celular" placeholder="WhatsApp" required />
        <input name="moto" placeholder="Modelo de motocicleta" />
        <input name="cc" placeholder="Cilindrada (cc)" />

        <button disabled={loading}>
          {loading ? "ENVIANDO..." : "🔥 ENTRAR A LA MANADA"}
        </button>
      </form>
    </div>
  );
}
