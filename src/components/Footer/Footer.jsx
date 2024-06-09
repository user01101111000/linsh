import style from "./Fotter.module.css";
import logo from "../../assets/images/logoW.svg";

import icon1 from "../../assets/images/icon-facebook.svg";
import icon2 from "../../assets/images/icon-instagram.svg";
import icon3 from "../../assets/images/icon-pinterest.svg";
import icon4 from "../../assets/images/icon-twitter.svg";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <img src={logo} alt="footerImg" className={style.logo} />

      <article className={style.footerText}>
        <ul className={style.listNormal}>
          <li>Features</li>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>

        <ul className={style.listNormal}>
          <li>Resources</li>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>

        <ul className={style.listNormal}>
          <li>Company</li>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>

        <ul className={style.iconList}>
          <img src={icon1} alt="icon1" />
          <img src={icon2} alt="icon2" />
          <img src={icon3} alt="icon3" />
          <img src={icon4} alt="icon4" />
        </ul>
      </article>
    </footer>
  );
}
