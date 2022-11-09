import React from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { IconButton } from "@mui/material"
import "../styles/ScrollUp.css"
import getWindowWidth from "../getWindowWidth"
import { motion, AnimatePresence } from "framer-motion"

interface scrollProps {
  lastPage: string
}

export const ScrollUp = (props: scrollProps) => {

  const [windowWidth, setWindowWidth] = React.useState(getWindowWidth())

  React.useEffect(() => {
    function windowResized() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener('resize', windowResized);
    return () => window.removeEventListener('resize', windowResized);
  }, [])

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: .2 } }} viewport={{once: true}} className="up_arrow_container up_arrow_container_mobile">
        {windowWidth > 640 ? <IconButton href={`#${props.lastPage}`} sx={{ color: "white", height: "3.5vw", width: "3.5vw", }}>
          <ExpandLessIcon sx={{ color: "white", height: "3.5vw", width: "3.5vw" }} />
        </IconButton>
          :
          <IconButton href={`#${props.lastPage}`} sx={{ color: "white", height: "13vw", width: "13vw" }}>
            <ExpandLessIcon sx={{ color: "white", height: "13vw", width: "13vw" }} />
          </IconButton>}
      </motion.div>
    </AnimatePresence>
  )
}