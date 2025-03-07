/* eslint-disable @next/next/no-page-custom-font */
// eslint-disable-next-line @next/next/no-page-custom-font
import type { Metadata } from "next";
import "./globals.css";
import Header from "document/components/header";
import backgroundImage from "document/images/background.jpg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "JMC Consult RH | Gestão Completa de DP e RH para Empresas",
  description: "Especialistas em Folha de Pagamento, E-social, Admissões, Benefícios e Gestão de Ponto. Simplifique sua administração com a JMC Consult RH. Saiba mais!",
  icons: "/logo.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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
        <div className="background_image">
          <Image src={backgroundImage} alt="background image" />
        </div>
        <Header />
        {children}
      </body>
    </html>
  );
}
