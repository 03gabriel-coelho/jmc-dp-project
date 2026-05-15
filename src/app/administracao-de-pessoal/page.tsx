import type { Metadata } from "next";
import SeoLandingPage from "document/components/SeoLandingPage";
import { serviceLandingRoutes } from "document/lib/site";

const route = "/administracao-de-pessoal";
const seo = serviceLandingRoutes[route];

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: route,
  },
};

export default function AdministracaoDePessoal() {
  return <SeoLandingPage config={seo} />;
}
