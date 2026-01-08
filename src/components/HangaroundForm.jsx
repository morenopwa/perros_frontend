import { useState } from "react";
import "./hangaroundForm.css";
import parche from "../assets/images/PARCHE_PERROS.png";

export function HangaroundForm() {
  // 1. Estado para capturar los datos (Variables en English)
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    nickname: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    socialMedia: "",
    bikeModel: "",
    bikeCc: "",
    otherGroup: "No",
    otherGroupDetail: ""
  });

  // 2. Función para actualizar el estado cuando el usuario escribe
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 3. Función para enviar los datos al Backend en Render
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Cambia esta URL por la que te dé Render cuando subas el backend
    const backendUrl = "https://tu-app-en-render.onrender.com/send-email";

    try {
      const response = await fetch(backendUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("¡Solicitud enviada con éxito! La directiva se pondrá en contacto.");
      } else {
        alert("Hubo un problema al enviar. Inténtalo más tarde.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("No se pudo conectar con el servidor.");
    }
  };

  return (
    <div className="form-container">
      <img src={parche} alt="Parche PERROS MG" className="parche-logo" />
      <h1>ÚNETE A PERROS MG</h1>
      <p className="subtitle">
        Registro para futuros <strong>Hangaround 17MG</strong>
      </p>

      <form className="form" onSubmit={handleSubmit}>
        <section>
          <h2>1. Información Personal</h2>
          <input name="fullName" placeholder="Nombre completo" onChange={handleChange} required />
          <input name="age" placeholder="Edad" type="number" onChange={handleChange} required />
          <input name="nickname" placeholder="Apodo (si tienes)" onChange={handleChange} />
          <input name="email" placeholder="Correo electrónico" type="email" onChange={handleChange} required />
          <input name="phone" placeholder="Celular / WhatsApp" onChange={handleChange} required />
          <input name="country" placeholder="País de residencia" onChange={handleChange} />
          <input name="city" placeholder="Ciudad / Distrito" onChange={handleChange} />
          <input name="socialMedia" placeholder="Redes sociales" onChange={handleChange} />
        </section>

        <section>
          <h2>2. Información de Motocicleta</h2>
          <input name="bikeModel" placeholder="Modelo de motocicleta" onChange={handleChange} />
          <input name="bikeCc" placeholder="Cilindrada (cc)" onChange={handleChange} />

          <div className="radio-group">
            <p>¿Participas en otro grupo motociclista?</p>
            <label>
              <input type="radio" name="otherGroup" value="Sí" onChange={handleChange} /> Sí
            </label>
            <label>
              <input type="radio" name="otherGroup" value="No" onChange={handleChange} defaultChecked /> No
            </label>
          </div>
          <input name="otherGroupDetail" placeholder="Si respondiste Sí, especifica cuál" onChange={handleChange} />
        </section>

        <p className="legal">
          🔒 Los datos se usan únicamente para la evaluación del perfil.<br />
          📍 Los perfiles seleccionados serán contactados por la directiva.<br />
        </p>

        <button type="submit">ENVIAR SOLICITUD</button>
      </form>
    </div>
  );
}