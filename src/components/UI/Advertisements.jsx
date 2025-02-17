import React from 'react';
import { useTranslation } from 'react-i18next';

// Style 
import "../../styles/advertisements.css"

// Images
import coffee from "../../assets/all_images/advertisements/caliber-coffee.jpg";
import rebate_deals from "../../assets/all_images/advertisements/rebate_deals.jpg";
import build_kits from "../../assets/all_images/advertisements/build_kits.jpg";
import magazines from "../../assets/all_images/advertisements/magazines.jpg";
import caliber from "../../assets/all_images/advertisements/caliber.jpg";
import shop from "../../assets/all_images/advertisements/shop.jpg";
import magpul from "../../assets/all_images/advertisements/magpul.jpg";
import bulk from "../../assets/all_images/advertisements/bulk-ammo-60.jpg";
import jaki from "../../assets/all_images/advertisements/jaki.jpg";
import { Container } from "react-bootstrap";




function Advertisements() {
    const [ t ] = useTranslation();

  return (
    <section>
        <Container>
            <div className="section_title">
                <h2 className="main_title">{t("Items To Explore")}</h2>
            </div>
            <div>
                <div className="square">
                    <img src={coffee} style={{width: "100%", borderRadius: "8px"}} alt="" />
                    <div className="items">
                        <div className="item">
                            <img src={rebate_deals} alt="" />
                            <h3>{t("Rebate Deals")}</h3>
                        </div>
                        <div className="item">
                            <img src={build_kits} alt="" />
                            <h3>{t("Build Kits & Parts")}</h3>
                        </div>
                        <div className="item">
                            <img src={magazines} alt="" />
                            <h3>{t("Magazines")}</h3>
                        </div>
                    </div>
                    <div className="items cards">
                         <div className="item">
                            <img src={shop} alt="" />
                            <h3>{t("SHOP BY BRAND")}</h3>
                        </div>
                        <div className="item">
                            <img src={caliber} alt="" />
                            <h3>{t("SHOP AMMO BY CALIBER")}</h3>
                        </div>
                    </div>
                    <div className="items">
                        <div className="item">
                            <img src={magpul} alt="" />
                            <h3>{t("MAGPUL")}</h3>
                        </div>
                        <div className="item">
                            <img src={bulk} alt="" />
                            <h3>{t("Bulk Ammo")}</h3>
                        </div>
                        <div className="item">
                            <img src={jaki} alt="" />
                            <h3>{t("PSA DEFENSE")}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
    
  )
}

export default Advertisements;