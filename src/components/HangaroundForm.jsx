import { useState } from "react";
import "./hangaroundForm.css";
import parche from "../assets/images/PARCHE_PERROS.png";

const API_URL = "https://perros-mg-backend.onrender.com/api/hangaround";

export default function HangaroundForm() {
  const [form, setForm] = useState({
    nombre: "",
    edad: "",
    apodo: "",
    email: "",
    celular: "",
    pais: "",
    ciudad: "",
    moto: "",
    cc: "",
    otroMG: false,
    redes: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("🐺 Registro enviado. La directiva te contactará.");
      setForm({
        nombre: "",
        edad: "",
        apodo: "",
        email: "",
        celular: "",
        pais: "",
        ciudad: "",
        moto: "",
        cc: "",
        otroMG: false,
        redes: "",
      });
    } else {
      alert("❌ Error al enviar formulario");
    }
  };

  return (
    <div className="hangaround">
      <img src={parche} className="logo" alt="PERROS MG" />

      <h1>Únete a PERROS MG</h1>
      <h3>Registro Hangaround 17MG</h3>

      <form onSubmit={handleSubmit}>
        <input name="nombre" placeholder="Nombre completo" onChange={handleChange} value={form.nombre} required />
        <input name="edad" placeholder="Edad" onChange={handleChange} value={form.edad} required />
        <input name="apodo" placeholder="Apodo" onChange={handleChange} value={form.apodo} />
        <input name="email" type="email" placeholder="Correo" onChange={handleChange} value={form.email} required />
        <input name="celular" placeholder="Celular / WhatsApp" onChange={handleChange} value={form.celular} required />
        <input name="pais" placeholder="País" onChange={handleChange} value={form.pais} />
        <input name="ciudad" placeholder="Ciudad / Distrito" onChange={handleChange} value={form.ciudad} />
        <input name="moto" placeholder="Modelo de motocicleta" onChange={handleChange} value={form.moto} />
        <input name="cc" placeholder="Cilindrada (cc)" onChange={handleChange} value={form.cc} />

        <label className="checkbox">
          <input type="checkbox" name="otroMG" checked={form.otroMG} onChange={handleChange} />
          ¿Perteneces a otro MG?
        </label>

        <textarea name="redes" placeholder="Redes sociales" onChange={handleChange} value={form.redes} />

        <button type="submit">ENVIAR REGISTRO</button>
      </form>
    </div>
  );
}
