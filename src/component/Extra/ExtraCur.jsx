import React from "react";
import { headercolor } from "../fontcolor";
import Horline from "../Horline";
import content from "./content";
export default function ExtraCur() {
  return (
    <div style={{ paddingTop: "10px" }}>
      <Horline name="Extra Curricular & Experience" />
      <div className="p-2 ps-4">
        {content.map((item, index) => (
          <div key={index}>
            <div className="col-auto scname">
              <h5
                style={{ color: headercolor, margin: "-2px", padding: "-5px" }}
              >
                {item.name}{" "}
              </h5>
            </div>
            <div className=" ">
              <ul>
                {item.points.map((items, index) => (
                  <li>{items}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
