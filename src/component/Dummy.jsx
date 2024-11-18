import React from "react";
import blist from "./boostrapicon";
export default function Dummy() {
  return (
    <div className="row">
      {
          blist.map((item)=>(
            <div className="col m-1">
                <a className={item} href={item}></a>
                {/* <span>{item}</span> */}
            </div>
            ))
      }
    </div>
  );
}
