import styles from "./index.module.css";

export default function Section() {
  return (
    <section className={styles.section}>
      <h1 className={styles.section_description_one}>
        JMC Consult RH - Soluções Estratégicas em Gestão de DP e RH
      </h1>
      <a
        className={styles.section_contact}
        href="https://wa.me/553198492779"
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
