import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center flex flex-row items-center justify-center">
        <div>
          <h1 className="text-3xl font-semibold mb-2">
            <span>Vincenzo De Pascale,</span><br />
            <span>Jr Full Stack Developer</span>
          </h1>
        </div>
        <div className="ml-4">
          <Image src="/io.jpg" alt="Vincenzo De Pascale" width={150} height={150} className="rounded-full" />
        </div>
      </div>
    </div>
  );
}
