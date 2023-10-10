"use client";
import "./page.css";

export const frontEndList = [
  {
    id: "HTML5",
    stack: "HTML5",
    img: true,
  },
  {
    id: "CSS3",
    stack: "CSS3",
    img: true,
  },
  {
    id: "SASS",
    stack: "SASS",
    img: true,
  },
  {
    id: "BOOTSTRAP",
    stack: "BOOTSTRAP",
    img: true,
  },
  {
    id: "TAILWIND",
    stack: "TAILWIND",
    img: true,
  },
  {
    id: "JAVASCRIPT",
    stack: "JAVASCRIPT",
    img: true,
  },
  {
    id: "TYPESCRIPT",
    stack: "TYPESCRIPT",
    img: true,
  },
  {
    id: "REACT",
    stack: "REACT",
    img: true,
  },
  {
    id: "REDUX",
    stack: "REDUX",
    img: true,
  },
  {
    id: "NEXTJS",
    stack: "NEXT.JS",
    img: true,
  },
];

export const backEndList = [
  {
    id: "JAVA",
    stack: "JAVA",
    img: true,
  },
  {
    id: "SPRINGBOOT",
    stack: "SPRINGBOOT",
    img: true,
  },
  {
    id: "APACHE MAVEN",
    stack: "APACHE MAVEN",
    img: true,
  },
  {
    id: "JUNIT5",
    stack: "jUnit 5",
    img: true,
  },
];

export const sqlList = [
  {
    id: "POSTGRESQL",
    stack: "POSTGRESQL",
    img: true,
  },
];

export const toolList = [
  {
    id: "NPM",
    stack: "NPM",
    img: true,
  },
  {
    id: "POSTMAN",
    stack: "POSTMAN",
    img: true,
  },
  {
    id: "TRELLO",
    stack: "TRELLO",
    img: true,
  },
  {
    id: "GITHUB",
    stack: "GITHUB",
    img: true,
  },
  {
    id: "GIT",
    stack: "GIT",
    img: true,
  },
];

export default function Stack() {
  return (
    <>
      <div className="box">
        <div className="text-white pb-8">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Front End</h2>
            <div className="flex flex-wrap justify-center">
              {frontEndList.map((e, i) => (
                <div key={i} className="col flex justify-center items-center">
                  {e.img && (
                    <div className="flex flex-col justify-center items-center">
                      <img
                        src={`${e.id}.svg`}
                        alt={e.stack}
                        className="max-w-[75px] max-h-[75px]"
                      />
                      <p className="nameStack text-center flex justify-center">
                        {e.stack}
                      </p>
                    </div>
                  )}{" "}
                  {!e.img && (
                    <p className="text-center flex justify-center">{e.stack}</p>
                  )}{" "}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-white py-8">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Back End</h2>
            <div className="flex flex-wrap justify-center">
              {backEndList.map((e, i) => (
                <div key={i} className="col flex justify-center items-center">
                  {e.img && (
                    <div className="flex flex-col justify-center items-center">
                      <img
                        src={`${e.id}.svg`}
                        alt={e.stack}
                        className="max-w-[75px] max-h-[75px]"
                      />
                      <p className="nameStack text-center flex justify-center">
                        {e.stack}
                      </p>
                    </div>
                  )}{" "}
                  {!e.img && (
                    <p className="text-center flex justify-center">{e.stack}</p>
                  )}{" "}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-white py-8">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">SQL</h2>
            <div className="flex flex-wrap justify-center">
              {sqlList.map((e, i) => (
                <div key={i} className="col flex justify-center items-center">
                  {e.img && (
                    <div className="flex flex-col justify-center items-center">
                      <img
                        src={`${e.stack}.svg`}
                        alt={e.stack}
                        className="max-w-[75px] max-h-[75px]"
                      />
                      <p className="nameStack text-center flex justify-center">
                        {e.stack}
                      </p>
                    </div>
                  )}{" "}
                  {!e.img && (
                    <p className="text-center flex justify-center">{e.stack}</p>
                  )}{" "}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-white py-8">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Tool</h2>
            <div className="flex flex-wrap justify-center">
              {toolList.map((e, i) => (
                <div key={i} className="col flex justify-center items-center">
                  {e.img && (
                    <div className="flex flex-col justify-center items-center">
                      <img
                        src={`${e.stack}.svg`}
                        alt={e.stack}
                        className="max-w-[75px] max-h-[75px]"
                      />
                      <p className="nameStack text-center flex justify-center">
                        {e.stack}
                      </p>
                    </div>
                  )}{" "}
                  {!e.img && (
                    <p className="text-center flex justify-center">{e.stack}</p>
                  )}{" "}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
