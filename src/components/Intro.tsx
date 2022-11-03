import { NewIntroTextWrapper } from "./NewIntroTextWrapper"
import { Socials } from "./Socials"
import "../styles/Intro.css"
import { ScrollDown } from './ScrollDown'
import getWindowWidth from "../getWindowWidth"
import React from "react"

export const Intro = () => {

  const [windowWidth, setWindowWidth] = React.useState(getWindowWidth())

  React.useEffect(() => {
    function windowResized() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener('resize', windowResized);
    return () => window.removeEventListener('resize', windowResized);
  }, [])

  return (
    <>
      {windowWidth > 640 ? <div id="Home" style={{ scrollSnapAlign: "start", flexShrink: "0", height: "100vh", paddingTop: "11vh" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="picture_wrapper">
          </div>
          {/* <IntroTextWrapper /> */}
          <NewIntroTextWrapper />
          <Socials />
          <ScrollDown nextPage={"Skills"} />
        </div>
      </div>
        :
        <div id="Home" style={{ scrollSnapAlign: "start", flexShrink: "0", height: "100vh", paddingTop: "10vh" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div className="picture_wrapper">
            </div>
            {/* <IntroTextWrapper /> */}
            <Socials />
            <ScrollDown nextPage={"Skills"} />
          </div>
        </div>}
    </>
  )
}
