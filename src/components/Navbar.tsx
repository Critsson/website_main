import React from 'react'
import { Button, Stack, Typography } from "@mui/material"
import CodeIcon from '@mui/icons-material/Code';
import "../styles/Nav.css"

export const Navbar = () => {
    return (
        <div className="nav_wrapper">
            <Stack direction="row" alignItems="center" spacing=".2vw">
                <CodeIcon sx={{ color: "#AEE728", fontSize: "4vw" }} />
                <Typography sx={{ color: "white", fontSize: "4vw", fontWeight: "700", "&:hover": {cursor: "default"} }} variant="h1">Chris</Typography>
            </Stack>
            <Typography sx={{ color: "#AEE728", fontSize: "4vw", fontWeight: "700", marginBottom: "-.2vw", flexGrow: 1, "&:hover": {cursor: "default" }, marginRight: "57vw"}} variant="h1">.</Typography>
            <Stack direction="row" alignItems="center" spacing=".5vw" marginTop="1vw">
                <Button sx={{ color: "white", textTransform: "none" }} href="#Home">
                    <Typography variant="h3" sx={{ fontSize: "1.5vw", fontWeight: "700" }}>Home</Typography>
                    <Typography variant="h3" sx={{ color: "#AEE728", fontSize: "2.3vw", marginBottom: ".55vw", fontWeight: "700" }}>.</Typography>
                </Button>
                <Button sx={{ color: "white", textTransform: "none" }} href="#Skills">
                    <Typography variant="h3" sx={{ fontSize: "1.5vw", fontWeight: "700" }}>Skills</Typography>
                    <Typography variant="h3" sx={{ color: "#AEE728", fontSize: "2.3vw", marginBottom: ".55vw", fontWeight: "700" }}>.</Typography>
                </Button>
                <Button sx={{ color: "white", textTransform: "none" }} href="#Projects">
                    <Typography variant="h3" sx={{ fontSize: "1.5vw", fontWeight: "700" }}>Projects</Typography>
                    <Typography variant="h3" sx={{ color: "#AEE728", fontSize: "2.3vw", marginBottom: ".55vw", fontWeight: "700" }}>.</Typography>
                </Button>
                <Button sx={{ color: "white", textTransform: "none" }}>
                    <Typography variant="h3" sx={{ fontSize: "1.5vw", fontWeight: "700" }}>Contact</Typography>
                    <Typography variant="h3" sx={{ color: "#AEE728", fontSize: "2.3vw", marginBottom: ".55vw", fontWeight: "700" }}>.</Typography>
                </Button>
            </Stack>
        </div>
    )
}
