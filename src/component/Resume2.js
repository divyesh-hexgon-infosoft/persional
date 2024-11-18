import React from 'react'
import Achievements from './Achievements/Achievements'
import Education from './Education/Education'
import Header from './Header/Header'
import Interest from './Interests/Interest'
import Project from './Project/Project'
import Skill from './Skill/Skill'

export default function Resume() {
    return (
        <div>
            <Header />
            {/* <hr/> */}
            {/* <Education/> */}
            <div className='row-4'>
                <div className='col'>
                    <Skill />
                    <Interest />
                </div>
                <div className='col-8'>
                    <Project />
                    {/* <hr/> */}
                    <Achievements />
                </div>
            </div>
        </div>
    )
}
