import React from "react";
import { headercolor } from "../fontcolor";
import Horline from "../Horline";
import content from "./content";
export default function Experince() {
  return (
    <>
      <div className="mt-3">
        {/* <Horline fname="Pro" name="ject"/> */}
        <Horline name="Work Experince" />
        <div style={{ marginBottom: "10px" }}></div>
        {/* <div ></div> */}
        {/* <div className='hdrr row'><b>Experince __________________________________________________________________</b></div> */}
        <div className="p-2 ps-4" style={{ marginTop: "-6px" }}>
          {content.map((company, index) => (
            <div key={index}>
              <div className="row">
                <div className="col-auto scname">
                  <h5
                    className="row"
                    style={{ color: headercolor, marginTop: "-5px" }}
                  >
                    {company.company}
                  </h5>
                </div>
                <div className="col" style={{ textAlign: "right" }}>
                  {company.location}
                </div>
                <div style={{ marginLeft: "5px" }}>
                  {company.roles.map((role, ind) => (
                    <div key={{ ind }}>
                      <div className="row" style={{ marginTop: "-5px" }}>
                        <div className="row">
                          <div
                            className="col-10"
                            style={{ color: headercolor }}
                          >
                            <b>{role.name}</b> [ <i>{role.tech}</i> ]
                          </div>
                          <div
                            className="col"
                            style={{ textAlign: "right", marginRight: "-25px" }}
                          >
                            {role.date}
                          </div>
                        </div>
                        <div>
                          <ul>
                            {role.points.map((point, index) => (
                              <li>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* {
                    content.map((item, index) => (
                        <div key={index}>
                            <div className="row">
                                <div className="col scname" >
                                    <b>{item.name}</b>
                                </div>
                                <div className="col " style={{ textAlign: "right" }}> <a className="bi-github "
                                    style={{ textDecoration: "none", color: "black" }}
                                    href={item.link}></a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col fntsize">
                                    [{item.tech}]
                                </div>
                                <div className="col  location " >{item.date} </div>
                            </div>
                            <div className=" fntsize">
                                {
                                    item.points.map((items,index)=>(
                                        <li>{items}</li>
                                        ))
                                    }
                            </div>
                        </div>

                    ))
                } */}
        </div>
      </div>
    </>
  );
}

/* 

*/
