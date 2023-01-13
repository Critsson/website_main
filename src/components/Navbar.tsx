import React from 'react'
import {Typography } from "@mui/material"
import CodeIcon from '@mui/icons-material/Code';
import "../styles/Nav.css"
import getWindowWidth from '../getWindowWidth';

export const Navbar = () => {

    const [windowWidth, setWindowWidth] = React.useState(getWindowWidth())

    React.useEffect(() => {
        function windowResized() {
          setWindowWidth(getWindowWidth());
        }
    
        window.addEventListener('resize', windowResized);
        return () => window.removeEventListener('resize', windowResized);
      }, [])

    return (
        <div className="nav_wrapper_mobile nav_wrapper">
            <div className="nav_logo_container nav_logo_container_mobile">
                <CodeIcon sx={{ color: "#AEE728", fontSize: "4vw" }} />
                <Typography sx={{ color: "white", fontSize: "4vw", fontWeight: "700", "&:hover": { cursor: "default" } }} variant="h1">Chris</Typography>
            </div>
            {windowWidth > 640 && <Typography sx={{ color: "#AEE728", fontSize: "4vw", fontWeight: "700", marginBottom: "-.5vw", "&:hover": { cursor: "default" }, marginRight: "58.3vw" }} variant="h1">.</Typography>}
            <div className="nav_buttons_container nav_buttons_container_mobile">
                <a href="#Home" className="nav_button_container nav_button_container_mobile">
                    {windowWidth > 640 ? <><Typography variant="h3" sx={{ fontSize: "1.5vw", fontWeight: "700" }}>Home</Typography>
                    <Typography variant="h3" sx={{ color: "#AEE728", fontSize: "2.3vw", marginBottom: ".55vw", fontWeight: "700" }}>.</Typography></>
                    : <><Typography variant="h3" sx={{ fontSize: "5vw", fontWeight: "700" }}>Home</Typography>
                    <Typography variant="h3" sx={{ color: "#AEE728", fontSize: "5.8vw", marginBottom: ".1vw", fontWeight: "700" }}>.</Typography></>}
                </a>

                <a href="#Skills" className="nav_button_container nav_button_container_mobile">
                    {windowWidth > 640 ? <><Typography variant="h3" sx={{ fontSize: "1.5vw", fontWeight: "700" }}>Skills</Typography>
                    <Typography variant="h3" sx={{ color: "#AEE728", fontSize: "2.3vw", marginBottom: ".55vw", fontWeight: "700" }}>.</Typography></>
                    : <><Typography variant="h3" sx={{ fontSize: "5vw", fontWeight: "700" }}>Skills</Typography>
                    <Typography variant="h3" sx={{ color: "#AEE728", fontSize: "5.8vw", marginBottom: ".1vw", fontWeight: "700" }}>.</Typography></>}
                </a>

                <a href="#Projects" className="nav_button_container nav_button_container_mobile">
                    {windowWidth > 640 ? <><Typography variant="h3" sx={{ fontSize: "1.5vw", fontWeight: "700" }}>Projects</Typography>
                    <Typography variant="h3" sx={{ color: "#AEE728", fontSize: "2.3vw", marginBottom: ".55vw", fontWeight: "700" }}>.</Typography></>
                    : <><Typography variant="h3" sx={{ fontSize: "5vw", fontWeight: "700" }}>Projects</Typography>
                    <Typography variant="h3" sx={{ color: "#AEE728", fontSize: "5.8vw", marginBottom: ".1vw", fontWeight: "700" }}>.</Typography></>}
                </a>

                <a href="https://drive.google.com/file/d/1taAqiSs-4UkUxwHBCbua9hskp9TDVzbW/view?usp=sharing" target="_blank" rel="noreferrer" className="nav_button_container nav_button_container_mobile">
                    {windowWidth > 640 ? <><Typography variant="h3" sx={{ fontSize: "1.5vw", fontWeight: "700" }}>Resume</Typography>
                    <Typography variant="h3" sx={{ color: "#AEE728", fontSize: "2.3vw", marginBottom: ".55vw", fontWeight: "700" }}>.</Typography></>
                    : <><Typography variant="h3" sx={{ fontSize: "5vw", fontWeight: "700" }}>Resume</Typography>
                    <Typography variant="h3" sx={{ color: "#AEE728", fontSize: "5.8vw", marginBottom: ".1vw", fontWeight: "700" }}>.</Typography></>}
                </a>
                
            </div>
        </div>
    )
}
