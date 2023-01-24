import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <img src="img/cat.png" alt="" className="footer-img" />
      <img src="img/cat.png" alt="" className="footer-img" />
      <div className="footer-info">
        <h5>Creado por Cristofer Rodríguez</h5>
        <p>Desarrollador Web</p>
        <div>
          <a href="https://github.com/crisrdz" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/cristofer-rodriguez-a49275254/" target="_blank">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
