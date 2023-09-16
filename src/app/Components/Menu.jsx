import Image from "next/image";
import { useState } from "react";
import "./Menu.css"
import { Navbar } from "flowbite-react";

export const navLinks = [
   {
    id: "progetti",
    title: "Progetti",
    href: "progetti",
  },
  {
    id: "stack",
    title: "Stack",
    href: "stack",
  },

  {
    id: "contacts",
    title: "Contacts",
    href: "contacts",
  },
];

export default function Menu() {

  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

    return(<>
<nav className="navbar">
{/* <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="/">
    <img
      src="/io.jpg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Vincenzo De Pascale
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="pl">
    <Navbar.Link href="/aboutMe">
      AboutMe
    </Navbar.Link>
    <Navbar.Link href="/stack">
      Stack
    </Navbar.Link>
    <Navbar.Link href="/front">
      FrontEnd
    </Navbar.Link>
    <Navbar.Link href="/back">
      BackEnd
    </Navbar.Link>
    <Navbar.Link href="/contacts">
      Contacts
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar> */}
<nav className=" flex p-2 pippo text-white ">
      {/* Logo */}
      <a href="/" className="flex items-center">
        <img src="/io.jpg" className="w-[45px]" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        <p className="ml-5 font-semibold text-2xl">Vincenzo De Pascale</p>
      </a>

      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[19px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a className="mx-2" href={`${nav.href}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-1 justify-end ">
        {toggle && (
          <>
            <span v-show="open" onClick={() => setToggle(!toggle)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </>
        )}
        {!toggle && (
          <>
            <span v-show="!open" onClick={() => setToggle(!toggle)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </span>
          </>
        )}

        {/* Sidebar */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar bg-indigo-300`}
          style={{ zIndex: 1 }}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a className="" href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    </nav>

    </>)
}