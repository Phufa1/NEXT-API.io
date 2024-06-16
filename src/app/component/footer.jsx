
import '../globals.css';
// src/app/components/Footer.js
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <footer className="footer section">
        <div className="footer__container container grid">
          <div className="footer__content">
            <a href="#" className="footer__logo">
              <Image src="https://res.cloudinary.com/dstmjurm9/image/upload/v1718442562/logo_th4p6e.webp" width="500" height="500" alt="" className="nav__logo-img" />
              Nice to meet you.
            </a>
            <p className="footer__description">
              Contact me <br />
              With icon contact below
            </p>
            <div className="footer__social">
              <a href="https://www.facebook.com/phufapp/" target="_blank" className="footer__social-link">
                <i className="bx bxl-facebook" />
              </a>
              <a href="https://www.instagram.com/ppphufa/" target="_blank" className="footer__social-link">
                <i className="bx bxl-instagram-alt" />
              </a>
              {/*<a href="https://twitter.com/" target="_blank" className="footer__social-link">
              <i className="bx bxl-twitter"></i>
            </a>*/}
            </div>
          </div>
          <div className="footer__content">
            <h3 className="footer__title">About</h3>
            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">About Us</a>
              </li>
              {/*<li>
              <a href="#" className="footer__link">Features</a>
            </li>
            <li>
              <a href="#" className="footer__link">News</a>
            </li>*/}
            </ul>
          </div>
          <div className="footer__content">
            <h3 className="footer__title">Skill Work</h3>
            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">WorkShop</a>
              </li>
              {/*<li>
              <a href="#" className="footer__link">Discounts</a>
            </li>
            <li>
              <a href="#" className="footer__link">Shipping mode</a>
            </li>*/}
            </ul>
          </div>
          {/*<div className="footer__content">
          <h3 className="footer__title">Our Company</h3>
          <ul className="footer__links">
            <li>
              <a href="#" className="footer__link">Blog</a>
            </li>
            <li>
              <a href="#" className="footer__link">About us</a>
            </li>
            <li>
              <a href="#" className="footer__link">Our mission</a>
            </li>
          </ul>
        </div>*/}
        </div>
        <span className="footer__copy">© Bedimcode. All rights reserved</span>
        <Image src="https://res.cloudinary.com/dstmjurm9/image/upload/v1718442562/footer1-img_hr3vdx.png" width="500" height="500" alt="" className="footer__img-one" />
        <Image src="https://res.cloudinary.com/dstmjurm9/image/upload/v1718442562/footer2-img_jg1g08.png" width="500" height="500" alt="" className="footer__img-two" />
      </footer>
    </div>
  );
};


