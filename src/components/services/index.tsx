import styles from "./index.module.css";
import { BiRightArrow } from "react-icons/bi";

export default function Services() {
  return (
    <div className={styles.services} id="services">
      <ul>
        <h2>
          <BiRightArrow /> Quais os principais serviços?
        </h2>
        <li>
          <BiRightArrow />
          Admissão e demissão de colaboradores
        </li>
        <li>
          <BiRightArrow />
          Cálculo das Folhas de Pagamento e Adiantamento
        </li>
        <li>
          <BiRightArrow />
          Emissões de Demonstrativos de Pagamentos
        </li>
        <li>
          <BiRightArrow />
          Gestão e Auditoria de Sistemas de ponto/Acessos
        </li>
        <li>
          <BiRightArrow />
          Atendimento a Fiscalização
        </li>
        <li>
          <BiRightArrow />
          Rotina de Ferias e Afastamento
        </li>
        <li>
          <BiRightArrow />
          Preparar e emitir as guias de Encargos Sociais | INSS | FGTS digital |
          IRPF - Incluindo reclamatórias trabalhistas.
        </li>
        <li>
          <BiRightArrow />
          Rotina de Rescisão
        </li>
        <li>
          <BiRightArrow />
          Administração de Benefícios
        </li>
        <li>
          <BiRightArrow />
          Contabilização da Folha de Pagamento
        </li>
        <li>
          <BiRightArrow />
          Relatórios e Indicadores Mensais
        </li>
        <li>
          <BiRightArrow />
          Administração de todas as rotinas do E-social / DCTF Web
        </li>
      </ul>
    </div>
  );
}
