import React from 'react';
import Helmet from "../components/Helmet/Helmet";
// import useForm from '../Hooks/useForm';
import { useTranslation } from 'react-i18next';


// Material Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
 
import "../styles/logic.css"
import { Link } from 'react-router-dom';
function Login() {
  const [ t ] = useTranslation();
  const userAction = 'login';
  // const { changeHandler, submitHandler, errors } = useForm(userAction);


  return (
    <Helmet title="Login">
      <div className='logic_login_and_register'>
        <div className="logic">
          <form>
            <h1>{t("Login")}</h1>
            <ul class="icon-socil">
                <li><FacebookIcon className="icon-logic"/><span style={{"--clr-icon": "#1876f2"}}></span></li>
                <li><YouTubeIcon className="icon-logic"/><span style={{"--clr-icon": "red"}}></span></li>
                <li><WhatsAppIcon className="icon-logic"/><span style={{"--clr-icon": "#25d366"}}></span></li>
            </ul>
            <div>
                <label htmlFor="nameuserName">{t("Email")}:</label>
                <input type="email" name="email" />
                {/* {errors.email && <p className="error">{errors.email}</p>} */}
            </div>
            <div>
                <label htmlFor="password">{t("Password")}:</label>
                <input type="password" name="password" />
                <span><VisibilityIcon className='on' /><VisibilityOffIcon className='off' /></span>
                {/* {errors.password && <p className="error">{errors.password}</p>} */}
            </div>
            <button type="submit" >{t("Login")}</button>
            <p className="link_rigester">{t("Don't have an account?")} <Link to="/rigester">{t("Register")}</Link></p>
          </form>
        </div>
      </div>
    </Helmet>
  )
}

export default Login;