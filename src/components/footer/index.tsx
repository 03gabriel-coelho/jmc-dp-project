import styles from "./index.module.css";
import { LuInstagram } from "react-icons/lu";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <h3>Contagem, Minas Gerais</h3>
      <div className={styles.contact}>
        <h3>Entre em contato já!</h3>
        <p>+55 31 99849-2779</p>
        <p>+55 31 3395-2023</p>
        <p>jmcconsultrh@gmail.com </p>
      </div>
      <div className={styles.links}>
        <a href="https://www.instagram.com/jmcconsultrh">
          <LuInstagram />
        </a>
        <a href="https://www.facebook.com/jmcconsultrh">
          <FaFacebookSquare />
        </a>
      </div>
    </div>
  );
}
