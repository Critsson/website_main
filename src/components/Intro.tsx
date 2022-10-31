import React from 'react'
import {Stack} from "@mui/material"
import { IntroTextWrapper } from "./IntroTextWrapper"
import { Socials } from "./Socials"
import "../styles/Intro.css"
import { ScrollDown } from './ScrollDown'

export const Intro = () => {
  return (
    <Stack id="Home" direction="column" alignItems="center" justifyContent="center" height="100%" flexShrink={0} sx={{scrollSnapAlign: "start"}}>
        <div className="picture_wrapper" style={{marginTop: "4vw"}}>
        </div>
        <IntroTextWrapper />
        <Socials />
        <ScrollDown nextPage={"Skills"} />
    </Stack>
  )
}
