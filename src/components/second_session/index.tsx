import styles from "./index.module.css";
import { IoIosArrowForward } from "react-icons/io";

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
        <div className={styles.second_section_container_one}>c1</div>
        <div className={styles.second_section_container_two}>c2</div>
        <div className={styles.second_section_container_three}>c3</div>
      </div>
    </section>
  );
}
