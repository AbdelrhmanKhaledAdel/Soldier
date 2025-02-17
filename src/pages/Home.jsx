/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Helmet from "../components/Helmet/Helmet"
import { Container } from "react-bootstrap";
import Card from "../components/UI/Card";
import { useCart } from "react-use-cart"
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
// Material
import Button from '@mui/material/Button';

// Material Icons
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

// UI
import Landing from "../components/UI/Landing";
import Categories from "../components/UI/Categories";
import Advertisements from "../components/UI/Advertisements";
import Brands from "../components/UI/Brands";
import datas from "../assets/data/shopData"





const Home = () => {
    const { addItem } = useCart();

    const [ t ] = useTranslation();

   


    return(
        <Helmet title="Home">
            <Landing />
            <section>
                <Container>
                    <div className="section_title">
                        <h2 className="main_title">{t("Trending Categories")}</h2>
                    </div>
                    <Categories />
                </Container>
            </section>
            <section>
                <Container>
                    <div className="section_title">
                        <h2 className="main_title">{t("New Products Deals")}</h2>
                    </div>
                    <div className="cards_items">
                        {
                           datas.filter(data => data.component === "Products").slice(0, 8).map(({img, title, priceThen, ribbon, stars, items, price, id}) => {
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
                </Container>
            </section>
            <Advertisements />
            <Brands />
        </Helmet>
    )
};

export default Home;
