import { IntroTextWrapper } from "./IntroTextWrapper"
import { Socials } from "./Socials"
import "../styles/Intro.css"
import { ScrollDown } from './ScrollDown'

export const Intro = () => {
  return (
    <div id="Home" style={{ scrollSnapAlign: "start", flexShrink: "0", height: "110vh", paddingTop: "11vh" }}>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div className="picture_wrapper">
        </div>
        <IntroTextWrapper />
        <Socials />
        <ScrollDown nextPage={"Skills"} />
      </div>
    </div>
  )
}
