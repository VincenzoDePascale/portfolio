"use client";
import "./page.css";

export default function AboutMe() {
  return (
    <>
      <div className="text-white box py-8 h-100">
        <h2 className="text-xl font-semibold m-2">About Me</h2>
        <div className="ms-2 mt-10">
          <p className="text-lg">
            Hello, I am Vincenzo, a passionate developer.
          </p>
          <p>
            I love technology,{" "}
            <a
              className="underline underline-offset-1"
              href="https://open.spotify.com/playlist/6QIIqxlRkVUHSwCQKpfjec?si=c5e33f15906843ce"
              target="_blank"
            >
              music
            </a>
            , cinema, and video games.
          </p>

          <p className="text-lg">
            I dedicate myself to the best of my abilities in everything I do.
          </p>
          <p className="text-lg">
            Feel free to explore my journey and get to know me better.
          </p>
        </div>
      </div>
    </>
  );
}
