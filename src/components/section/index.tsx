import Image from "next/image";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import secretary from "document/images/secretary.png";
import { whatsappUrl } from "document/lib/site";

const highlights = [
  "Folha de pagamento",
  "Administração de pessoal",
  "eSocial e DCTFWeb",
];

export default function Section() {
  return (
    <section className="relative overflow-hidden bg-white pt-28">
      <div className="container-page grid min-h-[calc(100vh-5rem)] items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <p className="section-kicker">JMC Consult RH em Contagem/MG</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Terceirização de RH, DP e folha de pagamento para empresas
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Soluções estratégicas em gestão de Departamento Pessoal e RH para
            empresas pequenas, médias e grandes. Da admissão à homologação,
            cuidamos da rotina operacional com agilidade, segurança e atendimento próximo.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Solicitar orçamento pelo WhatsApp
              <FaArrowRight aria-hidden="true" />
            </a>
            <a href="#services" className="btn-secondary">
              Ver serviços
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <FaCheckCircle className="h-4 w-4 text-brand-700" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-brand-100/70 blur-3xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-soft">
            <Image
              src={secretary}
              alt="Profissional de RH atendendo empresas em rotinas de Departamento Pessoal"
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
