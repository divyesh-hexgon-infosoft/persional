import React from 'react'
import {fontcolor,linecolor} from './fontcolor'
export default function Horline(props) {
  return (
    <div>
        <div className=' row'>
                    <h4 className='col-auto  ' style={{marginTop:"-3px",marginBottom:"-1px"}}><font color={fontcolor}>{props.name}</font><b>{props.fname}</b>
                    {/* <h4 className='col-auto  ' style={{marginTop:"-4px"}}><font color={fontcolor}><b>{props.name}</b></font><b>{props.fname}</b> */}
                    {/* <div className='col-auto hdrr '><b>{props.name}</b> */}
                    </h4>
                    <div className='col'>
                        <div style={{ 
                          paddingTop: "18px",
                          marginLeft: "-18px",
                          paddingLeft: "18px"
                             }}></div>
                        <div style={{
                            height: "1px", color: "black",
                            backgroundColor: linecolor ,marginLeft:"-18px" 
                        }}>
                        </div>
                    </div>
                </div>
    </div>
  )
}
