import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiExpress, SiNodedotjs, SiJest, SiPostgresql, SiAmazonaws, SiIcloud } from "react-icons/si"
import { GiTestTubes, GiDatabase } from "react-icons/gi"
import { HiServerStack } from "react-icons/hi2"
import { MdOutlineMonitor } from "react-icons/md"
import { Tooltip } from "@mui/material"
import "../styles/SkillSquare.css"

interface SkillsSquareProps {
    id: number,
    squareCounter: number,
    icon: string,
    flipped: boolean,
    flip: (id: number) => void,
    backIcons: string[]
}

export const SkillSquare = ({ icon, squareCounter, flipped, id, flip, backIcons }: SkillsSquareProps) => {

    let iconElement;
    const backElements = backIcons.map((icon) => {
        if (icon === "Front End") {
            return <Tooltip title="Front End">
                <MdOutlineMonitor style={{ color: "#18191F", width: "2.5vw", height: "2.5vw" }} />
            </Tooltip>
        } else if (icon === "Back End") {
            return <Tooltip title="Back End">
                <HiServerStack style={{ color: "#18191F", width: "1.9vw", height: "1.9vw" }} />
            </Tooltip>
        } else if (icon === "Cloud") {
            return <Tooltip title="Cloud"><SiIcloud style={{ color: "#18191F", width: "2vw", height: "2vw" }} /></Tooltip>
        } else if (icon === "Testing") {
            return <Tooltip title="Testing"><GiTestTubes style={{ color: "#18191F", width: "2vw", height: "2vw" }} /></Tooltip>
        } else if (icon === "Database") {
            return <Tooltip title="Databse"><GiDatabase style={{ color: "#18191F", width: "2vw", height: "2vw" }} /></Tooltip>
        } else {
            return <></>
        }
    })

    if (icon === "Javascript") {
        iconElement = <SiJavascript style={{ width: "4vw", height: "4vw", borderRadius: "4%", color: "#18191F" }} />
    } else if (icon === "Typescript") {
        iconElement = <SiTypescript style={{ width: "4vw", height: "4vw", borderRadius: "4%", color: "#18191F" }} />
    } else if (icon === "React") {
        iconElement = <SiReact style={{ width: "4vw", height: "4vw", borderRadius: "4%", color: "#18191F" }} />
    } else if (icon === "Nextdotjs") {
        iconElement = <SiNextdotjs style={{ width: "4vw", height: "4vw", borderRadius: "4%", color: "#18191F" }} />
    } else if (icon === "Express") {
        iconElement = <SiExpress style={{ width: "4vw", height: "4vw", borderRadius: "4%", color: "#18191F" }} />
    } else if (icon === "Nodedotjs") {
        iconElement = <SiNodedotjs style={{ width: "4vw", height: "4vw", borderRadius: "4%", color: "#18191F" }} />
    } else if (icon === "Jest") {
        iconElement = <SiJest style={{ width: "4vw", height: "4vw", borderRadius: "4%", color: "#18191F" }} />
    } else if (icon === "Postgresql") {
        iconElement = <SiPostgresql style={{ width: "4vw", height: "4vw", borderRadius: "4%", color: "#18191F" }} />
    } else if (icon === "Amazonaws") {
        iconElement = <SiAmazonaws style={{ width: "4vw", height: "4vw", borderRadius: "4%", color: "#18191F" }} />
    } else {
        iconElement = <></>
    }


    return (
        <>
            {!flipped ? <AnimatePresence exitBeforeEnter={true}><motion.div onClick={() => flip(id)} whileTap={{ scale: .8 }} className={squareCounter === id ? "skill_square_shake" : "skill_square"}>
                {iconElement}
            </motion.div>
            </AnimatePresence>
                :
                <AnimatePresence exitBeforeEnter={true}><motion.div onClick={() => flip(id)} animate={{ rotateY: 180 }} whileTap={{ scale: .8 }} className={squareCounter === id ? "skill_square_shake" : "skill_square"}>
                    <div className="back_icons_container">
                        {backElements}
                    </div>
                </motion.div></AnimatePresence>}
        </>
    )
}
