import React from 'react'
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material"
import "../styles/ProjectTile.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface ProjectTileProps {
    height? : string,
    style?: string,
    icons?: string[]
}

export const ProjectTile = () => {
  return (
    <div className="project_main_container">
        <h1 style={{color: "#18191F", fontSize: "1vw", fontFamily: "Roboto", paddingLeft: ".7vw"}}>This is test text</h1>
        <Accordion square={true} sx={{backgroundColor: "transparent", borderRadius: "0%", fontFamily: "Roboto", color: "#18191F", width: "100%", fontWeight: "700"}}>
            <AccordionSummary expandIcon={<ArrowDropDownIcon sx={{color: "#18191F"}} />}>Read more</AccordionSummary>
            <AccordionDetails>This is more of the test</AccordionDetails>
        </Accordion>
    </div>
  )
}
