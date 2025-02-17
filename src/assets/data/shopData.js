// Material Icons
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

// Images > Products Cards
import product_01 from "../../assets/all_images/cards/AR-15_pistol.png";
import product_02 from "../../assets/all_images/cards/bun-331.png";
import product_03 from "../../assets/all_images/cards/PSA_AR15.png";
import product_04 from "../../assets/all_images/cards/beretta.png";
import product_05 from "../../assets/all_images/cards/PSA_AR15.png";
import product_06 from "../../assets/all_images/cards/bun_256.png";
import product_07 from "../../assets/all_images/cards/nato_ammo.png";
import product_08 from "../../assets/all_images/cards/winchester.png";

// Image > Categories Cards
import magtech from "../../assets/all_images/cards/2302-magtech-40-s_w-fmj.png";
import soviet from "../../assets/all_images/cards/soviet.png";
import blem_gen3 from "../../assets/all_images/cards/blem gen3.png";
import eotech from "../../assets/all_images/cards/eotech.png";
import ept_moe_lower from "../../assets/all_images/cards/ept_moe_lower.png";
import Pistol from "../../assets/all_images/cards/Pistol.png";
import beretta_a300 from "../../assets/all_images/cards/beretta_a300.png";
import bag_3mags from "../../assets/all_images/cards/bag_3mags.png";

const datas = [
  {
    id: 1,
    priceThen: "$829.99",
    img: product_01,
    ribbon: "Save 35%",
    title: `PSA AR-15 PISTOL 10.5" CARBN 5.56 NITRIDE MOE EPT MFT BATTLELINK, FDE`,
    stars: <>
    <StarIcon className='card_star' />
    <StarIcon className='card_star' />
    <StarHalfIcon className='card_star' />
    <StarBorderIcon className='card_star' />
    <StarBorderIcon className='card_star' />
    </>,
    items: "",
    price: 599.99,
    brand: "Palmetto State Armory",
    modelNumber: 1,
    caliber: "5.56x45mm",
    upc: 1,
    component: "Products"
},
{
    id: 2,
    priceThen: "$9.99",
    img: product_02,
    ribbon: "Save 70%",
    title: `Winchester 12ga 2.75" 9 Pellet 00 Buck Shotshell Ammunition 5rds - XB1200`,
    stars: <>
    <StarIcon className='card_star' />
    <StarIcon className='card_star' />
    <StarIcon className='card_star' />
    <StarIcon className='card_star' />
    <StarHalfIcon className='card_star' />
    </>,
    items: <div className="items">
    <div className="free_shoping" style={{"--clr": "red"}}><LocalShippingIcon style={{fontSize: "16px"}} />Free Shoping</div>
    <div className="day" style={{"--clr": "#2196F3"}}><HourglassTopIcon style={{fontSize: "16px"}} /> Deal Of The Day</div>
    </div>,
    price: 2.99,
    brand: "Winchester",
    modelNumber: "XB1200",
    caliber: "12 Gauge",
    upc: "744775679996",
    component: "Products"
},
{
    id: 3,
    priceThen: "$319.99",
    img: product_03,
    ribbon:  "Save 48%",
    title: `PSA AR15 MFT Minimalist EPT Lower, Black`,
    stars: <>
    <StarIcon className='card_star' />
    <StarIcon className='card_star' />
    <StarIcon className='card_star' />
    <StarIcon className='card_star' />
    <StarIcon className='card_star' />
    </>,
    items: "",
    price: 149.99,
    brand: "Palmetto State Armory",
    modelNumber: 3,
    caliber: "",
    upc: 3,
    component: "Products"
},
{
    id: 4,
    priceThen: "$699.99",
    img: product_04,
    ribbon: "Save 50%",
    title: `Beretta Model 84 BB 3.8" 13rd .380ACP Pistol, LE Trade In Excellent Condition`,
    stars: <>
    <StarIcon className='card_star' />
    <StarIcon className='card_star' />
    <StarHalfIcon className='card_star' />
    <StarBorderIcon className='card_star' />
    <StarBorderIcon className='card_star' />
    </>,
    items: <div className="items">
    <div className="free_shoping" style={{"--clr": "red"}}><LocalShippingIcon style={{fontSize: "16px"}} />Free Shoping</div>
    </div>,
    price: 399.99,
    brand: "Palmetto State Armory",
    modelNumber: 4,
    caliber: "5.56x45mm",
    upc: "",
    component: "Products"
},
{
    id: 5,
    priceThen: "$199.99",
    img: product_05,
    ribbon: "Save 30%",
    title: `PSA CLASSIC AR-15 5.56 Complete Stealth Pistol Lower W/HAR-15 BRACE`,
    stars: <>
    <StarIcon className='card_star' />
    <StarIcon className='card_star' />
    <StarIcon className='card_star' />
    <StarIcon className='card_star' />
    <StarHalfIcon className='card_star' />
    </>,
    items: <div className="items">
    <div className="day" style={{"--clr": "#2196F3"}}><HourglassTopIcon style={{fontSize: "16px"}} /> Deal Of The Day</div>
    </div>,
    price: 129.99,
    brand: "Palmetto State Armory",
    modelNumber: "",
    caliber: "5.56x45mm",
    upc: "",
    component: "Products"
},
{
    id: 6,
    priceThen: "$770.99",
    img: product_06,
    ribbon: "Save 30%",
    title: `PSA GEN4 16" 9MM 1/10 13.5" Molk Classic Rifle & 10 Magpul Pmag Gl9 9MM 27RD Magazine MAG662`,
    stars: <>
    <StarIcon className='card_star' />
    <StarIcon className='card_star' />
    <StarIcon className='card_star' />
    <StarIcon className='card_star' />
    <StarIcon className='card_star' />
    </>,
    items: <div className="items">
    <div className="free_shoping" style={{"--clr": "red"}}><LocalShippingIcon style={{fontSize: "16px"}} />Free Shoping</div>
    </div>,
    price: 699.99,
    brand: "Palmetto State Armory",
    modelNumber: "",
    caliber: "",
    upc: "",
    component: "Products"
},
{
    id: 7,
    priceThen: "$12.49",
    img: product_07,
    ribbon: "Save 16%",
    title: `AAC 5.56 NATO Ammo 77 Grain OTM 20rds`,
    stars: <>
    <StarIcon className='card_star' />
    <StarIcon className='card_star' />
    <StarIcon className='card_star' />
    <StarIcon className='card_star' />
    <StarIcon className='card_star' />
    </>,
    items: <div className="items"></div>,
    price: 10.99,
    brand: "AAC",
    modelNumber: "AAC4533-10",
    caliber: "5.56x45mm",
    upc: "",
    component: "Products"
},
{
    id: 8,
    priceThen: "$799.99",
    img: product_08,
    ribbon: "Save 30%",
    title: `Winchester M855 5.56 Bulk Ammo 62 Grain FMJ 1000rds - WM8551000`,
    stars: <>
    <StarIcon className='card_star' />
    <StarIcon className='card_star' />
    <StarIcon className='card_star' />
    <StarIcon className='card_star' />
    <StarHalfIcon className='card_star' />
    </>,
    items: <div className="items">
    <div className="free_shoping" style={{"--clr": "red"}}><LocalShippingIcon style={{fontSize: "16px"}} />Free Shoping</div>
    <div className="day" style={{"--clr": "#2196F3"}}><HourglassTopIcon style={{fontSize: "16px"}} /> Deal Of The Day</div>
    </div>,
    price: 599.99,
    brand: "Winchester",
    modelNumber: "WM453454",
    caliber: "5.56x45mm",
    upc: "555454232",
    component: "Products"
},
{
  id: 9,
  priceThen: "",
  img: magtech,
  ribbon: "",
  title: `Magtech 40 S&W 180gr FMJ Ammunition 50rds - 40B`,
  stars: <>
  <StarIcon className='card_star' />
  <StarIcon className='card_star' />
  <StarIcon className='card_star' />
  <StarIcon className='card_star' />
  <StarHalfIcon className='card_star' />
  </>,
  price: 18.99,
  brand: "Magtech",
  modelNumber: "40B",
  caliber: ".40 S&W",
  upc: "9808908",
  component: "Categories"
},
{
  id: 10,
  img: soviet,
  ribbon: "",
  title: `Soviet Arms 5.56 Krink Triangle Side Folding Pistol, Redwood`,
  stars: <>
  <StarIcon className='card_star' />
  <StarIcon className='card_star' />
  <StarIcon className='card_star' />
  <StarHalfIcon className='card_star' />
  <StarBorderIcon className='card_star' />
  </>,
  price: 999.99,
  brand: "Palmetto State Armory",
  modelNumber: "",
  caliber: "5.56x45mm",
  upc: "",
  component: "Categories"
},
{
  id: 11,
  img: blem_gen3,
  ribbon: "",
  title: `BLEM Gen3 PA10 Stripped Lower Receiver`,
  stars: <>
  <StarIcon className='card_star' />
  <StarIcon className='card_star' />
  <StarIcon className='card_star' />
  <StarIcon className='card_star' />
  <StarIcon className='card_star' />
  </>,
  price: 89.99,
  brand: "Palmetto State Armory",
  modelNumber: 11,
  caliber: "",
  upc: 11,
   component: "Categories"
},
{
  id: 12,
  img: eotech,
  ribbon: "",
  title: `EOTech Model G33 3X Magnifier with STS Mount - G33.STS`,
  stars: <>
  <StarIcon className='card_star' />
  <StarIcon className='card_star' />
  <StarIcon className='card_star' />
  <StarHalfIcon className='card_star' />
  <StarBorderIcon className='card_star' />
  </>,
  price: 699.99,
  brand: "EOTech",
  modelNumber: "G33.STS",
  caliber: "",
  upc: "453543",
   component: "Categories"
},
{
  id: 13,
  img: ept_moe_lower,
  ribbon: "",
  title: `PSA AR-15 EPT MOE Lower Parts Kit`,
  stars: <>
  <StarIcon className='card_star' />
  <StarIcon className='card_star' />
  <StarIcon className='card_star' />
  <StarIcon className='card_star' />
  <StarIcon className='card_star' />
  </>,
  price: 69.99,
  brand: "Palmetto State Armory",
  modelNumber: 13,
  caliber: ".223 Remington, 5.56x45mm",
  upc: 13,
  component: "Categories"
},
{
  id: 14,
  img: Pistol,
  ribbon: "",
  title: `PSA AR-15 Pistol 5.56 10.5" Carbine 1/7 Phos. 9" LTWT M-Lok MOE+ EPT SBA4, FDE`,
  stars: <>
  <StarIcon className='card_star' />
  <StarIcon className='card_star' />
  <StarIcon className='card_star' />
  <StarBorderIcon className='card_star' />
  <StarBorderIcon className='card_star' />
  </>,
  price: 559.99,
  brand: "Palmetto State Armory",
  modelNumber: 14,
  caliber: "5.56x45mm",
  upc: 14,
  component: "Categories"
},
{
  id: 15,
  img: beretta_a300,
  ribbon: "",
  title: `Beretta A300 Ultima 20ga 28" Shotgun, Realtree Max 7 Camo - J32TS28`,
  stars: <>
  <StarIcon className='card_star' />
  <StarIcon className='card_star' />
  <StarIcon className='card_star' />
  <StarHalfIcon className='card_star' />
  <StarBorderIcon className='card_star' />
  </>,
  price: 749.99,
  brand: "Beretta",
  modelNumber: "J435T56",
  caliber: "20 Gauge",
  upc: "353543225",
   component: "Categories"
},
{
  id: 16,
  priceThen: "",
  img: bag_3mags,
  ribbon: "",
  title: `PSA Soft Pistol Case & 3x 15 Round Pmag Bundle`,
  stars: <>
  <StarIcon className='card_star' />
  <StarIcon className='card_star' />
  <StarIcon className='card_star' />
  <StarIcon className='card_star' />
  <StarHalfIcon className='card_star' />
  </>,
  price: 49.99,
  brand: "",
  modelNumber: "",
  caliber: "",
  upc: "",
   component: "Categories"
},
]

export default datas;