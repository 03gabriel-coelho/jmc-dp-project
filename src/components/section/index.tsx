import styles from "./index.module.css";

export default function Section() {
  const phone = "553198492779";
  const message = encodeURIComponent("Olá, gostaria de fazer um orçamento!");
  const whatsappURL = `https://api.whatsapp.com/send/?phone=${phone}&text=${message}&type=phone_number&app_absent=0`;

  return (
    <section className={styles.section}>
      <h1 className={styles.section_description_one}>
        JMC Consult RH - Soluções Estratégicas em Gestão de DP e RH
      </h1>
      <a
        className={styles.section_contact}
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Entre em contato agora!</p>
      </a>
      <h1 className={styles.section_description_two}>
        Os serviços vão desde as boas-vindas ao funcionário, passando pelo
        controle dos benefícios, até a sua homologação.
      </h1>
    </section>
  );
}
