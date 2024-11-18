import React from 'react'
import './Style.css'
export default function SocialLink(props) {
  return (
    <>
    <a className={props.style} src={props.link}> </a>
    </>
  )
}
