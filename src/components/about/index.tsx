import styles from "./index.module.css";

export default function About() {
  return (
    <div className={styles.about} id="about">
      <h2>Quem somos?</h2>
      <h4>
        <b>JMC ConsultRH</b> é uma empresa focada em serviços de Terceirização de Folha
        de Pagamento e Atividades da Administração de Pessoal. Atendendo
        empresas de pequeno, médio e grande porte e de diversos segmentos.
      </h4>
      <h4>
        A vivência de nossos profissionais se acentua pelo tempo de experiência
        adquirido em grandes empresas. Somos especialistas e o nosso diferencial
        é prestar serviços personalizados, desenvolvidos sob medida para cada
        cliente.
      </h4>
      <h4>
        A <b>JMC ConsultRH</b> assume todo o processo operacional da folha de pagamento
        e administração pessoal da sua empresa, permitindo que você direcione
        seus esforços para o controle estratégico do seu negócio.
      </h4>
    </div>
  );
}
