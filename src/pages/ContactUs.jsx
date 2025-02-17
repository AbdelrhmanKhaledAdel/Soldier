import React from 'react';
import Helmet from "../components/Helmet/Helmet"
import { Container } from 'react-bootstrap';
import Chatbot from "../components/UI/Chatbot"

// Material
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

// Material Icons
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

// Other
import { v4 as uuidv4 } from "uuid";

// Style
import "../styles/contact.css";
import { Link } from 'react-router-dom';


const items = [
  {
    id: uuidv4(),
    icon: <LocalPhoneIcon />,
    content: <div className="content">
      <span>For the fastest response, please use our Chat.</span>
      <div className="buttons">
        <Button variant="contained" sx={{color: "#fff"}}>Chat</Button>
        <Button variant="contained" sx={{color: "var(--main-color)"}}>Contact Us</Button>
      </div>
      <span><span>Representative Hours:</span><br />Mon–Fri, 9am–5pm EST</span>
      <span><span>Virtual Agent:</span><br />24/7</span>
    </div>
  },
  {
    id: uuidv4(),
    icon: <HomeIcon />,
    content: <div className="content">
      <ul>
        <li>Store Locations</li>
        <li>PSA Defense</li>
        <li>FFL Locator</li>
        <li>Retail Return Policy</li>
      </ul>
    </div>
  },
  {
    id: uuidv4(),
    icon: <InfoOutlinedIcon />,
    content: <div className="content">
      <ul>
        <li>Product Manuals</li>
        <li>Terms & Conditions</li>
        <li>Warranties</li>
        <li>Returns</li>
        <li>Gift Card Balance</li>
      </ul>
    </div>
  },
  {
    id: uuidv4(),
    icon: <LocalShippingOutlinedIcon />,
    content: <div className="content">
      <ul>
        <li>Order Tracking</li>
        <li>FAQs</li>
        <li>Cancellations</li>
        <li>Shipping Times</li>
        <li>Firearm Shipments</li>
      </ul>
    </div>
  },
]



const ContactUs = () => {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Helmet title="Contact Us">
      <div className="contact_us">
        <div className="title">
          <Container>
            <h2>Contact Us</h2>
          </Container>
        </div>
        <div className="items">
          <Container>
            {
              items.map(x => (
                <div className="item" key={x.id}>
                  <div className="icon" style={{textAlign: "center"}}>{x.icon}</div>
                  {x.content}
                </div>
              ))
            }
            <div className="item">
              <div className="content">
                <h5>DPMS Dealer Registration Now Open!</h5>
                <span>Want to become a DPMS Dealer?</span>
                <p>Exclusive Pricing</p>
                <p>Easy Ordering</p>
                <p>Dedicated Sales Rep</p>
                <Button variant="contained" sx={{color: "#fff", marginTop: "10px"}}>Continue</Button>
              </div>
            </div>
            <div className="item">
              <div className="content">
                <h5>SC Firearm Training</h5>
                <span>Interested in South Carolina CWP classes or instructional firearm training?</span>
                <p>SC CWP Classes</p>
                <p>Qualified Instructors</p>
                <Button variant="contained" sx={{color: "#fff", marginTop: "10px"}}>Register</Button>
              </div>
            </div>
          </Container>
        </div>
        <div className="contact">
          <Container>
            <div className='highlighted'>
              <div className="highlighted_content">
                <span style={{borderRight: "1px solid gray"}}>Phone: <span><Link to="#">877-560-7229</Link></span></span>
                <span style={{borderRight: "1px solid gray"}}>General Fax: <span>803-233-9199</span></span>
                <span>*FFL Fax: <span>803-788-7979</span></span>
              </div>
              <p>*Only use the FFL Fax for FFL License updates and/or submissions. Please use the general fax for all other inquiries.</p>
              <p>If you're contacting us about product inventory, we cannot assist you. Please check our website daily for inventory information. You can also go to our website and sign up for email blasts.</p>
              <p>Please utilize the (<Link to="/faq">FAQ</Link>) Frequently Ask Questions before sending the contact form. You can find information regarding order status, order cancellations, returns, product repairs, and other helpful information.</p>
            </div>
            <form>
            <div className="div_form">
                <div className="input">
                  <label>Name</label>
                  <input type="text" placeholder='Enter Name' />
                </div>
              </div>
              <div className="div_form">
                <div className="input">
                  <label>Email</label>
                  <input type="email" placeholder='Enter Email' />
                </div>
                <div className="input">
                  <label>Phone</label>
                  <input type="number" placeholder='(000) 000-0000' />
                </div>
              </div>
              <div className="div_form">
                <div className="input">
                  <label>Contact Reason</label>
                  <FormControl sx={{ m: 1, minWidth: 220 }}>
                        <Select
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        >
                        <MenuItem value="">
                            <em>Select a Reason</em>
                        </MenuItem>
                        <MenuItem value={10}>Order Status Request</MenuItem>
                        <MenuItem value={20}>Order Cancellation Request</MenuItem>
                        <MenuItem value={30}>Return Merchandise Authorization (RMA) Request</MenuItem>
                        <MenuItem value={40}>Problem with a PSA Product</MenuItem> 
                        <MenuItem value={50}>Repair Status Request</MenuItem> 
                        <MenuItem value={60}>Incorrect / Incomplete Order Received</MenuItem> 
                        <MenuItem value={70}>UPS Related Claim Issues</MenuItem> 
                        <MenuItem value={80}>FFL Questions</MenuItem> 
                        <MenuItem value={90}>Submit FFL License Documents (Only)</MenuItem> 
                        </Select>
                    </FormControl>
                </div>
                <div className="input">
                  <label>Order Number</label>
                  <input type="number" placeholder='Enter Order Number' />
                </div>
              </div>
              <div className="div_form">
                <div className="input">
                  <label>Detailed Description of Issue</label>
                  <textarea placeholder='Enter Message'></textarea>
                </div>
              </div>
              <Button variant="contained" sx={{color: "white"}}>Send Message</Button>
            </form>
          </Container>
        </div>
        <Chatbot />
      </div>
    </Helmet>
  )
}

export default ContactUs