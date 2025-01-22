import styles from "./index.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { FaChess } from "react-icons/fa";
import { GiAlarmClock } from "react-icons/gi";
import { GiProfit } from "react-icons/gi";

export default function SecondSection() {
  return (
    <section className={styles.second_section}>
      <div className={styles.second_section_container}>
        <div className={styles.second_section_header_one}>Reduzir Custos</div>
        <div className={styles.second_section_header_two}>
          <IoIosArrowForward />
        </div>
        <div className={styles.second_section_header_three}>
          Aumentar Produtividade
        </div>
        <div className={styles.second_section_header_four}>
          <IoIosArrowForward />
        </div>
        <div className={styles.second_section_header_five}>
          LUCRO e SUCESSO da sua empresa
        </div>
        <div className={styles.second_section_container_one}>
          <div className={styles.second_section_container_header}>
            <FaChess />
            <h3>Estratégia</h3>
          </div>
          <p className={styles.second_section_container_text}>
            Alinhando objetivos estratégicos, cultura e valores das empresas às
            competências e motivações dos profissionais.
          </p>
        </div>
        <div className={styles.second_section_container_two}>
          <div className={styles.second_section_container_header}>
            <GiAlarmClock />
            <h3>Agilidade</h3>
          </div>
          <p className={styles.second_section_container_text}>
            Alinhando objetivos estratégicos, cultura e valores das empresas às
            competências e motivações dos profissionais.
          </p>
        </div>
        <div className={styles.second_section_container_three}>
          <div className={styles.second_section_container_header}>
            <GiProfit />
            <h3>Economia</h3>
          </div>
          <p className={styles.second_section_container_text}>
            Redução de custos causados pela rotatividade ou baixa produtividade
            por conta de uma contratação realizada de forma equivocada
          </p>
        </div>
      </div>
    </section>
  );
}
