import styles from "./index.module.css";
import { LuInstagram } from "react-icons/lu";
import { FaFacebookSquare } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <h3>
        <FaMapMarkerAlt />
        Contagem, Minas Gerais
      </h3>
      <div className={styles.contact}>
        <h3>
          <FaPhoneVolume />
          Entre em contato já!
        </h3>
        <p>+55 31 99849-2779</p>
        <p>+55 31 3395-2023</p>
        <p>jmcconsultrh@gmail.com </p>
      </div>
      <div className={styles.links}>
        <a href="https://www.instagram.com/jmcconsultrh" target="_blank" rel="noopener noreferrer">
          <LuInstagram />
        </a>
        <a href="https://www.facebook.com/jmcconsultrh" target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare />
        </a>
        <a href="https://www.linkedin.com/company/jmc-consult-terceiriza%C3%A7%C3%A3o-depart-pessoal-folha-de-pagament" target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
}
