import type { Metadata } from "next";
import RHDPContagem from "document/components/RHDPContagem";
import { seoRoutes } from "document/lib/site";

const route = "/dp-contagem";
const seo = seoRoutes[route];

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: route,
  },
};

export default function DpContagem() {
  return <RHDPContagem config={seo} />;
}
