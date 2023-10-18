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
        setFormData({
          user_name: "",
          user_email: "",
          message: "",
        });
        setAlertMessage(
          "Grazie per avermi inviato un'email, ti risponderò al più presto."
        );
      },
      (error) => {
        setAlertMessage(
          "Mi dispiace qualcosa è andato storto, riprova tra qualche minuto o contattami su Linkedin."
        );
        console.log(error.text);
      }
    );
  };

  return (
    <>
      {alertMessage && <div className="alert">{alertMessage}</div>}
      <h2 className="text-xl font-semibold m-2 text-center flex justify-center">
        Contact me
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="md:max-w-[800px] md:m-auto md:py-5"
      >
        <div className="mx-5 flex flex-col justify-center">
          <div className="labelBox flex flex-col mb-5">
            <label htmlFor="name">Name:</label>
            <input
              className="bgInnerText text-black rounded"
              type="text"
              id="name"
              name="user_name"
              value={formData.user_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="labelBox flex flex-col mb-5">
            <label htmlFor="email">Email:</label>
            <input
              className="bgInnerText text-black rounded"
              type="email"
              id="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="labelBox flex flex-col mb-5">
            <label htmlFor="message">Message:</label>
            <textarea
              className="bgInnerText text-black rounded"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex flex-row-reverse pt-5">
            <button
              className="button col w-[85px] px-2 py-1 bordBox"
              type="submit"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
