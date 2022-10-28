import React from 'react'
import { TypeAnimation } from "react-type-animation"
import "../styles/IntroText.css"
import { IconButton } from "@mui/material"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

interface IntroTextProps {
    page: number,
    pageUp: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void,
    pageDown: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

export const IntroText = (props: IntroTextProps) => {

    const [buttonLeft, setButtonLeft] = React.useState(<IconButton href="#4" onClick={(e) => props.pageDown(e)} sx={{ color: "white", height: "2.5vw", width: "2.5vw" }}>
        <KeyboardArrowLeftIcon sx={{ color: "white", width: "2.5vw", height: "2.5vw" }} />
    </IconButton>)
    const [buttonRight, setButtonRight] = React.useState(<IconButton href="#1" onClick={(e) => props.pageUp(e)} sx={{ color: "white", height: "2.5vw", width: "2.5vw" }}>
        <KeyboardArrowRightIcon sx={{ color: "white", width: "2.5vw", height: "2.5vw" }} />
    </IconButton>)

    React.useEffect(() => {
        if (props.page === 0) {

            setButtonLeft(<IconButton href="#4" onClick={(e) => {props.pageDown(e)}} sx={{ color: "white", height: "2.5vw", width: "2.5vw" }}>
                <KeyboardArrowLeftIcon sx={{ color: "white", width: "2.5vw", height: "2.5vw" }} />
            </IconButton>)

            setButtonRight(<IconButton href="#1" onClick={(e) => props.pageUp(e)} sx={{ color: "white", height: "2.5vw", width: "2.5vw" }}>
                <KeyboardArrowRightIcon sx={{ color: "white", width: "2.5vw", height: "2.5vw" }} />
            </IconButton>)

        } else if (props.page === 1) {
            setButtonLeft(<IconButton href="#0" onClick={(e) => props.pageDown(e)} sx={{ color: "white", height: "2.5vw", width: "2.5vw" }}>
                <KeyboardArrowLeftIcon sx={{ color: "white", width: "2.5vw", height: "2.5vw" }} />
            </IconButton>)

            setButtonRight(<IconButton href="#2" onClick={(e) => props.pageUp(e)} sx={{ color: "white", height: "2.5vw", width: "2.5vw" }}>
                <KeyboardArrowRightIcon sx={{ color: "white", width: "2.5vw", height: "2.5vw" }} />
            </IconButton>)
        } else if (props.page === 2) {
            setButtonLeft(<IconButton href="#1" onClick={(e) => props.pageDown(e)} sx={{ color: "white", height: "2.5vw", width: "2.5vw" }}>
                <KeyboardArrowLeftIcon sx={{ color: "white", width: "2.5vw", height: "2.5vw" }} />
            </IconButton>)

            setButtonRight(<IconButton href="#3" onClick={(e) => props.pageUp(e)} sx={{ color: "white", height: "2.5vw", width: "2.5vw" }}>
                <KeyboardArrowRightIcon sx={{ color: "white", width: "2.5vw", height: "2.5vw" }} />
            </IconButton>)
        } else if (props.page === 3) {
            setButtonLeft(<IconButton href="#2" onClick={(e) => props.pageDown(e)} sx={{ color: "white", height: "2.5vw", width: "2.5vw" }}>
                <KeyboardArrowLeftIcon sx={{ color: "white", width: "2.5vw", height: "2.5vw" }} />
            </IconButton>)

            setButtonRight(<IconButton href="#4" onClick={(e) => props.pageUp(e)} sx={{ color: "white", height: "2.5vw", width: "2.5vw" }}>
                <KeyboardArrowRightIcon sx={{ color: "white", width: "2.5vw", height: "2.5vw" }} />
            </IconButton>)
        } else if (props.page === 4) {
            setButtonLeft(<IconButton href="#3" onClick={(e) => props.pageDown(e)} sx={{ color: "white", height: "2.5vw", width: "2.5vw" }}>
                <KeyboardArrowLeftIcon sx={{ color: "white", width: "2.5vw", height: "2.5vw" }} />
            </IconButton>)

            setButtonRight(<IconButton href="#0" onClick={(e) => props.pageUp(e)} sx={{ color: "white", height: "2.5vw", width: "2.5vw" }}>
                <KeyboardArrowRightIcon sx={{ color: "white", width: "2.5vw", height: "2.5vw" }} />
            </IconButton>)
        }
    }, [props.page])

    return (
        <div className="outside_introtext_container">
            {buttonLeft}
            <div className="slides_container">
                <div id="0" className="main_wrapper">
                    <div className="first_line_wrapper">
                        <h3 className="line">Hi! My name is Chris Gao</h3>
                        <h3 className="line_comma">, and</h3>
                    </div>
                    <div className="sub_wrapper">
                        <h3 className="line">I'm a</h3>
                        <TypeAnimation
                            sequence={[
                                "front-end developer.",
                                1000,
                                "back-end developer.",
                                1000,
                                "learner.",
                                1000
                            ]}
                            wrapper="h3"
                            cursor={true}
                            repeat={Infinity}
                            style={{ marginLeft: ".9vw", fontSize: "2.8vw", fontFamily: "Roboto", color: "#AEE728" }}
                        />
                    </div>
                </div>

                <div id="1" className="main_wrapper">
                    <div className="first_line_wrapper">
                        <h3 className="line">I am a recent McGill graduate</h3>
                    </div>
                    <div className="sub_wrapper">
                        <h3 className="line"> who majored in&nbsp;</h3>
                        <h3 className="name">Psycology.</h3>
                    </div>
                </div>

                <div id="2" className="main_wrapper">
                    <div className="first_line_wrapper">
                        <h3 className="line">During my final year however,</h3>
                    </div>
                    <div className="sub_wrapper">
                        <h3 className="line">I fell in love with</h3>
                        <h3 className="name"> &nbsp;web dev.</h3>
                    </div>
                </div>

                <div id="3" className="main_wrapper">
                    <div className="first_line_wrapper">
                        <h3 className="line">So, I decided to embark on a</h3>
                    </div>
                    <div className="sub_wrapper">
                        <h3 className="line"> self-led</h3>
                        <h3 className="name" style={{ marginLeft: ".7vw" }}>coding journey.</h3>
                    </div>
                </div>

                <div id="4" className="main_wrapper">
                    <div className="first_line_wrapper">
                        <h3 className="line">Thanks for stopping by and</h3>
                    </div>
                    <div className="sub_wrapper">
                        <h3 className="line">checking out my</h3>
                        <h3 className="name"> &nbsp;progress!</h3>
                    </div>
                </div>
            </div>
            {buttonRight}
        </div>
    )
}
