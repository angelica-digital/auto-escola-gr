function ClipboardIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 fill-none stroke-[#f6bd16] stroke-[1.6]"
    >
      <rect x="6" y="4.5" width="12" height="16" rx="1.6" />
      <path d="M9 4.5V3.8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v.7" />
      <path
        d="m9 13 2 2 4-4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IdCardIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 fill-none stroke-[#f6bd16] stroke-[1.6]"
    >
      <rect x="2.75" y="5.5" width="18.5" height="13" rx="1.6" />
      <circle cx="7.5" cy="12" r="1.9" />
      <path d="M12.5 9.5h6M12.5 12h6M12.5 14.5h4" strokeLinecap="round" />
    </svg>
  );
}

function AlertDocIcon() {
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
      <path d="M12 11v3.5" strokeLinecap="round" />
      <circle cx="12" cy="17" r="0.9" fill="#f6bd16" stroke="none" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 fill-none stroke-[#f6bd16] stroke-[1.6]"
    >
      <path
        d="M4 5.5c2-1 5-1 7 .5v13c-2-1.5-5-1.5-7-.5v-13Z"
        strokeLinejoin="round"
      />
      <path
        d="M20 5.5c-2-1-5-1-7 .5v13c2-1.5 5-1.5 7-.5v-13Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FirstAidIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 fill-none stroke-[#f6bd16] stroke-[1.6]"
    >
      <rect x="3.5" y="5.5" width="17" height="14" rx="2" />
      <path d="M12 9.5v5M9.5 12h5" strokeLinecap="round" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 fill-none stroke-[#f6bd16] stroke-[1.6]"
    >
      <path d="M8 6.5h11M8 12h11M8 17.5h11" strokeLinecap="round" />
      <path
        d="M4.2 6.5h.01M4.2 12h.01M4.2 17.5h.01"
        strokeLinecap="round"
        strokeWidth="2.4"
      />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-3.5 w-3.5 shrink-0 fill-none stroke-current stroke-[2]"
    >
      <path
        d="M7 17 17 7M9 7h8v8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type OnlineService = {
  number: string;
  title: string;
  description: string;
  href: string;
  group: "DETRAN/SP" | "MATERIAL DE APOIO";
  Icon: typeof ClipboardIcon;
};

const ONLINE_SERVICES: OnlineService[] = [
  {
    number: "01",
    title: "Simulado Teórico do Detran",
    description: "Pratique seus conhecimentos antes da prova teórica.",
    href: "http://www.detran.sp.gov.br/simulado",
    group: "DETRAN/SP",
    Icon: ClipboardIcon,
  },
  {
    number: "02",
    title: "Consulte sua Pontuação",
    description: "Acesse o serviço de consulta de pontuação da CNH.",
    href: "http://www.detran.sp.gov.br/wps/portal/portaldetran/cidadao/habilitacao/fichaservico/pesquisaPontuacaoCNH",
    group: "DETRAN/SP",
    Icon: IdCardIcon,
  },
  {
    number: "03",
    title: "Consulte suas Multas",
    description:
      "Acesse os serviços online do Detran/SP para consultar informações.",
    href: "https://www.detran.sp.gov.br/wps/portal/portaldetran/cidadao/servicos/servicosOnline",
    group: "DETRAN/SP",
    Icon: AlertDocIcon,
  },
  {
    number: "04",
    title: "Apostila Direção Defensiva",
    description: "Material de apoio para seus estudos.",
    href: "https://www.autoescolagr.com.br/_files/ugd/b4baa1_da707df3083743b8a6c9dcb468e5fd19.pdf",
    group: "MATERIAL DE APOIO",
    Icon: BookIcon,
  },
  {
    number: "05",
    title: "Apostila Primeiros Socorros",
    description: "Material complementar para sua preparação teórica.",
    href: "https://www.autoescolagr.com.br/_files/ugd/b4baa1_da707df3083743b8a6c9dcb468e5fd19.pdf",
    group: "MATERIAL DE APOIO",
    Icon: FirstAidIcon,
  },
  {
    number: "06",
    title: "Tabela de Infrações",
    description:
      "Consulte o material de referência sobre infrações de trânsito.",
    href: "https://www.autoescolagr.com.br/_files/ugd/b4baa1_4c852960f29642558e5b219993c09bcd.pdf",
    group: "MATERIAL DE APOIO",
    Icon: ListIcon,
  },
];

export default function OnlineServicesSection() {
  return (
    <section
      id="servicos-online"
      className="relative overflow-hidden border-b border-white/10 bg-[#0c0c0c] py-24"
    >
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
          <p className="text-[#f6bd16]">SERVIÇOS ONLINE</p>

          <h2 className="mt-4 text-4xl font-black text-white">
            Acessos úteis para sua jornada.
          </h2>

          <p className="mt-4 text-lg text-white/60">
            Consulte serviços do Detran/SP e acesse materiais que podem
            ajudar durante sua formação.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ONLINE_SERVICES.map((service) => (
            <a
              key={service.number}
              href={service.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-[24px] border border-white/10 bg-[#141414] p-6 transition-all duration-300 motion-reduce:transition-none hover:-translate-y-0.5 hover:border-[#f6bd16]/40 hover:shadow-[0_16px_36px_-20px_rgba(246,189,22,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6bd16]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0c]"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#f6bd16]/30 bg-[#f6bd16]/5 transition-colors duration-300 motion-reduce:transition-none group-hover:border-[#f6bd16]/60">
                  <service.Icon />
                </span>
                <span className="text-xs font-bold text-white/25">
                  {service.number}
                </span>
              </div>

              <span className="mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/35">
                {service.group}
              </span>

              <h3 className="mt-2 flex items-center gap-1.5 text-base font-bold text-white transition-colors duration-300 motion-reduce:transition-none group-hover:text-[#ffd044]">
                {service.title}
                <span className="text-white/40 transition-transform duration-300 motion-reduce:transition-none group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#ffd044]">
                  <ExternalLinkIcon />
                </span>
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/60">
                {service.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
