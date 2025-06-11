/* eslint-disable @next/next/no-page-custom-font */
// eslint-disable-next-line @next/next/no-page-custom-font
import type { Metadata } from "next";
import "./globals.css";
import Header from "document/components/header";
import backgroundImage from "document/images/background.jpg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "JMC Consult RH | Gestão Completa de DP e RH para Empresas",
  description:
    "Especialistas em Folha de Pagamento, E-social, Admissões, Benefícios e Gestão de Ponto. Simplifique sua administração com a JMC Consult RH. Saiba mais!",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Gabiru RH e DP",
              image:
                "https://www.jmcconsult.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjmc-header.9de9ab4c.png&w=384&q=75",
              description:
                "JMC Consult RH e DP é especialista em soluções de RH e Departamento Pessoal terceirizado em Contagem-MG. Atendemos empresas de pequeno, médio e grande porte com agilidade, segurança e economia.",
              url: "https://www.jmcconsult.com.br/rh-dp-contagem",
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
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "07:00",
                  closes: "22:00",
                },
              ],
              sameAs: [
                "https://www.instagram.com/jmcconsultrh",
                "https://www.facebook.com/jmcconsultrh",
                "https://www.linkedin.com/company/jmc-consult-terceiriza%C3%A7%C3%A3o-depart-pessoal-folha-de-pagament",
              ],
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <div className="background_image">
          <Image src={backgroundImage} alt="background image" />
        </div>
        <Header />
        {children}
      </body>
    </html>
  );
}
