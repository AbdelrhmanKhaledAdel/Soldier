import React from 'react'

// Css Landing
import "../../styles/landing.css"
// Img
import landing01 from "../../assets/all_images/landing_1.png"
import landing02 from "../../assets/all_images/landing_2.png"
import landing03 from "../../assets/all_images/landing_3.png"
import landing04 from "../../assets/all_images/landing_4.png"
import landing05 from "../../assets/all_images/cards/soviet.png"
import landing06 from "../../assets/all_images/Categories/Kronos_Knives.png"
import landing07 from "../../assets/all_images/cards/2302-magtech-40-s_w-fmj.png"
import landing08 from "../../assets/all_images/cards/dagger_micro.png"
import landing09 from "../../assets/all_images/cards/colt_packs.png"
import landing10 from "../../assets/all_images/cards/beretta_a300.png"
// Other
import { v4 as uuidv4 } from "uuid"





const Landing = () => {



  const swiper = [
    {
      id: uuidv4(),
      position: 1,
      img: landing01
    },
    {
      id: uuidv4(),
      position: 2,
      img: landing02
    },
    {
      id: uuidv4(),
      position: 3,
      img: landing03
    },
    {
      id: uuidv4(),
      position: 4,
      img: landing04
    },
    {
      id: uuidv4(),
      position: 5,
      img: landing05
    },
    {
      id: uuidv4(),
      position: 6,
      img: landing06
    },
    {
      id: uuidv4(),
      position: 7,
      img: landing07
    },
    {
      id: uuidv4(),
      position: 8,
      img: landing08
    },
    {
      id: uuidv4(),
      position: 9,
      img: landing09
    },
    {
      id: uuidv4(),
      position: 10,
      img: landing10
    },
  ]


  return (
    <div className="landing">
      <div className="slider" style={{'--quantity': 10}}>
        {
          swiper.map((item) => {

            return(
              <div key={item.id} style={{'--position': item.position}} className={"item"}>
                <img src={item.img} alt="" />
              </div>
            )
          })
        }
      </div>
      <div className="content">
        <h1 data-content='SOLDIER'>Soldier</h1>
        <div className="model"></div>
      </div>
    </div>
  )
}

export default Landing
