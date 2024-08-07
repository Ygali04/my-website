import React from 'react'

//styles
import "../css-components/Footer.css"

//assets & icons
import { 
    Email, 
    LinkedIn,
    Instagram, 
    Twitter, 
    Facebook, 
    Youtube} from '@material-ui/icons'
    /*
        TO DO: 
         - Github svg
         - Medium Article svg
         - link accounts

        Extra:
         - make a social button component
    */

function Footer() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="footer">
        <div className="socials"> 
            <div className="socialButton">
                <button onClick={() => {}}>
                    <Email />
                </button>
                <button onClick={() => {
                    openInNewTab("https://www.linkedin.com/in/yahvin-gali/");
                    return null;
                }}> 
                    <LinkedIn />
                </button>
        </div>
        </div>
        <p> &copy; 2024 yahvingali.com</p>
    </div>
  )
}

export default Footer