import React from 'react'
import "../styles/NewIntroTextWrapper.css"
import { IconButton } from "@mui/material"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { NewIntroText } from './NewIntroText';
import getWindowWidth from "../getWindowWidth"

export const NewIntroTextWrapper = () => {

    const [slide, setSlide] = React.useState(0)
    const [direction, setDirection] = React.useState("")
    const [windowWidth, setWindowWidth] = React.useState(getWindowWidth())

    React.useEffect(() => {
        function windowResized() {
            setWindowWidth(getWindowWidth());
        }

        window.addEventListener('resize', windowResized);
        return () => window.removeEventListener('resize', windowResized);
    }, [])

    const handleSlideIncrease = () => {
        if (slide < 4) {
            setDirection("right")
            setSlide(slide + 1)
        } else {
            setDirection("right")
            setSlide(0)
        }
    }

    const handleSlideDecrease = () => {
        if (slide > 0) {
            setDirection("left")
            setSlide(slide - 1)
        } else {
            setDirection("left")
            setSlide(4)
        }
    }

    return (
        <div className="intro_text_wrapper">
            <div className="intro_text_wrapper_main_container">
                {windowWidth > 640 ? <IconButton onClick={() => handleSlideDecrease()} sx={{ color: "white", height: "2.5vw", width: "2.5vw" }}>
                    <KeyboardArrowLeftIcon sx={{ color: "white", width: "2.5vw", height: "2.5vw" }} />
                </IconButton>
                    :
                    <IconButton onClick={() => handleSlideDecrease()} sx={{ color: "white", height: "8vw", width: "8vw" }}>
                        <KeyboardArrowLeftIcon sx={{ color: "white", width: "8vw", height: "8vw" }} />
                    </IconButton>}
                <NewIntroText id={slide} direction={direction} />
                {windowWidth > 640 ? <IconButton onClick={() => handleSlideIncrease()} sx={{ color: "white", height: "2.5vw", width: "2.5vw" }}>
                    <KeyboardArrowRightIcon sx={{ color: "white", width: "2.5vw", height: "2.5vw" }} />
                </IconButton>
                    :
                    <IconButton onClick={() => handleSlideIncrease()} sx={{ color: "white", height: "8vw", width: "8vw" }}>
                        <KeyboardArrowRightIcon sx={{ color: "white", width: "8vw", height: "8vw" }} />
                    </IconButton>}
            </div>
            <div className="new_elipse_wrapper">
                {slide === 0 ? <div className="new_elipse_selected"></div> : <div className="new_elipse"></div>}
                {slide === 1 ? <div className="new_elipse_selected"></div> : <div className="new_elipse"></div>}
                {slide === 2 ? <div className="new_elipse_selected"></div> : <div className="new_elipse"></div>}
                {slide === 3 ? <div className="new_elipse_selected"></div> : <div className="new_elipse"></div>}
                {slide === 4 ? <div className="new_elipse_selected"></div> : <div className="new_elipse"></div>}
            </div>
        </div>
    )
}
