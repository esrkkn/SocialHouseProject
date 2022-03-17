import "./Footer.css";
import {
  BsFillPinMapFill,
  BsFacebook

} from "react-icons/bs";
import {
    AiFillTwitterCircle
  } from "react-icons/ai";
  import {
    TiSocialLinkedinCircular
} from "react-icons/ti";
export default function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          SocialHouse<span>Project</span>
        </h3>

        <p className="footer-links">
          <a href="#" className="link-1">
            Home
          </a>

          <a href="#">Blog</a>

          <a href="#">Pricing</a>

          <a href="#">About</a>

          <a href="#">Faq</a>

          <a href="#">Contact</a>
        </p>

        <p className="footer-company-name">Social House © 2022</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span><BsFillPinMapFill style={{fontSize:20, margin:5}} /></span> <span>444 S. Cedros Ave</span> Solana Beach, California
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+1.555.555.5555</p>
        </div>

        <div>
          
          <p>
            <a href="mailto:support@company.com">support@socialhouse.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div className="footer-icons">
          <a href="#">
            <BsFacebook />
          </a>
          <a href="#">
            <AiFillTwitterCircle />
          </a>
          <a href="#">
            <TiSocialLinkedinCircular />
          </a>
        </div>
      </div>
    </footer>
  );
}
