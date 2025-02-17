import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { useCart } from "react-use-cart"
import { useTranslation } from 'react-i18next';
// import useAuth from "../../Hooks/useAuth"
import { useNavigate } from "react-router-dom";

// Theme
import { useTheme } from "@emotion/react";

// Material
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

// Material Icons
import ShoppingBagSharpIcon from '@mui/icons-material/ShoppingBagSharp';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WidgetsIcon from '@mui/icons-material/Widgets';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CloseIcon from '@mui/icons-material/Close';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

// Images
import logo from "../../assets/all_images/logo.png";
import Palestine from "../../assets/all_images/Palestine_flag.jpg";
import SoldierIcon from "../../assets/all_images/soldier-icon.png"


// Style
import "../../styles/header.css"

// Other
import { v4 as uuidv4 } from "uuid"

const Header = ({setMode}) => {
    const navLinks = [{
        id: uuidv4(),
        path: "/home",
        display: "Home"
    },{
        id: uuidv4(),
        path: "/about",
        display: "About Us"
    },{
        id: uuidv4(),
        path: "/weapons",
        display: "Weapons"
    },{
        id: uuidv4(),
        path: "/news",
        display: "News"
    },
    {
        id: uuidv4(),
        path: "/articles",
        display: "Articles"
    },
    {
        id: uuidv4(),
        path: "/reviews",
        display: "Reviews"
    },
    {
        id: uuidv4(),
        path: "/forums",
        display: "Forums"
    },
    {
        id: uuidv4(),
        path: "/faq",
        display: "FAQ"
    },
    {
        id: uuidv4(),
        path: "/contact",
        display: "Contact Us"
    },
    {
        id: uuidv4(),
        path: "/guide",
        display: "Guide"
    }]


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    
    // Translate
    const [ t, i18n ] = useTranslation();
    const [ locale, setLocale ] = useState("en")
 
    const [age, setAge] = React.useState('');
    
    const handleChange = (event) => {
        setAge(event.target.value);
        selectTranslation(event.target.value)
    };
    function selectTranslation(x) {
        if(x === "") {
            setLocale("en")
            i18n.changeLanguage("en");
            localStorage.setItem("translat", "en")
        }else if(x === 10) {
            setLocale("ar")
            i18n.changeLanguage("ar");
            localStorage.setItem("translat", "ar")
        }else if(x === 20) {
            setLocale("spa")
            i18n.changeLanguage("spa");
            localStorage.setItem("translat", "spa")
        }else if(x === 30) {
            setLocale("rus")
            i18n.changeLanguage("rus");
            localStorage.setItem("translat", "rus")
        }else if(x === 40) {
            setLocale("grc")
            i18n.changeLanguage("grc");
            localStorage.setItem("translat", "grc")
        }
    }


    useEffect(() => {
        i18n.changeLanguage(locale);
    },[])


    
    const handleOpenClick = () => {
        document.querySelector(".header_mobil").classList.add("open")
    }
    const handleCloseClick = () => {
        document.querySelector(".header_mobil.open").classList.remove("open")
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
          let scrollTop = document.documentElement.scrollTop;
          if(scrollTop > 240) {
                document.querySelector(".header_bottom").setAttribute("class", "header_bottom scroll")
          }else {
                document.querySelector(".header_bottom").setAttribute("class", "header_bottom")
          }
        })
      },[])

      
    const theme = useTheme()

    const { items, isEmpty, totalItems, cartTotal, removeItem, emptyCart } = useCart();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    // const {user, logOut} = useAuth();
    // console.log(user);
    const navigate = useNavigate()
    return(
        <header className="header">
            {/* ============== Header Top =============== */}
            <div className="header_top">
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="6">
                            <div className="header_top_left" style={{display: "flex", gap: "8px", height: "100%", alignItems: "center"}}>
                                <span className="need">Need Help:</span>
                                <span className="phone_Number"><PhoneInTalkIcon sx={{fontSize: "18px"}} />01047542543</span>
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="6" style={{display: "flex", gap: "15px", justifyContent: "end"}}>
                            <div className="no_account" style={{display: "flex", gap: "15px", justifyContent: "end"}}>
                                <PersonOutlineIcon />
                                <Link to="/login" className="link" >
                                    Login
                                </Link>
                                |
                                <Link to="/rigester" className="link">
                                    <p>Rigester</p>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* ============== Header Middle =============== */}
            <div className="header_middle">
                    <Container>
                        <Row>
                            <Col  lg="3" md="3" sm="3">
                                <img style={{display: "flex", gap: "8px"}} className="logo" src={logo} alt="" />
                            </Col>
                            <Col lg="6" md="6" sm="6">
                                <div style={{display: "flex", alignItems: "center", height: "100%"}} className="search">
                                    <div>
                                        <input type="text" placeholder="Search Soldier by Keyword..." />
                                        <div className="icon_search">
                                            <SearchIcon/>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3" md="3" sm="3" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <div style={{display: "flex", gap: "8px", flexDirection: locale === "ar" ? "row-reverse" : "row"}} className="palestine">
                                    <div className="flag_palestine">
                                        <img src={Palestine} alt="" />
                                    </div>
                                    <p style={{fontSize: "17px"}}>{t("Soldier stands in solidarity with Palestine.")}</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
            </div>
            {/* ============== Header Bottom =============== */}
            <div className="header_bottom">
                <Container>
                    <Row className=" d-flex align-items-center">
                       
                        <Col lg="7" md="7" sm="7">
                            <div className="navigation">
                                <div className="menu d-flex gap-3" >
                                    {
                                        navLinks.map((item) => {
                                            return(
                                                <Link className="link" to={item.path} key={item.id}>{item.display}</Link>
                                            )
                                        })
                                    }
                                </div>
                                <div className="menu_mobil">
                                    <div onClick={handleOpenClick}><MenuOutlinedIcon sx={{fontSize: "25px", cursor: "pointer"}} /></div>
                                    <div className="header_mobil">
                                        <div className="close" onClick={handleCloseClick}><HighlightOffIcon /></div>
                                        <ul>
                                            <div className="menu_name">
                                                <h2>Menu</h2>
                                            </div>
                                            {
                                                navLinks.map((item) => {
                                                    return(
                                                        <li key={item.id}><Link className="link" to={item.path}>{item.display}</Link></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <div className="icon_soldier">
                                            <img style={{width: "200px"}} src={SoldierIcon} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="5" md="5" sm="5" className="d-flex justify-content-center align-items-center gap-3">
                            <div className="translate d-flex align-items-center">
                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                    <Select
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                    <MenuItem value="">
                                        <em>Englash</em>
                                    </MenuItem>
                                    <MenuItem value={10}>العربي</MenuItem>
                                    <MenuItem value={20}>España</MenuItem>
                                    <MenuItem value={30}>Русский</MenuItem>
                                    <MenuItem value={40}>Ελληνικά</MenuItem> 
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="icons_header d-flex gap-3">
                                <div className="main_icon icon_header">
                                    <div onClick={handleOpen}><BorderColorIcon className="icons_header_bottom" style={{fontSize: "20px"}} /></div>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: 400,
                                            bgcolor: 'var(--background)',
                                            border: 'none',
                                            outline: "none",
                                            boxShadow: "-2px 2px 70px -25px rgba(0, 0, 0, 0.3)",
                                            p: 4,
                                            borderRadius: "8px",
                                        }}>
                                            
                                        </Box>
                                    </Modal>
                                </div>
                                <div className="dark_icon icon_header" >
                                        
                                {
                                    theme.palette.mode === "light" ?

                                    <WbSunnyOutlinedIcon className="icons_header_bottom" onClick={() => {
                                        setMode((prevMode) =>
                                        prevMode === 'light' ? 'dark' : 'light',
                                        );
                                        localStorage.setItem("theme", "dark")
                                    }
                                    }/>
                                    :
                                    <DarkModeOutlinedIcon className="icons_header_bottom" onClick={() => {
                                        setMode((prevMode) =>
                                        prevMode === 'light' ? 'dark' : 'light',
                                        );
                                        localStorage.setItem("theme", "light")
                                    }
                                    }/>
                                }
            
                                </div>

                                <div className="market_icon icon_header">
                                    <ShoppingBagSharpIcon className="icons_header_bottom" style={{fontSize: "24px"}} />
                                    <span id="cartAmount" className="icon_market_number">{totalItems}</span>
                                    <div className="cart_Tab">
                                        {isEmpty === true ? <p>Your shopping cart is empty!</p> : 
                                        <div className="list_cart">
                                            <div className="head">
                                                <p>Items: {totalItems}</p>
                                                <Link to="/cart">View Cart</Link>
                                            </div>
                                            <div className="content">
                                                {
                                                    items.map((item) => {
                                                        console.log(item.ribbon);
                                                        return(
                                                            <div className="item" key={item.id}>
                                                                <img src={item.img} alt="" />
                                                                <div className="text-content">
                                                                    <p>{item.title}</p>
                                                                    <div className="price">
                                                                        <p>{item.priceThen}</p><p className="price_now">${item.price}</p>
                                                                    </div>
                                                                    <div className="ribbon_cart">{item.ribbon}</div>
                                                                </div>
                                                                <div className="close" onClick={() => removeItem(item.id)}>
                                                                    <CloseIcon sx={{fontSize: "14px"}} />
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className="total">
                                                <div style={{display: "flex", gap: "10px"}}>
                                                    <p>Total Price:</p>
                                                    <p style={{fontWeight: "bold", color: "var(--main-color)"}}>${cartTotal.toFixed(2)}</p>
                                                </div>
                                                <div>
                                                <Button sx={{color: "white"}} onClick={() => emptyCart()} variant="contained">Clear Cart</Button>
                                                </div>
                                            </div>
                                        </div>
                                       }
                                        
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
    )
};

export default Header;

