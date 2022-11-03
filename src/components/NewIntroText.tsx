import React from 'react'
import getWindowWidth from "../getWindowWidth"
import { TypeAnimation } from "react-type-animation"
import "../styles/NewIntroText.css"
import {motion, AnimatePresence} from "framer-motion"

interface IntroTextProps {
    id: number
    direction: string
}

export const NewIntroText = ({ id, direction }: IntroTextProps) => {

    const [windowWidth, setWindowWidth] = React.useState(getWindowWidth())
    const [textElement, setTextElement] = React.useState(<></>)
    
    React.useEffect(() => {
        function windowResized() {
            setWindowWidth(getWindowWidth());
        }

        window.addEventListener('resize', windowResized);
        return () => window.removeEventListener('resize', windowResized);
    }, [])

    React.useEffect(() => {
        if (id === 0) {
            setTextElement(<AnimatePresence initial={false} mode="wait"><motion.div key={id} initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity:0}} transition={{duration: .2}} className="new_main_wrapper">
            <div className="new_first_line_wrapper">
                <h3 className="new_line">Hi! My name is Chris Gao</h3>
                <h3 className="new_line_comma">, and</h3>
            </div>
            <div className="new_sub_wrapper">
                <h3 className="new_line">I'm a</h3>
                {windowWidth > 640 ? <TypeAnimation
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
                    :
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
                        style={{ marginLeft: "1.3vw", fontSize: "5.8vw", fontFamily: "Roboto", color: "#AEE728" }}
                    />}
            </div>
        </motion.div></AnimatePresence>)
        } else if(id === 1) {
            setTextElement(<AnimatePresence mode="wait"><motion.div key={id} initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity:0}} transition={{duration: .2}} className="new_main_wrapper">
                        <div className="new_first_line_wrapper">
                            <h3 className="new_line">I am a recent McGill graduate</h3>
                        </div>
                        <div className="new_sub_wrapper">
                            <h3 className="new_line"> who majored in&nbsp;</h3>
                            <h3 className="new_name">Psychology.</h3>
                        </div>
                    </motion.div></AnimatePresence>)
        } else if(id === 2) {
            setTextElement(<AnimatePresence initial={false} mode="wait"><motion.div key={id} initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity:0}} transition={{duration: .2}} className="new_main_wrapper">
            <div className="new_first_line_wrapper">
                <h3 className="new_line">During my final year however,</h3>
            </div>
            <div className="new_sub_wrapper">
                <h3 className="new_line">I fell in love with</h3>
                <h3 className="new_name"> &nbsp;web dev.</h3>
            </div>
        </motion.div></AnimatePresence>)
        } else if(id === 3) {
            setTextElement(<AnimatePresence initial={false} mode="wait"><motion.div key={id} initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity:0}} transition={{duration: .2}} className="new_main_wrapper">
                        <div className="new_first_line_wrapper">
                            <h3 className="new_line">So, I decided to embark on a</h3>
                        </div>
                        <div className="new_sub_wrapper">
                            <h3 className="new_line"> self-led</h3>
                            <h3 className="new_name" style={{ marginLeft: "1.5vw" }}>coding journey.</h3>
                        </div>
                    </motion.div></AnimatePresence>)
        } else {
            setTextElement(<AnimatePresence initial={false} mode="wait"><motion.div key={id} initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity:0}} transition={{duration: .2}} className="new_main_wrapper">
                        <div className="new_first_line_wrapper">
                            <h3 className="new_line">Thanks for stopping by and</h3>
                        </div>
                        <div className="new_sub_wrapper">
                            <h3 className="new_line">checking out my</h3>
                            <h3 className="new_name"> &nbsp;progress!</h3>
                        </div>
                    </motion.div></AnimatePresence>)
        }
    }, [id, windowWidth])
    

    return (
        <div>
            {textElement}
        </div>
    )
}
