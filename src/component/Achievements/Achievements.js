import React from "react";
import Horline from "../Horline";
import achivlist from "./achivlist";

export default function Achievements() {
  return (
    <div className="mt-3">
      {/* <div className='hdrr'><b>Achievements ___________________________________________________________</b></div> */}
      <Horline name="Achievements" />
      {/* <Horline fname="Ach" name="ievements"/> */}
      <div className="p-2 ps-3">
        {achivlist.map((item, index) => (
          <div className="row ps-3">
            {/* <div className='col-2' dangerouslySetInnerHTML={{__html:item[0]}}></div> */}
            {/* <div className='col-1'></div> */}
            <div
              className="col-2"
              dangerouslySetInnerHTML={{ __html: item[2] }}
              // style={{ fontWeight: "bold" }}
            ></div>
            <div
              className="col-9"
              dangerouslySetInnerHTML={{ __html: item[3] }}
            ></div>
            <div
              className="col-1"
              dangerouslySetInnerHTML={{ __html: item[1] }}
              style={{ textAlign: "right" }}
            ></div>
            {/* <div className='col-1'  dangerouslySetInnerHTML={{__html:item[1]}}></div> */}
            {/* <div className='col-2' style={{"textAlign":"right"}} dangerouslySetInnerHTML={{__html:item[1]}}></div> */}
            {/* <div className='col-1'></div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

// /*
// {
// achivlist.map((item,index)=>(
// <div className='row' key={index}>

// {/* <div className='col-2' ><center><div dangerouslySetInnerHTML={{ __html: item[0]}} /></center></div> */}
// {/* <div className='col-2' ><center></center></div> */}
//       <div className='col-1' dangerouslySetInnerHTML={{ __html: item[0]}} />
//       <div className='col' dangerouslySetInnerHTML={{ __html: item[1]}} />
//     </div>
//   ))
// }

// */

/* <table>
        <thead></thead>
        <tbody>
      {
        achivlist.map((item,index)=>(
          <tr className='row'  key={index}>
            
            // {/* <div className='col-2' ><center><div dangerouslySetInnerHTML={{ __html: item[0]}} /></center></div> */
// {/* <div className='col-2' ><center></center></div> */}
// <td className='col-auto' style={{marginRight:"auto"}} ><span  dangerouslySetInnerHTML={{ __html: item[0]}}></span></td>
// {/* <td   ><span>{item[1]}</span></td> */}
// <td  className='col' ><span dangerouslySetInnerHTML={{ __html: item[1]}}></span></td>
// </tr>
// ))
// }
// </tbody>
// </table> */

/* 

      {
        achivlist.map((item,index)=>(
          <div className='row'>
            <div className='col-2' dangerouslySetInnerHTML={{__html:item[1]}}></div>
            <div className='col' dangerouslySetInnerHTML={{__html:item[2]}}></div>
            <div className='col-1' style={{"textAlign":"right"}} dangerouslySetInnerHTML={{__html:item[0]}}></div>
            <div className='col-1'></div>
          </div>
        ))
      }

*/
