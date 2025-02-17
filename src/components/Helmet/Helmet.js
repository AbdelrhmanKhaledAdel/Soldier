import React, { useState, useEffect } from "react";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Helmet = (props) => {
    document.title = "Soldier - " + props.title;

    // Scroll
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.onscroll = function () {
            setScroll(window.scrollY >= 600 ? true : false)
        }
    },[])
    const handleUpClick = () => {
        window.scrollTo({
            left:0,
            top: 0,
            behavior: "smooth",
        })
    }
    return(
        <div className="w-100">
            {props.children}
            <span className={`arrow_up ${scroll === true ? "active" : ""}`} onClick={handleUpClick}><KeyboardArrowUpOutlinedIcon /></span>
        </div>
    )
}

export default Helmet