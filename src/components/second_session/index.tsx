import { FaChess, FaChartLine } from "react-icons/fa";
import { GiAlarmClock } from "react-icons/gi";

const benefits = [
  {
    title: "Estratégia",
    description:
      "Processos de RH e DP alinhados aos objetivos da empresa, com dados e rotinas mais previsíveis.",
    icon: FaChess,
  },
  {
    title: "Agilidade",
    description:
      "Mais velocidade nas rotinas de admissão, ponto, folha, benefícios, férias e rescisões.",
    icon: GiAlarmClock,
  },
  {
    title: "Economia",
    description:
      "Redução de retrabalho, riscos trabalhistas e custos causados por falhas operacionais.",
    icon: FaChartLine,
  },
];

export default function SecondSection() {
  return (
    <section className="bg-brand-950 py-16 text-white sm:py-20">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-100">
              Operação mais leve
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Reduza custos, aumente produtividade e ganhe controle
            </h2>
            <p className="mt-4 leading-8 text-emerald-50">
              A terceirização de RH e DP permite que sua equipe foque no crescimento
              do negócio enquanto especialistas cuidam das obrigações do dia a dia.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {benefits.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-lg border border-white/10 bg-white/8 p-5">
                <Icon className="h-8 w-8 text-accent-100" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-emerald-50">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
