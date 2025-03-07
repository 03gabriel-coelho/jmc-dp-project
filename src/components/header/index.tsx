"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import JMCHeader from "document/images/jmc-header.png";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Header() {
  const phone = "553198492779";
  const message = encodeURIComponent("Olá, gostaria de fazer um orçamento!");
  const whatsappURL = `https://api.whatsapp.com/send/?phone=${phone}&text=${message}&type=phone_number&app_absent=0`;
  return (
    <header className={styles.header}>
      <Image
        src={JMCHeader}
        alt="JMC Logo / Departamento Pessoal / Recursos Humanos"
        width={150}
      />
      <section>
        <Link href="#about">
          <h2>Sobre</h2>
        </Link>
        <Link href="#services">
          <h2>Serviços</h2>
        </Link>
      </section>
      <button
        onClick={() => {
          window.open(whatsappURL, "_blank");
        }}
      >
        <p>+55 31 99849-2779</p>
        <IoLogoWhatsapp />
      </button>
    </header>
  );
}
