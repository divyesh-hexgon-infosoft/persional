import React from "react";
import { headercolor } from "../fontcolor";
import Horline from "../Horline";
import "./Style.css";
export default function Education() {
  return (
    <>
      <div>
        {/* <div className='hdrr '><b>Education ______________________________________________________________________</b></div> */}
        <Horline name="Education" />
        {/* <Horline fname="Edu" name="cation"/> */}
        <div className="p-2 ps-3">
          <div>
            <div className="row">
              <div
                className="col scname p-1 ps-3"
                style={{
                  color: headercolor,
                  margin: "-2px",
                  padding: "-5px",
                  marginBottom: "-10px",
                }}
              >
                <h5>Dharmsinh Desai University</h5>
              </div>
              <div className="col location "> Nadiad, IN </div>
            </div>
            <div className="row">
              <div className="col  fntsize ms-3">
                B.TECH Computer Engineering | CPI : 7.43/10
              </div>
              <div className="col  location ">07/2019 ‑ 05/2023 </div>
            </div>
            {/* <div>
                            <ul>
                                <li>
                                    <div className='row fntsize'>
                                        <div className='col-1 me-2'>
                                        Courses:
                                        </div>
                                        <div className='col pe-5'>
                                         <div>
                                         Data Structures and Algorithm,
                                         Database Management Systems,
                                         Object Oriented Programming,
                                         </div>
                                         <div>
                                         Software Engineering,
                                         Operating Systems, 
                                         Computer Networks.
                                         </div>
                                        </div>
                                        </div>
                                </li>
                            </ul>
                        </div> */}
          </div>
          <div>
            <div className="row">
              <div
                className="col-auto scname p-1 ps-3"
                style={{
                  color: headercolor,
                  marginBottom: "-10px",
                  marginTop: "2px",
                  padding: "-50px",
                }}
              >
                <h5>Shree Taxashila Vidhyalaya</h5>
                {/* <b>SHREE TAXSHILA VIDHYALAYA</b> */}
              </div>
              <div className="col location pt-2"> Junagadh, IN </div>
            </div>
            <div className="row">
              <div className="col-auto fntsize ms-3">
                {/* HSC(Science) | GSEB Board: <b>99.06</b> percentile | GUJCAT: <b>99.57</b> percentile  */}
                {/* HSC(Science) | GSEB Board: 76.33 % | ACPC rank : 311 */}
                HSC(Science) | GSEB Board: 88.33% | ACPC rank : 729
              </div>
              <div className="col  location ">06/2017 - 04/2019</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
