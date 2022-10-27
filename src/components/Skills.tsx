import React from 'react'
import { ScrollUp } from "./ScrollUp"
import { ScrollDown } from './ScrollDown'
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiExpress, SiNodedotjs, SiJest, SiTestinglibrary, SiAmazonaws } from "react-icons/si"
import "../styles/Skills.css"
import { motion } from "framer-motion"

export const Skills = () => {

  const [squareCounter, setSquareCounter] = React.useState<number>(0)
  const [openedModal, setOpenedModal] = React.useState<boolean>(false)

  React.useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 9)
    if (randomNumber !== squareCounter) {
      setTimeout(() => setSquareCounter(randomNumber), 8000)
    } else if (randomNumber === squareCounter && randomNumber > 0) {
      setTimeout(() => setSquareCounter(randomNumber - 1), 8000)
    } else if (randomNumber === squareCounter && randomNumber < 8) {
      setTimeout(() => setSquareCounter(randomNumber + 1), 8000)
    }

  }, [squareCounter])

  return (
    <div id="Skills" style={{ height: "110vh", flexShrink: "0", scrollSnapAlign: "start", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "2.5vh" }}>
      {openedModal ? <div className="modal_container">
          <button onClick={() => setOpenedModal(false)}>Delete</button>
      </div>
        :
        <></>}
      <ScrollUp lastPage="Home" />
      <div className="skills_main_container">
        <div className="skills_title_container">
          <h1>What I Work With</h1>
          <h1 className="skills_title_period">.</h1>
        </div>
        <div className="skills_container">
          {squareCounter === 0 ? <motion.div whileTap = {{scale: 0.90}} className="skill_square_shake">
            {<SiJavascript style={{ width: "4vw", height: "4vw", borderRadius: "4%", color: "#18191F" }} />}
          </motion.div>
            :
            <motion.div whileTap = {{scale: 0.90}} className="skill_square">
              {<SiJavascript style={{ width: "4vw", height: "4vw", borderRadius: "4%", color: "#18191F" }} />}
            </motion.div>}
          {squareCounter === 1 ? <motion.div whileTap = {{scale: 0.90}} className="skill_square_shake">
            <SiReact style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
          </motion.div>
            :
            <motion.div whileTap = {{scale: 0.90}} className="skill_square">
              <SiReact style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
            </motion.div>}
          {squareCounter === 2 ? <motion.div whileTap = {{scale: 0.90}} className="skill_square_shake">
            <SiNextdotjs style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
          </motion.div>
            :
            <motion.div whileTap = {{scale: 0.90}} className="skill_square">
              <SiNextdotjs style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
            </motion.div>}
        </div>
        <div className="skills_container">
          {squareCounter === 3 ? <motion.div whileTap = {{scale: 0.90}} className="skill_square_shake">
            <SiNodedotjs style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
          </motion.div>
            :
            <motion.div whileTap = {{scale: 0.90}} className="skill_square">
              <SiNodedotjs style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
            </motion.div>}
          {squareCounter === 4 ? <motion.div whileTap = {{scale: 0.90}} className="skill_square_shake">
            <SiExpress style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
          </motion.div>
            :
            <motion.div whileTap = {{scale: 0.90}} className="skill_square">
              <SiExpress style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
            </motion.div>}
          {squareCounter === 5 ? <motion.div whileTap = {{scale: 0.90}} className="skill_square_shake">
            <SiTypescript style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
          </motion.div>
            :
            <motion.div whileTap = {{scale: 0.90}} className="skill_square">
              <SiTypescript style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
            </motion.div>}
        </div>
        <div className="skills_container">
          {squareCounter === 6 ? <motion.div whileTap = {{scale: 0.90}} className="skill_square_shake">
            <SiJest style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
          </motion.div>
            :
            <motion.div whileTap = {{scale: 0.90}} className="skill_square">
              <SiJest style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
            </motion.div>}
          {squareCounter === 7 ? <motion.div whileTap = {{scale: 0.90}} className="skill_square_shake">
            <SiTestinglibrary style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
          </motion.div>
            :
            <motion.div whileTap = {{scale: 0.90}} className="skill_square">
              <SiTestinglibrary style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
            </motion.div>}
          {squareCounter === 8 ? <motion.div whileTap = {{scale: 0.90}} className="skill_square_shake">
            <SiAmazonaws style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
          </motion.div>
            :
            <motion.div whileTap = {{scale: 0.90}} className="skill_square">
              <SiAmazonaws style={{ width: "4vw", height: "4vw", color: "#18191F" }} />
            </motion.div>}
        </div>
      </div>
      <ScrollDown nextPage="Projects" />
    </div>
  )
}
