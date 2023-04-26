import React from "react";
/*import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";*/
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
       {/* <InstagramIcon />
<TwitterIcon /> */}

       
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
        <a href="mailto:musfiqr002@gmail.com" target="_blank" rel="noopener noreferrer"><EmailIcon /></a>
      </div>
      <p> &copy; 2023 All Rights Reserved bullzpot.com</p>
    </div>
  );
}

export default Footer;