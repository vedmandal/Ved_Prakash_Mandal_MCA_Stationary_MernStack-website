import React from 'react'


import img1 from "../../pages/assets/img/logo.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <footer className="footer">
  <div className="footer__container container  grid">
    <div>
      <a href="#" className="footer__logo">
        <img src={img1} />R P ENTERPRISE
      </a>
      <p className="footer__description">
      You Too Can Have A Pencil Like Mine. <br />
      Stationeries With Sand <br />
      Go To Work On A Stationery.
       
      </p>
    </div>
    <div className="footer__container container  grid">
    <div className="footer__content">
      <div >
        <h3 className="footer__title">
          MainMENU
        </h3>
        <ul className="footer__links">
          <li>
            <a className="footer__links"> About</a>
          </li>
          <li>
            <a className="footer__links">Support</a>
          </li>
          <li>
            <a className="footer__links">Cookies</a>
          </li>
          
        </ul>
      </div>
      <div>
        <h3 className="footer__title">
          Information
        </h3>
        <ul className="footer__links">
          <li>
            <a className="footer__links">Contact:-9110155121</a>
          </li>
          <li>
            <a className="footer__links">Order &amp; Returns</a>
          </li>
          
          <li>
            <a className="footer__links">Reservation</a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="footer__title">
          Address
        </h3>
        <ul className="footer__links">
          <li>
            <a className="footer__links">Dhobinala police point ,<br />Near state bank of india.
             <br/> Dimapur,Nagaland</a>
          </li>
          <li>
            <a className="footer__links">7AM -7PM</a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="footer__title">
          SocialMedia
        </h3>
        <ul className="footer__social">
          <Link className="footer__social_links">
            <i className="ri-facebook-circle-fill" />
          </Link>
          <Link className="footer__social_links">
            <i className="ri-instagram-fill" />
          </Link>
          <Link className="footer__social_links">
            <i className="ri-twitter-line" />
          </Link>
        </ul>
      </div>
    </div>

    </div>
    
  </div>
</footer>

  
   
  
  )
}

export default Footer