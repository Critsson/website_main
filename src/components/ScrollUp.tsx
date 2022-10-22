import React from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {IconButton} from "@mui/material"
import "../styles/ScrollDown.css"

interface scrollProps {
  lastPage: string
}

export const ScrollUp = (props: scrollProps) => {

  return (
    <div className="down_arrow_container">
        <IconButton href={`#${props.lastPage}`} sx={{ color: "white", height: "3.5vw", width: "3.5vw", }}>
            <ExpandLessIcon sx={{ color: "white", height: "3.5vw", width: "3.5vw" }}/>
        </IconButton>
    </div>
  )
}