import React from 'react'
import { ScrollDown } from './ScrollDown'
import { ScrollUp } from './ScrollUp'
import { motion } from "framer-motion"
import { Masonry } from '@mui/lab'
import { ProjectTile } from './ProjectTile'
import "../styles/Projects.css"

export const Projects = () => {
  return (
    <div style={{ height: "110vh", flexShrink: "0", scrollSnapAlign: "start", display: "flex", flexDirection: "column", alignItems: "center" }} id="Projects">
      <ScrollUp lastPage="Skills" />
      <div className="projects_main_container">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: .15 } }} className="projects_title_container">
          <h1>What I've Created</h1>
          <h1 className="projects_title_period">.</h1>
        </motion.div>
        <ProjectTile />
      </div>
    </div>
  )
}
