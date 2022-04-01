import React, { useEffect, useState } from "react";
import fruitsSprite from "./sprites/fruitsSprite.svg";
import animalsSprite from "./sprites/animalsSprite.svg";
import colorsSprite from "./sprites/colorsSprite.svg";

const imgSources = [
  { lesson: "Fruits", src: fruitsSprite },
  { lesson: "Animals", src: animalsSprite },
  { lesson: "Colors", src: colorsSprite },
];

const Image = (props) => {
  const [url, setUrl] = useState();

  const lesson = props.lesson;
  const name = props.name;

  useEffect(() => {
    const path = imgSources.find((item) => item.lesson === lesson);
    setUrl(path.src);
  }, [lesson]);

  return (
    <svg>
      <use xlinkHref={`${url}#${name}`}></use>
    </svg>
  );
};

export default Image;
