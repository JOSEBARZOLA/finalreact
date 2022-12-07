import React, { useState } from "react";
import data from "../Data/Image.json";
import Modal from "./Modal";

function Galeria() {
    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
  
    const handleClick = (item, index) => {
      setCurrentIndex(index);
      setClickedImg(item.link);
    };
  
    const handelRotationRight = () => {
      const totalLength = data.data.length;
      if (currentIndex + 1 >= totalLength) {
        setCurrentIndex(0);
        const newUrl = data.data[0].link;
        setClickedImg(newUrl);
        return;
      }
      const newIndex = currentIndex + 1;
      const newUrl = data.data.filter((item) => {
        return data.data.indexOf(item) === newIndex;
      });
      const newItem = newUrl[0].link;
      setClickedImg(newItem);
      setCurrentIndex(newIndex);
    };
  
    const handelRotationLeft = () => {
      const totalLength = data.data.length;
      if (currentIndex === 0) {
        setCurrentIndex(totalLength - 1);
        const newUrl = data.data[totalLength - 1].link;
        setClickedImg(newUrl);
        return;
      }
      const newIndex = currentIndex - 1;
      const newUrl = data.data.filter((item) => {
        return data.data.indexOf(item) === newIndex;
      });
      const newItem = newUrl[0].link;
      setClickedImg(newItem);
      setCurrentIndex(newIndex);
    };
  
    return (
    <div>
        <h3 className="TitleGalery">Galeria de trabajos</h3>
      <div className="wrapper">
        
        {data.data.map((item, index) => (
          <div key={index} className="wrapper-images">
            
            <img 
              src={item.link}
              alt={item.text}
              onClick={() => handleClick(item, index)}
            />
            <h2 className="Text">{item.text}</h2>
          </div>
        ))}
        <div>
          {clickedImg && (
            <Modal
              clickedImg={clickedImg}
              handelRotationRight={handelRotationRight}
              setClickedImg={setClickedImg}
              handelRotationLeft={handelRotationLeft}
            />
          )}
        </div>
      </div>
      </div>
    );
  }

export default Galeria