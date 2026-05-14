import Image from "next/image";
import Link from "next/link";
import JMCHeader from "document/images/jmc-header.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { contact, whatsappUrl } from "document/lib/site";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <nav
        className="container-page flex h-20 items-center justify-between gap-4"
        aria-label="Navegação principal"
      >
        <Link href="/" className="flex items-center gap-3" aria-label="JMC Consult RH - Início">
          <Image
            src={JMCHeader}
            alt="JMC Consult RH"
            width={148}
            height={68}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex">
          <Link href="/#about" className="transition hover:text-brand-700">
            Sobre
          </Link>
          <Link href="/#services" className="transition hover:text-brand-700">
            Serviços
          </Link>
          <Link href="/rh-dp-terceirizado-contagem" className="transition hover:text-brand-700">
            RH e DP em Contagem
          </Link>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary px-4 py-2.5"
          aria-label={`Falar com a JMC Consult RH pelo WhatsApp ${contact.phoneDisplay}`}
        >
          <span className="hidden sm:inline">{contact.phoneDisplay}</span>
          <IoLogoWhatsapp aria-hidden="true" className="h-6 w-6" />
        </a>
      </nav>
    </header>
  );
}
