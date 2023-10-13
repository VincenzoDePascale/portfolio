"use client";
import Atropos from "atropos/react";
import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import "./page.css";

export const projects = [
  {
    id: "Schede pg",
    name: "Schede pg",
    type: "full-Stack", // fullStack - frontEnd - backEnd
    repo: "https://github.com/stars/VincenzoDePascale/lists/schede-pg-d-d-5e",
    link: null, //deploy
    stacksFe: ["JAVASCRIPT", "REACT", "REDUX"],
    stacksBe: ["JAVA", "SPRINGBOOT", "POSTGRESQL"],
    logo: null, // /nome.png
    img: "schedePG.png", // /nome.png
    descrizione:
      "Primo progetto full stack creato in totale autonomia: un sito che permette di creare in maniera autonoma e rapida personaggi per giocare al gioco di ruolo Dungeons & Dragons quinta edizione.",
  },
  {
    id: "QuizTy",
    name: "QuizTy",
    type: "front-End", // fullStack - frontEnd - backEnd
    repo: "https://github.com/VincenzoDePascale/quizTy",
    link: "https://quizty.vercel.app/", //deploy
    stacksFe: ["TYPESCRIPT", "REACT"],
    stacksBe: null,
    logo: null, // /nome.png
    img: "/QuizTy.png", // /nome.png
    descrizione:
      "Primo progetto in React.Typescript: un quiz a risposta multipla.",
  },
  {
    id: "GestioneEnergia",
    name: "Gestione Energia",
    type: "back-End", // fullStack - frontEnd - backEnd
    repo: "https://github.com/VincenzoDePascale/Spring_gestioneEnergia",
    link: null, //deploy
    stacksFe: null,
    stacksBe: ["JAVA", "SPRINGBOOT", "POSTGRESQL"],
    logo: null, // /nome.png
    img: "/GestioneEnergia.png", // /nome.png
    descrizione:
      "Questo progetto è un Backend sviluppato in Java Spring Boot per un gestionale di fatturazione energetica b2b. L'obiettivo è quello di gestire le entità come comune, indirizzo e cliente e le loro interazioni all'interno del sistema.",
  },
  {
    id: "LinkedinClone",
    name: "Linkedin clone",
    type: "front-End", // fullStack - frontEnd - backEnd
    repo: "https://github.com/Guthembergg/buildweek-linkedin_clone",
    link: null, //deploy
    stacksFe: ["REACT", "REDUX"],
    stacksBe: null,
    logo: null, // /nome.png
    img: "/LinkedinClone.jpg", // /nome.png
    descrizione:
      "Clone del social media Linkedin scritto in collaborazione con colleghi del corso di Epicode. durante i lavori del progetto e fino alla consegna erano funzionanti anche pubblicazione post, commenti e like ai post e chat.",
  },
  //! progetto da rifare
  {
    id: "Cinemille",
    name: "Cinemille",
    type: "full-Stack", // full-Stack - front-End - back-End
    repo: "https://github.com/Guthembergg/buildweek-linkedin_clone",
    link: null, //deploy
    stacksFe: ["JAVASCRIPT", "REACT", "SASS", "BOOTSTRAP"],
    stacksBe: ["JAVA", "SPRINGBOOT", "POSTGRESQL"],
    logo: null, // /nome.png
    img: "cineMille.jpg", // /nome.png
    descrizione:
      "Sito per la gestione di un cinema multisala nel quale è possibile aggiornare la programmazione tramite file csv.",
  },
];

export default function Projects() {
  const [selectedType, setSelectedType] = useState("-");
  const [selectedDescription, setSelectedDescription] = useState({});

  return (
    <>
      <div className="text-white box">
        <div className="container mx-auto">
          <div className="titlebox flex justify-around">
            <h2
              className={`font-semibold mb-4 cursor-pointer underline underline-offset-4 + ${
                selectedType === "-" ? "decoration-white" : "decoration-[#333]"
              }`}
              onClick={() => setSelectedType("-")}
            >
              All
            </h2>
            <h2
              className={`font-semibold mb-4 cursor-pointer underline underline-offset-4 + ${
                selectedType === "full-Stack"
                  ? "decoration-white"
                  : "decoration-[#333]"
              }`}
              onClick={() => setSelectedType("full-Stack")}
            >
              Full Stack
            </h2>
            <h2
              className={`font-semibold mb-4 cursor-pointer underline underline-offset-4 + ${
                selectedType === "front-End"
                  ? "decoration-white"
                  : "decoration-[#333]"
              }`}
              onClick={() => setSelectedType("front-End")}
            >
              Front End
            </h2>

            <h2
              className={`font-semibold mb-4 cursor-pointer underline underline-offset-4 + ${
                selectedType === "back-End"
                  ? "decoration-white"
                  : "decoration-[#333]"
              }`}
              onClick={() => setSelectedType("back-End")}
            >
              Back End
            </h2>
          </div>{" "}
          {/* nuova lista card! */}
          {projects
            .filter((e) => e.type.includes(selectedType))
            .sort(function (a, b) {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            })
            .map((e, i) => (
              <div key={i} className="boxCard" name={e.name}>
                <div className="flex flex-col md:flex-row items-center justify-between p-2 bg-[#333]">
                  <div className="flex px-2">
                    {e.img && (
                      <img
                        src={`${e.img}`}
                        alt="immage project"
                        className="w-[375px] h-[250px] hidden md:block  mr-[25px]"
                      />
                    )}
                    <div className="pb-2 flex flex-col md:items-start justify-around">
                      <div className="flex flex-col md:flex-row items-center justify-around">
                        <span className="text-2xl">{e.name}</span>
                        <span className="flex flex-row ms-3">
                          <span className="flex flex-row">
                            {e.stacksFe &&
                              e.stacksFe.map((e, i) => (
                                <Tooltip key={i} title={e} placement="top">
                                  <img
                                    src={`/${e}.svg`}
                                    alt="logo stack"
                                    className=" mx-1 w-[20px] md:w-[30px] h-[20px] md:h-[30px]"
                                  />
                                </Tooltip>
                              ))}
                          </span>
                          <span className="flex flex-row">
                            {e.stacksBe &&
                              e.stacksBe.map((e, i) => (
                                <Tooltip key={i} title={e} placement="top">
                                  <img
                                    src={`/${e}.svg`}
                                    alt="logo stack"
                                    className=" mx-1 w-[20px] md:w-[30px] h-[20px] md:h-[30px]"
                                  />
                                </Tooltip>
                              ))}
                          </span>
                        </span>
                      </div>
                      <div className="flex justify-center">
                        {e.img && (
                          <img
                            src={`${e.img}`}
                            alt="immage project"
                            className="w-[250px] h-[175px] md:hidden my-5 flex"
                          />
                        )}
                      </div>
                      <div className="">{e.descrizione}</div>
                    </div>
                  </div>
                  <div className="flex justify-end md:flex-col w-100">
                    {e.link && (
                      <a href={e.link} target="_blank" className="mb-2">
                        <button
                          className="button flex flex-row items-center justify-between mr-5 md:mr-0"
                          role="button"
                        >
                          <span className="md:hidden text-xs mr-3">demo</span>
                          <img
                            src="/ONLINE.svg"
                            alt={`link alsito di ${e.name}`}
                            className="max-w-[25px] max-h-[25px]"
                          />
                        </button>
                      </a>
                    )}
                    <a href={e.repo} target="_blank">
                      <button
                        className="button flex flex-row items-center justify-between"
                        role="button"
                      >
                        <span className="md:hidden text-xs mr-3">code</span>
                        <img
                          src="/GITHUB.svg"
                          alt={`link alla repo di ${e.name}`}
                          className="max-w-[25px] max-h-[25px]"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
