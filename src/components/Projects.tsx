import React from 'react'
import { ScrollDown } from './ScrollDown'
import { ScrollUp } from './ScrollUp'

export const Projects = () => {
  return (
    <div style={{ height: "107.5vh", flexShrink: "0", scrollSnapAlign: "start", paddingTop: "2.5vh" }} id="Projects">
        <ScrollUp lastPage="Skills" />
        <div className="projects_main_container">

        </div>
    </div>
  )
}
