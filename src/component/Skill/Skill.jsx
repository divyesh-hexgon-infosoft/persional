import React from "react";
import Horline from "../Horline";
import skilllist from "./Skilllist";
export default function Skill() {
  return (
    <>
      {/* <div className="hdrr">
        <b>
          Skill ________________________________________________________________________
        </b>
      </div> */}
      <Horline name="Skills" />
      {/* <Horline fname ="Ski" name="lls" /> */}
      <div className=" p-2 ps-3">
        {/* {skilllist.map((item, index) => (
          //   <div  className='col'key={index}>
          <div className="col-3" dangerouslySetInnerHTML={{ __html: item }} />
          //   </div>
        ))} */}

        <div className="row">
          {/* <li className="col-auto" >Programming</li> */}
          <li className="col-2 me-3">
            {/* <li className="col-auto" style={{ marginRight: "-2px" }}> */}
            Programming
          </li>
          {/* <div className="col-1"> : </div> */}

          <div className="col">{skilllist.Programming}</div>
          {/* {
            skilllist.Programming.map((item,index)=>(
              <div className="col-auto" key = {index} >{item}</div>
            )) 
          } */}
        </div>
        <div className="row">
          <li className="col-2 me-3">Technologies</li>
          <div className="col">{skilllist.Technologies}</div>
          {/* :{
            skilllist.Web.map((item,index)=>(
              <div className="col-auto" key = {index} >{item}</div>
            )) 
          } */}
        </div>
        <div className="row">
          <li className="col-2 me-3">Tools</li>
          <div className="col">{skilllist.Tools}</div>
          {/* :{
            skilllist.Tools.map((item,index)=>(
              <div className="col-auto" key = {index} >{item}</div>
            )) 
          } */}
        </div>
      </div>
    </>
  );
}
