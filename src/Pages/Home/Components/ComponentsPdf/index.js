import './pdf.css';

import React, { forwardRef } from "react";
import {Rnd} from "react-rnd";
import Graphic from "../Graphics";

const ImgComponent = ({img}) => (
  <div
    className="img-options"
    style={{
      margin: 0,
      height: "100%",
      paddingBottom: "40px",
      backgroundImage: `url(${img})`,
      zIndex: "-10",
    }}
  ></div>
);



const  ComponentsPdf = forwardRef(( {showGraphic, img}, ref) => {
  return (
    <div ref={ref} className="contentPdf">
      <Rnd
        default={{
          x: 0,
          y: 0,
          width: 500,
          height: 190,
        }}
        bounds="window"
      >
        <ImgComponent img={img} />
      </Rnd>

      {showGraphic && (
        <Rnd
          default={{
            x: 0,
            y: 0,
            width: 500,
            height: 300,
          }}
          bounds="window"
          position={0}
        >
          <Graphic />
        </Rnd>
      )}
    </div>
  );
}
);
export default ComponentsPdf;
