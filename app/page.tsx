"use client";

import Tilt from "react-parallax-tilt";
import Link from "next/link";
import { useState } from "react";

const Home = (): JSX.Element => {
  const [verticalFlip, setVerticalFlip] = useState(false);
  return (
    <main className="w-screen h-screen center">
      <Tilt
        transitionSpeed={1000}
        tiltMaxAngleX={1}
        tiltMaxAngleY={1}
        flipVertically={verticalFlip}
        className="w-[70vw] h-[75vh] rounded-3xl bg-white flex justify-around items-center flex-col drop-shadow-2xl"
      >
        <div className="w-[90%] flex justify-between items-center">
          <Link
            href="https://www.linkedin.com/in/gregory-buffard-dev/"
            target="_blank"
            className="text-title center"
          >
            Linked
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="w-[2vw] translate-x-[-0.15vw]"
              viewBox="0 0 30 30"
            >
              <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
            </svg>
          </Link>
          <button
            type="button"
            onClick={() => {
              setVerticalFlip(!verticalFlip);
            }}
            className="text-title uppercase"
          >
            C<span className="text-subtitle">ontact</span> M
            <span className="text-subtitle">e</span>
          </button>
        </div>
        <div className="center flex-col uppercase">
          <h1>
            G<span className="text-subtitle">regory</span> Buffard
          </h1>
          <h1>
            S<span className="text-subtitle">oftware</span> D
            <span className="text-subtitle">eveloper</span>
          </h1>
        </div>
        <footer className="text-ordinary uppercase">
          &copy; {new Date().getFullYear()} Gregory Buffard
        </footer>
      </Tilt>
    </main>
  );
};

export default Home;
