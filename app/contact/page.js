//app/api/contact/page.js

'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    setStatus(res.ok ? 'Message envoyé' : 'oups !! erreur.');
    if (res.ok) setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4 text-[#009996]"style={{ fontFamily: 'Capriola, sans-serif' }}>Contactez moi </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" value={formData.name} onChange={handleChange}
          placeholder="Nom" className="w-full border rounded p-2" required />
        <input name="email" value={formData.email} onChange={handleChange}
          placeholder="votre email" type="email" className="w-full border rounded p-2" required />
        <textarea name="message" value={formData.message} onChange={handleChange}
          placeholder="Votre message" rows={7} className="w-full border rounded p-2" required />
        <button type="submit" className="bg-[#009992] text-white px-4 py-2 rounded hover:bg-[#006778]">
          envoyer
        </button>
      </form>
      {status && <p className="mt-4 text-sm">{status}</p>}
    </div>
  );
}
