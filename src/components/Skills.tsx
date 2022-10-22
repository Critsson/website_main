import React from 'react'
import { ScrollUp } from "./ScrollUp"
import { ScrollDown } from './ScrollDown'
import { IoLogoJavascript } from "react-icons/io5"

export const Skills = () => {
  return (
    <div id="Skills" style={{ height: "110vh", flexShrink: "0", scrollSnapAlign: "start" }}>
      <div>
        <IoLogoJavascript style={{width: "5vw", height: "5vw", color: "#AEE728", borderRadius: "25%"}} />
      </div>
    </div>
  )
}
