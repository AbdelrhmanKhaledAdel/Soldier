import React from 'react'
import { Container } from 'react-bootstrap';
import { Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination'; 
import 'swiper/css/navigation'; 

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

// Style
import "../../styles/brands.css"

// Other
import { v4 as uuidv4 } from "uuid"


const Brands = () => {
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

    return (
        <Container>
            <div className="brands">
                <Swiper className="swiper-container"
                    pagination={{
                        dynamicBullets: true,
                        clickable: true,
                      }}
                      modules={[Pagination, Autoplay]}
                      loop={true}
                      speed={1150}
                      breakpoints={{
                        320: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 5,
                        },
                        1024: {
                            slidesPerView: 8,
                        },
                        }}
                      autoplay={{ delay: 4000, disableOnInteraction: false }}
                      style={{display: "flex", alignItems: "center", height: "150px"}}
                >
                    {brands.map((x) => (
                    <SwiperSlide key={x.id} >
                        <img style={{width: "100%", cursor: "pointer"}} src={x.img} alt="" />
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Container>
    )
}

export default Brands