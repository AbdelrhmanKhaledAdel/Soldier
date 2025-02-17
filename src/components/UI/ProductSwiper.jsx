import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Card from './Card'

function ProductSwiper(x) {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      loop={true}
      slidesPerView={4}
      speed={1150}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      spaceBetween={14}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      style={{padding: "40px 0", display: "grid"}}
    >
       {x.map(({img, title, priceThen, ribbon, stars, items, price, id}) => (
          <SwiperSlide key={id}>
            <Card
              key={id}
              id={id}
              img={img}
              title={title}
              priceThen={priceThen}
              ribbon={ribbon}
              stars={stars}
              items={items}
              price={price}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default ProductSwiper