import type { Metadata } from "next";
import Section from "document/components/section";
import SecondSection from "document/components/second_session";
import About from "document/components/about";
import Services from "document/components/services";
import Footer from "document/components/footer";

export const metadata: Metadata = {
  title: "JMC Consult RH | RH, DP e Folha de Pagamento em Contagem/MG",
  description:
    "Terceirização de RH, DP, folha de pagamento e administração de pessoal para empresas em Contagem/MG. Fale com a JMC Consult RH pelo WhatsApp.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <Section />
      <SecondSection />
      <About />
      <Services />
      <Footer />
    </main>
  );
}
