import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center boxHome flex-col">
        <div className="text-center flex justify-center items-center">
          <div className="flex justify-center items-center">
            <h1 className="text-3xl font-semibold mb-2">
              <span>Vincenzo De Pascale,</span>
              <br />
              <span>Full Stack Developer</span>
            </h1>
          </div>
          <div className="ml-4 hidden md:flex">
            <Image
              src="/io.jpg"
              alt="Vincenzo De Pascale"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
        </div>
        <a
          href={"/CV_VincenzoDePascale.pdf"}
          download="CV_VincenzoDePascale.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <button className="cursor-pointer underline underline-offset-4 decoration-[#333]">
            <span>Download CV</span>
          </button>
        </a>
      </div>
    </>
  );
}
