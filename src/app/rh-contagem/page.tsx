import type { Metadata } from "next";
import RHDPContagem from "document/components/RHDPContagem";
import { seoRoutes } from "document/lib/site";

const route = "/rh-contagem";
const seo = seoRoutes[route];

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: route,
  },
};

export default function RhContagem() {
  return <RHDPContagem config={seo} />;
}
