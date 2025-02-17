import React from 'react';
import Helmet from "../components/Helmet/Helmet";
import { Container } from "react-bootstrap";
import Advertisements from "../components/UI/Advertisements"

// Material
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';

// Material Icons
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SearchIcon from '@mui/icons-material/Search';

//Style
import "../styles/forums.css";

// Other
import { v4 as uuidv4 } from "uuid";

const Forums = () => {

  const [anchorElCategory, setAnchorElCategory] = React.useState(null);
  const [anchorElTags, setAnchorElTags] = React.useState(null);

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const openCategory = Boolean(anchorElCategory);
  const openTags = Boolean(anchorElTags);

  const handleClickListItemCategory = (event) => {
    setAnchorElCategory(event.currentTarget);
  };
  
  const handleClickListItemTags = (event) => {
    setAnchorElTags(event.currentTarget);
  };

  // const handleMenuItemClick = (event, index) => {
  //   setSelectedIndex(index);
  // };

  const handleClose = () => {
    setAnchorElCategory(null);
    setAnchorElTags(null);

  };

  const category = [
    {
      id: uuidv4(),
      title: "PSA Products",
      number: "× 270",
      p: "Discuss all Palmetto State Armory branded products here, such as our complete PA-15 rifles, PSAK-47 rifles, gun parts, accessories, and more."
    },
    {
      id: uuidv4(),
      title: "General Discussion",
      number: "× 1216",
      p: "Use this section to start a civilized conversation on various topics related to the world of firearms and beyond. Please note, this is for discussion only. No buying or selling is allowed on any part …"
    },
    {
      id: uuidv4(),
      title: "Non-PSA Products",
      number: "× 82",
      p: "This category is a dedicated section to non-Palmetto State Armory branded products. Discuss topics from Pistols to competitive shooting and everything in between."
    },
    {
      id: uuidv4(),
      title: "PSA Store Discussion",
      number: "× 42",
      p: "Have something to say or discuss in regards to our Palmetto State Armory stores? You have landed in the right spot."
    },
    {
      id: uuidv4(),
      title: "Hometown Discussion",
      number: "× 9",
      p: "If you want to conversate about things going on in South Carolina, then you are in the right place. Strike up a discussion about anything from PSA events to other things going on in our great state."
    },
  ]

  const itemsCategories = [
    {
      id: uuidv4(),
      title: "PSA Products",
      content: "Discuss all Palmetto State Armory branded products here, such as our complete PA-15 rifles, PSAK-47 rifles, gun parts, accessories, and more.",
      number: "2.6k",
      subcategories: <div className="subcategories">
          <span className='subcategory'><span></span>AR-15</span>
          <span className='subcategory'><span></span>AR-10</span>
          <span className='subcategory'><span></span>AK-47 / AK-74</span>
          <span className='subcategory'><span></span>AK-V</span>
          <span className='subcategory'><span></span>AR-9</span>
          <span className='subcategory'><span></span>AK-P</span>
          <span className='subcategory'><span></span>1911</span>
          <span className='subcategory'><span></span>JAKL</span>
          <span className='subcategory'><span></span>AR-V</span>
          <span className='subcategory'><span></span>KS-47</span>
          <span className='subcategory'><span></span>PSA Custom</span>
          <span className='subcategory'><span></span>Optics</span>
          <span className='subcategory'><span></span>Meme Lowers</span>
          <span className='subcategory'><span></span>Dagger</span>
          <span className='subcategory'><span></span>Palmetto 5.7 Rock</span>
      </div>
    },
    {
      id: uuidv4(),
      title: "General Discussion",
      content: "Use this section to start a civilized conversation on various topics related to the world of firearms and beyond. Please note, this is for discussion only. No buying or selling is allowed on any part of this forum.",
      number: "6",
      subcategories: <div className="subcategories">
          <span className='subcategory'><span></span>Anything Non-Firearm Related</span>
          <span className='subcategory'><span></span>Giveaways</span>
          <span className='subcategory'><span></span>Reloading</span>
          <span className='subcategory'><span></span>How To</span>
      </div>
    },
    {
      id: uuidv4(),
      title: "Non-PSA Products",
      content: "This category is a dedicated section to non-Palmetto State Armory branded products. Discuss topics from Pistols to competitive shooting and everything in between.",
      number: "5",
      subcategories: <div className="subcategories">
          <span className='subcategory'><span></span>Hunting</span>
          <span className='subcategory'><span></span>AR15 Rifle and Pistol</span>
          <span className='subcategory'><span></span>AR10 Rifle and Pistol</span>
          <span className='subcategory'><span></span>AK47/74 Firearms</span>
          <span className='subcategory'><span></span>AR-9</span>
          <span className='subcategory'><span></span>AK-P</span>
          <span className='subcategory'><span></span>1911</span>
          <span className='subcategory'><span></span>JAKL</span>
          <span className='subcategory'><span></span>AR-V</span>
          <span className='subcategory'><span></span>KS-47</span>
          <span className='subcategory'><span></span>PSA Custom</span>
      </div>
    },
    {
      id: uuidv4(),
      title: "PSA Products",
      content: "Discuss all Palmetto State Armory branded products here, such as our complete PA-15 rifles, PSAK-47 rifles, gun parts, accessories, and more.",
      number: "2.6k",
      subcategories: <div className="subcategories">
          <span className='subcategory'><span></span>AR-15</span>
          <span className='subcategory'><span></span>AR-10</span>
          <span className='subcategory'><span></span>AK-47 / AK-74</span>
          <span className='subcategory'><span></span>AK-V</span>
          <span className='subcategory'><span></span>AR-9</span>
          <span className='subcategory'><span></span>AK-P</span>
          <span className='subcategory'><span></span>1911</span>
          <span className='subcategory'><span></span>JAKL</span>
          <span className='subcategory'><span></span>AR-V</span>
          <span className='subcategory'><span></span>KS-47</span>
          <span className='subcategory'><span></span>PSA Custom</span>
          <span className='subcategory'><span></span>Optics</span>
          <span className='subcategory'><span></span>Meme Lowers</span>
          <span className='subcategory'><span></span>Dagger</span>
          <span className='subcategory'><span></span>Palmetto 5.7 Rock</span>
      </div>
    },
    {
      id: uuidv4(),
      title: "PSA Products",
      content: "Discuss all Palmetto State Armory branded products here, such as our complete PA-15 rifles, PSAK-47 rifles, gun parts, accessories, and more.",
      number: "2.6k",
      subcategories: <div className="subcategories">
          <span className='subcategory'><span></span>AR-15</span>
          <span className='subcategory'><span></span>AR-10</span>
          <span className='subcategory'><span></span>AK-47 / AK-74</span>
          <span className='subcategory'><span></span>AK-V</span>
          <span className='subcategory'><span></span>AR-9</span>
          <span className='subcategory'><span></span>AK-P</span>
          <span className='subcategory'><span></span>1911</span>
          <span className='subcategory'><span></span>JAKL</span>
          <span className='subcategory'><span></span>AR-V</span>
          <span className='subcategory'><span></span>KS-47</span>
          <span className='subcategory'><span></span>PSA Custom</span>
          <span className='subcategory'><span></span>Optics</span>
          <span className='subcategory'><span></span>Meme Lowers</span>
          <span className='subcategory'><span></span>Dagger</span>
          <span className='subcategory'><span></span>Palmetto 5.7 Rock</span>
      </div>
    },
  ]

  const latestItems = [
    {
      id: uuidv4(),
      img: require("../assets/all_images/friend-01.jpg"),
      name: "Bored…..night owls or early birds",
      p: "General Discussion",
      number: "6.2K"
    },
    {
      id: uuidv4(),
      img: require("../assets/all_images/friend-02.jpg"),
      name: "Bored…..night owls or early birds",
      p: "General Discussion",
      number: "6.2K"
    },
    {
      id: uuidv4(),
      img: require("../assets/all_images/friend-03.jpg"),
      name: "Bored…..night owls or early birds",
      p: "General Discussion",
      number: "6.2K"
    },
    {
      id: uuidv4(),
      img: require("../assets/all_images/friend-04.jpg"),
      name: "Bored…..night owls or early birds",
      p: "General Discussion",
      number: "6.2K"
    },
    {
      id: uuidv4(),
      img: require("../assets/all_images/friend-05.jpg"),
      name: "Bored…..night owls or early birds",
      p: "General Discussion",
      number: "6.2K"
    },
  ]

  return (
    <Helmet title="Forum topics, user posts">
      <Container>
        <div className="forums">
          <div className="navigation">
            <div style={{display: "flex", alignItems: "center", gap: "15px"}}>
              <div className="category">
                <Button onClick={handleClickListItemCategory} variant="outlined">Categories<PlayArrowIcon/></Button>
                <Menu
                  id="lock-menu"
                  anchorEl={anchorElCategory}
                  open={openCategory}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'lock-button',
                    role: 'listbox',
                  }}
                  sx={{maxWidth: "600px", width: "100%", minWidth: "220px"}}
                >
                  <div className="search" style={{display: "flex", padding: "15px 10px", borderBottom: "1px solid #80808073"}}>
                    <input type="text" placeholder='Search...' />
                    <SearchIcon />
                  </div>
                  <div className="items" style={{maxHeight: "40vh"}}>
                    {
                      category.map(x => (
                        <div className="item" key={x.id} style={{padding: "10px"}}>
                          <head style={{display: "flex", gap: "10px"}}>
                            <h5 style={{display: "flex", alignItems: "center", gap: "10px", fontSize: "17px", margin: "0"}}>
                            <span style={{width: "10px", height: "10px", background: "var(--main-color-hover)", display: "block"}}></span>
                            {x.title}
                            </h5>
                            <span style={{color: "gray", fontSize: "17px"}}>{x.number}</span>
                          </head>
                          <p style={{fontSize: "15px", color: "gray"}}>{x.p}</p>
                        </div>
                      ))
                    }
                  </div>
                </Menu>
              </div>
              <div className="tags">
              <Button onClick={handleClickListItemTags} variant="outlined">Tags<PlayArrowIcon/></Button>
                <Menu
                  id="lock-menu"
                  anchorEl={anchorElTags}
                  open={openTags}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'lock-button',
                    role: 'listbox',
                  }}
                  className='menu_tags'
                  sx={{maxWidth: "600px", width: "100%", minWidth: "220px"}}
                >
                  <div className="search" style={{display: "flex", padding: "15px 10px", borderBottom: "1px solid #80808073"}}>
                    <input type="text" placeholder='Search...' />
                    <SearchIcon />
                  </div>
                  <h5 style={{color: "var(--main-color)", margin: "15px 10px"}}>no tags</h5>
                  <span></span>
                </Menu>
              </div>
            </div>
            <div style={{display: "flex", alignItems: "center", gap: "15px"}}>
              <h6 className='active'>Categories</h6>
              <h6>Latest</h6>
              <h6>Top</h6>
            </div>
          </div>
          <div className="forums_page">
            <div className="categories">
              <head>
                <h5>Categories</h5>
                <h5>Topics</h5>
              </head>
              <div className="categories_body">
                {
                  itemsCategories.map(x => (
                    <div className="item" key={x.id}>
                      <div className="categories_name">
                        <h5>{x.title}</h5>
                        <span className="number">{x.number} Week</span>
                      </div>
                      <p>{x.content}</p>
                      {x.subcategories}
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="latest">
              <head><h5>Latest</h5></head>
              <div className="items">
                {
                  latestItems.map(x => (
                    <div className="item" key={x.id}>
                      <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
                        <div className="img">
                          <img src={x.img} alt="" />
                        </div>
                        <div className="content">
                          <h5>{x.name}</h5>
                          <p><span></span>{x.p}</p>
                        </div>
                      </div>
                      <span className='number'>{x.number}</span>
                    </div>
                  ))
                }
              </div>
              <Button variant="contained" sx={{marginTop: "1.5rem",color: "white"}}>More</Button>
            </div>
          </div>
          <Advertisements />
        </div>
      </Container>
    </Helmet>
  )
}



export default Forums