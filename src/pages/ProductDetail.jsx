import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import datas from "../assets/data/shopData";
import { useCart } from "react-use-cart";
import Brands from '../components/UI/Brands';

import "../styles/product-detail.css"

// Material
import Button from '@mui/material/Button';

// Material Icons
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

// Other
import { v4 as uuidv4 } from "uuid"
import ProductSwiper from '../components/UI/ProductSwiper';
import Helmet from '../components/Helmet/Helmet';

function ProductDetail() {
  const { addItem } = useCart();

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
      const thisProduct = datas.find(x => x.id === Number(id)); 
      if (thisProduct) {
        setProduct(thisProduct);
        setRelatedProducts(datas.filter(x => x.id !== Number(id)) ? datas.filter(x => x.id !== Number(id)) : "");
      } else {
        console.log('Product not found!🧡');
      }
      
  },[id]);

  let title = product === null ? "" : product.title

  // Additional Attributes Wrapper
  const attributesWrappers = [
    {
      id: uuidv4(),
      label: "SKU",
      date: product ? product.id : ""
    },
    {
      id: uuidv4(),
      label: "Model Number",
      date:  product ? product.modelNumber : ""
    },
    {
      id: uuidv4(),
      label: "Brand",
      date: product ? product.brand : ""
    },
    {
      id: uuidv4(),
      label: "UPC",
      date: product ? product.upc : ""
    },
    {
      id: uuidv4(),
      label: "Caliber",
      date: product ? product.caliber : ""
    },
  ]

  // Comments
  const comments = [
    {
      id: uuidv4(),
      img: require("../assets/all_images/avatar.png"),
      name: "Devid Smith"
    },
    {
      id: uuidv4(),
      img: require("../assets/all_images/avatar.png"),
      name: "Devid Smith"
    },
    {
      id: uuidv4(),
      img: require("../assets/all_images/avatar.png"),
      name: "Devid Smith"
    },
    {
      id: uuidv4(),
      img: require("../assets/all_images/avatar.png"),
      name: "Devid Smith"
    }
  ]
    
  return(
    <Helmet title={title}>
      {product ? 
    <div className='product_detail'>
      <div className="top_product">
        <Container>
          <div className="image">
            <img src={product ? product.img : "" } alt="" />
            {product.ribbon === "" || null ? "" : <div className="ribbon_product">{product ? product.ribbon : ""}</div>}
            <div className="fotorama__nav">
              <div className="fotorama__thumb active">
                <img src={product ? product.img : "" } alt="" />
              </div>
              <div className="fotorama__thumb">
                <img src={product ? product.img : "" } alt="" />
              </div>
            </div>
          </div>
          <div className="product_content">
            <span className="product_link"><Link to="/home" style={{color: "var(--main-color)", fontWeight: "bold"}}>Home</Link> / {product ? product.title : "" }</span>
            <div className="title">
              <h2>{product ? product.title : "" }</h2>
            </div>
            {product ? product.items : "" }
            <div className="product_list">
              <div className="price">
                <p className="price_now">${product ? product.price : "" }</p><p>{product ? product.priceThen : ""}</p>
              </div>
              <div className="stars">{product ? product.stars : "" }</div>
            </div>
            <div className="additional_attributes_wrapper">
              {
                attributesWrappers.map(x => (
                  <div key={x.id} style={{display: x.date === "" ? "none" : "flex"}}>
                    <p style={{fontWeight: "600"}}>{x.label} :</p>
                    <span style={{color: "gray", fontSize: "16px"}}>{x.date}</span>
                  </div>
                ))
              }
            </div>
            <div className="buttons">
                <Button onClick={() => addItem(product)} className='card_products-buton' variant="contained"><LocalGroceryStoreIcon sx={{marginRight: "10px"}} /><p>Add to Cart</p></Button>
            </div>
            <div className="product_addto_links">
              <div className="wishlist" style={{cursor: "pointer"}}>
                <FavoriteIcon fontSize='18px' /> <span>Add to Wish List</span>
              </div>
              <div className="compare" style={{cursor: "pointer"}}>
                <ContentCopyIcon fontSize='18px' /> <span>Add to Compare</span>
              </div>
              <div className="share">
                <p>Share :</p> 
                <EmailOutlinedIcon fontSize='18px' sx={{cursor: "pointer"}} />
                <FacebookIcon fontSize='18px' sx={{cursor: "pointer"}} />
                <XIcon fontSize='18px' sx={{cursor: "pointer"}} />    
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="middle_product">
        <Container>
          <div className="items">
            <div className="item active"><p>Product Details</p></div>
            <div className="item"><p>Reviews</p></div>
            <div className="item"><p>Q & A</p></div>
            <div className="item"><p>Retail Stock</p></div>
            <div className="item"><p>Compliance</p></div>
          </div>
          <div className="product_details">
            <h2 className="title">Product Details</h2>
            <div className="product_content">
              <div className="product_card">
                <h4>Details:</h4>
                <p>Barrel Length: 11.5" <br />
                  Barrel Profile:  A2 <br />
                  Barrel Steel:  Chrome Moly Vanadium <br />
                  Barrel Finish:  Phosphate <br />
                  Chrome Lining:  No <br />
                  Muzzle Thread Pattern:  1/2" x 28 <br />
                  Twist Rate:  1 in 7" <br />
                  Barrel Extension:  M4 <br />
                  Gas System Length:  Carbine  <br />
                  Diameter at Gas Block:  .750"  <br />
                  Gas Block Type:  F-marked Front Sight Base <br />
                  Muzzle Device:  A2 -style <br />
                  Receiver Material:  Forged 7075-T6  <br />
                  Receiver Type:  M4 <br />
                  Handguard Type:  M4 with heat shields, Black  <br />
                  Bolt Material:  Carpenter 158 Steel <br />
                  Bolt Carrier Profile:  Full Auto <br />
                  Fire Control Group:  Standard Mil-Spec Trigger Group <br />
                  Grip: Classic A2, Black <br />
                  Buffer Tube: 7075 T6 Aluminum  <br />
                  Adjustment: 6 Position <br />
                  Pistol Brace: Magpul BTR Pistol Stabilizing Brace <br />
                  Includes: PSA Carry Handle Assembly <br />
                </p>
              </div>
              <div className="product_card">
              <h4>Features:</h4>
              <p>
              Barrel: Chrome Moly steel phosphate coated barrel. Chambered in 5.56 NATO
              , with a 1/7 twist, M4 barrel extension, and a carbine-length gas system.  
              Barrel is finished off with a classic handguard,  F-Marked gas sight base, and A2 flash hider.
              <br />
              Upper: Forged 7075-T6 A3 AR upper is machined to MIL-SPECS and hard coat anodized.   
              Uppers include forward assist and dust cover.  These uppers are made for us right here in 
              the USA by a mil-spec manufacturer.
              <br />
              Bolt: Full-auto profile bolt carrier group.  Shot-peened, mil-spec Carpenter No. 158® steel bolt.  
              Gas Key Hardened to USGI Specifications, Fastened with Grade 8 screws, and Staked Per Mil-Spec. 
              <br />
              Lower: These forged lowers are quality made using 7075-T6 aluminum and are marked "MULTI" for caliber.
              Finish is hard coat anodize. Finished with an A2 Classic Grip, Magpul BTR Pistol Stabilizing Brace
              , and 6 position 7075 buffer tube.  The fire control group is a PSA mil-spec finished, single-stage assembly.
              </p>
              </div>
            </div>
          </div>
          <div className="reviews">
            <h2 className="title">Reviews</h2>
            <div className="overall">
              <h3>(Overall Rating 4.8 / 5)</h3>
              <div className="overall_stars">
                <div className="overall_star">
                  <h3>
                    <p>5 stars - 40</p>
                    <div className="stars" style={{color: "var(--main-color)"}}>
                      <>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                      </>
                    </div>
                  </h3>
                  <div className="the-progress"><span style={{width: "100%"}}></span></div>
                </div>
                <div className="overall_star">
                  <h3>
                    <p>4 stars - 8</p>
                    <div className="stars" style={{color: "var(--main-color)"}}>
                      <>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarBorderIcon />
                      </>
                    </div>
                  </h3>
                  <div className="the-progress"><span style={{width: "55%"}}></span></div>
                </div>
                <div className="overall_star">
                  <h3>
                    <p>3 stars - 5</p>
                    <div className="stars" style={{color: "var(--main-color)"}}>
                      <>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                      </>
                    </div>
                  </h3>
                  <div className="the-progress"><span style={{width: "35%"}}></span></div>
                </div>
                <div className="overall_star">
                  <h3>
                    <p>2 stars - 1</p>
                    <div className="stars" style={{color: "var(--main-color)"}}>
                      <>
                        <StarIcon />
                        <StarIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                      </>
                    </div>
                  </h3>
                  <div className="the-progress"><span style={{width: "20%"}}></span></div>
                </div>
                <div className="overall_star">
                  <h3>
                    <p>1 stars - 0</p>
                    <div className="stars" style={{color: "var(--main-color)"}}>
                      <>
                        <StarIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                      </>
                    </div>
                  </h3>
                  <div className="the-progress"><span style={{width: "0%"}}></span></div>
                </div>
              </div>
            </div>
            <div className="comments">
              <h2 className="title">Comments</h2>
              {
                comments.map(x => (
                  <div className="comment" key={x.id}>
                    <div className="img">
                      <img src={x.img} alt="" />
                    </div>
                    <div className="reviews_comment">
                      <h5 className="title">{x.name}</h5>
                      <div className="stars" style={{color: "var(--main-color)"}}>{product ? product.stars : "" }</div>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ex aut dolores itaque nulla. Molestiae voluptate libero nesciunt minus odio.</p>
                    </div>
                  </div>
                ))
              }
              <div className="pagination">

              </div>
            </div>
          </div>
          <div className="compliance">
            <h2 className="title">Compliance</h2>

          </div>
        </Container>
      </div>
      <div className="bottom_product">
        <Container>
          <div className="cards">
            {ProductSwiper(relatedProducts.slice(0, 8))}
          </div>
          <div className="cards">
            {ProductSwiper(relatedProducts.slice(9, 16))}
          </div>
        </Container>
      </div>
      <Brands />
    </div>
    :
    <div className="loading">
      <div className="loader-container">
        <div className="loader"></div>
        <div className="loader-text">Loading...</div>
      </div>
    </div> }
    </Helmet>
  )
}


export default ProductDetail