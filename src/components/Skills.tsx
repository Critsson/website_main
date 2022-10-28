import React from 'react'
import { ScrollUp } from "./ScrollUp"
import { ScrollDown } from './ScrollDown'
import "../styles/Skills.css"
import { SkillSquare } from './SkillSquare'

export const Skills = () => {

  const [squareCounter, setSquareCounter] = React.useState<number>(0)
  const [flippedArray, setFlippedArray] = React.useState<boolean[]>([false, false, false, false, false, false, false, false, false])

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

  React.useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 9)
    if(flippedArray[randomNumber] === false) {
      if (randomNumber !== squareCounter) {
        setTimeout(() => setSquareCounter(randomNumber), 8000)
      } else if (randomNumber === squareCounter && randomNumber > 0) {
        setTimeout(() => setSquareCounter(randomNumber - 1), 8000)
      } else if (randomNumber === squareCounter && randomNumber < 8) {
        setTimeout(() => setSquareCounter(randomNumber + 1), 8000)
      }
    } else {
      for(let i = 0; i<flippedArray.length; i++) {
        if(flippedArray[i] === false) {
          setTimeout(() => setSquareCounter(i), 8000)
        } else {
          continue;
        }
       }
    }


  }, [squareCounter])

  return (
    <div id="Skills" style={{ height: "110vh", flexShrink: "0", scrollSnapAlign: "start", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "2.5vh" }}>
      <ScrollUp lastPage="Home" />
      <div className="skills_main_container">
        <div className="skills_title_container">
          <h1>What I Work With</h1>
          <h1 className="skills_title_period">.</h1>
        </div>
        <div className="skills_container">
          <SkillSquare flip={flip} id={0} squareCounter={squareCounter} icon="Javascript" backIcons={["Back End", "Front End"]} flipped={flippedArray[0]} />
          <SkillSquare flip={flip} id={1} squareCounter={squareCounter} icon="React" backIcons={["Front End"]} flipped={flippedArray[1]} />
          <SkillSquare flip={flip} id={2} squareCounter={squareCounter} icon="Nextdotjs" backIcons={["Back End", "Front End"]} flipped={flippedArray[2]} />
        </div>
        <div className="skills_container">
          <SkillSquare flip={flip} id={3} squareCounter={squareCounter} icon="Nodedotjs" backIcons={["Back End"]} flipped={flippedArray[3]} />
          <SkillSquare flip={flip} id={4} squareCounter={squareCounter} icon="Express" backIcons={["Back End"]} flipped={flippedArray[4]} />
          <SkillSquare flip={flip} id={5} squareCounter={squareCounter} icon="Typescript" backIcons={["Back End", "Front End"]} flipped={flippedArray[5]} />
        </div>
        <div className="skills_container">
          <SkillSquare flip={flip} id={6} squareCounter={squareCounter} icon="Postgresql" backIcons={["Back End", "Database"]} flipped={flippedArray[6]} />
          <SkillSquare flip={flip} id={7} squareCounter={squareCounter} icon="Jest" backIcons={["Testing"]} flipped={flippedArray[7]} />
          <SkillSquare flip={flip} id={8} squareCounter={squareCounter} icon="Amazonaws" backIcons={["Cloud", "Database"]} flipped={flippedArray[8]} />
        </div>
      </div>
      <ScrollDown nextPage="Projects" />
    </div>
  )
}
