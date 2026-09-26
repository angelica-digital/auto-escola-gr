import Link from "next/link";

const WHATSAPP_NUMBER = "5511931523189";

function whatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 fill-current"
    >
      <path d="M12.01 2C6.48 2 2 6.48 2 12.01c0 1.86.5 3.6 1.36 5.1L2 22l5.02-1.32a9.94 9.94 0 0 0 4.99 1.34h.01c5.53 0 10.01-4.48 10.01-10.01C22.03 6.48 17.55 2 12.01 2Zm0 18.2h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-2.98.78.8-2.9-.2-.3a8.2 8.2 0 1 1 6.87 3.74Zm4.5-6.13c-.25-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.37-1.7-.14-.24-.02-.37.11-.5.11-.11.25-.29.37-.43.12-.15.16-.24.24-.4.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42-.14 0-.3-.02-.46-.02-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.5.58.19 1.1.16 1.51.1.46-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#090909]">
      <div className="gr-container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr_1fr] lg:gap-8">
          <div className="flex items-center gap-3 lg:items-start lg:justify-start">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f6bd16] font-black text-[#090909]">
                GR
              </div>

              <div className="leading-tight">
                <strong className="block text-[15px] font-bold tracking-wide text-white">
                  AUTO ESCOLA GR
                </strong>

                <span className="text-[11px] tracking-[0.16em] text-white/45">
                  CENTRO DE FORMAÇÃO
                </span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
              Navegação
            </span>

            <nav className="mt-4 flex flex-col">
              <Link
                href="/#habilitacao"
                className="inline-flex min-h-[44px] items-center text-sm text-white/60 transition hover:text-white"
              >
                Habilitação
              </Link>
              <Link
                href="/#pacotes"
                className="inline-flex min-h-[44px] items-center text-sm text-white/60 transition hover:text-white"
              >
                Pacotes
              </Link>
              <Link
                href="/#processo"
                className="inline-flex min-h-[44px] items-center text-sm text-white/60 transition hover:text-white"
              >
                Como funciona
              </Link>
              <Link
                href="/#sobre"
                className="inline-flex min-h-[44px] items-center text-sm text-white/60 transition hover:text-white"
              >
                A GR
              </Link>
              <Link
                href="/informacoes/perguntas-e-respostas"
                className="inline-flex min-h-[44px] items-center text-sm text-white/60 transition hover:text-white"
              >
                Dúvidas
              </Link>
              <Link
                href="/#contato"
                className="inline-flex min-h-[44px] items-center text-sm text-white/60 transition hover:text-white"
              >
                Contato
              </Link>
            </nav>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
              Contato
            </span>

            <div className="mt-4 flex flex-col gap-4">
              <a
                href={whatsappHref(
                  "Olá! Vi o rodapé do site da Auto Escola GR e gostaria de falar com a equipe.",
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 text-sm text-white/60 transition hover:text-white"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>

              <p className="flex min-h-[44px] items-center text-sm text-white/60">
                Vila dos Remédios
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-xs text-white/40 sm:text-left">
            © 2026 Auto Escola GR. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
