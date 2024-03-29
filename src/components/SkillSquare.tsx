import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiExpress, SiNodedotjs, SiPostgresql, SiAmazonaws, SiIcloud, SiLinux } from "react-icons/si"
import { GiTestTubes, GiDatabase } from "react-icons/gi"
import { HiServerStack } from "react-icons/hi2"
import { MdOutlineMonitor } from "react-icons/md"
import { Tooltip } from "@mui/material"
import "../styles/SkillSquare.css"
import Zoom from "@mui/material/Zoom"
import getWindowWidth from '../getWindowWidth'

interface SkillsSquareProps {
    id: number,
    icon: string,
    flipped: boolean,
    flip: (id: number) => void,
    backIcons: string[],
    shakeDelay: number
}




export const SkillSquare = ({ icon, flipped, id, flip, backIcons, shakeDelay }: SkillsSquareProps) => {

    const [windowWidth, setWindowWidth] = React.useState(getWindowWidth())

    React.useEffect(() => {
        function windowResized() {
            setWindowWidth(getWindowWidth());
        }

        window.addEventListener('resize', windowResized);
        return () => window.removeEventListener('resize', windowResized);
    }, [])

    const variants = {
        unflipped: { translateX: [6, -12, 12, -12, 6], transition: { delay: shakeDelay, repeat: Infinity, repeatDelay: 74, duration: .4 } },
        flipped: { transition: { delay: 0 } }
    }

    let iconElement;
    const backElements = backIcons.map((icon) => {
        if (icon === "Front End") {
            return <Tooltip TransitionComponent={Zoom} arrow title="Front End">
                <motion.div>
                    <MdOutlineMonitor className="back_icon" />
                </motion.div>
            </Tooltip>
        } else if (icon === "Back End") {
            return <Tooltip TransitionComponent={Zoom} arrow title="Back End">
                <div>
                    <HiServerStack className="back_icon" />
                </div>
            </Tooltip>
        } else if (icon === "Cloud") {
            return <Tooltip TransitionComponent={Zoom} arrow title="Cloud"><div><SiIcloud className="back_icon" /></div></Tooltip>
        } else if (icon === "Testing") {
            return <Tooltip TransitionComponent={Zoom} arrow title="Testing"><div><GiTestTubes className="back_icon" /></div></Tooltip>
        } else if (icon === "Database") {
            return <Tooltip TransitionComponent={Zoom} arrow title="Database"><div><GiDatabase className="back_icon" /></div></Tooltip>
        } else {
            return <></>
        }
    })

    if (windowWidth > 641) {
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
        } else if (icon === "Linux") {
            iconElement = <SiLinux style={{ width: "4vw", height: "4vw", borderRadius: "4%", color: "#18191F" }} />
        } else if (icon === "Postgresql") {
            iconElement = <SiPostgresql style={{ width: "4vw", height: "4vw", borderRadius: "4%", color: "#18191F" }} />
        } else if (icon === "Amazonaws") {
            iconElement = <SiAmazonaws style={{ width: "4vw", height: "4vw", borderRadius: "4%", color: "#18191F" }} />
        } else {
            iconElement = <></>
        }
    } else {
        if (icon === "Javascript") {
            iconElement = <SiJavascript style={{ width: "10vw", height: "10vw", borderRadius: "4%", color: "#18191F" }} />
        } else if (icon === "Typescript") {
            iconElement = <SiTypescript style={{ width: "10vw", height: "10vw", borderRadius: "4%", color: "#18191F" }} />
        } else if (icon === "React") {
            iconElement = <SiReact style={{ width: "10vw", height: "10vw", borderRadius: "4%", color: "#18191F" }} />
        } else if (icon === "Nextdotjs") {
            iconElement = <SiNextdotjs style={{ width: "10vw", height: "10vw", borderRadius: "4%", color: "#18191F" }} />
        } else if (icon === "Express") {
            iconElement = <SiExpress style={{ width: "10vw", height: "10vw", borderRadius: "4%", color: "#18191F" }} />
        } else if (icon === "Nodedotjs") {
            iconElement = <SiNodedotjs style={{ width: "10vw", height: "10vw", borderRadius: "4%", color: "#18191F" }} />
        } else if (icon === "Linux") {
            iconElement = <SiLinux style={{ width: "10vw", height: "10vw", borderRadius: "4%", color: "#18191F" }} />
        } else if (icon === "Postgresql") {
            iconElement = <SiPostgresql style={{ width: "10vw", height: "10vw", borderRadius: "4%", color: "#18191F" }} />
        } else if (icon === "Amazonaws") {
            iconElement = <SiAmazonaws style={{ width: "10vw", height: "10vw", borderRadius: "4%", color: "#18191F" }} />
        } else {
            iconElement = <></>
        }
    }


    return (
        <>
            {!flipped ? <AnimatePresence exitBeforeEnter={true}><motion.div animate={!flipped ? "unflipped" : "flipped"} variants={variants} onClick={() => flip(id)} whileTap={{ scale: .8 }} className="skill_square">
                {iconElement}
            </motion.div>
            </AnimatePresence>
                :
                <AnimatePresence exitBeforeEnter={true}><motion.div onClick={() => flip(id)} animate={{ rotateY: 180 }} whileTap={{ scale: .8 }} className="skill_square">
                    <div className="back_icons_container">
                        {backElements}
                    </div>
                </motion.div></AnimatePresence>}
        </>
    )
}
