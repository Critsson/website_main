import React from 'react'
import "../styles/ProjectTile.css"
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiExpress, SiNodedotjs, SiJest, SiPostgresql, SiAmazonaws, SiIcloud, SiHtml5, SiCss3, SiNetlify, SiMaterialui } from "react-icons/si"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@mui/material"
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

interface ProjectTileProps {
  id: number
  icons: string[],
  thumbnail: string,
  link: string,
  hovered: boolean,
  handleOnHover: (id: number) => void,
  handleOffHover: (id: number) => void
}

export const ProjectTile = ({ id, icons, thumbnail, link, hovered, handleOnHover, handleOffHover }: ProjectTileProps) => {
  return (
    <>
      {hovered === false ?
        <motion.div onMouseEnter={() => handleOnHover(id)} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: .15 } }} className="project_main_container" style={{ backgroundImage: `url(/${thumbnail})` }}>
        </motion.div>
        :
        <motion.div onMouseLeave={() => handleOffHover(id)} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: .15 } }} className="project_main_container" style={{ backgroundImage: `url(/${thumbnail})` }}>
          <AnimatePresence>
            <motion.div className="project_tile_hover_container" key={id} initial={{ height: 0 }} animate={{ height: 200 }} exit={{ height: 0 }} transition={{ duration: .5 }} style={{ height: "100%", width: "100%", backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
              <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: .1}}><Button sx={{ display: "flex", alignItems: "center", fontSize: ".8vw", width: "5vw", height: "2vw" }} color="primary" variant="contained" endIcon={<MeetingRoomIcon sx={{ width: "1.1vw", height: "1.1vw", marginBottom: ".1vw" }} />}>Visit</Button></motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      }
    </>
  )
}
