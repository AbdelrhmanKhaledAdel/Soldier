import React from 'react';
import { Container } from 'react-bootstrap';
import "../../styles/testimonials.css"

// Material Icons
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

// Swiper
import { Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination'; 
import 'swiper/css/navigation'; 

// Other
import { v4 as uuidv4 } from "uuid";

const Testimonials = () => {
    const testimonials = [
        {
            id: uuidv4(),
            img: require("../../assets/all_images/testimonial1.jpg"),
            stars:  <div>
                <StarIcon className='testimonial_star' />
                <StarIcon className='testimonial_star' />
                <StarIcon className='testimonial_star' />
                <StarHalfIcon className='testimonial_star' />
                <StarBorderIcon className='testimonial_star' />
            </div>,
            talking: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor diam, feugiat quis enim sed, ullamcorper semper ligula. Mauris consequat justo volutpat.`,
            name: "Devid Smith",
            email: "Founter @democompany",
        },
        {
            id: uuidv4(),
            img: require("../../assets/all_images/testimonial1.jpg"),
            stars:  <div>
                <StarIcon className='testimonial_star' />
                <StarIcon className='testimonial_star' />
                <StarIcon className='testimonial_star' />
                <StarHalfIcon className='testimonial_star' />
                <StarBorderIcon className='testimonial_star' />
            </div>,
            talking: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor diam, feugiat quis enim sed, ullamcorper semper ligula. Mauris consequat justo volutpat.`,
            name: "Devid Smith",
            email: "Founter @democompany",
        },
        {
            id: uuidv4(),
            img: require("../../assets/all_images/testimonial1.jpg"),
            stars:  <div>
                <StarIcon className='testimonial_star' />
                <StarIcon className='testimonial_star' />
                <StarIcon className='testimonial_star' />
                <StarHalfIcon className='testimonial_star' />
                <StarBorderIcon className='testimonial_star' />
            </div>,
            talking: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor diam, feugiat quis enim sed, ullamcorper semper ligula. Mauris consequat justo volutpat.`,
            name: "Devid Smith",
            email: "Founter @democompany",
        },
        {
            id: uuidv4(),
            img: require("../../assets/all_images/testimonial1.jpg"),
            stars:  <div>
                <StarIcon className='testimonial_star' />
                <StarIcon className='testimonial_star' />
                <StarIcon className='testimonial_star' />
                <StarHalfIcon className='testimonial_star' />
                <StarBorderIcon className='testimonial_star' />
            </div>,
            talking: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor diam, feugiat quis enim sed, ullamcorper semper ligula. Mauris consequat justo volutpat.`,
            name: "Devid Smith",
            email: "Founter @democompany",
        },
    ]

  return (
            <div className="testimonials">
                <Container>
                    <div className="page">
                        <h2>Client’s Testimonials</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea impedit illum exercitationem magnam assumenda, est ex.</p>
                    </div>
                    <Swiper
                    pagination={{
                        dynamicBullets: true,
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={1150}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    >
                        {
                            testimonials.map(x => (
                                <SwiperSlide key={x.id}>
                                    <div className="testimonial">
                                        <span class="span"></span>
                                        <div class="justo">
                                            <img src={x.img} alt="" />
                                            <div class="lightning">
                                                <p>{x.talking}</p>
                                                {x.stars}
                                                <div class="smith">
                                                    <span>{x.name}</span>
                                                    <span>{x.email}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                        
                    </Swiper>
                </Container>
            </div>
  )
}

export default Testimonials