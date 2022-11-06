import React from 'react'
import { ScrollDown } from './ScrollDown'
import { ScrollUp } from './ScrollUp'
import { motion } from "framer-motion"
import { ProjectTile } from './ProjectTile'
import "../styles/Projects.css"


export const Projects = () => {

  const [hoveredArray, setHoveredArray] = React.useState([{id: 0, hovered: false}, {id: 1, hovered: false}, {id: 2, hovered: false},{id: 3, hovered: false},{id: 4, hovered: false},{id: 5, hovered: false},{id: 6, hovered: false}])

  const handleOnHover = (id: number) => {
      setHoveredArray((prevState) => {
          const holder = [...prevState]
          holder[id] = {id: id, hovered: true}
          return holder
      })
  }

  const handleOffHover = (id: number) => {
    setHoveredArray((prevState) => {
        const holder = [...prevState]
        holder[id] = {id: id, hovered: false}
        return holder
    })
}

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
                handleOnHover={handleOnHover}
                handleOffHover={handleOffHover}
                id={hoveredArray[0].id}
                icons={["SiReact", "SiNextdotjs", "SiHtml5", "SiCss3", "SiJavascript"]}
                thumbnail="thumbnails/climbgg_thumbnail.JPG"
                link="https://climbgg.netlify.app/"
                hovered={hoveredArray[0].hovered}              
              />
            </div>
            <div style={{ height: "20vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <ProjectTile
                handleOnHover={handleOnHover}
                handleOffHover={handleOffHover}
                id={hoveredArray[1].id}
                icons={["SiReact", "SiNextdotjs", "SiHtml5", "SiCss3", "SiJavascript", "SiNetlify"]}
                thumbnail="thumbnails/glorious_diaries_thumbnail.JPG"
                link="https://gloriousdiaries.netlify.app/"
                hovered={hoveredArray[1].hovered}              
              />
            </div>
            <div style={{ height: "20vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <ProjectTile
                handleOnHover={handleOnHover}
                handleOffHover={handleOffHover}
                id={hoveredArray[2].id}
                icons={["SiReact", "SiHtml5", "SiCss3", "SiTypescript", "SiMaterialui"]}
                thumbnail="thumbnails/personal_website_thumbnail.JPG"
                link="https://chrisgao.netlify.app/"
                hovered={hoveredArray[2].hovered}              
              />
            </div>
          </div>
          <div className="projects_row_container">
            <div style={{ height: "20vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <ProjectTile
                handleOnHover={handleOnHover}
                handleOffHover={handleOffHover}
                id={hoveredArray[3].id}
                icons={["SiReact", "SiHtml5", "SiCss3", "SiTJavascript, SiMaterialui"]}
                thumbnail="thumbnails/dictionary_thumbnail.JPG"
                link="https://chrisdictionary.netlify.app/"
                hovered={hoveredArray[3].hovered}              
              />
            </div>
            <div style={{ height: "20vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <ProjectTile
                handleOnHover={handleOnHover}
                handleOffHover={handleOffHover}
                id={hoveredArray[4].id}
                icons={["SiReact", "SiNextdotjs", "SiHtml5", "SiCss3", "SiJavascript"]}
                thumbnail="thumbnails/climbgg_thumbnail.JPG"
                link="https://climbgg.netlify.app/"
                hovered={hoveredArray[4].hovered}              
              />
            </div>
            <div style={{ height: "20vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <ProjectTile
                handleOnHover={handleOnHover}
                handleOffHover={handleOffHover}
                id={hoveredArray[5].id}
                icons={["SiReact", "SiNextdotjs", "SiHtml5", "SiCss3", "SiJavascript"]}
                thumbnail="thumbnails/climbgg_thumbnail.JPG"
                link="https://climbgg.netlify.app/"
                hovered={hoveredArray[5].hovered}              
              />
            </div>
          </div>
          <div className="projects_row_container">
            <div style={{ height: "20vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <ProjectTile
                handleOnHover={handleOnHover}
                handleOffHover={handleOffHover}
                id={hoveredArray[6].id}
                icons={["SiReact", "SiNextdotjs", "SiHtml5", "SiCss3", "SiJavascript"]}
                thumbnail="thumbnails/climbgg_thumbnail.JPG"
                link="https://climbgg.netlify.app/"
                hovered={hoveredArray[6].hovered}              
              />
            </div>
          </div>
        </div>
      </div>
      <ScrollDown nextPage="Contact" />
    </div>
  )
}
