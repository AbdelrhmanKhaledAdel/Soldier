import React from 'react';
import { useState } from 'react';

// Material Icon
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

// Images
import logo_cabelas from "../../assets/all_images/logo-cabelas.png";
import magpul_nav from "../../assets/all_images/magpul-nav.png";
import aac_nav from "../../assets/all_images/nav-aac-logo.png";
import Logo_Leupold from "../../assets/all_images/Leupold-Logo.png";
import logo_ascend from "../../assets/all_images/logo-ascend.png";
import Smith_Wesson from "../../assets/all_images/Smith_Wesson_nav.png";
import Springfield from "../../assets/all_images/Springfield-Nav.png";
import Logo_Redhead from "../../assets/all_images/Redhead-Logo.png";
import Vortex_Reveal_Logo from "../../assets/all_images/Vortex-Reveal-Logo.png";
import vortex_nav from "../../assets/all_images/vortex-nav.png";

// Other
import { v4 as uuidv4 } from "uuid"

const Navigation = ({handleChange}) => {
    const [navigationActive, setNavigationActive] = useState(1)
    const cards = [
        {
            id: 1,
            title: "Platform Model",
            content: <div className="content">
                <p><div><input type="checkbox" id="Dagger Compact" style={{cursor: "pointer"}} /><label for="Dagger Compact">Dagger Compact</label></div><span>(490)</span></p>
                <p><div><input type="checkbox" id="Sabre" style={{cursor: "pointer"}} /><label for="Sabre">Sabre</label></div><span>(285)</span></p>
                <p><div><input type="checkbox" id="Rock Full Size" style={{cursor: "pointer"}} /><label for="Rock Full Size">Rock Full Size</label></div><span>(149)</span></p>
                <p><div><input type="checkbox" id="Dagger Micro" style={{cursor: "pointer"}} /><label for="Dagger Micro">Dagger Micro</label></div><span>(134)</span></p>
                <p><div><input type="checkbox" id="PSAK-47 GF3" style={{cursor: "pointer"}} /><label for="PSAK-47 GF3">PSAK-47 GF3</label></div><span>(103)</span></p>
                <p><div><input type="checkbox" id="AR-PCC Glock" style={{cursor: "pointer"}} /><label for="AR-PCC Glock">AR-PCC Glock</label></div><span>(97)</span></p>
                <p><div><input type="checkbox" id="AK-V" style={{cursor: "pointer"}} /><label for="AK-V">AK-V</label></div><span>(62)</span></p>
                <p><div><input type="checkbox" id="Dagger Full Size - S" style={{cursor: "pointer"}} /><label for="Dagger Full Size - S">Dagger Full Size - S</label></div><span>(50)</span></p>
                <p><div><input type="checkbox" id="AK-P GF3" style={{cursor: "pointer"}} /><label for="AK-P GF3">AK-P GF3</label></div><span>(45)</span></p>
                <p><div><input type="checkbox" id="PSAK-47 GF5" style={{cursor: "pointer"}} /><label for="PSAK-47 GF5">PSAK-47 GF5</label></div><span>(42)</span></p>
            </div>
        },
        {
            id: 2,
            title: "Stock",
            content: <div className="content">
                <p><div><input type="checkbox" id="Show Only In Stock" style={{cursor: "pointer"}} /><label for="Show Only In Stock">Show Only In Stock</label></div><span>(22)</span></p>
            </div>
        },
        {
            id: 3,
            title: "Price",
            content: <div className="content">
                <p></p>
            </div>
        },
    ]
    const brands = [
        {
            id: uuidv4(),
            img: logo_cabelas
        },
        {
            id: uuidv4(),
            img: magpul_nav
        },
        {
            id: uuidv4(),
            img: aac_nav
        },
        {
            id: uuidv4(),
            img: Logo_Leupold
        },
        {
            id: uuidv4(),
            img: logo_ascend
        },
        {
            id: uuidv4(),
            img: Smith_Wesson
        },
        {
            id: uuidv4(),
            img: Springfield
        },
        {
            id: uuidv4(),
            img: Logo_Redhead
        },
        {
            id: uuidv4(),
            img: Vortex_Reveal_Logo
        },
        {
            id: uuidv4(),
            img: vortex_nav
        },
    ]
  
    const handleCloseClick = () => {
        document.querySelector(".weapons_navigation .navigation.open").classList.remove("open")
    }

  return (
    <div className="navigation">
        <div className="close" onClick={handleCloseClick}><HighlightOffIcon /></div>
        <div className="navigation_content">
            <div className="navigation_search">
                <input type="text" placeholder='Enter Your Search' onChange={handleChange} />
                <span><SearchIcon sx={{ cursor: "pointer", position: "absolute", right: "10px", top: "20%"}}/></span>
            </div>
            <div className="navigation_cards">
            {
                cards.map((x) => {
                    return (
                        <div className={`navigation_card ${navigationActive === x.id ? 'active' : ''}`} key={x.id} id={x.id}>
                            <div className="head">
                                <h3>{x.title}</h3>
                                <div className="icon">
                                    <KeyboardArrowDownIcon onClick={() => navigationActive === x.id ? setNavigationActive(0): setNavigationActive(x.id)} className='icon_arrow' />
                                </div>
                            </div>
                            {x.content}
                        </div>
                    )
                })
            }
            </div>
            <div className="navigation_price">

            </div>
            <div className="navigation_brands">
                {
                    brands.map((x) =>
                        <img src={x.img} key={x.id} alt="" />
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Navigation;