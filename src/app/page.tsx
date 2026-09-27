import { readdirSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import StudentsMarquee from "@/components/StudentsMarquee";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WHATSAPP_NUMBER = "5511931523189";

const CONTACT_ADDRESS =
  "Praça Santa Edwiges, 32 - Vila dos Remédios, São Paulo - SP, 05104-005";

const CONTACT_MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  CONTACT_ADDRESS,
)}&output=embed`;

const CONTACT_MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  CONTACT_ADDRESS,
)}`;

const PACKAGE_LESSONS = ["02", "06", "10"];

// Defasagem do traço dourado na borda de cada card de Pacotes.
const PACKAGE_TRACE_DELAYS = ["0s", "-2.6s", "-1.2s", "-5.8s"];

const PACKAGE_CARDS = [
  {
    eyebrow: "Categoria A",
    title: "CNH Moto",
    description:
      "Para quem deseja iniciar o processo de habilitação para motocicletas.",
    features: ["Categoria A", "Atendimento personalizado", "Consulte valores e condições"],
    prices: ["399,00", "699,00", "899,00"],
    message: "Olá! Gostaria de informações sobre os pacotes da Categoria A - Moto.",
    highlight: false,
  },
  {
    eyebrow: "Categoria B",
    title: "CNH Carro",
    description:
      "Para quem deseja iniciar o processo de habilitação para automóveis.",
    features: ["Categoria B", "Atendimento personalizado", "Consulte valores e condições"],
    prices: ["399,00", "699,00", "899,00"],
    message: "Olá! Gostaria de informações sobre os pacotes da Categoria B - Carro.",
    highlight: false,
  },
  {
    eyebrow: "Categorias A + B",
    title: "Carro + Moto",
    description:
      "Uma opção para quem deseja realizar o processo das duas categorias.",
    features: ["Categorias A + B", "Atendimento personalizado", "Consulte valores e condições"],
    prices: ["699,00", "999,00", "1.399,00"],
    message: "Olá! Gostaria de informações sobre os pacotes A+B - Carro + Moto.",
    highlight: true,
  },
  {
    eyebrow: "Adição",
    title: "Adição Moto",
    description:
      "Para quem já possui CNH de carro e deseja adicionar a categoria para moto.",
    features: ["Adição da categoria A", "Atendimento personalizado", "Consulte valores e condições"],
    prices: ["399,00", "699,00", "899,00"],
    message: "Olá! Gostaria de informações sobre os pacotes de Adição - Moto.",
    highlight: false,
  },
];

// Grid técnico em grafite quente (fundo do Hero e de Pacotes). A intensidade
// de cada seção é controlada pela opacidade da camada.
const WARM_GRID_STYLE = {
  backgroundImage:
    "linear-gradient(rgb(255,236,200) 1px, transparent 1px), linear-gradient(90deg, rgb(255,236,200) 1px, transparent 1px)",
  backgroundSize: "40px 40px",
  maskImage:
    "radial-gradient(ellipse 80% 75% at 50% 50%, #000 30%, rgba(0,0,0,0.35) 100%)",
  WebkitMaskImage:
    "radial-gradient(ellipse 80% 75% at 50% 50%, #000 30%, rgba(0,0,0,0.35) 100%)",
};

// Grid discreto que desaparece em direção às bordas (fundo de Alunos e de
// Como funciona). A intensidade de cada seção fica na opacidade da camada.
const SOFT_GRID_STYLE = {
  backgroundImage:
    "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
  backgroundSize: "32px 32px",
  maskImage:
    "radial-gradient(ellipse 65% 75% at 50% 50%, #000 20%, rgba(0,0,0,0.4) 60%, transparent 100%)",
  WebkitMaskImage:
    "radial-gradient(ellipse 65% 75% at 50% 50%, #000 20%, rgba(0,0,0,0.4) 60%, transparent 100%)",
};

const STUDENT_PHOTO_EXTENSIONS = /\.(webp|jpg|jpeg|png)$/i;

/**
 * Lê public/alunos/ em tempo de build/renderização no servidor e retorna
 * os caminhos públicos das fotos reais encontradas (ex: /alunos/aluno-01.webp).
 * Se a pasta ainda não tiver imagens, retorna uma lista vazia — nunca
 * referencia arquivos que não existem.
 */
function getStudentPhotos(): string[] {
  const studentsDir = path.join(process.cwd(), "public", "alunos");

  try {
    return readdirSync(studentsDir)
      .filter((file) => STUDENT_PHOTO_EXTENSIONS.test(file))
      .sort((a, b) => a.localeCompare(b, "en", { numeric: true }))
      .map((file) => `/alunos/${file}`);
  } catch {
    return [];
  }
}

function whatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Seta dos CTAs em pílula, centralizada dentro do círculo dourado. */
function CtaArrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[15px] w-[15px] fill-none stroke-current stroke-[2.2] transition-transform duration-300 group-hover/cta:translate-x-[2px] motion-reduce:transition-none motion-reduce:group-hover/cta:translate-x-0"
    >
      <path
        d="M5 12h13.5M13 6.5 18.5 12 13 17.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ctaCircleClass =
  "flex shrink-0 items-center justify-center rounded-full bg-[#f6bd16] text-[#090909] transition duration-300 group-hover/cta:scale-105 group-hover/cta:bg-[#ffd044] group-hover/cta:shadow-[0_0_14px_rgba(246,189,22,0.45)] motion-reduce:transition-none motion-reduce:group-hover/cta:scale-100";

/**
 * CTA principal amarelo (padrão do Hero): texto escuro e círculo preto com
 * seta amarela. Cor e fonte ficam nos <span> por causa das regras globais
 * `a { color/font: inherit }`. `className`, `textClassName` e
 * `circleClassName` recebem margens e ajustes responsivos de cada uso.
 */
function PrimaryCta({
  href,
  label,
  external = false,
  className = "",
  textClassName = "",
  circleClassName = "",
}: {
  href: string;
  label: string;
  external?: boolean;
  className?: string;
  textClassName?: string;
  circleClassName?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`group/cta inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#ffd66b]/70 bg-gradient-to-b from-[#ffcb33] to-[#f6bd16] py-[7px] pl-7 pr-[7px] shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_10px_28px_-14px_rgba(246,189,22,0.6)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_14px_34px_-12px_rgba(246,189,22,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6bd16]/70 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${className}`}
    >
      <span
        className={`whitespace-nowrap text-sm font-extrabold text-[#090909] ${textClassName}`}
      >
        {label}
      </span>
      <span
        aria-hidden="true"
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#090909] text-[#f6bd16] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ${circleClassName}`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 fill-none stroke-current stroke-[2.2] transition-transform duration-300 group-hover/cta:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover/cta:translate-x-0"
        >
          <path
            d="M5 12h13.5M13 6.5 18.5 12 13 17.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}

/**
 * CTA escuro em pílula dos cards de Habilitação, com seta em círculo dourado.
 * Cor e fonte ficam nos <span> internos: as regras globais
 * `a { color: inherit }` e `a { font: inherit }` sobrepõem essas classes no <a>.
 */
function CardCta({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="group/cta mt-4 inline-flex min-h-11 max-w-full items-center gap-2.5 self-start rounded-full border border-[#f6bd16]/30 bg-black/30 py-[5px] pl-4 pr-[5px] transition duration-300 hover:border-[#f6bd16]/60 hover:bg-[#f6bd16]/[0.07] hover:shadow-[0_0_18px_-6px_rgba(246,189,22,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6bd16]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] motion-reduce:transition-none"
    >
      <span className="min-w-0 text-balance text-[13px] font-medium leading-tight text-white">
        {label}
      </span>
      <span aria-hidden="true" className={`${ctaCircleClass} h-[30px] w-[30px]`}>
        <CtaArrow />
      </span>
    </a>
  );
}

/**
 * CTA de conversão dos cards de Pacotes: mesma linguagem do CardCta, com
 * ícone do WhatsApp e largura total do card. Em 4 colunas (xl) o card tem
 * ~220px úteis, então tudo fica mais compacto. O texto pode encolher
 * (min-w-0) e quebrar se faltar espaço, para o círculo nunca sair da cápsula.
 */
function PackageCta({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group/cta mt-6 flex min-h-12 w-full items-center gap-2.5 rounded-full border border-[#f6bd16]/30 bg-black/30 py-[6px] pl-5 pr-[6px] transition duration-300 hover:-translate-y-px hover:border-[#f6bd16]/60 hover:bg-[#f6bd16]/[0.07] hover:shadow-[0_0_20px_-6px_rgba(246,189,22,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6bd16]/60 motion-reduce:transition-none motion-reduce:hover:translate-y-0 xl:gap-1.5 xl:pl-3 xl:pr-[5px]"
    >
      <span className="flex shrink-0 text-[#f6bd16]/90 [&>svg]:h-4 [&>svg]:w-4 xl:[&>svg]:h-3.5 xl:[&>svg]:w-3.5">
        <WhatsAppIcon />
      </span>
      <span className="min-w-0 flex-1 text-balance text-sm font-semibold leading-tight text-white xl:text-xs xl:font-medium">
        Consultar pelo WhatsApp
      </span>
      <span aria-hidden="true" className={`${ctaCircleClass} h-[34px] w-[34px] xl:h-[30px] xl:w-[30px]`}>
        <CtaArrow />
      </span>
    </a>
  );
}

/**
 * Segmento dourado que percorre o perímetro de um elemento com cantos
 * arredondados. Usa um <rect> SVG com pathLength="100": o tamanho do
 * segmento fica proporcional ao perímetro real, em qualquer tamanho.
 * O pai precisa ser `relative`; `inset` alinha o traço ao centro da borda.
 * Estilos em `.gr-trace*` (seções abaixo).
 */
function BorderTrace({
  className,
  radius,
  inset,
  delay = "0s",
}: {
  className: string;
  radius: number;
  inset: number;
  delay?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={`gr-trace pointer-events-none absolute overflow-visible ${className}`}
      style={{
        left: inset,
        top: inset,
        width: `calc(100% - ${inset * 2}px)`,
        height: `calc(100% - ${inset * 2}px)`,
      }}
    >
      <rect
        className="gr-trace-tail"
        width="100%"
        height="100%"
        rx={radius}
        pathLength={100}
        style={{ animationDelay: delay }}
      />
      <rect
        className="gr-trace-head"
        width="100%"
        height="100%"
        rx={radius}
        pathLength={100}
        style={{ animationDelay: delay }}
      />
    </svg>
  );
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

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 fill-none stroke-[#f6bd16] stroke-[2.2]"
    >
      <path
        d="m4 10.5 3.8 3.8L16 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 fill-none stroke-[#f6bd16] stroke-[1.8]"
    >
      <path
        d="M4 5.5h16a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1H9l-4 3v-3H4a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 fill-none stroke-[#f6bd16] stroke-[1.8]"
    >
      <path
        d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 fill-none stroke-[#f6bd16] stroke-[1.8]"
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  const studentPhotos = getStudentPhotos();

  return (
    <main>
      <Header />

      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#171610]">
        {/* Iluminação ambiente do Hero: tablet/mobile (card abaixo do texto) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 lg:hidden"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 75% 38% at 72% 74%, rgba(246,189,22,0.08), transparent 70%), radial-gradient(ellipse 65% 35% at 0% 10%, rgba(246,189,22,0.04), transparent 70%), radial-gradient(ellipse 90% 60% at 50% 40%, rgba(255,236,190,0.03), transparent 75%), radial-gradient(ellipse 140% 100% at 50% 45%, transparent 60%, rgba(0,0,0,0.3) 100%)",
          }}
        />
        {/* Iluminação ambiente do Hero: desktop (glow atrás do card da direita) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 hidden lg:block"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 45% 65% at 76% 45%, rgba(246,189,22,0.12), transparent 70%), radial-gradient(ellipse 40% 55% at 8% 100%, rgba(246,189,22,0.05), transparent 70%), radial-gradient(ellipse 60% 70% at 45% 45%, rgba(255,236,190,0.035), transparent 75%), radial-gradient(ellipse 115% 100% at 50% 45%, transparent 60%, rgba(0,0,0,0.35) 100%)",
          }}
        />
        {/* Grid técnico do Hero: mesmo de Pacotes, com intensidade menor */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] lg:opacity-[0.035]"
          style={WARM_GRID_STYLE}
        />

        <div className="gr-container grid gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-0 lg:min-h-[680px]">
          <div className="relative z-10 max-w-[620px]">
            <p className="text-[#f6bd16]">
              Auto Escola GR · Vila dos Remédios
            </p>

            <h1 className="mt-4 text-5xl font-black text-white">
              Sua CNH começa aqui.
            </h1>

            <p className="mt-6 max-w-[560px] text-lg leading-8 text-white/60">
              Carro, moto ou os dois. Escolha sua categoria, conheça os pacotes
              disponíveis e fale com a equipe da Auto Escola GR para iniciar seu
              processo.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:gap-2 xl:gap-3">
              <PrimaryCta
                href="#habilitacao"
                label="Quero começar minha CNH"
                className="focus-visible:ring-offset-[#171610] lg:gap-2 lg:pl-4 xl:gap-3 xl:pl-7"
                textClassName="lg:text-[13px] xl:text-sm"
                circleClassName="lg:h-[34px] lg:w-[34px] xl:h-10 xl:w-10"
              />

              <a
                href="#pacotes"
                className="group/cta inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#f6bd16]/30 bg-black/30 py-2 pl-7 pr-2.5 transition duration-300 hover:border-[#f6bd16]/60 hover:bg-[#f6bd16]/[0.06] hover:shadow-[inset_0_0_20px_rgba(246,189,22,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6bd16]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#171610] motion-reduce:transition-none lg:gap-2 lg:pl-4 lg:pr-2 xl:gap-3 xl:pl-7 xl:pr-2.5"
              >
                <span className="whitespace-nowrap text-sm font-bold text-white lg:text-[13px] xl:text-sm">
                  Ver pacotes e valores
                </span>
                <span aria-hidden="true" className={`${ctaCircleClass} h-[34px] w-[34px] lg:h-[30px] lg:w-[30px] xl:h-[34px] xl:w-[34px]`}>
                  <CtaArrow />
                </span>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/50">
              <span>✓ Carro</span>
              <span>✓ Moto</span>
              <span>✓ Carro + Moto</span>
              <span>✓ Aulas aos sábados</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#181818] via-[#141414] to-[#090909] lg:mx-0 lg:aspect-auto lg:h-[560px] lg:max-w-none">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#f6bd16]/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-[#f6bd16]/10 blur-3xl" />

              <div
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              <div className="pointer-events-none absolute left-6 top-6 h-8 w-8 rounded-tl-xl border-l-2 border-t-2 border-white/20" />
              <div className="pointer-events-none absolute right-6 top-6 h-8 w-8 rounded-tr-xl border-r-2 border-t-2 border-white/20" />
              <div className="pointer-events-none absolute bottom-6 left-6 h-8 w-8 rounded-bl-xl border-b-2 border-l-2 border-white/20" />
              <div className="pointer-events-none absolute bottom-6 right-6 h-8 w-8 rounded-br-xl border-b-2 border-r-2 border-white/20" />

              <div className="relative flex h-full flex-col items-center justify-center gap-4 px-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#f6bd16]/40 bg-[#f6bd16]/10 text-2xl font-black text-[#f6bd16]">
                  GR
                </div>

                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                  Auto Escola GR
                </p>

                <p className="max-w-[220px] text-xs leading-relaxed text-white/40">
                  Espaço reservado para foto da autoescola, do carro ou de um aluno
                </p>
              </div>
            </div>

            {/* Traço dourado na moldura do card (mesmo BorderTrace da Habilitação).
                Fica fora do card por causa do overflow-hidden e acompanha sua largura. */}
            <style>{`
              .gr-trace-hero {
                --gr-trace-duration: 11s;
                filter: drop-shadow(0 0 5px rgba(246, 189, 22, 0.45));
              }
              .gr-trace-hero .gr-trace-tail {
                stroke: rgba(246, 189, 22, 0.3);
                stroke-width: 1.75px;
              }
              .gr-trace-hero .gr-trace-head {
                stroke: rgba(246, 189, 22, 0.9);
                stroke-width: 1.75px;
              }
            `}</style>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 right-0 mx-auto w-full max-w-[420px] lg:max-w-none"
            >
              <BorderTrace className="gr-trace-hero" radius={31.5} inset={0.5} />
            </div>
          </div>
        </div>
      </section>

      <section id="habilitacao" className="border-b border-white/10 bg-[#090909] py-16 lg:py-24">
        <style>{`
          .gr-trace rect {
            fill: none;
            stroke-linecap: round;
          }
          .gr-trace-tail {
            stroke-dasharray: 18 82;
            animation: gr-trace-tail var(--gr-trace-duration) linear infinite;
          }
          .gr-trace-head {
            stroke-dasharray: 8 92;
            animation: gr-trace-head var(--gr-trace-duration) linear infinite;
          }
          @keyframes gr-trace-tail {
            from { stroke-dashoffset: 0; }
            to { stroke-dashoffset: -100; }
          }
          @keyframes gr-trace-head {
            from { stroke-dashoffset: -5; }
            to { stroke-dashoffset: -105; }
          }
          .gr-trace-card {
            --gr-trace-duration: 9s;
            opacity: 0.75;
            filter: drop-shadow(0 0 4px rgba(246, 189, 22, 0.35));
            transition: opacity 500ms ease, filter 500ms ease;
          }
          .gr-trace-card .gr-trace-tail {
            stroke: rgba(246, 189, 22, 0.28);
            stroke-width: 1.5px;
          }
          .gr-trace-card .gr-trace-head {
            stroke: rgba(246, 189, 22, 0.85);
            stroke-width: 1.5px;
          }
          .group:hover > .gr-trace-card {
            opacity: 1;
            filter: drop-shadow(0 0 6px rgba(246, 189, 22, 0.5));
          }
          @media (prefers-reduced-motion: reduce) {
            .gr-trace {
              display: none;
            }
          }
        `}</style>

        <div className="gr-container">
          <div className="max-w-[620px]">
            <p className="text-[#f6bd16]">Habilitação</p>

            <h2 className="mt-4 text-4xl font-black text-white">
              Escolha sua habilitação
            </h2>

            <p className="mt-4 text-lg text-white/60">
              Encontre a opção ideal para começar sua CNH.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <article className="group relative flex flex-col rounded-[28px] border border-white/10 bg-[#111111] p-8 transition hover:border-[#f6bd16]/40"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse 100% 60% at 100% 0%, rgba(246,189,22,0.11) 0%, rgba(246,189,22,0.065) 25%, rgba(246,189,22,0.025) 48%, transparent 68%)",
              }}
            >
              <BorderTrace className="gr-trace-card" radius={27.5} inset={-0.5} delay="0s" />

              <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#181818] to-[#0d0d0d]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                <Image
                  src="/categoria-a-moto.png"
                  alt="Motocicleta - Categoria A"
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain p-6"
                />
              </div>

              <span className="mt-6 h-[2px] w-10 bg-[#f6bd16]" />

              <span className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-[#f6bd16]">
                Categoria A
              </span>

              <h3 className="mt-3 text-2xl font-black text-white">Moto</h3>

              <p className="mt-3 flex-1 text-[15px] leading-7 text-white/60">
                A categoria A é destinada a veículos motorizados de duas ou
                três rodas, como motos, motonetas e triciclos.
              </p>

              <CardCta href="#pacotes" label="Ver opções para moto" />
            </article>

            <article className="group relative flex flex-col rounded-[28px] border border-white/10 bg-[#111111] p-8 transition hover:border-[#f6bd16]/40"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse 90% 58% at 50% 0%, rgba(246,189,22,0.11) 0%, rgba(246,189,22,0.065) 25%, rgba(246,189,22,0.025) 48%, transparent 68%)",
              }}
            >
              <BorderTrace className="gr-trace-card" radius={27.5} inset={-0.5} delay="-2.3s" />

              <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#181818] to-[#0d0d0d]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                <Image
                  src="/categoria-b-carro.png"
                  alt="Carro - Categoria B"
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain p-6"
                />
              </div>

              <span className="mt-6 h-[2px] w-10 bg-[#f6bd16]" />

              <span className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-[#f6bd16]">
                Categoria B
              </span>

              <h3 className="mt-3 text-2xl font-black text-white">Carro</h3>

              <p className="mt-3 flex-1 text-[15px] leading-7 text-white/60">
                A categoria B inclui veículos automotores de até oito
                lugares e com peso bruto total de até 3.500 kg, sendo a
                categoria utilizada para carros de passeio.
              </p>

              <CardCta href="#pacotes" label="Ver opções para carro" />
            </article>

            <article className="group relative flex flex-col rounded-[28px] border border-white/10 bg-[#111111] p-8 transition hover:border-[#f6bd16]/40"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse 100% 60% at 0% 0%, rgba(246,189,22,0.11) 0%, rgba(246,189,22,0.065) 25%, rgba(246,189,22,0.025) 48%, transparent 68%)",
              }}
            >
              <BorderTrace className="gr-trace-card" radius={27.5} inset={-0.5} delay="-4.7s" />

              <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#181818] to-[#0d0d0d]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                <Image
                  src="/categoria-ab-carro-moto.png"
                  alt="Carro e motocicleta - Categorias A e B"
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain p-6"
                />
              </div>

              <span className="mt-6 h-[2px] w-10 bg-[#f6bd16]" />

              <span className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-[#f6bd16]">
                Categorias A + B
              </span>

              <h3 className="mt-3 text-2xl font-black text-white">
                Carro + Moto
              </h3>

              <p className="mt-3 flex-1 text-[15px] leading-7 text-white/60">
                Opção para quem deseja realizar as duas categorias e obter
                habilitação para conduzir carro e moto.
              </p>

              <CardCta href="#pacotes" label="Ver opção completa" />
            </article>

            <article className="group relative flex flex-col rounded-[28px] border border-white/10 bg-[#111111] p-8 transition hover:border-[#f6bd16]/40"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse 100% 60% at 88% 0%, rgba(246,189,22,0.11) 0%, rgba(246,189,22,0.065) 25%, rgba(246,189,22,0.025) 48%, transparent 68%)",
              }}
            >
              <BorderTrace className="gr-trace-card" radius={27.5} inset={-0.5} delay="-6.9s" />

              <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#181818] to-[#0d0d0d]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                <Image
                  src="/categoria-ab-carro-moto-2.png"
                  alt="Carro e motocicleta - Adição de categoria"
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain p-6"
                />
              </div>

              <span className="mt-6 h-[2px] w-10 bg-[#f6bd16]" />

              <span className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-[#f6bd16]">
                Adição
              </span>

              <h3 className="mt-3 text-2xl font-black text-white">Adição</h3>

              <p className="mt-3 flex-1 text-[15px] leading-7 text-white/60">
                Para quem já possui CNH de carro e deseja adicionar a
                categoria para moto.
              </p>

              <CardCta href="#pacotes" label="Ver opções de adição" />
            </article>
          </div>
        </div>
      </section>

      <section
        id="alunos"
        className="relative overflow-hidden border-b border-white/10 bg-[#090909] py-16 lg:py-24"
      >
        {/* Atmosfera da seção Alunos: luz central ampla + luz na faixa das fotos */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 lg:hidden"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 55% at 50% 45%, rgba(246,189,22,0.065) 0%, rgba(246,189,22,0.04) 28%, rgba(246,189,22,0.018) 52%, transparent 75%), radial-gradient(ellipse 90% 26% at 50% 72%, rgba(246,189,22,0.04), transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden lg:block"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 55% 65% at 50% 50%, rgba(246,189,22,0.085) 0%, rgba(246,189,22,0.052) 28%, rgba(246,189,22,0.022) 52%, transparent 75%), radial-gradient(ellipse 65% 30% at 50% 70%, rgba(246,189,22,0.05), transparent 70%)",
          }}
        />
        {/* Vinheta lateral: conduz o olhar ao centro sem esconder o grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(0,0,0,0.5) 0%, transparent 24%, transparent 76%, rgba(0,0,0,0.5) 100%)",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={SOFT_GRID_STYLE}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[560px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#f6bd16]/10 blur-[130px]"
        />

        <div className="gr-container relative">
          <div className="mx-auto max-w-[640px] text-center">
            <p className="text-[#f6bd16]">Alunos GR</p>

            <h2 className="mt-4 text-4xl font-black text-white">
              Cada conquista faz parte da nossa história.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/60">
              Alunos que confiaram na Auto Escola GR para dar um novo passo
              no trânsito.
            </p>
          </div>

          <div className="mt-16">
            <StudentsMarquee photos={studentPhotos} />
          </div>
        </div>
      </section>

      <section id="pacotes" className="relative isolate overflow-hidden border-b border-white/10 bg-[#0c0c0c] py-16 lg:py-24">
        {/* Fundo da seção Pacotes: halo dourado amplo atrás dos cards */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 lg:hidden"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 95% 38% at 50% 50%, rgba(246,189,22,0.05) 0%, rgba(246,189,22,0.025) 32%, rgba(246,189,22,0.01) 55%, transparent 75%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 hidden lg:block"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 50% at 50% 52%, rgba(246,189,22,0.08) 0%, rgba(246,189,22,0.04) 30%, rgba(246,189,22,0.015) 52%, transparent 72%)",
          }}
        />
        {/* Grid técnico em grafite quente, mais discreto que o da seção Alunos */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045]"
          style={WARM_GRID_STYLE}
        />
        {/* Fio dourado sutil na transição com a seção anterior */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#f6bd16]/[0.12] to-transparent"
        />

        {/* Traço dourado nas bordas dos cards (BorderTrace, variantes de Pacotes) */}
        <style>{`
          .gr-trace-pkg {
            --gr-trace-duration: 9s;
            opacity: 0.85;
            filter: drop-shadow(0 0 4px rgba(246, 189, 22, 0.35));
          }
          .gr-trace-pkg .gr-trace-tail {
            stroke: rgba(246, 189, 22, 0.22);
            stroke-width: 1.5px;
          }
          .gr-trace-pkg .gr-trace-head {
            stroke: rgba(246, 189, 22, 0.8);
            stroke-width: 1.5px;
          }
          .gr-trace-pkg-featured {
            --gr-trace-duration: 8s;
            opacity: 1;
            filter: drop-shadow(0 0 6px rgba(246, 189, 22, 0.5));
          }
          .gr-trace-pkg-featured .gr-trace-tail {
            stroke: rgba(246, 189, 22, 0.35);
            stroke-width: 1.75px;
          }
          .gr-trace-pkg-featured .gr-trace-head {
            stroke: rgba(255, 214, 90, 0.95);
            stroke-width: 1.75px;
          }
          @media (prefers-reduced-motion: reduce) {
            .gr-trace.gr-trace-pkg {
              display: block;
            }
            .gr-trace-pkg .gr-trace-tail,
            .gr-trace-pkg .gr-trace-head {
              animation: none;
            }
            .gr-trace-pkg .gr-trace-head {
              stroke-dashoffset: -5;
            }
          }
        `}</style>

        <div className="gr-container">
          <div className="max-w-[620px]">
            <p className="text-[#f6bd16]">Pacotes</p>

            <h2 className="mt-4 text-4xl font-black text-white">
              Escolha o caminho para sua CNH
            </h2>

            <p className="mt-4 text-lg text-white/60">
              Confira as opções disponíveis e fale com a equipe para receber
              os valores e condições atualizadas.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {PACKAGE_CARDS.map((card, cardIndex) => (
              <article
                key={card.title}
                className={
                  card.highlight
                    ? "relative flex flex-col rounded-[28px] border border-[#f6bd16]/40 bg-[#161512] p-8 shadow-[0_0_70px_-6px_rgba(246,189,22,0.07)] xl:-translate-y-3 xl:shadow-[0_30px_60px_-20px_rgba(246,189,22,0.18),0_0_70px_-6px_rgba(246,189,22,0.07)]"
                    : "relative flex flex-col rounded-[28px] border border-white/10 bg-[#141414] p-8"
                }
              >
                <BorderTrace
                  className={card.highlight ? "gr-trace-pkg gr-trace-pkg-featured" : "gr-trace-pkg"}
                  radius={27.5}
                  inset={-0.5}
                  delay={PACKAGE_TRACE_DELAYS[cardIndex]}
                />

                {card.highlight && (
                  <span className="absolute -top-3 left-8 rounded-full bg-[#f6bd16] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#090909]">
                    Opção completa
                  </span>
                )}

                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#f6bd16]">
                  {card.eyebrow}
                </span>

                <h3 className="mt-3 text-2xl font-black text-white">
                  {card.title}
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-white/60">
                  {card.description}
                </p>

                <ul className="mt-6 flex flex-col gap-3 text-sm text-white/70">
                  {card.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>

                <ul className="mt-8 flex flex-1 flex-col justify-end gap-2.5">
                  {card.prices.map((price, index) => (
                    <li
                      key={PACKAGE_LESSONS[index]}
                      className={`rounded-2xl border px-5 py-3.5 ${
                        card.highlight
                          ? "border-[#f6bd16]/15 bg-[#f6bd16]/[0.035]"
                          : "border-white/10 bg-white/[0.025]"
                      }`}
                    >
                      <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-white/50">
                        <span className="text-[#f6bd16]">
                          {PACKAGE_LESSONS[index]}
                        </span>{" "}
                        Aulas práticas
                      </span>
                      <span className="mt-1 block text-2xl font-black text-white">
                        <span className="mr-1 text-sm font-bold text-white/60">
                          R$
                        </span>
                        {price}
                      </span>
                    </li>
                  ))}
                </ul>

                <PackageCta href={whatsappHref(card.message)} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="processo"
        className="relative overflow-hidden border-b border-white/10 bg-[#090909] py-16 lg:py-24"
      >
        {/* Fundo de Como funciona: mesma linguagem discreta da seção Alunos */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 lg:hidden"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 85% 35% at 50% 38%, rgba(246,189,22,0.045) 0%, rgba(246,189,22,0.02) 45%, transparent 75%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden lg:block"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 50% 55% at 50% 48%, rgba(246,189,22,0.06) 0%, rgba(246,189,22,0.03) 35%, rgba(246,189,22,0.012) 58%, transparent 78%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(0,0,0,0.5) 0%, transparent 24%, transparent 76%, rgba(0,0,0,0.5) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={SOFT_GRID_STYLE}
        />

        <div className="gr-container relative">
          <div className="max-w-[620px]">
            <p className="text-[#f6bd16]">Como funciona</p>

            <h2 className="mt-4 text-4xl font-black text-white">
              Seu caminho até a CNH
            </h2>

            <p className="mt-4 text-lg text-white/60">
              Um processo simples para você entender por onde começar.
            </p>
          </div>

          <div className="relative mt-16 flex flex-col gap-12 lg:gap-20">
            <ol className="group/row relative grid list-none gap-12 lg:grid-cols-3">
              {/* Linha da fileira (lg): do centro do 1º ao do 3º círculo.
                  3 colunas com gap de 3rem: centro do último = 100% - (coluna - 28px). */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-7 right-[calc((100%-6rem)/3-1.75rem)] top-7 hidden h-px bg-[#f6bd16]/25 transition-colors duration-300 motion-reduce:transition-none lg:block group-hover/row:bg-[#f6bd16]/45"
              />

              <li className="group relative flex gap-5 lg:flex-col lg:items-start">
                <div
                  aria-hidden="true"
                  className="absolute left-7 top-14 -bottom-12 w-px bg-white/10 transition-colors duration-300 motion-reduce:transition-none lg:hidden group-hover:bg-[#f6bd16]/30"
                />
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#f6bd16]/40 bg-[#090909] text-lg font-black text-[#f6bd16] transition-shadow duration-300 motion-reduce:transition-none lg:ring-[6px] lg:ring-[#f6bd16]/[0.05] group-hover:shadow-[0_0_16px_2px_rgba(246,189,22,0.45)]">
                  01
                </span>

                <div className="pt-2 lg:pt-0">
                  <h3 className="text-lg font-bold text-white transition-colors duration-300 motion-reduce:transition-none group-hover:text-[#ffd044]">
                    Matrícula na Auto Escola
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Para iniciar sua habilitação, apresente RG, CPF e
                    comprovante de endereço. O agendamento é realizado no
                    momento da matrícula, com a orientação da equipe da Auto
                    Escola GR.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    No Detran/SP, são realizados os procedimentos de
                    conferência da documentação, foto digital para
                    habilitação, coleta de biometria e teste de
                    alfabetização.
                  </p>
                </div>
              </li>

              <li className="group relative flex gap-5 lg:flex-col lg:items-start">
                <div
                  aria-hidden="true"
                  className="absolute left-7 top-14 -bottom-12 w-px bg-white/10 transition-colors duration-300 motion-reduce:transition-none lg:hidden group-hover:bg-[#f6bd16]/30"
                />
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#f6bd16]/40 bg-[#090909] text-lg font-black text-[#f6bd16] transition-shadow duration-300 motion-reduce:transition-none lg:ring-[6px] lg:ring-[#f6bd16]/[0.05] group-hover:shadow-[0_0_16px_2px_rgba(246,189,22,0.45)]">
                  02
                </span>

                <div className="pt-2 lg:pt-0">
                  <h3 className="text-lg font-bold text-white transition-colors duration-300 motion-reduce:transition-none group-hover:text-[#ffd044]">
                    Exame Médico e Psicotécnico
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Avaliações realizadas em uma clínica credenciada pelo
                    Detran/SP.
                  </p>
                </div>
              </li>

              <li className="group relative flex gap-5 lg:flex-col lg:items-start">
                <div
                  aria-hidden="true"
                  className="absolute left-7 top-14 -bottom-12 w-px bg-white/10 transition-colors duration-300 motion-reduce:transition-none lg:hidden group-hover:bg-[#f6bd16]/30"
                />
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#f6bd16]/40 bg-[#090909] text-lg font-black text-[#f6bd16] transition-shadow duration-300 motion-reduce:transition-none lg:ring-[6px] lg:ring-[#f6bd16]/[0.05] group-hover:shadow-[0_0_16px_2px_rgba(246,189,22,0.45)]">
                  03
                </span>

                <div className="pt-2 lg:pt-0">
                  <h3 className="text-lg font-bold text-white transition-colors duration-300 motion-reduce:transition-none group-hover:text-[#ffd044]">
                    Curso Teórico
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Preparação teórica com duração de 12 dias no formato
                    online ou 09 dias no formato presencial, nos períodos da
                    manhã, tarde ou noite.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    Ao final do curso, o certificado deve ser entregue na
                    Auto Escola.
                  </p>
                </div>
              </li>
            </ol>

            <ol className="group/row relative grid list-none gap-12 lg:grid-cols-3">
              {/* Linha da fileira (lg): do centro do 1º ao do 3º círculo.
                  3 colunas com gap de 3rem: centro do último = 100% - (coluna - 28px). */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-7 right-[calc((100%-6rem)/3-1.75rem)] top-7 hidden h-px bg-[#f6bd16]/25 transition-colors duration-300 motion-reduce:transition-none lg:block group-hover/row:bg-[#f6bd16]/45"
              />

              <li className="group relative flex gap-5 lg:flex-col lg:items-start">
                <div
                  aria-hidden="true"
                  className="absolute left-7 top-14 -bottom-12 w-px bg-white/10 transition-colors duration-300 motion-reduce:transition-none lg:hidden group-hover:bg-[#f6bd16]/30"
                />
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#f6bd16]/40 bg-[#090909] text-lg font-black text-[#f6bd16] transition-shadow duration-300 motion-reduce:transition-none lg:ring-[6px] lg:ring-[#f6bd16]/[0.05] group-hover:shadow-[0_0_16px_2px_rgba(246,189,22,0.45)]">
                  04
                </span>

                <div className="pt-2 lg:pt-0">
                  <h3 className="text-lg font-bold text-white transition-colors duration-300 motion-reduce:transition-none group-hover:text-[#ffd044]">
                    Exame Teórico
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    O Exame Teórico tem data e horário definidos pelo
                    Detran, com duração de 40 minutos e 30 questões.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    São necessários pelo menos 21 acertos para aprovação
                    nesta etapa.
                  </p>
                </div>
              </li>

              <li className="group relative flex gap-5 lg:flex-col lg:items-start">
                <div
                  aria-hidden="true"
                  className="absolute left-7 top-14 -bottom-12 w-px bg-white/10 transition-colors duration-300 motion-reduce:transition-none lg:hidden group-hover:bg-[#f6bd16]/30"
                />
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#f6bd16]/40 bg-[#090909] text-lg font-black text-[#f6bd16] transition-shadow duration-300 motion-reduce:transition-none lg:ring-[6px] lg:ring-[#f6bd16]/[0.05] group-hover:shadow-[0_0_16px_2px_rgba(246,189,22,0.45)]">
                  05
                </span>

                <div className="pt-2 lg:pt-0">
                  <h3 className="text-lg font-bold text-white transition-colors duration-300 motion-reduce:transition-none group-hover:text-[#ffd044]">
                    Aulas Práticas
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Após a aprovação no Exame Teórico, o aluno agenda as
                    aulas de Direção Veicular diretamente na Auto Escola.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    Ao concluir as aulas, é emitido o certificado necessário
                    para a marcação do Exame Prático.
                  </p>
                </div>
              </li>

              <li className="group relative flex gap-5 lg:flex-col lg:items-start">
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#f6bd16]/40 bg-[#090909] text-lg font-black text-[#f6bd16] transition-shadow duration-300 motion-reduce:transition-none lg:ring-[6px] lg:ring-[#f6bd16]/[0.05] group-hover:shadow-[0_0_16px_2px_rgba(246,189,22,0.45)]">
                  06
                </span>

                <div className="pt-2 lg:pt-0">
                  <h3 className="text-lg font-bold text-white transition-colors duration-300 motion-reduce:transition-none group-hover:text-[#ffd044]">
                    Exame Prático de Direção Veicular
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Este exame é realizado às quartas-feiras, no período da
                    manhã, com saída da Auto Escola GR.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section id="sobre" className="relative isolate overflow-hidden border-b border-white/10 bg-[#15140f] py-16 lg:py-24">
        {/* Luz ambiente da seção A GR: tablet/mobile (foto abaixo do texto) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 lg:hidden"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 38% at 30% 80%, rgba(246,189,22,0.07), transparent 70%), radial-gradient(ellipse 90% 50% at 50% 45%, rgba(255,236,190,0.025), transparent 75%), radial-gradient(ellipse 140% 100% at 50% 50%, transparent 60%, rgba(0,0,0,0.3) 100%)",
          }}
        />
        {/* Luz ambiente da seção A GR: desktop (halo atrás da foto, à esquerda) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 hidden lg:block"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 42% 70% at 22% 62%, rgba(246,189,22,0.09), transparent 70%), radial-gradient(ellipse 55% 65% at 55% 45%, rgba(255,236,190,0.03), transparent 75%), radial-gradient(ellipse 115% 100% at 50% 50%, transparent 60%, rgba(0,0,0,0.35) 100%)",
          }}
        />

        <div className="gr-container grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <style>{`
              .gr-trace-photo {
                --gr-trace-duration: 10s;
                filter: drop-shadow(0 0 6px rgba(246, 189, 22, 0.55));
              }
              .gr-trace-photo .gr-trace-tail {
                stroke: rgba(246, 189, 22, 0.35);
                stroke-width: 2px;
              }
              .gr-trace-photo .gr-trace-head {
                stroke: rgba(255, 214, 90, 0.95);
                stroke-width: 2px;
              }
              .gr-sobre-halo {
                animation: gr-halo-breathe 9s ease-in-out infinite;
              }
              @keyframes gr-halo-breathe {
                0%, 100% { opacity: 0.55; transform: scale(1); }
                50% { opacity: 0.9; transform: scale(1.08); }
              }
              .gr-sobre-photo {
                transition: transform 900ms ease-out;
              }
              @media (hover: hover) {
                .gr-sobre-photo-wrap:hover .gr-sobre-photo {
                  transform: scale(1.015);
                }
              }
              @media (prefers-reduced-motion: reduce) {
                .gr-sobre-halo {
                  animation: none;
                }
              }
            `}</style>

            <div
              aria-hidden="true"
              className="gr-sobre-halo pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#f6bd16]/20 blur-[100px]"
            />

            <div className="gr-sobre-photo-wrap relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-[#151515] to-[#0a0a0a] lg:aspect-auto lg:h-full lg:min-h-[440px]">
              <Image
                src="/auto-escola-gr-fachada.png"
                alt="Fachada da Auto Escola GR"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="gr-sobre-photo object-cover"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[#f6bd16]/10 blur-[100px]"
              />

              <span
                aria-hidden="true"
                className="absolute left-8 top-8 h-[2px] w-10 bg-[#f6bd16]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-6 top-6 h-7 w-7 rounded-tr-lg border-r border-t border-[#f6bd16]/40"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-6 left-6 h-7 w-7 rounded-bl-lg border-b border-l border-[#f6bd16]/40"
              />
            </div>

            <BorderTrace className="gr-trace-photo" radius={27.5} inset={0.5} />
          </div>

          {/* Abaixo de lg este bloco vira `contents`: seus filhos entram no grid
              e a ordem fica texto → foto → diferenciais → CTA. No desktop é um
              bloco normal na coluna da direita. */}
          <div className="contents lg:order-2 lg:block">
            <div className="order-1">
              <p className="text-[#f6bd16]">A Auto Escola GR</p>

              <h2 className="mt-4 text-4xl font-black text-white">
                Mais que aprender a dirigir.
              </h2>

              <p className="mt-6 max-w-[560px] text-lg leading-8 text-white/60">
                Cada habilitação representa um novo passo. Na Auto Escola GR,
                esse caminho é acompanhado por uma equipe preparada, atenta e
                comprometida com o aprendizado de cada aluno. Valorizamos uma
                formação clara, responsável e próxima, com foco na confiança ao
                dirigir e na segurança no trânsito.
              </p>
            </div>

            <div className="order-3 divide-y divide-white/10 lg:mt-10">
              <div className="flex gap-4 pb-6 lg:pb-5">
                <span className="text-sm font-black text-[#f6bd16]">01</span>
                <div>
                  <h3 className="text-base font-bold text-white">
                    Atendimento próximo
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-white/60">
                    Uma equipe preparada para orientar você em cada etapa.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 py-6 lg:py-5">
                <span className="text-sm font-black text-[#f6bd16]">02</span>
                <div>
                  <h3 className="text-base font-bold text-white">
                    Formação responsável
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-white/60">
                    Aprendizado para carro, moto ou ambos, com atenção e
                    segurança.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 pt-6 lg:pt-5">
                <span className="text-sm font-black text-[#f6bd16]">03</span>
                <div>
                  <h3 className="text-base font-bold text-white">
                    Do início à CNH
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-white/60">
                    Orientação e acompanhamento durante todo o seu processo
                    de habilitação.
                  </p>
                </div>
              </div>
            </div>

            <PrimaryCta
              href={whatsappHref(
                "Olá! Conheci a Auto Escola GR pelo site e gostaria de saber mais sobre a habilitação.",
              )}
              label="Falar com a Auto Escola GR"
              external
              className="order-4 mt-2 justify-self-start focus-visible:ring-offset-[#15140f] lg:mt-10"
            />
          </div>
        </div>
      </section>

      <section id="contato" className="border-b border-white/10 bg-[#090909] py-16 lg:py-24">
        <div className="gr-container">
          <div className="max-w-[620px]">
            <p className="text-[#f6bd16]">Contato</p>

            <h2 className="mt-4 text-4xl font-black text-white">
              Vamos começar sua CNH?
            </h2>

            <p className="mt-4 text-lg leading-8 text-white/60">
              Fale com a equipe da Auto Escola GR para consultar valores,
              condições e receber orientação para iniciar seu processo.
            </p>
          </div>

          <div className="mt-14 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="divide-y divide-white/10 border-t border-white/10">
              <div className="flex gap-4 py-6">
                <span className="mt-1">
                  <MessageIcon />
                </span>
                <div>
                  <h3 className="text-base font-bold text-white">
                    WhatsApp
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-white/60">
                    Fale diretamente com a nossa equipe.
                  </p>

                  <PrimaryCta
                    href={whatsappHref(
                      "Olá! Conheci a Auto Escola GR pelo site e gostaria de informações para começar minha CNH.",
                    )}
                    label="Chamar no WhatsApp"
                    external
                    className="mt-4 focus-visible:ring-offset-[#090909]"
                  />
                </div>
              </div>

              <div className="flex gap-4 py-6">
                <span className="mt-1">
                  <PinIcon />
                </span>
                <div>
                  <h3 className="text-base font-bold text-white">Região</h3>
                  <p className="mt-1 text-sm leading-6 text-white/60">
                    Praça Santa Edwiges, 32
                    <br />
                    Vila dos Remédios — São Paulo/SP
                    <br />
                    CEP 05104-005
                  </p>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <span className="mt-1">
                  <ClockIcon />
                </span>
                <div>
                  <h3 className="text-base font-bold text-white">
                    Atendimento
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-white/60">
                    Consulte horários e disponibilidade diretamente com a
                    equipe.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-white/10 lg:aspect-auto lg:h-full lg:min-h-[420px]">
              <iframe
                src={CONTACT_MAPS_EMBED_SRC}
                title="Localização da Auto Escola GR no Google Maps"
                loading="lazy"
                className="absolute inset-0 h-full w-full border-0"
              />

              <a
                href={CONTACT_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-[#f6bd16]/40 bg-[#090909]/85 px-4 py-2 text-xs font-bold text-white backdrop-blur-sm transition hover:border-[#f6bd16]/70 hover:text-[#f6bd16]"
              >
                <PinIcon />
                Ver no Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10 bg-[#050505] py-16 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f6bd16]/10 blur-[130px]"
        />

        <div className="gr-container relative">
          <div className="relative mx-auto max-w-[760px] overflow-hidden rounded-[32px] border border-white/10 bg-[#0c0c0c] px-8 py-16 text-center sm:px-16 sm:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-8 top-8 h-8 w-8 rounded-tl-xl border-l-2 border-t-2 border-white/15"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-8 top-8 h-8 w-8 rounded-tr-xl border-r-2 border-t-2 border-white/15"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-8 left-8 h-8 w-8 rounded-bl-xl border-b-2 border-l-2 border-white/15"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-8 right-8 h-8 w-8 rounded-br-xl border-b-2 border-r-2 border-white/15"
            />

            <span
              aria-hidden="true"
              className="mx-auto block h-[2px] w-10 bg-[#f6bd16]"
            />

            <p className="mt-6 text-[#f6bd16]">Seu próximo passo</p>

            <h2 className="mx-auto mt-4 max-w-[560px] text-4xl font-black text-white sm:text-5xl lg:text-6xl">
              Pronto para começar sua CNH?
            </h2>

            <p className="mx-auto mt-6 max-w-[520px] text-lg leading-8 text-white/60">
              Escolha sua categoria, tire suas dúvidas e fale com a equipe da
              Auto Escola GR para iniciar seu processo.
            </p>

            <div className="mt-10 flex justify-center">
              <PrimaryCta
                href={whatsappHref(
                  "Olá! Conheci a Auto Escola GR pelo site e quero começar meu processo de habilitação.",
                )}
                label="Começar pelo WhatsApp"
                external
                className="focus-visible:ring-offset-[#0c0c0c]"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
</main>
);
}