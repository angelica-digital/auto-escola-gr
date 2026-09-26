import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Informações | Auto Escola GR",
  description:
    "Central de informações da Auto Escola GR: serviços online, documentos, categorias, requisitos e orientações para o seu processo de habilitação.",
};

function LinkAccessIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 fill-none stroke-[#f6bd16] stroke-[1.6]"
    >
      <path
        d="M10 14a4 4 0 0 0 5.7.2l2.2-2.2a4 4 0 0 0-5.66-5.66l-1.2 1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 10a4 4 0 0 0-5.7-.2l-2.2 2.2a4 4 0 0 0 5.66 5.66l1.18-1.18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DocumentAccessIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 fill-none stroke-[#f6bd16] stroke-[1.6]"
    >
      <path
        d="M7 3.5h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Z"
        strokeLinejoin="round"
      />
      <path d="M14 3.5v4h4" strokeLinejoin="round" />
      <path d="M9 13h6M9 16h6M9 10h2" strokeLinecap="round" />
    </svg>
  );
}

function CategoryAccessIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 fill-none stroke-[#f6bd16] stroke-[1.6]"
    >
      <path d="m12 3.5 8 4v9l-8 4-8-4v-9l8-4Z" strokeLinejoin="round" />
      <path d="M4 7.5 12 11.5l8-4" strokeLinejoin="round" />
      <path d="M12 11.5v9" />
    </svg>
  );
}

function InfoAccessIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 fill-none stroke-[#f6bd16] stroke-[1.6]"
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 11v5.5" strokeLinecap="round" />
      <circle cx="12" cy="8" r="0.9" fill="#f6bd16" stroke="none" />
    </svg>
  );
}

function QuestionAccessIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 fill-none stroke-[#f6bd16] stroke-[1.6]"
    >
      <path
        d="M4 5.5h16a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1H9l-4 3v-3H4a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1Z"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 9.8a2.2 2.2 0 1 1 3.1 2c-.7.4-1.1.8-1.1 1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="11.5" cy="16.2" r="0.9" fill="#f6bd16" stroke="none" />
    </svg>
  );
}

function LightbulbAccessIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 fill-none stroke-[#f6bd16] stroke-[1.6]"
    >
      <path
        d="M9 17.5h6M9.7 20h4.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 3.5a5.5 5.5 0 0 0-3 10.1c.6.4 1 1 1 1.7v.7h4v-.7c0-.7.4-1.3 1-1.7A5.5 5.5 0 0 0 12 3.5Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-3.5 w-3.5 shrink-0 fill-none stroke-current stroke-[2]"
    >
      <path
        d="M4 12h15M13 6l6 6-6 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type InfoHubItem = {
  number: string;
  title: string;
  description: string;
  href: string;
  Icon: typeof LinkAccessIcon;
};

const INFO_HUB_ITEMS: InfoHubItem[] = [
  {
    number: "01",
    title: "Serviços Online",
    description: "Acesse serviços e consultas úteis do Detran/SP.",
    href: "/informacoes/servicos-online",
    Icon: LinkAccessIcon,
  },
  {
    number: "02",
    title: "Documentos",
    description: "Confira os documentos necessários para cada processo.",
    href: "/informacoes/documentos",
    Icon: DocumentAccessIcon,
  },
  {
    number: "03",
    title: "Categorias",
    description:
      "Conheça as opções de habilitação disponíveis na Auto Escola GR.",
    href: "/#habilitacao",
    Icon: CategoryAccessIcon,
  },
  {
    number: "04",
    title: "Informações Importantes",
    description:
      "Veja requisitos e orientações para iniciar sua primeira habilitação.",
    href: "/informacoes/informacoes-importantes",
    Icon: InfoAccessIcon,
  },
  {
    number: "05",
    title: "Perguntas e Respostas",
    description:
      "Encontre respostas para dúvidas frequentes sobre habilitação.",
    href: "/informacoes/perguntas-e-respostas",
    Icon: QuestionAccessIcon,
  },
  {
    number: "06",
    title: "Dicas",
    description: "Confira orientações úteis para aulas e exames.",
    href: "/informacoes/dicas",
    Icon: LightbulbAccessIcon,
  },
];

export default function InformacoesPage() {
  return (
    <>
      <Header />

      <main className="bg-[#090909]">
        <section className="relative overflow-hidden border-b border-white/10 bg-[#090909] py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full bg-[#f6bd16]/10 blur-[120px]"
          />

          <div className="gr-container relative">
            <div className="max-w-[620px]">
              <p className="text-[#f6bd16]">INFORMAÇÕES</p>

              <h1 className="mt-4 text-4xl font-black text-white">
                Tudo o que você precisa em um só lugar.
              </h1>

              <p className="mt-4 text-lg text-white/60">
                Acesse documentos, serviços, orientações e informações úteis
                para o seu processo de habilitação.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {INFO_HUB_ITEMS.map((item) => (
                <Link
                  key={item.number}
                  href={item.href}
                  className="group relative flex flex-col rounded-[24px] border border-white/10 bg-[#141414] p-6 transition-all duration-300 motion-reduce:transition-none hover:-translate-y-0.5 hover:border-[#f6bd16]/40 hover:shadow-[0_16px_36px_-20px_rgba(246,189,22,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6bd16]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090909]"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#f6bd16]/30 bg-[#f6bd16]/5 transition-colors duration-300 motion-reduce:transition-none group-hover:border-[#f6bd16]/60">
                      <item.Icon />
                    </span>
                    <span className="text-xs font-bold text-white/25">
                      {item.number}
                    </span>
                  </div>

                  <h2 className="mt-5 text-base font-bold text-white transition-colors duration-300 motion-reduce:transition-none group-hover:text-[#ffd044]">
                    {item.title}
                  </h2>

                  <p className="mt-2 flex-1 text-sm leading-6 text-white/60">
                    {item.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.1em] text-[#f6bd16] transition-transform duration-300 motion-reduce:transition-none group-hover:translate-x-1">
                    Acessar
                    <ArrowRightIcon />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
