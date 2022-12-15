import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from "@mui/material"
import "../styles/ScrollDown.css"
import getWindowWidth from "../getWindowWidth"
import { motion, AnimatePresence } from "framer-motion"

interface scrollProps {
  nextPage: string
}

export const ScrollDown = (props: scrollProps) => {

  const [windowWidth, setWindowWidth] = React.useState(getWindowWidth())

  React.useEffect(() => {
    function windowResized() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener('resize', windowResized);
    return () => window.removeEventListener('resize', windowResized);
  }, [])

  return (
    <AnimatePresence initial={false}>
      <div className="down_arrow_container">
        {windowWidth > 640 ? <IconButton href={`#${props.nextPage}`} sx={{ color: "white", height: "3.5vw", width: "3.5vw" }}>
          <ExpandMoreIcon sx={{ color: "white", height: "3.5vw", width: "3.5vw" }} />
        </IconButton>
          :
          <IconButton href={`#${props.nextPage}`} sx={{ color: "white", height: "13vw", width: "13vw" }}>
            <ExpandMoreIcon sx={{ color: "white", height: "13vw", width: "13vw" }} />
          </IconButton>}
      </div>
    </AnimatePresence>
  )
}
