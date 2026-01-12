import React from "react";
import '../Form/Form.scss';
import { ButtonForm, Snackbar } from "../index";
import { useState } from "react";

export function Form() {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleSubmit=(e)=> {
    e.preventDefault();

    setShowSnackbar(true);

    setTimeout(()=> {
      setShowSnackbar(false)
    }, 5000)
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" className="label">Email address</label>
      <input
        required
        className="input"
        id="email"
        type="email"
        placeholder="Enter your email..."
      />

      <label htmlFor="name" className="label">Full Name</label>
      <input
        required
        className="input"
        id="name"
        type="text"
        placeholder="Enter your full name..."
      />

      <label htmlFor="message" className="label">Message</label>
      <textarea
        required
        className="input"
        id="message"
        placeholder="Enter your message..."
      />
      < ButtonForm />
    </form>
    <Snackbar message="Message sent successfully!" visible={showSnackbar} />
    </>
  );
}