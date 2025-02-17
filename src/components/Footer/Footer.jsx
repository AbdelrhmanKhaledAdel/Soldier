import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


// Material Icon
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import PolicyIcon from '@mui/icons-material/Policy';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// img
import logo from "../../assets/all_images/logo.png";
import badges from "../../assets/all_images/badges.png"

// Input
import TextField from '@mui/material/TextField';

// Css
import "../../styles/footer.css";
// Other
import { v4 as uuidv4 } from "uuid"

const Footer = () => {
    // Company
    const CompanyLinks = [{
        id: uuidv4(),
        path: "/home",
        display: "Home",
        icon: <HomeOutlinedIcon />
    },{
        id: uuidv4(),
        path: "/about",
        display: "About Us",
        icon: <PeopleAltOutlinedIcon />
    },{
        id: uuidv4(),
        path: "/retail",
        display: "Retail Stores",
        icon: <StorefrontIcon />
    },{
        id: uuidv4(),
        path: "/blogs",
        display: "Blogs",
        icon: <InsertCommentOutlinedIcon />
    },
    {
        id: uuidv4(),
        path: "/contact",
        display: "Contact Us",
        icon: <AttachEmailOutlinedIcon />
    }]
    // Legal
    const legalLinks = [{
        id: uuidv4(),
        display: "Retail Return Policy",
        icon: <PolicyIcon />
    },{
        id: uuidv4(),
        display: "FAQ",
        icon: <LiveHelpIcon />
    },{
        id: uuidv4(),
        display: "Gift Card Balance",
        icon: <CreditCardIcon />
    },{
        id: uuidv4(),
        display: "Network",
        icon: <NetworkWifiIcon />
    },
    {
        id: uuidv4(),
        display: "Sitemap",
        icon: <AccountTreeIcon />
    }]

    return(
        <footer>
            <Container>
                <Row>
                    <div className="card_footer">
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <img className="logo" src={logo} />
                        <div className="location">
                            <div className="adres">
                                <div className="icon">
                                    <LocationOnOutlinedIcon />
                                </div>
                                <p>25 Esraa Elmoalmeen Elmohandseen</p>
                            </div>
                            <div className="phone">
                                <div className="icon">
                                    <PhoneInTalkOutlinedIcon />
                                </div>
                                <p>01047542543</p>
                            </div>
                            <div className="email">
                                <div className="icon">
                                    <MailOutlineOutlinedIcon />
                                </div>
                                <p>support@soldier.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="card_footer">
                        <div className="title_footer">
                            <h3>Company</h3>
                        </div>
                        <ul className="menu">
                            {
                                CompanyLinks.map((item) => {
                                    return(
                                        <li key={item.id}><Link className="link" to={item.path} ><span>{item.icon}</span><p>{item.display}</p></Link></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="card_footer">
                        <div className="title_footer">
                            <h3>Legal</h3>
                        </div>
                        <ul className="menu">
                            {
                                legalLinks.map((item) => {
                                    return(
                                        <li key={item.id}><Link className="link" to="#"><span>{item.icon}</span><p>{item.display}</p></Link></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="card_footer">
                        <div className="promotext">
                            <div className="input_footer">
                                <input placeholder="Email address here..." type="text" />
                                <button className="main_button">Subscribe</button>
                            </div>
                            <img src={badges} style={{width: "100%"}} alt="" />
                        </div>
                    </div>
                </Row>
            </Container>
            <div className="copyright">
                <Container>
                    <div className="copyright-text">
                        <p>© All rights reserved 2017 - Design & Developed by <Link to="#">Sikero</Link></p>
                    </div>
                    <ul className="icons">
                        <li className="facebook"><Link className="link_icon-footer" to="#"><FacebookIcon /></Link></li>
                        <li className="twitter"><Link className="link_icon-footer" to="#"><XIcon /></Link></li>
                        <li className="instagram"><Link className="link_icon-footer" to="#"><InstagramIcon /></Link></li>
                        <li className="whatsapp"><Link className="link_icon-footer" to="#"><WhatsAppIcon /></Link></li>
                    </ul> 
                </Container>
            </div>
        </footer>
    )
};

export default Footer;

