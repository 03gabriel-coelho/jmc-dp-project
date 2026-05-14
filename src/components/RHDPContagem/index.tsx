import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
import About from "../about";
import Footer from "../footer";
import Services from "../services";
import { seoRoutes, whatsappUrl } from "document/lib/site";

type LocalPageConfig = (typeof seoRoutes)[keyof typeof seoRoutes];

type RHDPContagemProps = {
  config?: LocalPageConfig;
};

const differentiators = [
  "Atendimento para empresas pequenas, médias e grandes",
  "Experiência em rotinas trabalhistas e obrigações acessórias",
  "Apoio próximo para tomada de decisão e redução de riscos",
];

export default function RHDPContagem({ config = seoRoutes["/rh-dp-terceirizado-contagem"] }: RHDPContagemProps) {
  return (
    <main className="pt-20">
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="section-kicker">{config.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              {config.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{config.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Solicitar orçamento
                <FaArrowRight aria-hidden="true" />
              </a>
              <Link href="/#services" className="btn-secondary">
                Conhecer serviços
              </Link>
            </div>
          </div>

          <aside className="rounded-lg border border-brand-100 bg-brand-50 p-6 shadow-soft">
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-brand-800">
              <FaMapMarkerAlt aria-hidden="true" />
              Contagem/MG
            </p>
            <h2 className="mt-4 text-2xl font-bold text-slate-950">
              Solução local para {config.focus}
            </h2>
            <div className="mt-6 space-y-4">
              {differentiators.map((item) => (
                <p key={item} className="flex gap-3 text-sm leading-7 text-slate-700">
                  <FaCheckCircle className="mt-1 h-4 w-4 flex-none text-brand-700" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <About />
      <Services />
      <Footer />
    </main>
  );
}
