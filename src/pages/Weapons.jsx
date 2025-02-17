import React, { useState, useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container } from 'react-bootstrap';
import Navigation from '../components/UI/Navigation';
import Card from "../components/UI/Card";
import CarouselSlider from '../components/UI/CarouselSlider';


// Database
import datas from "../assets/data/shopData";

// Material
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// Material Icons
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
import WidgetsIcon from '@mui/icons-material/Widgets';

// Other
import { v4 as uuidv4 } from "uuid";

// Style
import "../styles/weapons.css"

// Images
import magtech from "../assets/all_images/cards/2302-magtech-40-s_w-fmj.png"
import sabre from "../assets/all_images/Categories/sabre_main_nav.png"
import jakl from "../assets/all_images/Categories/jakl_main_nav.png"
import pa15 from "../assets/all_images/Categories/pa15_main_nav.png"
import pa10 from "../assets/all_images/Categories/pa10_main_nav.png"
import dagger from "../assets/all_images/Categories/handguns.png"
import rk01 from "../assets/all_images/Categories/rock.png"
import akv from "../assets/all_images/Categories/akv_main_nav__1.png"
import psak from "../assets/all_images/cards/soviet.png"


const Weapons = () => {

  const [gridCard, setGridCard] = React.useState("");
  const [sort, setSort] = useState("Position");
  const weaponsItem = datas.slice(0, 15);
  const [filteredProducts, setFilteredProducts] = useState(datas);


  // Category
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  // Input Filter
  const [query, setQuery] = React.useState("");

  const handleInputChange = event => {
    setQuery(event.target.value)
  }
  
  const filteredItems = weaponsItem.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1);

  function filteredData(products, selected ,query) {
    let filteredProducts = products;

    // Filtering Input Items
    if(query) {
      filteredProducts = filteredItems;
    }
    
    // Selected Filter
    if (selected === "LowToHigh") {
          filteredProducts.sort((a, b) => a.price - b.price);
        } else if(selected === "HighToLow") {
          filteredProducts.sort((a, b) => b.price - a.price);
        }
    if(selected) {
      filteredProducts = filteredProducts
    }


    return filteredProducts.map(({img, title, priceThen, ribbon, stars, items, price, id}) => {   
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
    } )
  }
  const result = filteredData(weaponsItem, selectedCategory, query)

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    setSelectedCategory(event.target.value);
  };

  const navItems = [
    {
        id: uuidv4(),
        img: magtech,
        title: "Ammo"
    },
    {
      id: uuidv4(),
      img: sabre,
      title: "Sabre"
    },
    {
      id: uuidv4(),
      img: jakl,
      title: "JAKL"
    },
    {
      id: uuidv4(),
      img: pa15,
      title: "PA-15"
    },
    {
      id: uuidv4(),
      img: pa10,
      title: "PA-10"
    },
    {
      id: uuidv4(),
      img: dagger,
      title: "PSA Dagger"
    },
    {
      id: uuidv4(),
      img: rk01,
      title: "PSA 5.7 Rock"
    },
    {
      id: uuidv4(),
      img: akv,
      title: "AK-V"
    },
    {
      id: uuidv4(),
      img: psak,
      title: "AK-47"
    },
]

const [openNavigation, setOpenNavigation] = useState()
const handleOpenClick = () => {
  document.querySelector(".weapons_navigation .navigation").classList.add("open")
}


  return (
    <Helmet title="List Of All Kinds Of Weapons">
        {/* <CarouselSlider /> */}
        <Container>
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
          <div className='weapons_navigation' style={{margin: "30px 0px", display: "flex", gap: "20px"}}>
            <Navigation handleChange={handleInputChange} openNavigation={openNavigation} />
            <div className="weapons_main" style={{width: "100%"}}>
              <div className="toolbar" style={{borderBottom: "1px solid #80808073",marginBottom: "14px"}}>
                <div className="modes" style={{gap: "30px"}}>
                  <div className="navigation_menu" style={{cursor: "pointer"}} onClick={handleOpenClick}>
                    <WidgetsIcon sx={{fontSize: "30px", color: "var(--main-color)"}} />
                  </div>
                  <div style={{cursor: "pointer"}} onClick={() => setGridCard("")}>
                    <GridViewIcon sx={{fontSize: "30px", color: "var(--main-color)"}} />
                  </div>
                  <div style={{cursor: "pointer"}} onClick={() => setGridCard("list")}>
                    <FormatListBulletedIcon sx={{fontSize: "30px", color: "var(--main-color)"}} />
                  </div>
                </div>
                <FormControl sx={{ m: 1, minWidth: 190}}>
                  <Select
                    value={age === "" ? "Position" : age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="Position">
                      <em>Position</em>
                    </MenuItem>
                    <MenuItem value={"LowToHigh"}>Price: Low to High</MenuItem>
                    <MenuItem value={"HighToLow"}>Price: High to Low</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className={`cards_items ${gridCard}`} style={{width: "100%"}}>{result}</div>
            </div>
          </div>
        </Container>
    </Helmet>
  )
}

export default Weapons;