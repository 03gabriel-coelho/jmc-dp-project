import { BiCheckCircle } from "react-icons/bi";
import { services, whatsappUrl } from "document/lib/site";

export default function Services() {
  return (
    <section className="bg-white py-16 sm:py-20" id="services">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="section-kicker">Serviços</p>
          <h2 className="section-title">Rotinas de RH e DP que sua empresa pode terceirizar</h2>
          <p className="section-copy">
            Cuidamos das atividades essenciais de Departamento Pessoal, folha de
            pagamento e administração de benefícios com processo, documentação e
            acompanhamento próximo.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service}
              className="flex gap-3 rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <BiCheckCircle className="mt-1 h-6 w-6 flex-none text-brand-700" aria-hidden="true" />
              <h3 className="text-base font-semibold leading-7 text-slate-800">{service}</h3>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-lg bg-brand-50 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <h3 className="text-xl font-bold text-slate-950">
              Quer reduzir riscos e ganhar tempo na gestão de pessoas?
            </h3>
            <p className="mt-2 text-slate-600">
              Fale com a JMC Consult RH e receba uma orientação inicial para sua empresa.
            </p>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5 sm:mt-0">
            Falar com especialista
          </a>
        </div>
      </div>
    </section>
  );
}
