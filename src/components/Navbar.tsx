import React from 'react'
import {Typography } from "@mui/material"
import CodeIcon from '@mui/icons-material/Code';
import "../styles/Nav.css"

interface NavProps {
    selectedPage?: string
}

export const Navbar = (props: NavProps) => {

    return (
        <div className="nav_wrapper">
            <div className="nav_logo_container">
                <CodeIcon sx={{ color: "#AEE728", fontSize: "4vw" }} />
                <Typography sx={{ color: "white", fontSize: "4vw", fontWeight: "700", "&:hover": { cursor: "default" } }} variant="h1">Chris</Typography>
            </div>
            <Typography sx={{ color: "#AEE728", fontSize: "4vw", fontWeight: "700", marginBottom: "-.5vw", "&:hover": { cursor: "default" }, marginRight: "56vw" }} variant="h1">.</Typography>
            <div className="nav_buttons_container">

                <a href="#Home" className="nav_button_container">
                    <Typography variant="h3" sx={{ fontSize: "1.5vw", fontWeight: "700" }}>Home</Typography>
                    <Typography variant="h3" sx={{ color: "#AEE728", fontSize: "2.3vw", marginBottom: ".55vw", fontWeight: "700" }}>.</Typography>
                </a>

                <a href="#Skills" className="nav_button_container">
                    <Typography variant="h3" sx={{ fontSize: "1.5vw", fontWeight: "700" }}>Skills</Typography>
                    <Typography variant="h3" sx={{ color: "#AEE728", fontSize: "2.3vw", marginBottom: ".55vw", fontWeight: "700" }}>.</Typography>
                </a>

                <a href="#Projects" className="nav_button_container">
                    <Typography variant="h3" sx={{ fontSize: "1.5vw", fontWeight: "700" }}>Projects</Typography>
                    <Typography variant="h3" sx={{ color: "#AEE728", fontSize: "2.3vw", marginBottom: ".55vw", fontWeight: "700" }}>.</Typography>
                </a>

                <a href="#Contact" className="nav_button_container">
                    <Typography variant="h3" sx={{ fontSize: "1.5vw", fontWeight: "700" }}>Contact</Typography>
                    <Typography variant="h3" sx={{ color: "#AEE728", fontSize: "2.3vw", marginBottom: ".55vw", fontWeight: "700" }}>.</Typography>
                </a>
                
            </div>
        </div>
    )
}
