import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center boxHome flex-col">
        <div className="text-center flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="ml-4  md:hidden">
              <Image
                src="/io.jpg"
                alt="Vincenzo De Pascale"
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>
            <h1 className="text-3xl font-semibold mb-2">
              <span>Vincenzo De Pascale,</span>
              <br />
              <span>Full Stack Developer</span>
            </h1>
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
          <div className="ml-4 hidden md:flex">
            <Image
              src="/io.jpg"
              alt="Vincenzo De Pascale"
              width={175}
              height={175}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
