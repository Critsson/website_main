import React from 'react'
import { ScrollUp } from "./ScrollUp"
import { ScrollDown } from './ScrollDown'
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiExpress, SiNodedotjs, SiJest, SiTestinglibrary, SiAmazonaws } from "react-icons/si"
import "../styles/Skills.css"

export const Skills = () => {

  const [squareCounter, setSquareCounter] = React.useState<number>(0)

  React.useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 9)
    if (randomNumber !== squareCounter) {
      setTimeout(() => setSquareCounter(randomNumber), 6000)
    } else if(randomNumber === squareCounter && randomNumber > 0) {
      setTimeout(() => setSquareCounter(randomNumber-1), 6000)
    } else if(randomNumber === squareCounter && randomNumber < 8) {
      setTimeout(() => setSquareCounter(randomNumber+1), 6000)
    }

  }, [squareCounter])

  return (
    <div id="Skills" style={{ height: "110vh", flexShrink: "0", scrollSnapAlign: "start", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "2.5vh" }}>
      <ScrollUp lastPage="Home" />
      <div className="skills_main_container">
        <div className="skills_container">
          {squareCounter === 0 ? <div className="skill_square_shake">
            {<SiJavascript style={{ width: "4vw", height: "4vw", borderRadius: "4%", color: "#18191F" }} />}
          </div>
            :
            <div className="skill_square">
              {<SiJavascript style={{ width: "4vw", height: "4vw", borderRadius: "4%", color: "#18191F" }} />}
            </div>}
          {squareCounter === 1 ? <div className="skill_square_shake">
            <SiReact style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
          </div>
            :
            <div className="skill_square">
              <SiReact style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
            </div>}
          {squareCounter === 2 ? <div className="skill_square_shake">
            <SiNextdotjs style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
          </div>
            :
            <div className="skill_square">
              <SiNextdotjs style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
            </div>}
        </div>
        <div className="skills_container">
          {squareCounter === 3 ? <div className="skill_square_shake">
            <SiNodedotjs style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
          </div>
            :
            <div className="skill_square">
              <SiNodedotjs style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
            </div>}
          {squareCounter === 4 ? <div className="skill_square_shake">
            <SiExpress style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
          </div>
            :
            <div className="skill_square">
              <SiExpress style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
            </div>}
          {squareCounter === 5 ? <div className="skill_square_shake">
            <SiTypescript style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
          </div>
            :
            <div className="skill_square">
              <SiTypescript style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
            </div>}
        </div>
        <div className="skills_container">
          {squareCounter === 6 ? <div className="skill_square_shake">
            <SiJest style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
          </div>
            :
            <div className="skill_square">
              <SiJest style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
            </div>}
          {squareCounter === 7 ? <div className="skill_square_shake">
            <SiTestinglibrary style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
          </div>
            :
            <div className="skill_square">
              <SiTestinglibrary style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
            </div>}
          {squareCounter === 8 ? <div className="skill_square_shake">
            <SiAmazonaws style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
          </div>
            :
            <div className="skill_square">
              <SiAmazonaws style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
            </div>}
        </div>
      </div>
      <ScrollDown nextPage="Projects" />
    </div>
  )
}
