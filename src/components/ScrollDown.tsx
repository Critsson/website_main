import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {IconButton} from "@mui/material"
import "../styles/ScrollDown.css"

interface scrollProps {
  nextPage: string
}

export const ScrollDown = (props: scrollProps) => {

  return (
    <div className="down_arrow_container">
        <IconButton href={`#${props.nextPage}`} sx={{ color: "white", height: "3.5vw", width: "3.5vw", }}>
            <ExpandMoreIcon sx={{ color: "white", height: "3.5vw", width: "3.5vw" }}/>
        </IconButton>
    </div>
  )
}
