import React, { forwardRef } from "react";
import ComponentsPdf from "../ComponentsPdf";

import "./pdf.css";

const Pdf = forwardRef(({ showGraphic, img }, ref) => {
  return (
    <div className="card"  ref={ref}>
      <div className="contentCard">
        <ComponentsPdf img={img} showGraphic={showGraphic}  />
      </div>
    </div>
  );
});
export default Pdf;
