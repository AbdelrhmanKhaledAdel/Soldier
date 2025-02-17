import React from 'react';
import { useTranslation } from 'react-i18next';
import datas from "../../assets/data/shopData";
import Card from './Card';



// Material Icon
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';


// Image
// Image > Nav
import clearance from "../../assets/all_images/Categories/clearance.png";
import Kronos from "../../assets/all_images/Categories/Kronos_Knives.png";
import sabre from "../../assets/all_images/Categories/sabre.png";
import hr from "../../assets/all_images/Categories/H & R.png";
import uppers from "../../assets/all_images/Categories/uppers.png";
import pistol from "../../assets/all_images/Categories/pistol.png";
import rock from "../../assets/all_images/Categories/rock.png";
import bulk from "../../assets/all_images/Categories/bulk.png";
import handguns from "../../assets/all_images/Categories/handguns.png";



// Style
import "../../styles/categories.css"

// Other
import { v4 as uuidv4 } from "uuid"

function Categories() {
    const [ t ] = useTranslation();

    const navItems = [
        {
            id: uuidv4(),
            img: clearance,
            title: "Clearance"
        },
        {
            id: uuidv4(),
            img: Kronos,
            title: "Kronos Knives"
        },
        {
            id: uuidv4(),
            img: sabre,
            title: "Sabre"
        },
        {
            id: uuidv4(),
            img: hr,
            title: "H & R"
        },
        {
            id: uuidv4(),
            img: uppers,
            title: "Uppers"
        },
        {
            id: uuidv4(),
            img: pistol,
            title: "Pistol Kits"
        },
        {
            id: uuidv4(),
            img: rock,
            title: "5.7 Rock"
        },
        {
            id: uuidv4(),
            img: bulk,
            title: "Bulk Ammo"
        },
        {
            id: uuidv4(),
            img: handguns,
            title: "Handguns"
        },
    ]
  


    return (
        <div>
            <div className="categories_nav">
                {
                    navItems.map((item) => {
                        return(
                            <div className="categorie_item" key={item.id}>
                                <img src={item.img} alt="" />
                                <span>{item.title}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="categories_content">
                <h2><LocalFireDepartmentIcon sx={{color: "red"}} />{t("Daily Deals on Guns, Ammo & Parts")}</h2>
                <div className="cards_items" style={{marginTop: "30px"}}>
                        {
                            datas.filter(data => data.component === "Categories").slice(0, 8).map(({img, title, priceThen, ribbon, stars, items, price, id}) => {
      
                                return(
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
                                )
                              })
                        }
                </div>
            </div>
        </div>
      )
}

export default Categories