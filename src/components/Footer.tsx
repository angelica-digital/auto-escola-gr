import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const WHATSAPP_NUMBER = "5511931523189";

function whatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const FOOTER_WHATSAPP_HREF = whatsappHref(
  "Olá! Vi o rodapé do site da Auto Escola GR e gostaria de falar com a equipe.",
);

// URLs oficiais das redes sociais da Auto Escola GR.
// Ainda não existem no projeto: preencha aqui quando estiverem disponíveis.
// Enquanto estiverem como null, o ícone aparece mas não vira link.
const SOCIAL_URLS: {
  instagram: string | null;
  tiktok: string | null;
  facebook: string | null;
} = {
  instagram: null,
  tiktok: null,
  facebook: null,
};

// URL oficial da Angélica Digital. Preencha quando estiver disponível.
const ANGELICA_DIGITAL_URL: string | null = null;

const NAV_LINKS = [
  { label: "Habilitação", href: "/#habilitacao" },
  { label: "Pacotes", href: "/#pacotes" },
  { label: "Como funciona", href: "/#processo" },
  { label: "A GR", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
];

const INFO_LINKS = [
  { label: "Serviços Online", href: "/informacoes/servicos-online" },
  { label: "Documentos", href: "/informacoes/documentos" },
  {
    label: "Informações Importantes",
    href: "/informacoes/informacoes-importantes",
  },
  {
    label: "Perguntas e Respostas",
    href: "/informacoes/perguntas-e-respostas",
  },
  { label: "Dicas", href: "/informacoes/dicas" },
];

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`${className} shrink-0 fill-current`}
    >
      <path d="M12.01 2C6.48 2 2 6.48 2 12.01c0 1.86.5 3.6 1.36 5.1L2 22l5.02-1.32a9.94 9.94 0 0 0 4.99 1.34h.01c5.53 0 10.01-4.48 10.01-10.01C22.03 6.48 17.55 2 12.01 2Zm0 18.2h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-2.98.78.8-2.9-.2-.3a8.2 8.2 0 1 1 6.87 3.74Zm4.5-6.13c-.25-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.37-1.7-.14-.24-.02-.37.11-.5.11-.11.25-.29.37-.43.12-.15.16-.24.24-.4.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42-.14 0-.3-.02-.46-.02-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.5.58.19 1.1.16 1.51.1.46-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[18px] w-[18px] fill-none stroke-current stroke-[1.8]"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.9" className="fill-current stroke-none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[18px] w-[18px] fill-current"
    >
      <path d="M16.6 3c.3 2.2 1.6 3.7 3.9 3.9v3.1a7.3 7.3 0 0 1-3.9-1.2v6.3c0 3.5-2.6 5.9-5.9 5.9A5.8 5.8 0 0 1 4.9 15c0-3.5 2.9-6.1 6.6-5.8v3.2c-1.7-.3-3.3.8-3.3 2.6 0 1.5 1.1 2.6 2.5 2.6 1.6 0 2.6-1.1 2.6-2.9V3h3.3Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[18px] w-[18px] fill-current"
    >
      <path d="M13.4 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.7v3h2.6V21h3.1Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[18px] w-[18px] shrink-0 fill-none stroke-current stroke-[1.8]"
    >
      <path
        d="M12 21s6.5-5.6 6.5-11.2A6.5 6.5 0 0 0 5.5 9.8C5.5 15.4 12 21 12 21Z"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 fill-none stroke-current stroke-2"
    >
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ColumnTitle({ children }: { children: ReactNode }) {
  return (
    <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
      <span className="h-1 w-1 rounded-full bg-[#f6bd16]" aria-hidden="true" />
      {children}
    </span>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex min-h-[44px] items-center text-sm lg:min-h-[38px]"
    >
      <span
        aria-hidden="true"
        className="h-px w-0 bg-[#f6bd16] transition-all duration-300 group-hover:mr-2 group-hover:w-3 group-focus-visible:mr-2 group-focus-visible:w-3 motion-reduce:transition-none"
      />
      <span className="text-white/60 transition-colors duration-200 group-hover:text-white group-focus-visible:text-white">
        {label}
      </span>
    </Link>
  );
}

// A cor fica no ícone interno: a regra global `a { color: inherit }`
// sobrepõe classes de cor aplicadas diretamente no <a>.
// O hover visual vale para os quatro ícones, com ou sem URL configurada.
const socialCircleBase =
  "group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#111111] transition duration-300 hover:-translate-y-0.5 hover:border-[#f6bd16] hover:bg-[#f6bd16] hover:shadow-[0_8px_24px_-8px_rgba(246,189,22,0.55)] motion-reduce:transition-none motion-reduce:hover:translate-y-0";

const socialIconColor =
  "flex text-white/80 transition-colors duration-300 group-hover:text-[#090909]";

function SocialButton({
  label,
  href,
  children,
}: {
  label: string;
  href: string | null;
  children: ReactNode;
}) {
  if (!href) {
    // Link oficial ainda não cadastrado: exibe o ícone sem navegação.
    return (
      <span
        role="img"
        aria-label={`${label} (link em breve)`}
        title={`${label} — em breve`}
        className={`${socialCircleBase} cursor-default`}
      >
        <span className={socialIconColor}>{children}</span>
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className={`${socialCircleBase} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6bd16]`}
    >
      <span className={socialIconColor}>{children}</span>
    </a>
  );
}

export default function Footer() {
  return (
    <>
      <footer className="relative overflow-hidden border-t border-white/10 bg-[#090909]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.6) 55%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.6) 55%, transparent 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 -top-40 h-[380px] w-[380px] rounded-full bg-[#f6bd16]/[0.07] blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f6bd16]/30 to-transparent"
        />

        <div className="gr-container relative">
          {/* Abaixo de sm o rodapé fica compacto: só logo, redes e assinatura. */}
          <div className="grid gap-14 py-12 sm:py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
            <div className="flex flex-col items-center text-center sm:block sm:text-left lg:col-span-4">
              <Link
                href="/"
                aria-label="Auto Escola GR — página inicial"
                className="inline-flex"
              >
                {/* Mesma logo oficial usada no Header. */}
                <Image
                  src="/logo-auto-escola-gr-v2.png"
                  alt="Auto Escola GR"
                  width={1983}
                  height={793}
                  className="h-auto w-[180px] max-w-none object-contain object-left sm:-ml-2 sm:w-[220px]"
                />
              </Link>

              <div className="mt-5 hidden gap-4 sm:flex">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-px w-8 shrink-0 bg-[#f6bd16]"
                />
                <p className="max-w-[380px] text-xl font-semibold leading-snug text-white sm:text-2xl">
                  Seu caminho para dirigir com{" "}
                  <span className="text-[#f6bd16]">mais confiança</span>{" "}
                  começa aqui.
                </p>
              </div>

              <div className="mt-8 flex flex-col items-center sm:mt-10 sm:block">
                <ColumnTitle>Siga a Auto Escola GR</ColumnTitle>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                  <SocialButton label="Instagram" href={SOCIAL_URLS.instagram}>
                    <InstagramIcon />
                  </SocialButton>
                  <SocialButton label="TikTok" href={SOCIAL_URLS.tiktok}>
                    <TikTokIcon />
                  </SocialButton>
                  <SocialButton label="Facebook" href={SOCIAL_URLS.facebook}>
                    <FacebookIcon />
                  </SocialButton>
                  <SocialButton label="WhatsApp" href={FOOTER_WHATSAPP_HREF}>
                    <WhatsAppIcon className="h-[18px] w-[18px]" />
                  </SocialButton>
                </div>
              </div>
            </div>

            <div className="hidden gap-12 sm:grid sm:grid-cols-2 lg:col-span-8 lg:grid-cols-[0.8fr_1.1fr_1.2fr] lg:gap-8">
              <div>
                <ColumnTitle>Navegação</ColumnTitle>
                <nav aria-label="Navegação do rodapé" className="mt-4 flex flex-col">
                  {NAV_LINKS.map((link) => (
                    <FooterLink key={link.href} {...link} />
                  ))}
                </nav>
              </div>

              <div>
                <ColumnTitle>Informações</ColumnTitle>
                <nav aria-label="Informações" className="mt-4 flex flex-col">
                  {INFO_LINKS.map((link) => (
                    <FooterLink key={link.href} {...link} />
                  ))}
                </nav>
              </div>

              <div className="sm:col-span-2 lg:col-span-1">
                <ColumnTitle>Fale com a GR</ColumnTitle>

                <div className="mt-5 flex flex-col gap-3 sm:max-w-[340px]">
                  <a
                    href={FOOTER_WHATSAPP_HREF}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 pr-4 transition duration-300 hover:border-[#f6bd16]/50 hover:bg-[#f6bd16]/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6bd16] motion-reduce:transition-none"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f6bd16] text-[#090909]">
                      <WhatsAppIcon />
                    </span>
                    <span className="min-w-0 flex-1 leading-tight">
                      <strong className="block text-sm font-bold text-white">
                        WhatsApp
                      </strong>
                      <span className="text-xs text-white/50">
                        Converse com a equipe
                      </span>
                    </span>
                    <span className="text-white/40 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#f6bd16] motion-reduce:transition-none">
                      <ArrowIcon />
                    </span>
                  </a>

                  <p className="group flex w-fit items-center gap-3 px-3 py-2 text-sm text-white/60">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#f6bd16] transition duration-300 group-hover:-translate-y-0.5 group-hover:border-[#f6bd16] group-hover:bg-[#f6bd16] group-hover:text-[#090909] group-hover:shadow-[0_8px_24px_-8px_rgba(246,189,22,0.55)] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
                      <PinIcon />
                    </span>
                    Vila dos Remédios
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 border-t border-white/10 pb-28 pt-8 text-center text-xs text-white/40 sm:flex-row sm:flex-wrap sm:gap-x-3 sm:pb-24">
            <p>
              © 2026 Auto Escola GR.{" "}
              <span className="block sm:inline">Todos os direitos reservados.</span>
            </p>

            <span aria-hidden="true" className="hidden text-white/20 sm:inline">
              •
            </span>

            <p>
              Desenvolvido com{" "}
              <span role="img" aria-label="fogo" className="text-white">
                🔥
              </span>{" "}
              por{" "}
              {ANGELICA_DIGITAL_URL ? (
                <a
                  href={ANGELICA_DIGITAL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group font-semibold"
                >
                  <span className="transition-colors group-hover:text-[#f6bd16]">
                    Angélica Digital
                  </span>
                </a>
              ) : (
                <span className="font-semibold">Angélica Digital</span>
              )}
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppFloat />
    </>
  );
}
