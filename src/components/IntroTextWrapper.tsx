import React from 'react'
import { IntroText } from "./IntroText"
import "../styles/IntroTextWrapper.css"

export const IntroTextWrapper = () => {

    const [page, setPage] = React.useState<number>(0)

    const pageUp = () => {
        if (page < 4) {
            setPage(page + 1)
        } else {
            setPage(0)
        }
    }

    const pageDown = () => {
        if (page > 0) {
            setPage(page - 1)
        } else {
            setPage(4)
        }
    }

    return (
        <div className="intro_text_wrapper_container">
            <div className="wrapper">
                <IntroText page={page} pageUp={pageUp} pageDown={pageDown} />
            </div>
            <div className="elipse_wrapper">
                {page === 0 ? <div className="elipse_selected"></div> : <div className="elipse"></div>}
                {page === 1 ? <div className="elipse_selected"></div> : <div className="elipse"></div>}
                {page === 2 ? <div className="elipse_selected"></div> : <div className="elipse"></div>}
                {page === 3 ? <div className="elipse_selected"></div> : <div className="elipse"></div>}
                {page === 4 ? <div className="elipse_selected"></div> : <div className="elipse"></div>}
            </div>
        </div>
    )
}
