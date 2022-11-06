import React, { useState, useEffect } from "react";
import { buttons } from "./data";
import { getVideo, filterVideo } from "./services";
import "./styles.css";

export default function App() {
  const [filtredVideo, setFiltredVideo] = useState(null);
  useEffect(() => {
    setFiltredVideo(getVideo());
  }, []);

  function handleVideo(e) {
    let typeVideo = e.target.value;
    typeVideo !== "all"
      ? setFiltredVideo(filterVideo(typeVideo))
      : setFiltredVideo(getVideo());
  }

  return (
    <>
      {buttons &&
        buttons.map((type, index) => (
          <>
            <button key={index} value={type.value} onClick={handleVideo}>
              {type.name}
            </button>
          </>
        ))}

      {filtredVideo &&
        filtredVideo.map((type) => (
          <ul key={type.id}>
            <li>{type.title}</li>
          </ul>
        ))}
    </>
  );
}
