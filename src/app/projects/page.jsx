"use client";
import Atropos from "atropos/react";
import React, { useState } from "react";
import "./page.css";

export const projectList = [
  {
    id: "Schede pg",
    name: "Schede pg",
    type: "fullStack",
    front: {
      link: "https://github.com/VincenzoDePascale/schedePG-fe",
      stacks: ["React", "Redux", "Router dom"],
    },
    back: {
      link: "https://github.com/VincenzoDePascale/SchedePG-be",
      stacks: ["java", "springboot", "postgreSQL", "jwt"],
    },
    img: false,
    description:
      "Primo progetto full stack creato in totale autonomia, un sito che permette di creare in maniera autonoma per personaggi per giocare al gioco di ruolo Dungeons & Dragons quinta edizione.",
    deploy: null,
  },
  {
    id: "Linkedin clone",
    name: "Linkedin clone",
    type: "frontEnd",
    front: {
      link: "https://github.com/Guthembergg/buildweek-linkedin_clone",
      stacks: ["React", "Redux", "Router dom"],
    },
    back: null,
    img: false,
    description:
      "Clone del social media Linkedin scritto in collaborazione con colleghi del corso di Epicode. durante i lavori del progetto e fino alla consegna erano funzionanti anche pubblicazione post, commenti e like ai post e chat.",
    deploy: null,
  },
  {
    id: "QuizTy",
    name: "QuizTy",
    type: "frontEnd",
    front: {
      link: "https://github.com/VincenzoDePascale/quizTy",
      stacks: ["React", "Typescript"],
    },
    back: null,
    img: true,
    description:
      "Primo progetto in React.Typescript: un quiz a risposta multipla.",
    deploy: "https://quizty.vercel.app/",
  },
  {
    id: "Cinemille",
    name: "Cinemille",
    type: "fullStack",
    front: {
      link: "https://github.com/VincenzoDePascale/cinemille-fe",
      stacks: ["javascript", "React", "sccs", "bootstrap", "moment"],
    },
    back: {
      link: "https://github.com/VincenzoDePascale/CineMille-be",
      stacks: ["java", "springboot", "postgreSQL"],
    },
    img: false,
    description:
      "Sito per la gestione di un cinema multisala nel quale è possibile aggiornare la programmazione tramite file csv.",
    deploy: null,
  },
  {
    id: "Gestione Energia",
    name: "Gestione Energia",
    type: "backEnd",
    front: null,
    back: {
      link: "https://github.com/VincenzoDePascale/Spring_gestioneEnergia",
      stacks: ["java", "spring boot", "postgreSQL", "jwt"],
    },
    img: false,
    description:
      "Questo progetto è un Backend sviluppato in Java Spring Boot per un gestionale di fatturazione energetica b2b. L'obiettivo è quello di gestire le entità come comune, indirizzo e cliente e le loro interazioni all'interno del sistema.",
    deploy: null,
  },
];

export default function Projects() {
  const [selectedType, setSelectedType] = useState("fullStack");
  const [selectedDescription, setSelectedDescription] = useState({});

  return (
    <>
      <div className="text-white py-8">
        <div className="container mx-auto">
          <div className="titlebox flex justify-around">
            <h2
              className="title font-semibold mb-4"
              onClick={() => setSelectedType("frontEnd")}
            >
              Front End
            </h2>
            <h2
              className="title font-semibold mb-4"
              onClick={() => setSelectedType("backEnd")}
            >
              Back End
            </h2>
            <h2
              className="title font-semibold mb-4"
              onClick={() => setSelectedType("fullStack")}
            >
              Full Stack
            </h2>
          </div>{" "}
          {/* per le animazioni 3d, mettere attorno ad ogni singola card
        <Atropos className="my-atropos"></Atropos> */}
          {/* MAP */}
          {projectList
            .filter((e) => e.type === selectedType)
            .map((e, i) => (
              <div
                key={i}
                className="boxCard"
                name={e.name}
                onMouseEnter={() =>
                  setSelectedDescription({ [e?.name]: "flex" })
                }
                onMouseLeave={() =>
                  setSelectedDescription({ [e?.name]: "hidden" })
                }
              >
                <div className="flex flex-nowrap justify-between items-center w-full h-full px-8 py-4">
                  <h2 className="text-xl font-semibold text-white capitalize ml-5 w-3/12">
                    {e.name}
                  </h2>
                  <div className="w-9/12">
                    {e.front && (
                      <>
                        <div
                          className={
                            "flex flex-nowrap items-center py-2 " +
                            (e.back !== null
                              ? "border-b-2 border-b-[#333]"
                              : "")
                          }
                        >
                          <div className="text-sm text-center w-10/12 mx-auto">
                            {e.front.stacks.map((stack, i) => (
                              <span key={i}>
                                {stack}
                                {i !== e.front.stacks.length - 1 && ", "}
                              </span>
                            ))}
                          </div>
                          <div className="flex flex-col w-2/12 mx-auto">
                            <a
                              className="cursor-pointer"
                              href={e.front.link}
                              target="_blank"
                            >
                              GitHub-fe
                            </a>
                          </div>
                        </div>
                      </>
                    )}
                    {e.back && (
                      <>
                        <div className="flex flex-nowrap items-center py-2">
                          <div className="text-sm text-center w-10/12 mx-auto">
                            {e.back.stacks.map((stack, i) => (
                              <span key={i}>
                                {stack}
                                {i !== e.back.stacks.length - 1 && ", "}
                              </span>
                            ))}
                          </div>
                          <div className="flex flex-col w-2/12 mx-auto">
                            <a
                              className="cursor-pointer"
                              href={e.back.link}
                              target="_blank"
                            >
                              GitHub-be
                            </a>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                {e.img && e.description && (
                  <div
                    className={
                      "animation border-t-2 border-t-[#333] " +
                      (selectedDescription[e?.name] === "hidden"
                        ? "hidden"
                        : selectedDescription[e?.name] === "flex"
                        ? "flex"
                        : "hidden")
                    }
                  >
                    <div className="w-8/12">
                      <img src={`/${e.name}.png`} alt={e.name}></img>
                    </div>
                    <div className="w-4/12 p-5">
                      {e.deploy && (
                        <a
                          className="cursor-pointer"
                          href={e.deploy}
                          target="_blank"
                        >
                          <u>{e.name}</u>
                        </a>
                      )}
                      <div>{e.description}</div>
                    </div>
                  </div>
                )}
                {!e.img && e.description && (
                  <div
                    className={
                      "animation border-t-2 border-t-[#333] " +
                      (selectedDescription[e?.name] === "hidden"
                        ? "hidden"
                        : selectedDescription[e?.name] === "flex"
                        ? "flex"
                        : "hidden")
                    }
                  >
                    <div className="p-5">
                      {e.deploy && (
                        <a
                          className="cursor-pointer"
                          href={e.deploy}
                          target="_blank"
                        >
                          <u>{e.name}</u>
                        </a>
                      )}
                      <div>{e.description}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
