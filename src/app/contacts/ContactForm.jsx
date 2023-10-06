import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./page.css";
import { useRef } from "react";

export default function ContactForm() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    // chiave pubblica di Email.js
    emailjs.init("1YGv38iIJPTJEEKnV");
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_8d1r9ot", "template_wuss68q", form.current).then(
      (result) => {
        console.log(result.text);
        // Pulisci il modulo dopo l'invio dell'email
        setFormData({
          user_name: "",
          user_email: "",
          message: "",
        });
        // Imposta il messaggio di alert
        setAlertMessage(
          "Grazie per avermi inviato un'email, ti risponderò al più presto"
        );
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <>
      {alertMessage && <div className="alert">{alertMessage}</div>}
      <h2 className="text-xl font-semibold m-2 text-center">Contact me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex items-center">
          <label className="w-[33%] lg:w-[20%]" htmlFor="name">
            Name:
          </label>
          <input
            className="bordBox bg-[#333] w-[66%] lg:w-[80%]"
            type="text"
            id="name"
            name="user_name"
            value={formData.user_name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex items-center">
          <label className="w-[33%] lg:w-[20%]" htmlFor="email">
            Email:
          </label>
          <input
            className="bordBox bg-[#333] w-[66%] lg:w-[80%]"
            type="email"
            id="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex items-center">
          <label className="w-[33%] lg:w-[20%]" htmlFor="message">
            Message:
          </label>
          <textarea
            className="bordBox bg-[#333] w-[66%] lg:w-[80%]"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex flex-row-reverse">
          <button
            className="col bg-[#333] w-[85px] px-2 py-1 mt-1 me-1 bordBox"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
}
