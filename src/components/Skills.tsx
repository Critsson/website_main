import React from 'react'
import { ScrollUp } from "./ScrollUp"
import { ScrollDown } from './ScrollDown'
import "../styles/Skills.css"
import { SkillSquare } from './SkillSquare'
import getWindowWidth from '../getWindowWidth'

export const Skills = () => {
  const [flippedArray, setFlippedArray] = React.useState<boolean[]>([false, false, false, false, false, false, false, false, false])
  const [windowWidth, setWindowWidth] = React.useState(getWindowWidth())

  React.useEffect(() => {
    function windowResized() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener('resize', windowResized);
    return () => window.removeEventListener('resize', windowResized);
  }, [])

  const flip = (id: number) => {
    setFlippedArray((): boolean[] => {
      const clone = [...flippedArray]
      if (clone[id] === true) {
        clone[id] = false
        return clone
      } else {
        clone[id] = true
        return clone
      }
    })
  }

  return (
    <>
      {windowWidth > 640 ? <div id="Skills" style={{ height: "100vh", flexShrink: "0", scrollSnapAlign: "start", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "2vh" }}>
        <ScrollUp lastPage="Home" />
        <div className="skills_main_container">
          <div className="skills_title_container">
            <h1>What I Work With</h1>
            <h1 className="skills_title_period">.</h1>
          </div>
          <div className="skills_container">
            <SkillSquare shakeDelay={50} flip={flip} id={0} icon="Javascript" backIcons={["Back End", "Front End"]} flipped={flippedArray[0]} />
            <SkillSquare shakeDelay={2} flip={flip} id={1} icon="React" backIcons={["Front End"]} flipped={flippedArray[1]} />
            <SkillSquare shakeDelay={10} flip={flip} id={2} icon="Nextdotjs" backIcons={["Back End", "Front End"]} flipped={flippedArray[2]} />
          </div>
          <div className="skills_container">
            <SkillSquare shakeDelay={66} flip={flip} id={3} icon="Nodedotjs" backIcons={["Back End"]} flipped={flippedArray[3]} />
            <SkillSquare shakeDelay={58} flip={flip} id={4} icon="Express" backIcons={["Back End"]} flipped={flippedArray[4]} />
            <SkillSquare shakeDelay={34} flip={flip} id={5} icon="Typescript" backIcons={["Back End", "Front End"]} flipped={flippedArray[5]} />
          </div>
          <div className="skills_container">
            <SkillSquare shakeDelay={18} flip={flip} id={6} icon="Postgresql" backIcons={["Back End", "Database"]} flipped={flippedArray[6]} />
            <SkillSquare shakeDelay={42} flip={flip} id={7} icon="Jest" backIcons={["Testing"]} flipped={flippedArray[7]} />
            <SkillSquare shakeDelay={26} flip={flip} id={8} icon="Amazonaws" backIcons={["Cloud", "Database"]} flipped={flippedArray[8]} />
          </div>
        </div>
        <ScrollDown nextPage="Projects" />
      </div>
        :
        <div id="Skills" style={{ height: "100vh", flexShrink: "0", scrollSnapAlign: "start", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "7vh" }}>
          <ScrollUp lastPage="Home" />
          <div className="skills_main_container">
            <div className="skills_title_container">
              <h1>What I Work With</h1>
              <h1 className="skills_title_period">.</h1>
            </div>
            <div className="skills_container">
              <SkillSquare shakeDelay={50} flip={flip} id={0} icon="Javascript" backIcons={["Back End", "Front End"]} flipped={flippedArray[0]} />
              <SkillSquare shakeDelay={2} flip={flip} id={1} icon="React" backIcons={["Front End"]} flipped={flippedArray[1]} />
              <SkillSquare shakeDelay={10} flip={flip} id={2} icon="Nextdotjs" backIcons={["Back End", "Front End"]} flipped={flippedArray[2]} />
            </div>
            <div className="skills_container">
              <SkillSquare shakeDelay={66} flip={flip} id={3} icon="Nodedotjs" backIcons={["Back End"]} flipped={flippedArray[3]} />
              <SkillSquare shakeDelay={58} flip={flip} id={4} icon="Express" backIcons={["Back End"]} flipped={flippedArray[4]} />
              <SkillSquare shakeDelay={34} flip={flip} id={5} icon="Typescript" backIcons={["Back End", "Front End"]} flipped={flippedArray[5]} />
            </div>
            <div className="skills_container">
              <SkillSquare shakeDelay={18} flip={flip} id={6} icon="Postgresql" backIcons={["Back End", "Database"]} flipped={flippedArray[6]} />
              <SkillSquare shakeDelay={42} flip={flip} id={7} icon="Jest" backIcons={["Testing"]} flipped={flippedArray[7]} />
              <SkillSquare shakeDelay={26} flip={flip} id={8} icon="Amazonaws" backIcons={["Cloud", "Database"]} flipped={flippedArray[8]} />
            </div>
          </div>
          <ScrollDown nextPage="Projects" />
        </div>}
    </>
  )
}
