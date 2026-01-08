import { useState } from "react";
import "./hangaroundForm.css";
import parche from "../assets/images/PARCHE_PERROS.png";

export function HangaroundForm() {
  const [formData, setFormData] = useState({
    fullName: "", age: "", nickname: "", email: "", phone: "",
    country: "", city: "", socialMedia: "", bikeModel: "",
    bikeCc: "", otherGroup: "No", otherGroupDetail: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviando estos datos:", formData); // LOG 1

    // IMPORTANTE: Asegúrate de que esta URL sea la de tu Web Service en Render
  const backendUrl = "https://perros-mg.onrender.com/send-email";
    try {
      const response = await fetch(backendUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("Respuesta del servidor:", response.status); // LOG 2

      const result = await response.json();
      
      if (response.ok) {
        alert("¡Solicitud enviada con éxito! Revisa tu correo.");
        // Opcional: Limpiar el formulario
      } else {
        alert("Error del servidor: " + result.message);
      }
    } catch (error) {
      console.error("Error completo:", error); // LOG 3
      alert("No se pudo conectar con el servidor. Verifica tu conexión.");
    }
  };

  return (
    <div className="form-container">
      <img src={parche} alt="Parche PERROS MG" className="parche-logo" />
      <form className="form" onSubmit={handleSubmit}>
        <section>
          <h2>1. Información Personal</h2>
          <input name="fullName" placeholder="Nombre completo" onChange={handleChange} required />
          <input name="email" placeholder="Correo electrónico" type="email" onChange={handleChange} required />
          {/* ... Agrega los demás inputs asegurándote de que el 'name' coincida con el useState ... */}
          <input name="phone" placeholder="WhatsApp" onChange={handleChange} required />
        </section>
        <button type="submit">ENVIAR SOLICITUD</button>
      </form>
    </div>
  );
}