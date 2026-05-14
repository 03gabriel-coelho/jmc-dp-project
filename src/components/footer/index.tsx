import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare, FaMapMarkerAlt, FaPhoneVolume } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { allSeoLinks, contact, whatsappUrl } from "document/lib/site";

const footerLinks = allSeoLinks.filter((link) => link.href !== "/site").slice(0, 10);

export default function Footer() {
  return (
    <footer className="bg-brand-950 py-12 text-white">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr_0.8fr]">
        <div>
          <h2 className="text-2xl font-bold">JMC Consult RH</h2>
          <p className="mt-4 max-w-sm leading-7 text-slate-300">
            Terceirização de folha de pagamento, administração de pessoal, RH e
            Departamento Pessoal para empresas em Contagem/MG e no Brasil.
          </p>
          <p className="mt-5 flex items-center gap-2 text-sm text-slate-300">
            <FaMapMarkerAlt aria-hidden="true" className="text-accent-100" />
            Rua Mojoara, 402 - Contagem, Minas Gerais
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold">Serviços de RH e DP</h2>
          <nav className="mt-4 grid gap-2 text-sm text-slate-300" aria-label="Links de serviços">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="flex items-center gap-2 text-lg font-bold">
            <FaPhoneVolume aria-hidden="true" className="text-accent-100" />
            Contato
          </h2>
          <div className="mt-4 space-y-2 text-sm text-slate-300">
            <p>{contact.phoneDisplay}</p>
            <p>{contact.landlineDisplay}</p>
            <p>{contact.email}</p>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5">
            Chamar no WhatsApp
          </a>
          <div className="mt-6 flex gap-4">
            <a href="https://www.instagram.com/jmcconsultrh" target="_blank" rel="noopener noreferrer" aria-label="Instagram da JMC Consult RH">
              <LuInstagram className="h-6 w-6 transition hover:text-whatsapp" />
            </a>
            <a href="https://www.facebook.com/jmcconsultrh" target="_blank" rel="noopener noreferrer" aria-label="Facebook da JMC Consult RH">
              <FaFacebookSquare className="h-6 w-6 transition hover:text-whatsapp" />
            </a>
            <a href="https://www.linkedin.com/company/jmc-consult-terceiriza%C3%A7%C3%A3o-depart-pessoal-folha-de-pagament" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn da JMC Consult RH">
              <BsLinkedin className="h-6 w-6 transition hover:text-whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
