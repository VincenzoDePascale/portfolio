"use client";
import { useState } from "react";
import "./page.css";

export default function AboutMe() {
  // logica modale consa
  const [isModalConSaOpen, setIsModalConSaOpen] = useState(false);

  const openModalConSa = () => {
    setIsModalConSaOpen(true);
  };

  const closeModalConSa = () => {
    setIsModalConSaOpen(false);
  };

  //logica modale Epicode
  const [isModalEpicodeOpen, setIsModalEpicodeOpen] = useState(false);

  const openModalEpicode = () => {
    setIsModalEpicodeOpen(true);
  };

  const closeModalEpicode = () => {
    setIsModalEpicodeOpen(false);
  };

  //logica modale Books
  const [isModalBooksOpen, setIsModalBooksOpen] = useState(false);

  const openModalBooks = () => {
    setIsModalBooksOpen(true);
  };

  const closeModalBooks = () => {
    setIsModalBooksOpen(false);
  };

  //logica modale D&D
  const [isModalDndOpen, setIsModalDndOpen] = useState(false);

  const openModalDnd = () => {
    setIsModalDndOpen(true);
  };

  const closeModalDnd = () => {
    setIsModalDndOpen(false);
  };

  //logica modale Game
  const [isModalGameOpen, setIsModalGameOpen] = useState(false);

  const openModalGame = () => {
    setIsModalGameOpen(true);
  };

  const closeModalGame = () => {
    setIsModalGameOpen(false);
  };

  return (
    <>
      <div className="text-white box py-8 h-100">
        <h2 className="text-xl font-semibold m-2">About Me</h2>
        <div className="ms-2 mt-10">
          <p className="text-lg">
            Hello, I am Vincenzo, a passionate developer.
          </p>
          <p>I love technology, music, cinema, and video games.</p>

          <p className="text-lg">
            I dedicate myself to the best of my abilities in everything I do.
          </p>
          <p className="text-lg">
            Feel free to explore my journey and get to know me better.
          </p>
        </div>
        {/* box vita */}
        <div className="boxLife ms-2 mt-10 flex flex-col md:flex-row items-center">
          <div className="md:w-4/12 text-center md:text-start">
            La mia storia in un click:
          </div>
          <div className="w-96 md:w-8/12 flex flex-row justify-between md:justify-around items-center">
            <div onClick={openModalConSa} className="logos">
              <img src="/ConSa.png" alt="logo Conservatorio di Salerno" />
            </div>
            <div onClick={openModalEpicode} className="logos">
              <img src="/Epicode.png" alt="logo Epicode" />
            </div>
          </div>
        </div>
        {/* box hobbies */}
        <div className="boxLife ms-2 mt-10 flex flex-col md:flex-row items-center">
          <div className="md:w-4/12 text-center md:text-start">
            I miei hobbies:
          </div>
          <div className="w-96 md:w-8/12 flex flex-row justify-between md:justify-around items-center">
            <div onClick={openModalBooks} className="logos">
              <img src="/Books.svg" alt="logo books" />
            </div>
            <div onClick={openModalDnd} className="logos">
              <img src="/DND.svg" alt="logo D&D" />
            </div>
            <div onClick={openModalGame} className="logos">
              <img src="/Game.svg" alt="logo D&D" />
            </div>
          </div>
        </div>
      </div>

      {/* MODALE CONSA */}
      {isModalConSaOpen && (
        <>
          <div className="modal">
            <div className="modal-content">
              <div className="modal-header flex flex-row justify-between items-center">
                <h3>Conservatorio G. Martucci</h3>
                <button className="modal-close" onClick={closeModalConSa}>
                  <img src="/close.svg" alt="close" className="w-[45px]" />
                </button>
              </div>
              <div className="modal-body py-3">
                <p className="pb-1">
                  Questa è la mia Alma mater, il Conservatorio di Salerno, dove
                  mi sono laureato in &quot;Musicologia&quot; prima e in
                  &quot;Discipline storiche, critiche ed analitiche della
                  musica&quot; poi. La passione per la musica è qualcosa che mi
                  ha contraddistinto per molti anni. Tuttavia, mentre la maggior
                  parte degli amanti della musica percorre la strada della
                  perfezione esecutiva, io ho scelto di fare qualcosa di
                  diverso. Ho cercato di studiare e capire il fenomeno musicale
                  in toto, come si è evoluto e perché in questo modo.
                </p>
                <p>
                  Mi sono specializzato principalmente nell&rsquo;analisi dei
                  repertori del XX secolo utilizzando una tecnica chiamata
                  &quot;Analisi insiemistica&quot;. Questa tecnica analitica
                  utilizza nozioni matematiche per analizzare le partiture
                  composte in base a regole matematiche e non solo.
                </p>
              </div>

              <div className="modal-footer flex flex-row justify-between items-center">
                <a
                  className="footerButton underline underline-offset-1"
                  href="https://www.consalerno.it/"
                  target="_blank"
                >
                  <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                    ConSa
                  </button>
                </a>
                <button
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  onClick={closeModalConSa}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* MODALE Epicode */}
      {isModalEpicodeOpen && (
        <>
          <div className="modal">
            <div className="modal-content">
              <div className="modal-header flex flex-row justify-between items-center">
                <h3>Epicode</h3>
                <button className="modal-close" onClick={closeModalEpicode}>
                  <img src="/close.svg" alt="close" className="w-[45px]" />
                </button>
              </div>
              <div className="modal-body py-3">
                <p className="pb-1">
                  Questa è la scuola dove ho studiato programmazione ed ho
                  acquisito le competenza basilari che mi hanno portato a creare
                  diversi progetti, sia back end che front end.
                </p>
                <p>
                  Il corso che ho seguito è stato un bootcam durato sei mesi, e
                  di circa 1000 ore. Qui per tre mesi ho studiato le tecnologie
                  front end, e per altri due le tecnoloie back end.
                </p>
              </div>

              <div className="modal-footer flex flex-row justify-between items-center">
                <a
                  className="footerButton underline underline-offset-1"
                  href="https://epicode.com/it/"
                  target="_blank"
                >
                  <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                    Epicode
                  </button>
                </a>
                <button
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  onClick={closeModalEpicode}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* MODALE Books */}
      {isModalBooksOpen && (
        <>
          <div className="modal">
            <div className="modal-content">
              <div className="modal-header flex flex-row justify-between items-center">
                <h3>Lettura</h3>
                <button className="modal-close" onClick={closeModalBooks}>
                  <img src="/close.svg" alt="close" className="w-[45px]" />
                </button>
              </div>
              <div className="modal-body py-3">
                <p className="pb-1">
                  La passione per la lettura è una delle poche costanti nella
                  mia vita, dall&rsquo;età di circa 14 anni ho iniziato a
                  leggere e nonostante anche lunghi periodi di pausa non ho mai
                  smesso completamente.
                </p>
                <p>
                  Questa passione si è anche evoluta in qualche produzione
                  amatoriale di racconti e che al liceo mi fecero partecipare a
                  delle competizioni nel mio istituto.
                </p>
              </div>

              <div className="modal-footer flex flex-row justify-between items-center">
                <a
                  className="footerButton underline underline-offset-1"
                  href="https://www.amazon.it/Fondazione-ciclo-completo-Isaac-Asimov/dp/8804729198/ref=sr_1_1?crid=1V68YFS46WT68&keywords=ciclo+della+fondazione+asimov&qid=1697460214&sprefix=ciclo+della+fondazi%2Caps%2C108&sr=8-1"
                  target="_blank"
                >
                  <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                    sto leggendo
                  </button>
                </a>
                <button
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  onClick={closeModalBooks}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* MODALE Dnd */}
      {isModalDndOpen && (
        <>
          <div className="modal">
            <div className="modal-content">
              <div className="modal-header flex flex-row justify-between items-center">
                <h3>Dungeons&Dragons</h3>
                <button className="modal-close" onClick={closeModalDnd}>
                  <img src="/close.svg" alt="close" className="w-[45px]" />
                </button>
              </div>
              <div className="modal-body py-3">
                <p className="pb-1">
                  Dungeons&Dragons è un gioco di ruolo, forse il più famoso, nel
                  quale si posso creare storie fantastiche e viverle
                  impersonando personaggi immaginari. Da quando l&rsquo;ho
                  incontrato, in adolescenza, ne sono stato pienamente catturato
                  tanto da farne il fulcro del progetto finale del corso di
                  programmazione che ho frequentato con Epicode.
                </p>
                <p>
                  In questo gioco di ruolo ho anche potuto riversare la mia
                  passione per la scrittura, scrivendo di mio pugno
                  ambientazioni fantasy originali nelle quali altri giocatori
                  hanno potuto vivere le loro avventure.
                </p>
              </div>

              <div className="modal-footer flex flex-row justify-between items-center">
                <a
                  className="footerButton underline underline-offset-1"
                  href="https://dnd.wizards.com/it"
                  target="_blank"
                >
                  <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                    D&D
                  </button>
                </a>
                <button
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  onClick={closeModalDnd}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* MODALE Game */}
      {isModalGameOpen && (
        <>
          <div className="modal">
            <div className="modal-content">
              <div className="modal-header flex flex-row justify-between items-center">
                <h3>Gaming</h3>
                <button className="modal-close" onClick={closeModalGame}>
                  <img src="/close.svg" alt="close" className="w-[45px]" />
                </button>
              </div>
              <div className="modal-body py-3">
                <p className="pb-1">
                  Molti credono che il gaming sia una cosa per ragazzi, io non
                  lo credo. Nonostante abbia iniziato a giocare fin da piccolo
                  oggi credo le cose siano cambiate. Per me è un modo per
                  rilassarsi, per vivere avventure sempre nuove in mondi sempre
                  diversi. Di fatto investo ancora oggi una parte del mio tempo
                  libero in questa attività per me stimolante. La voglia di
                  imparare a programmare è nata proprio con l&rsquo;idea di
                  capire come potesse essere possibile che delle &quot;stringhe
                  di codice&quot; potessero rendere possibile tutto quello che
                  vedo e faccio.
                </p>
              </div>

              <div className="modal-footer flex justify-end">
                <button
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  onClick={closeModalGame}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
