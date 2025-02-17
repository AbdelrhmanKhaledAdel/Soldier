import React, {useState} from 'react';
import { useCart } from "react-use-cart"
import Helmet from "../components/Helmet/Helmet"
// import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Style
import "../styles/cart.css"
import { Container } from 'react-bootstrap';

// Material
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

// Matriul Icon
import LockIcon from '@mui/icons-material/Lock';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

const Cart = () => {
    const { items, isEmpty, totalItems, updateItemQuantity, cartTotal, removeItem, emptyCart } = useCart();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const navigate = useNavigate();
    // const {user} = useAuth();
    // const handleCheck = () => {
    //     if(user) {
    //         handleOpen()
    //     }else {
    //         navigate('/login')
    //     }
    // }

  return (
    <Helmet title="Cart Item">
        <Container>
            <div className="products_list" style={{padding: "60px 0"}}>
                {
                    isEmpty === true ? <div className="isEmptyFalse">
                        <div className="page">
                            <div className="image">
                                <img src={require("../assets/all_images/cart.png")} alt="" />
                            </div>
                            <h2>Your Cart is Empty</h2>
                            <p style={{color: "gray"}}>The purchases you add to the cart will occur in this list</p>
                            <Link to="/home"><Button className='isEmptyFalse_button' variant="contained">Back To Home</Button></Link>
                        </div>
                    </div> : <div className="isEmptyTrue">
                        <div className="title_cart">
                            <h2>Shopping Cart ({totalItems} item)</h2>
                        </div>
                        <div className="cart_list">
                            <div className="carts">
                            {
                                items.map((item) => {
                                    return (
                                        <div className="cart" key={item.id}>
                                            <img src={item.img} alt="" />
                                            <div className="title">
                                                <h4>{item.title}</h4>
                                            </div>
                                            <div>
                                                <div className="quantity">
                                                    <RemoveOutlinedIcon sx={{cursor: "pointer", margin: "7px 12px"}} onClick={() => updateItemQuantity(item.id, item.quantity - 1)} />
                                                    <span>{item.quantity}</span>
                                                    <AddOutlinedIcon sx={{cursor: "pointer", margin: "7px 12px"}} onClick={() => updateItemQuantity(item.id, item.quantity + 1)} />
                                                </div>
                                                <div className="price">
                                                    <p className="price_now">${item.price}</p><p>{item.priceThen}</p>
                                                </div>
                                            </div>
                                            {item.ribbon === "" ? "" : <div className="ribbon">{item.ribbon}</div>}
                                            <div className="delete">
                                            <Button variant="contained" sx={{color: "white"}}  onClick={() => removeItem(item.id)}><DeleteOutlineOutlinedIcon sx={{marginRight: "10px"}} />Delet</Button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            </div>
                            <div className="total_carts">
                                <p style={{fontWeight: "bold"}}>Total :  <span style={{color: "var(--main-color)"}}>${cartTotal.toFixed(2)}</span></p>
                                <div className="buttons">
                                    <Button className='clear' variant="contained" onClick={() => emptyCart()} >Clear</Button>
                                    <Button className='buy' variant="contained">Buy Now</Button>
                                </div>
                            </div>
                        </div>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: "95%",
                                maxWidth: "500px",
                                bgcolor: 'var(--background)',
                                border: 'none',
                                outline: "none",
                                boxShadow: "-2px 2px 70px -25px rgba(0, 0, 0, 0.3)",
                                p: 4,
                                borderRadius: "8px",
                            }}>
                                
                            </Box>
                        </Modal>
                    </div>
                } 
            </div>
        </Container>
    </Helmet>
  )
}

export default Cart