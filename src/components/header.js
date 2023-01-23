import React from "react";
import imgsrc from "../images/Troll Face.png";

export default function Header() {
  return (
    <header>
      <img className="header--image" src={imgsrc} alt="troll-face" />
      <h1 className="header--title">Meme Generator</h1>
      <a href="https://github.com/oyeSAURABH" className="github">
        Github
      </a>
    </header>
  );
}
