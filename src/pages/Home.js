import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="logo">
      <a href="https://bullzpot.com/"> <img src= "https://i.ibb.co/W0N16Lr/bullzpotlogo-png.png" alt="Logo" width="110" height="90" /></a>
</div>
      <div className="about">
        <h2> Best in Practice</h2>
        <h3 className="subtitle">Empowering Your Digital Presence with stunning Websites, 
        <span><br/> Cutting-Edge Apps, E-commerce Solutions and SEO services</span></h3>
        <div className="prompt">
          <p>Wanna Talk About a Project?</p>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
      <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer"><EmailIcon /></a>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><GithubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1>Our Tech Stack</h1>
        <ol className="list">
          <li className="item">
            <div className="jabi">
            <h2>Frontend Development</h2>
            <span>
              HTML 5, CSS 3, Vanilla JavaScript, JQuery, ReactJS, Flutter, 
              WordPress, Webflow, BootStrap
            </span>
            <span className="shopifystl">
              <br /><br /> <strong>Shopify:</strong> Theme Customization & Development,
              App Integration, Store Setup, Redesign, Migration, SEO, Product Management & Maintenance
              </span>
              </div>
          </li>

          <li className="item">
          <div className="jabi">
           <h2>Backend Development</h2>
            <span>
              NodeJS, Java Spring, GraphQL, Laravel,
              MongoDB, PHP, Laravel, MySQL, MS SQL
              </span>
              <span className="shopifystl">
              <br /><br /> <strong>Shopify:</strong> API, App, Bug Fix, Store Management,
              Scripts, Shipping & Payments 
              </span>
               </div>
          </li>

          <li className="item">
          <div className="jabi">
          <h2>Languages</h2>
            <span>JavaScript, Java, Python, Liquid, C, Ruby</span>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
