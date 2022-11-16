import React from 'react'
import "../styles/ProjectTile.css"
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiExpress, SiNodedotjs, SiJest, SiPostgresql, SiAmazonaws, SiHtml5, SiCss3, SiNetlify, SiMaterialui, SiRiotgames } from "react-icons/si"
import { motion, AnimatePresence } from "framer-motion"
import { Button, Tooltip } from "@mui/material"
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Zoom from "@mui/material/Zoom"
import { TbApi } from "react-icons/tb"
import { BsCloudSun } from "react-icons/bs"
import getWindowWidth from '../getWindowWidth'

interface ProjectTileProps {
  id: number
  icons: string[],
  thumbnail: string,
  link: string,
  hovered: boolean,
  handleOnHover: (id: number) => void,
  handleOffHover: (id: number) => void,
  title: string
}

export const ProjectTile = ({ id, icons, thumbnail, link, hovered, handleOnHover, handleOffHover, title }: ProjectTileProps) => {

  const [windowWidth, setWindowWidth] = React.useState(getWindowWidth())

  React.useEffect(() => {
    function windowResized() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener('resize', windowResized);
    return () => window.removeEventListener('resize', windowResized);
  }, [])

  let iconElementsArray;

  if (windowWidth > 640) {
    iconElementsArray = icons.map((icon) => {
      if (icon === "SiJavascript") {
        return <Tooltip TransitionComponent={Zoom} arrow title="Javascript">
          <div className="project_tile_icon">
            <SiJavascript style={{ color: "white", height: "2vw", width: "2vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "SiTypescript") {
        return <Tooltip TransitionComponent={Zoom} arrow title="Typescript">
          <div className="project_tile_icon">
            <SiTypescript style={{ color: "white", height: "2vw", width: "2vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "SiReact") {
        return <Tooltip TransitionComponent={Zoom} arrow title="React">
          <div className="project_tile_icon">
            <SiReact style={{ color: "white", height: "2vw", width: "2vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "SiNextdotjs") {
        return <Tooltip TransitionComponent={Zoom} arrow title="Next JS">
          <div className="project_tile_icon">
            <SiNextdotjs style={{ color: "white", height: "2vw", width: "2vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "SiExpress") {
        return <Tooltip TransitionComponent={Zoom} arrow title="Express">
          <div className="project_tile_icon">
            <SiExpress style={{ color: "white", height: "2vw", width: "2vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "SiNodedotjs") {
        return <Tooltip TransitionComponent={Zoom} arrow title="Node">
          <div className="project_tile_icon">
            <SiNodedotjs style={{ color: "white", height: "2vw", width: "2vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "SiJest") {
        return <Tooltip TransitionComponent={Zoom} arrow title="Jest">
          <div className="project_tile_icon">
            <SiJest style={{ color: "white", height: "2vw", width: "2vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "SiPostgresql") {
        return <Tooltip TransitionComponent={Zoom} arrow title="PostgreSQL">
          <div className="project_tile_icon">
            <SiPostgresql style={{ color: "white", height: "2vw", width: "2vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "SiAmazonaws") {
        return <Tooltip TransitionComponent={Zoom} arrow title="Amazon AWS">
          <div className="project_tile_icon">
            <SiAmazonaws style={{ color: "white", height: "2vw", width: "2vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "SiHtml5") {
        return <Tooltip TransitionComponent={Zoom} arrow title="HTML">
          <div className="project_tile_icon">
            <SiHtml5 style={{ color: "white", height: "2vw", width: "2vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "SiCss3") {
        return <Tooltip TransitionComponent={Zoom} arrow title="CSS">
          <div className="project_tile_icon">
            <SiCss3 style={{ color: "white", height: "2vw", width: "2vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "SiNetlify") {
        return <Tooltip TransitionComponent={Zoom} arrow title="Netlify CMS">
          <div className="project_tile_icon">
            <SiNetlify style={{ color: "white", height: "2vw", width: "2vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "SiMaterialui") {
        return <Tooltip TransitionComponent={Zoom} arrow title="Material UI">
          <div className="project_tile_icon">
            <SiMaterialui style={{ color: "white", height: "2vw", width: "2vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "SiRiotgames") {
        return <Tooltip TransitionComponent={Zoom} arrow title="Riot API">
          <div className="project_tile_icon">
            <SiRiotgames style={{ color: "white", height: "2vw", width: "2vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "DictionaryAPI") {
        return <Tooltip TransitionComponent={Zoom} arrow title="Free Dictionary API">
          <div className="project_tile_icon">
            <TbApi style={{ color: "white", height: "2vw", width: "2vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "BsCloudSun") {
        return <Tooltip TransitionComponent={Zoom} arrow title="Open-Meteo API">
          <div className="project_tile_icon">
            <BsCloudSun style={{ color: "white", height: "2vw", width: "2vw" }} />
          </div>
        </Tooltip>
      } else {
        return <></>
      }
    })

  } else {
    iconElementsArray = icons.map((icon) => {
      if (icon === "SiJavascript") {
        return <Tooltip TransitionComponent={Zoom} arrow title="Javascript">
          <div className="project_tile_icon">
            <SiJavascript style={{ color: "white", height: "3.8vw", width: "3.8vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "SiTypescript") {
        return <Tooltip TransitionComponent={Zoom} arrow title="Typescript">
          <div className="project_tile_icon">
            <SiTypescript style={{ color: "white", height: "3.8vw", width: "3.8vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "SiReact") {
        return <Tooltip TransitionComponent={Zoom} arrow title="React">
          <div className="project_tile_icon">
            <SiReact style={{ color: "white", height: "3.8vw", width: "3.8vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "SiNextdotjs") {
        return <Tooltip TransitionComponent={Zoom} arrow title="Next JS">
          <div className="project_tile_icon">
            <SiNextdotjs style={{ color: "white", height: "3.8vw", width: "3.8vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "SiExpress") {
        return <Tooltip TransitionComponent={Zoom} arrow title="Express">
          <div className="project_tile_icon">
            <SiExpress style={{ color: "white", height: "3.8vw", width: "3.8vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "SiNodedotjs") {
        return <Tooltip TransitionComponent={Zoom} arrow title="Node">
          <div className="project_tile_icon">
            <SiNodedotjs style={{ color: "white", height: "3.8vw", width: "3.8vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "SiJest") {
        return <Tooltip TransitionComponent={Zoom} arrow title="Jest">
          <div className="project_tile_icon">
            <SiJest style={{ color: "white", height: "3.8vw", width: "3.8vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "SiPostgresql") {
        return <Tooltip TransitionComponent={Zoom} arrow title="PostgreSQL">
          <div className="project_tile_icon">
            <SiPostgresql style={{ color: "white", height: "3.8vw", width: "3.8vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "SiAmazonaws") {
        return <Tooltip TransitionComponent={Zoom} arrow title="Amazon AWS">
          <div className="project_tile_icon">
            <SiAmazonaws style={{ color: "white", height: "3.8vw", width: "3.8vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "SiHtml5") {
        return <Tooltip TransitionComponent={Zoom} arrow title="HTML">
          <div className="project_tile_icon">
            <SiHtml5 style={{ color: "white", height: "3.8vw", width: "3.8vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "SiCss3") {
        return <Tooltip TransitionComponent={Zoom} arrow title="CSS">
          <div className="project_tile_icon">
            <SiCss3 style={{ color: "white", height: "3.8vw", width: "3.8vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "SiNetlify") {
        return <Tooltip TransitionComponent={Zoom} arrow title="Netlify CMS">
          <div className="project_tile_icon">
            <SiNetlify style={{ color: "white", height: "3.8vw", width: "3.8vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "SiMaterialui") {
        return <Tooltip TransitionComponent={Zoom} arrow title="Material UI">
          <div className="project_tile_icon">
            <SiMaterialui style={{ color: "white", height: "3.8vw", width: "3.8vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "SiRiotgames") {
        return <Tooltip TransitionComponent={Zoom} arrow title="Riot API">
          <div className="project_tile_icon">
            <SiRiotgames style={{ color: "white", height: "3.8vw", width: "3.8vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "DictionaryAPI") {
        return <Tooltip TransitionComponent={Zoom} arrow title="Free Dictionary API">
          <div className="project_tile_icon">
            <TbApi style={{ color: "white", height: "3.8vw", width: "3.8vw" }} />
          </div>
        </Tooltip>
      } else if (icon === "BsCloudSun") {
        return <Tooltip TransitionComponent={Zoom} arrow title="Open-Meteo API">
          <div className="project_tile_icon">
            <BsCloudSun style={{ color: "white", height: "3.8vw", width: "3.8vw" }} />
          </div>
        </Tooltip>
      } else {
        return <></>
      }
    })
  }


  return (
    <>
      {hovered === false ?
        <motion.div onMouseEnter={() => handleOnHover(id)} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: .2 } }} viewport={{ once: true }} className="project_main_container" style={{ backgroundImage: `url(/${thumbnail})` }}>
        </motion.div>
        :
        <motion.div onMouseLeave={() => handleOffHover(id)} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: .2 } }} viewport={{ once: true }} className="project_main_container" style={{ backgroundImage: `url(/${thumbnail})` }}>
          <AnimatePresence>
            <motion.div className="project_tile_hover_container" key={id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .5 }} style={{ height: "100%", width: "100%" }}>
              <motion.div style={{ display: "flex", marginTop: "-.7vw" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }}>
                <h2 className="project_tile_hover_title">{title}</h2>
                <h2 className="project_tile_hover_period">.</h2>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }} className="project_tile_icon_container">
                {iconElementsArray}
              </motion.div>

              {windowWidth > 640 ?
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }}><Button target="_blank" href={link} sx={{ display: "flex", alignItems: "center", fontSize: "1vw", width: "5vw", height: "2vw", color: "white" }} variant="text" endIcon={<MeetingRoomIcon sx={{ width: "1.3vw", height: "1.3vw", marginBottom: ".1vw" }} />}>Visit</Button></motion.div>
                :
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }}><Button target="_blank" href={link} sx={{ display: "flex", alignItems: "center", fontSize: "2.5vw", width: "5vw", height: "2vw", color: "white"}} variant="text" endIcon={<MeetingRoomIcon sx={{ width: "3vw", height: "3vw", marginBottom: ".1vw", marginLeft: "-1.5vw" }} />}>Visit</Button></motion.div>}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      }
    </>
  )
}
