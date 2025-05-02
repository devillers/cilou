//app/api/contact/page.js

"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setStatus(res.ok ? "Message envoyé" : "oups !! erreur.");
    if (res.ok) setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-5xl mx-auto relative grid grid-cols-1 md:grid-cols-2 gap-4">
      <section className=" mb-4 ">
        <h1
         className="uppercase text-2xl  font-thin  text-[#009992] mb-4"
      
        >
          Contactez moi{" "}
        </h1>
        <p className="text-sm font-thin leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
          augue commodo, faucibus massa eu, iaculis urna. Proin et quam at est
          feugiat ultricies. Pellentesque commodo, velit non fermentum
          condimentum, lacus felis varius mi, et pharetra quam sapien eget
          lectus.
        </p>
        <p className="text-sm font-thin leading-6">
          ou par telephone{" "}
        </p>
        <p className="text-sm font-thin leading-6">
          je me deplace sur les communes du Val Montjoie, Val d'Arly et pays du
          Mont Blanc{" "}
        </p>

        <p className="text-sm font-thin leading-6">
          En entreprise également dans la vallée de l'Arve{" "}
        </p>
      </section>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 text-[12px] font-light leading-6"
      >
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nom"
          className="w-full border rounded p-2"
          required
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="votre email"
          type="email"
          className="w-full border rounded p-2"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message"
          rows={7}
          className="w-full border rounded p-2"
          required
        />
        <button
          type="submit"
          className="bg-[#009992] text-white px-4 py-2 rounded uppercase hover:bg-[#009992]"
        >
          envoyer
        </button>
      </form>
      {status && <p className="mt-4 text-sm text-[#009992] uppercase">{status}</p>}
    </div>
  );
}
