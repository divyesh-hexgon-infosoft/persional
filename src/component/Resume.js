import React from 'react'
import Achievements from './Achievements/Achievements'
import Coursework from './Coursework/Coursework'
import Education from './Education/Education'
import ExtraCur from './Extra/ExtraCur'
import Header from './Header/Header'
import Interest from './Interests/Interest'
import Project from './Project/Project'
import Skill from './Skill/Skill'
import Experience from './Experience/Experience'

export default function Resume() {
  return (
    <div>
        <Header/>
        {/* <hr/> */}
        <Education/>
        <Experience/>
        <Project/>
        {/* <hr/> */}
        
        <Skill/>
        {/* <Coursework/> */}
        
        <Achievements/>
        
        {/* <Interest/> */}
    </div>
  )
}
