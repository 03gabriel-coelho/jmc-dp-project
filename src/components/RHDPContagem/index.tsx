import Head from 'next/head';
import About from '../about';
import styles from './index.module.css';

export default function RHDPContagem() {
  return (
    <>
      <Head>
        <title>RH e DP Terceirizado em Contagem | JMC Consult</title>
        <meta name="description" content="Serviços especializados de RH e Departamento Pessoal terceirizado em Contagem. Atendemos empresas de todos os portes. Fale conosco!" />
      </Head>

      <main className={styles.main}>
        <h1>RH e DP Terceirizado em Contagem</h1>
        <p>Conte com uma equipe especializada para cuidar do seu RH e DP com qualidade e agilidade em Contagem.</p>
        <About />
      </main>
    </>
  );
}