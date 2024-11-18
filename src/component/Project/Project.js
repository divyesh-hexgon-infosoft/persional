import React from 'react'
import { headercolor } from '../fontcolor'
import Horline from '../Horline'
import content from './content'
export default function Project() {
    return (
        <>
            <div>
                {/* <Horline fname="Pro" name="ject"/> */}
                <Horline name="Project" />
                <div style={{ marginBottom: "10px" }}></div>
                {/* <div ></div> */}
                {/* <div className='hdrr row'><b>Project __________________________________________________________________</b></div> */}
                <div className='p-2 ps-4'>

                    {
                        content.map((item, index) => (
                            <div key={index}>
                                <div className="row">
                                    <div className="col-auto scname" >
                                        {/* <b>{item[0]}</b> */}
                                        <h5 style={{ color: headercolor, margin: "-2px", padding: "-5px" }}>{item.name}  <span className='fntsize'>[<i>{item.tech}</i>]
                                        {/* &nbsp;<a className="bi-github "
                                                style={{ textDecoration: "none", color: "black" }}
                                                href={item.link}></a>
                                            {
                                                item.weblink ? (<>&nbsp;&nbsp;<a className="bi-globe2 "
                                                    style={{ textDecoration: "none", color: "black" }}
                                                    href={item.weblink}></a></>):(<></>)
                                                } */}
                                        </span></h5>
                                    </div>
                                    {/* <div className="col location " > {item.link}</div> */}
                                    <div className="col " style={{ textAlign: "right" }}> {item.date}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col fntsize">

                                    </div>
                                    <div className="col  location " > </div>
                                </div>
                                <div className=" ">
                                    <ul>
                                        {
                                            item.points.map((items, index) => (
                                                <li>{items}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>

                        ))
                    }
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
    )
}

/* 

*/