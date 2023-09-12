import Image from "next/image";
import Io from "../../public/io.jpg"
import "./Menu.css"

export default function Menu() {
    return(<>
<nav className="navbar">
      <div className="max-w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <Image src={Io} className="h-8 w-10 mr-3 rounded" alt="Foto Vincenzo De Pascale" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Vincenzo De Pascale</span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 text-hover:bg-gray-700 text-focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="navbar font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:text-gray-900">
            <li>
              <a
                href="aboutMe"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 text-white md:text-hover:text-white-500 text-hover:bg-gray-700 text-hover:text-white md:text-hover:bg-transparent"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="stack"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 text-white md:text-hover:text-white-500 text-hover:bg-gray-700 text-hover:text-white md:text-hover:bg-transparent"
              >
                Stack
              </a>
            </li>
            <li>
              <a
                href="backEnd"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 text-white md:text-hover:text-white-500 text-hover:bg-gray-700 text-hover:text-white md:text-hover:bg-transparent"
              >
                Back end
              </a>
            </li>
            <li>
              <a
                href="frontEnd"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 text-white md:text-hover:text-white-500 text-hover:bg-gray-700 text-hover:text-white md:text-hover:bg-transparent"
              >
                Front end
              </a>
            </li>
            <li>
              <a
                href="fullStack"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 text-white md:text-hover:text-white-500 text-hover:bg-gray-700 text-hover:text-white md:text-hover:bg-transparent"
              >
                Full Stack
              </a>
            </li>
            <li>
              <a
                href="contacts"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 text-white md:text-hover:text-white-500 text-hover:bg-gray-700 text-hover:text-white md:text-hover:bg-transparent"
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </>)
}