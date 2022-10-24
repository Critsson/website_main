import React from 'react'
import { ScrollUp } from "./ScrollUp"
import { ScrollDown } from './ScrollDown'
import {SiTypescript, SiJavascript} from "react-icons/si"

export const Skills = () => {
  return (
    <div id="Skills" style={{ height: "110vh", flexShrink: "0", scrollSnapAlign: "start", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "1.5vh" }}>
      <ScrollUp lastPage="Home" />
      <div>
        <SiJavascript style={{width: "10vw", height: "10vw", color: "#F7E018", borderRadius: "3%"}} />
        <SiTypescript style={{width: "10vw", height: "10vw", color: "#2D79C7"}}/>
      </div>
      <ScrollDown nextPage="Projects" />
    </div>
  )
}
