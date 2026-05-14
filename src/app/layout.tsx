import type { Metadata } from "next";
import "./globals.css";
import Header from "document/components/header";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jmcconsult.com.br"),
  title: {
    default: "JMC Consult RH | Terceirização de RH, DP e Folha de Pagamento",
    template: "%s",
  },
  description:
    "Terceirização de folha de pagamento, administração de pessoal, RH e Departamento Pessoal para empresas em Contagem/MG e região.",
  icons: "/logo.png",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.jmcconsult.com.br",
    siteName: "JMC Consult RH",
    title: "JMC Consult RH | RH, DP e Folha de Pagamento",
    description:
      "Especialistas em folha de pagamento, administração de pessoal, eSocial, admissões, benefícios e rotinas de RH para empresas.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Logotipo da JMC Consult RH",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "JMC Consult RH",
    image: "https://www.jmcconsult.com.br/logo.png",
    description:
      "JMC Consult RH é especialista em terceirização de RH, Departamento Pessoal e folha de pagamento em Contagem/MG.",
    url: "https://www.jmcconsult.com.br",
    telephone: "+55 31 99849-2779",
    priceRange: "R$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Mojoara, 402",
      addressLocality: "Contagem",
      addressRegion: "MG",
      postalCode: "32341-410",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -19.9342638,
      longitude: -44.0600985,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "22:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/jmcconsultrh",
      "https://www.facebook.com/jmcconsultrh",
      "https://www.linkedin.com/company/jmc-consult-terceiriza%C3%A7%C3%A3o-depart-pessoal-folha-de-pagament",
    ],
  };

  return (
    <html lang="pt-BR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
