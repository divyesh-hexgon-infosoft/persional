import React from 'react'
import Horline from '../Horline'
import interestlist from './Interestlist'
export default function Interest() {
  return (
    <>
    {/* <div className='hdrr'><b>Interest _____________________________________________________________________</b></div> */}
    <Horline name="Interest"/>
    {/* <Horline fname="Int" name="erest"/> */}
      <div  className=' row p-2 ps-3'>

      {

        interestlist.map((item,index)=>(
        //   <div  className='col'key={index}>
            <div className='col-auto'dangerouslySetInnerHTML={{ __html: item}} />
        //   </div>
        ))
      }
      </div>
    </>
  )
}
