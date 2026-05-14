export default function About() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20" id="about">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="section-kicker">Quem somos</p>
          <h2 className="section-title">Especialistas em terceirização de folha e administração de pessoal</h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
          <p>
            A <strong className="font-bold text-brand-800">JMC Consult RH</strong> é
            focada em serviços de terceirização de folha de pagamento e atividades
            da administração de pessoal, atendendo empresas de pequeno, médio e
            grande porte em diversos segmentos.
          </p>
          <p>
            A vivência dos nossos profissionais se acentua pelo tempo de experiência
            adquirido em grandes empresas. Nosso diferencial é prestar serviços
            personalizados, desenvolvidos sob medida para cada cliente.
          </p>
          <p>
            Assumimos o processo operacional da folha de pagamento e administração
            pessoal da sua empresa, permitindo que você direcione seus esforços para
            o controle estratégico do negócio.
          </p>
        </div>
      </div>
    </section>
  );
}
