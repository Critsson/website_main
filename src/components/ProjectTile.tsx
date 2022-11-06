import React from 'react'
import "../styles/ProjectTile.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiExpress, SiNodedotjs, SiJest, SiPostgresql, SiAmazonaws, SiIcloud, SiHtml5, SiCss3, SiNetlify, SiMaterialui } from "react-icons/si"
import { motion, AnimatePresence } from "framer-motion"

interface ProjectTileProps {
  id?: number
  icons?: string[],
  thumbnail?: string,
  link?: string,
}

export const ProjectTile = ({ id, icons, thumbnail, link }: ProjectTileProps) => {
  return (
    <a href={link} target="_blank" >
      <AnimatePresence>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: .15 } }} className="project_main_container" style={{ backgroundImage: `url(/${thumbnail})` }}>
        </motion.div>
      </AnimatePresence>
    </a>
  )
}
