import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../footer";
import { allSeoLinks, serviceLandingRoutes, whatsappUrl } from "document/lib/site";

type ServiceLandingConfig = (typeof serviceLandingRoutes)[keyof typeof serviceLandingRoutes];

type SeoLandingPageProps = {
  config: ServiceLandingConfig;
};

const proofPoints = [
  "Atendimento para pequenas, médias e grandes empresas",
  "Rotinas de RH, DP e folha com acompanhamento especializado",
  "Foco em prazos, conformidade, clareza operacional e redução de riscos",
];

function getRelatedLinks(related: readonly string[]) {
  return related
    .map((href) => allSeoLinks.find((link) => link.href === href))
    .filter((link): link is { href: string; label: string } => Boolean(link));
}

export default function SeoLandingPage({ config }: SeoLandingPageProps) {
  const relatedLinks = getRelatedLinks(config.related);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-white py-14 sm:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="section-kicker">{config.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              {config.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{config.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Falar com a JMC Consult RH
                <FaArrowRight aria-hidden="true" />
              </a>
              <Link href="/#services" className="btn-secondary">
                Ver rotinas atendidas
              </Link>
            </div>
          </div>

          <aside className="rounded-lg border border-brand-100 bg-brand-50 p-6 shadow-soft">
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-brand-800">
              <FaMapMarkerAlt aria-hidden="true" />
              {config.location}
            </p>
            <h2 className="mt-4 text-2xl font-bold text-slate-950">
              Ideal para {config.audience}
            </h2>
            <div className="mt-6 space-y-4">
              {proofPoints.map((item) => (
                <p key={item} className="flex gap-3 text-sm leading-7 text-slate-700">
                  <FaCheckCircle className="mt-1 h-4 w-4 flex-none text-brand-700" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="section-kicker">Como a JMC ajuda</p>
            <h2 className="section-title">Serviço pensado para rotina real de empresas</h2>
            <p className="section-copy">
              A JMC Consult RH combina atendimento consultivo e execução operacional
              para que sua empresa tenha processos mais previsíveis, documentos em
              ordem e apoio especializado quando precisa decidir.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {config.sections.map((section) => (
              <article key={section.title} className="rounded-lg border border-brand-100 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-950">{section.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{section.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-kicker">Dúvidas frequentes</p>
            <h2 className="section-title">Perguntas que ajudam sua empresa a decidir</h2>
            <p className="section-copy">
              Respostas objetivas para quem está avaliando terceirizar rotinas de RH,
              DP, folha de pagamento ou administração de pessoal.
            </p>
          </div>

          <div className="space-y-4">
            {config.faqs.map((faq) => (
              <article key={faq.question} className="rounded-lg border border-brand-100 bg-brand-50 p-5">
                <h3 className="text-lg font-bold text-slate-950">{faq.question}</h3>
                <p className="mt-2 leading-7 text-slate-700">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-950 py-14 text-white">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-100">
            Próximas páginas úteis
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Continue explorando soluções de RH e DP
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-white/10 bg-white/8 p-4 font-semibold text-emerald-50 transition hover:bg-white/15"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
