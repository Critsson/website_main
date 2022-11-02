import React from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {IconButton} from "@mui/material"
import "../styles/ScrollUp.css"
import getWindowWidth from "../getWindowWidth"

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
    <div className="down_arrow_container">
      {windowWidth > 640 ? <IconButton href={`#${props.lastPage}`} sx={{ color: "white", height: "3.5vw", width: "3.5vw", }}>
        <ExpandLessIcon sx={{ color: "white", height: "3.5vw", width: "3.5vw" }} />
      </IconButton>
        :
        <IconButton href={`#${props.lastPage}`} sx={{ color: "white", height: "13vw", width: "13vw" }}>
          <ExpandLessIcon sx={{ color: "white", height: "13vw", width: "13vw" }} />
        </IconButton>}
    </div>
  )
}