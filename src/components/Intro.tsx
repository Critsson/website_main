import React from 'react'
import {Stack} from "@mui/material"
import { IntroTextWrapper } from "./IntroTextWrapper"
import { Socials } from "./Socials"
import "../styles/Intro.css"
import { ScrollDown } from './ScrollDown'

export const Intro = () => {
  return (
    <Stack direction="column" alignItems="center" justifyContent="center" height="90vh" flexShrink={0} sx={{scrollSnapAlign: "start"}}>
        <div className="picture_wrapper">
        </div>
        <IntroTextWrapper />
        <Socials />
        <ScrollDown />
    </Stack>
  )
}
