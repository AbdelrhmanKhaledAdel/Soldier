import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container } from 'react-bootstrap';
import Brands from "../components/UI/Brands";
import { useTranslation } from 'react-i18next';
import "../styles/about.css"
import Testimonials from "../components/UI/Testimonials";
import Chatbot from "../components/UI/Chatbot";
import Counter from "../components/UI/Counter"


// Material Icons
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';




// Images
// Images > Slider
import img01 from "../assets/all_images/1.jpg"
import img02 from "../assets/all_images/2.jpg"
import img03 from "../assets/all_images/3.jpg"

// Other
import { v4 as uuidv4 } from "uuid";

const About = () => {
    const [ t ] = useTranslation();

    // Slider
    const [active, setActive] = useState(0);
    const items = [
        { img: img01, title: "Welcome To Soldier" },
        { img: img02, title: "Welcome To Soldier" },
        { img: img03, title: "Welcome To Soldier" },
    ];
    const lastPosition = items.length - 1;
    const firstPosition = 0;
  
    const setSlider = (newActive) => {
      setActive(newActive);
    };
  
    const setDiameter = () => {
      const slider = document.querySelector('.slider');
      const widthSlider = slider.offsetWidth;
      const heightSlider = slider.offsetHeight;
      const diameter = Math.sqrt(Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2));
      document.documentElement.style.setProperty('--diameter', diameter + 'px');
    };
  
    useEffect(() => {
      setDiameter();
      window.addEventListener('resize', setDiameter);
      return () => window.removeEventListener('resize', setDiameter);
    }, []);

    // Content
    const [contentItem, setContentItem] = useState(1);

    const item = [
        {
            id: 1,
            title: "Our message",
            content: <div className="content">
                <p>At Soldier.com, we strive to provide accurate and comprehensive information about military equipment, weapons, and advanced military technology. We aim to be a reliable source for those interested in this field, whether they are professionals, hobbyists, or students.</p>
            </div>
        },
        {
            id: 2,
            title: "Our Team",
            content: <div className="content">
                <p>We are a team of professionals and enthusiastic military enthusiasts who work hard to collect and present information in the best possible way. Our team consists of researchers, writers, and specialized designers.</p>
            </div>
        },
        {
            id: 3,
            title: "Our Values",
            content: <div className="content">
                <p>Credibility: Providing accurate and reliable information.</p>
                <p>Innovation: Providing the latest news and developments in the field of military technology.</p>
                <p>Interaction: Building an interactive community that shares experiences and knowledge.</p>
            </div>
        },
        {
            id: 4,
            title: "Our Objectives",
            content: <div className="content">
                <p>Provide a comprehensive educational platform on weapons and military equipment.</p>
                <p>Facilitate access to information related to military technology.</p>
                <p>Enhance public understanding of various aspects of defense and security.</p>
            </div>
        },
        {
            id: 5,
            title: "Our Objectives",
            content: <div className="content">
                <p>Provide a comprehensive educational platform on weapons and military equipment.</p>
                <p>Facilitate access to information related to military technology.</p>
                <p>Enhance public understanding of various aspects of defense and security.</p>
            </div>
        },
        {
            id: 6,
            title: "Our history",
            content: <div className="content">
                <p>Soldier was founded on 6/7/2023 with the goal of providing a reliable and up-to-date resource for military information. Since then, the site has grown to become one of the leading sources in its field, and continues to evolve thanks to the support of our valued users and readers.</p>
            </div>
        },
        {
            id: 7,
            title: "Contact Us",
            content: <div className="content">
                <p>We are always happy to hear your feedback and suggestions. Feel free to contact us via [email] or follow our social media accounts.</p>
            </div>
        },
        {
            id: 8,
            title: "Conclusion",
            content: <div className="content">
                <p>We are here to provide you with all the information you need about the military field. Thank you for visiting, and we look forward to your continued interaction!</p>
            </div>
        },
    ]

    // counting  Number
    const countings = [
        {
            id: uuidv4(),
            icon: <SendOutlinedIcon />,
            title: "The Sales",
            number: "2000"
        },
        {
            id: uuidv4(),
            icon: <SendOutlinedIcon />,
            title: "The Sales",
            number: "2000"
        },
        {
            id: uuidv4(),
            icon: <SendOutlinedIcon />,
            title: "The Sales",
            number: "2000"
        },
        {
            id: uuidv4(),
            icon: <SendOutlinedIcon />,
            title: "The Sales",
            number: "2000"
        },
    ]

   
    
    
    return(
        <Helmet title="Information about the site">
            <div className="about" style={{overflow: "hidden"}}>
                <div className="slider">
                    <div className="list">
                        {items.map((item, index) => (
                            <div key={index} className={`item ${index === active ? 'active' : ''}`}>
                            <div className="image" style={{ '--url': `url(${item.img})` }}></div>
                            <div className="content">
                                <h2>{item.title}</h2>
                            </div>
                            </div>
                        ))}
                    </div>
                    <div className="arrows">
                        <button id="prev" className={`${active === firstPosition ? 'remove' : ''}`} onClick={() => setSlider(active - 1)}><ArrowBackIosNewIcon/></button>
                        <button id="next" className={`${active === lastPosition ? 'remove' : ''}`} onClick={() => setSlider(active + 1)}><ArrowForwardIosIcon/></button>
                    </div>
                </div>
            </div>
            <div className="pagebuilder" style={{padding: "70px 0px", position: "relative"}}>
                <Container>
                   {
                    item.map((item) => {
                        return(
                            <div className={`item ${contentItem === item.id ? 'active' : ''}`} key={item.id}>
                                <div className="head">
                                    <h2>{item.title}</h2>
                                    <div className="add" onClick={() => contentItem === item.id ? setContentItem(0): setContentItem(item.id)}> 
                                        <AddIcon />
                                    </div>
                                    <div className="remove" onClick={() => contentItem === item.id ? setContentItem(0): setContentItem(item.id)}>
                                        <RemoveIcon sx={{color: "var(--main-color)"}} />
                                    </div>
                                </div>
                                {item.content}
                            </div>
                        )
                    })
                   }
                </Container>
            </div>
            <Chatbot /> 
            <Testimonials />
            <Counter />
            <Brands />
        </Helmet>
    )
}

export default About;