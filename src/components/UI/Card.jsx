import React from 'react'
import { useCart } from "react-use-cart";

// Material
import Button from '@mui/material/Button';

// Material Icons
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Link } from 'react-router-dom';

const Card = ({img, title, priceThen, ribbon, stars, items, price, id}) => {
    const { addItem } = useCart();
    
    return (
        <div className="card_item">
            <div className="image">
                <img src={img} alt="" />
            </div>
            {ribbon === "" ? "" : <div className="ribbon">{ribbon}</div>}
            <div className="title">
                <Link to={`/detail/${id}`}><p>{title}</p></Link>
                {items}
                <div className='card_list'>
                    <div className="stars">{stars}</div>
                    <div className="price">
                        <p>{priceThen}</p><p className="price_now">${price}</p>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <Button onClick={() => addItem({img, title, priceThen, ribbon, stars, items, price, id})} className='card_products-buton' variant="contained"><LocalGroceryStoreIcon sx={{marginRight: "10px"}} /><p>Add to Cart</p></Button>
            </div>
        </div>
    )
}

export default Card