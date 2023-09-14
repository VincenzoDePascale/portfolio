import Image from "next/image";
import "./Menu.css"
import { Navbar } from "flowbite-react";

export default function Menu() {
    return(<>
<nav className="navbar">
<Navbar
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
</Navbar>
    </nav>

    </>)
}