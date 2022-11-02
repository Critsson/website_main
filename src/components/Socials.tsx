import React from 'react'
import { Stack } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Tooltip } from "@mui/material"
import Zoom from '@mui/material/Zoom';
import getWindowWidth from '../getWindowWidth';


export const Socials = () => {

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
            {windowWidth > 640 ? <Stack direction="row" spacing=".5vw" alignItems="center" marginBottom="1.5vw">
                <Tooltip title="Facebook" TransitionComponent={Zoom} placement="left">
                    <a rel="noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100005127705229">
                        <FacebookIcon sx={{ color: "white", width: "3vw", height: "3vw" }} />
                    </a>
                </Tooltip>
                <Tooltip title="Github" TransitionComponent={Zoom} placement="bottom">
                    <a rel="noreferrer" target="_blank" href="https://github.com/Critsson">
                        <GitHubIcon sx={{ color: "#AEE728", width: "2.8vw", height: "2.8vw" }} />
                    </a>
                </Tooltip>
                <Tooltip title="Linkedin" TransitionComponent={Zoom} placement="right">
                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/chris-gao-579a1a233/">
                        <LinkedInIcon sx={{ color: "white", width: "3vw", height: "3vw" }} />
                    </a>
                </Tooltip>
            </Stack>
                :
                <Stack direction="row" spacing="1vw" alignItems="center" marginBottom="1.5vw">
                    <a rel="noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100005127705229">
                        <FacebookIcon sx={{ color: "white", width: "8vw", height: "8vw" }} />
                    </a>
                    <a rel="noreferrer" target="_blank" href="https://github.com/Critsson">
                        <GitHubIcon sx={{ color: "#AEE728", width: "8vw", height: "8vw" }} />
                    </a>
                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/chris-gao-579a1a233/">
                        <LinkedInIcon sx={{ color: "white", width: "8vw", height: "8vw" }} />
                    </a>
                </Stack>}
        </>
    )
}
