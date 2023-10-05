"use client";
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./page.css";
import { useRef } from "react";

export default function ContactForm() {
  const form = useRef();

  // const [formData, setFormData] = useState({
  //   userName: "",
  //   userEmail: "",
  //   message: "",
  // });

  useEffect(() => {
    // Inizializza Email.js con la chiave pubblica
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
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <>
      <h2 className="text-xl font-semibold m-2 text-center">Contattami</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex items-center">
          <label className="w-[33%]" htmlFor="name">
            Nome:
          </label>
          <input
            className="bordBox bg-[#333] w-[66%]"
            type="text"
            id="name"
            name="user_name"
            // value={formData.user_name}
            // onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex items-center">
          <label className="w-[33%]" htmlFor="email">
            Email:
          </label>
          <input
            className="bordBox bg-[#333] w-[66%]"
            type="email"
            id="email"
            name="user_email"
            // value={formData.user_email}
            // onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex items-center">
          <label className="w-[33%]" htmlFor="message">
            Messaggio:
          </label>
          <textarea
            className="bordBox bg-[#333] w-[66%]"
            id="message"
            name="message"
            // value={formData.message}
            // onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex flex-row-reverse">
          <button
            className="col bg-[#333] px-2 py-1 mt-1 me-1"
            type="submit"
            onClick={sendEmail}
          >
            Invia
          </button>
        </div>
      </form>
    </>
  );
}
