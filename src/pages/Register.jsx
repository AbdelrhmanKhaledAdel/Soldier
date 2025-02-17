import React from 'react';
import Helmet from "../components/Helmet/Helmet";
// import useForm from '../Hooks/useForm';
import "../styles/logic.css"
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Material Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import GoogleIcon from '@mui/icons-material/Google';

const Register = () => {
  const [ t ] = useTranslation();
  const userAction = 'register';
  // const { changeHandler, submitHandler, errors } = useForm(userAction);


  return (
    <Helmet title="Register">
      <div className='logic_login_and_register'>
        <div className="logic">
          <form>
            <h1>{t("Register")}</h1>
            <ul class="icon-socil">
                <li><FacebookIcon className="icon-logic"/><span style={{"--clr-icon": "#1876f2"}}></span></li>
                <li><GoogleIcon className="icon-logic"/><span style={{"--clr-icon": "red"}}></span></li>
                <li><WhatsAppIcon className="icon-logic"/><span style={{"--clr-icon": "#25d366"}}></span></li>
            </ul>
            <div className='user_image'>
                <img src={require("../assets/all_images/avatar.png")} alt="" />
                <div className="holder">
                  <input type="file" name="file" />
                  <BorderColorOutlinedIcon className='icon_edit' />
                </div>
            </div>
            <div>
                <label htmlFor="nameuserName">{t("userName")}:</label>
                <input type="text" name="name" />
            </div>
            <div>
                <label htmlFor="nameuserName">{t("Email")}:</label>
                <input type="email" name="email" />
            </div>
            <div>
                <label htmlFor="password">{t("Password")}:</label>
                <input type="password" name="password" />
                <span><VisibilityIcon className='on' /><VisibilityOffIcon className='off' /></span>
            </div>
            <div>
                <label htmlFor="password">{t("Confirm Password")}:</label>
                <input type="password" name="confirm password" />
                <span><VisibilityIcon className='on' /><VisibilityOffIcon className='off' /></span>
            </div>
            <button type="submit" >{t("Register")}</button>
            <p className="link_rigester"> {t("Already have an account?")} <Link to="/login">{t("Login")}</Link></p>
          </form>
        </div>
      </div>
    </Helmet>
  );
};

export default Register