import React from 'react'
import Horline from '../Horline'
import courselist from './courselist'

export default function Coursework() {
  return (
    <>
    <Horline name="Coursework"/>
    {/* <Horline fname="Cou"name="rsework"/> */}
    <div  className=' row p-2 ps-3'>
    <li className='col-4'>Data Structures and Algorithm</li>
    <li className='col-5'>Database Management Systems</li>
    <li className='col-3'>Operating Systems</li>
    <li className='col-4'>Object Oriented Programming</li>
    <li className='col-5'>Network Information and Security</li>
    <li className='col-3'>Computer Networks</li>
      {/* {

        courselist.map((item,index)=>(
        //   <div  className='col'key={index}>
            // <li className='col-5'dangerouslySetInnerHTML={{ __html: item}} />
            // <li className='col-4'dangerouslySetInnerHTML={{ __html: item}}  style={{marginRight:"5px"}}/>
            // <li className='col-6'dangerouslySetInnerHTML={{ __html: item}}  />
            // <li className='col-6'dangerouslySetInnerHTML={{ __html: item}}/>
            <li className='col-4'dangerouslySetInnerHTML={{ __html: item}}  style={{marginRight:"-10px"}}/>
            // <div className='col-6'dangerouslySetInnerHTML={{ __html: item}}  />
            // <div className='col-4'dangerouslySetInnerHTML={{ __html: item}}  />
        //   </div>
        ))
      } */}
      </div>
    </>
  )
}
