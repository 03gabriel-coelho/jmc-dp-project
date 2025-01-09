import styles from "./index.module.css";

export default function Section() {
  return (
    <section className={styles.section}>
      <h1 className={styles.section_description_one}>
        Administramos todo o processo de Departamento
        Pessoal e Folha de Pagamento!
      </h1>
      <a className={styles.section_contact} href="https://wa.me/553198492779">
        <p>
          Entre em contato agora!
        </p>
      </a>
      <h1 className={styles.section_description_two}>
        Os serviços vão desde as boas-vindas ao funcionário, passando pelo
        controle dos benefícios, até a sua homologação.
      </h1>
    </section>
  );
}
