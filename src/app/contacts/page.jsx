"use client";
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { useRef } from "react";
import "./page.css";
import ContactForm from "./ContactForm";

export default function Contacts() {
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
      <div className="text-white box md:mt-[100px]">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Contatti Utili</h2>

          <div className="flex flex-col">
            <div className="flex flex-row justify-around bordBox">
              <a
                href="https://www.linkedin.com/in/vincenzo-de-pascale-30542322a/"
                target="_blank"
                className="p-4 flex items-center justify-center"
              >
                <div>
                  <span>
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 15 15"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                        clipRule="evenodd"
                      />
                      <path d="M3 5.012H0V15h3V5.012Z" />
                    </svg>
                  </span>
                </div>
                <div className="hidden md:block ml-4 truncate ...">
                  Linkedin
                </div>
              </a>

              <a
                href="https://github.com/VincenzoDePascale"
                target="_blank"
                className="p-4 flex items-center"
              >
                <div>
                  <span>
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.830.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
                <div className="hidden md:block ml-4 pt-1 truncate ...">
                  GitHub
                </div>
              </a>

              <a
                href="https://www.google.com/maps?q=Pagani,SA"
                target="_blank"
                className="p-4 flex items-center"
              >
                <div>
                  <span>
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 20"
                    >
                      <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                    </svg>
                  </span>
                </div>
                <div className="hidden md:block ml-4 truncate ...">
                  Pagani (SA)
                </div>
              </a>
            </div>

            {/* mail box */}

            <div className="flex-col longness items-center basis-full flex-grow-0 bordBox p-4">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
