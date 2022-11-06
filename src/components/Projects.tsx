import React from 'react'
import { ScrollDown } from './ScrollDown'
import { ScrollUp } from './ScrollUp'
import { motion } from "framer-motion"
import { Grid } from '@mui/material'
import { ProjectTile } from './ProjectTile'
import "../styles/Projects.css"


export const Projects = () => {
  return (
    <div style={{ height: "100vh", flexShrink: "0", scrollSnapAlign: "start", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "2vh" }} id="Projects">
      <ScrollUp lastPage="Skills" />
      <div className="projects_main_container">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: .15 } }} className="projects_title_container">
          <h1>What I've Created</h1>
          <h1 className="projects_title_period">.</h1>
        </motion.div>
        <div className="projects_flex_container">
          <div className="projects_row_container">
            <div style={{ height: "20vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <ProjectTile
                id={0}
                icons={["SiReact", "SiNextdotjs", "SiHtml5", "SiCss3", "SiJavascript"]}
                thumbnail="thumbnails/climbgg_thumbnail.JPG"
                link="https://climbgg.netlify.app/"
              />
            </div>
            <div style={{ height: "20vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <ProjectTile
                id={1}
                icons={["SiReact", "SiNextdotjs", "SiHtml5", "SiCss3", "SiJavascript", "SiNetlify"]}
                thumbnail="thumbnails/glorious_diaries_thumbnail.JPG"
                link="https://gloriousdiaries.netlify.app/"
              />
            </div>
            <div style={{ height: "20vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <ProjectTile
                id={2}
                icons={["SiReact", "SiHtml5", "SiCss3", "SiTypescript", "SiMaterialui"]}
                thumbnail="thumbnails/personal_website_thumbnail.JPG"
                link="https://chrisgao.netlify.app/"
              />
            </div>
          </div>
          <div className="projects_row_container">
            <div style={{ height: "20vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <ProjectTile
                id={3}
                icons={["SiReact", "SiHtml5", "SiCss3", "SiTJavascript, SiMaterialui"]}
                thumbnail="thumbnails/dictionary_thumbnail.JPG"
                link="https://chrisdictionary.netlify.app/"
              />
            </div>
            <div style={{ height: "20vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <ProjectTile
                id={4}
                icons={["SiReact", "SiNextdotjs", "SiHtml5", "SiCss3", "SiJavascript"]}
                thumbnail="thumbnails/climbgg_thumbnail.JPG"
                link="https://climbgg.netlify.app/"
              />
            </div>
            <div style={{ height: "20vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <ProjectTile
                id={5}
                icons={["SiReact", "SiNextdotjs", "SiHtml5", "SiCss3", "SiJavascript"]}
                thumbnail="thumbnails/climbgg_thumbnail.JPG"
                link="https://climbgg.netlify.app/"
              />
            </div>
          </div>
          <div className="projects_row_container">
            <div style={{ height: "20vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <ProjectTile
                id={6}
                icons={["SiReact", "SiNextdotjs", "SiHtml5", "SiCss3", "SiJavascript"]}
                thumbnail="thumbnails/climbgg_thumbnail.JPG"
                link="https://climbgg.netlify.app/"
              />
            </div>
          </div>
        </div>
      </div>
      <ScrollDown nextPage="Contact" />
    </div>
  )
}
