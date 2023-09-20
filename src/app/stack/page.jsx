'use client'
import "./page.css"

export const frontEndList = [
    {
        id: "HTML5",
        stack: "HTML5"
    },{
        id: "CSS3",
        stack: "CSS3"
    },{
        id: "SASS",
        stack: "SASS"
    },{
        id: "BOOTSTRAP",
        stack: "BOOTSTRAP"
    },{
        id: "TAILWIND",
        stack: "TAILWIND"
    },{
        id: "JAVASCRIPT",
        stack: "JAVASCRIPT"
    },{
        id: "TYPESCRIPT",
        stack: "TYPESCRIPT"
    },{
        id: "REACT",
        stack: "REACT"
    },{
        id: "REACT ROUTER",
        stack: "REACT ROUTER"
    },{
        id: "REDUX",
        stack: "REDUX"
    },{
        id: "NEXT.JS",
        stack: "NEXT.JS"
    }
]

export const backEndList = [
    {
        id: "JAVA",
        stack: "JAVA",
    },{
        id: "SPRING",
        stack: "SPRING",
    },{
        id: "SPRINGBOOT",
        stack: "SPRINGBOOT",
    },{
        id: "THYMELEAF",
        stack: "THYMELEAF",
    },{
        id: "APACHE MAVEN",
        stack: "APACHE MAVEN",
    }
]

export const sqlList = [
    {
        id: "POSTGRESQL",
        stack: "POSTGRESQL",
    }
]

export const toolList = [
    {
        id: "NPM",
        stack: "NPM",
    },{
        id: "POSTMAN",
        stack: "POSTMAN",
    },{
        id: "TRELLO",
        stack: "TRELLO",
    },{
        id: "GIT",
        stack: "GIT",
    }
]

export const authList = [
    {
        id: "JWT",
        stack: "JWT",
    }
]

export default function Stack() {
  return (
    <>
    <div className="my-10">

        <div className="text-white py-8">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-semibold mb-4">Front End</h2>
                <div className="flex flex-wrap justify-center">

                    {frontEndList.map((e, i) => (
                        <div key={i} className="col flex justify-center items-center">
                        <p className="text-center flex justify-center">{e.stack}</p>
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
                        <p className="text-center flex justify-center">{e.stack}</p>
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
                        <p className="text-center flex justify-center">{e.stack}</p>
                    </div>
                    ))}

                </div>
            </div>
        </div>

        <div className="text-white py-8">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-semibold mb-4">TOOL</h2>
                <div className="flex flex-wrap justify-center">

                {toolList.map((e, i) => (
                        <div key={i} className="col flex justify-center items-center">
                        <p className="text-center flex justify-center">{e.stack}</p>
                    </div>
                    ))}

                </div>
            </div>
        </div>

        <div className="text-white py-8">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-semibold mb-4">AUTENTICATION</h2>
                <div className="flex flex-wrap justify-center">
                    
                {authList.map((e, i) => (
                        <div key={i} className="col flex justify-center items-center">
                        <p className="text-center flex justify-center">{e.stack}</p>
                    </div>
                    ))}

                </div>
            </div>
        </div>

    </div>

    </>
  );
}
