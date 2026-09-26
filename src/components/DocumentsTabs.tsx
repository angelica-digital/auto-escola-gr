"use client";

import { useId, useState } from "react";

type DocumentIconType = "document" | "license" | "home";

type DocumentEntry = {
  name: string;
  detail: string;
  icon: DocumentIconType;
};

type DocumentTab = {
  number: string;
  title: string;
  subtitle?: string;
  items: DocumentEntry[];
  note?: string;
};

const TABS: DocumentTab[] = [
  {
    number: "01",
    title: "Primeira Habilitação",
    subtitle: "Categorias A, B e A+B",
    items: [
      { name: "RG", detail: "original e cópia", icon: "document" },
      { name: "CPF", detail: "original e cópia", icon: "document" },
      {
        name: "Comprovante de residência",
        detail: "original e cópia, com data máxima de 2 meses",
        icon: "home",
      },
    ],
  },
  {
    number: "02",
    title: "Mudança de Categoria",
    items: [
      { name: "RG", detail: "original e cópia", icon: "document" },
      { name: "CPF", detail: "original e cópia", icon: "document" },
      {
        name: "Carteira Nacional de Habilitação",
        detail: "original e cópia",
        icon: "license",
      },
      {
        name: "Comprovante de residência",
        detail: "original e cópia, com data máxima de 2 meses",
        icon: "home",
      },
    ],
    note: "Veículos motorizados usados no transporte coletivo de passageiros e de escolares ou que tenham mais de oito lugares, excluído o espaço do motorista.",
  },
  {
    number: "03",
    title: "Adição de Categoria",
    items: [
      { name: "RG", detail: "original e cópia", icon: "document" },
      { name: "CPF", detail: "original e cópia", icon: "document" },
      {
        name: "Carteira Nacional de Habilitação",
        detail: "original e cópia",
        icon: "license",
      },
      {
        name: "Comprovante de residência",
        detail: "original e cópia, com data máxima de 2 meses",
        icon: "home",
      },
    ],
    note: "Caso já possua habilitação na categoria B (carro) e queira adicionar a categoria A (moto), poderá conduzir também veículos de duas ou três rodas, com ou sem carro lateral — como motocicletas, ciclomotores, motonetas e triciclos.",
  },
];

function DocumentIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 fill-none stroke-[#f6bd16] stroke-[1.6]"
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

function LicenseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 fill-none stroke-[#f6bd16] stroke-[1.6]"
    >
      <rect x="2.75" y="5.5" width="18.5" height="13" rx="1.6" />
      <circle cx="7.5" cy="12" r="1.9" />
      <path d="M12.5 9.5h6M12.5 12h6M12.5 14.5h4" strokeLinecap="round" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 fill-none stroke-[#f6bd16] stroke-[1.6]"
    >
      <path
        d="M4 11.5 12 4l8 7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 10v9.5h12V10" strokeLinejoin="round" />
      <path d="M10 19.5v-6h4v6" strokeLinejoin="round" />
    </svg>
  );
}

function CategoryIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 fill-none stroke-[#f6bd16] stroke-[1.6]"
    >
      <path
        d="m12 3.5 8 4v9l-8 4-8-4v-9l8-4Z"
        strokeLinejoin="round"
      />
      <path d="M4 7.5 12 11.5l8-4" strokeLinejoin="round" />
      <path d="M12 11.5v9" />
    </svg>
  );
}

function ItemIcon({ type }: { type: DocumentIconType }) {
  if (type === "license") return <LicenseIcon />;
  if (type === "home") return <HomeIcon />;
  return <DocumentIcon />;
}

function InfoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 fill-none stroke-[#f6bd16] stroke-[1.6]"
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 11v5.5" strokeLinecap="round" />
      <circle cx="12" cy="8" r="0.9" fill="#f6bd16" stroke="none" />
    </svg>
  );
}

export default function DocumentsTabs() {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const activeTab = TABS[active];

  return (
    <div>
      <style>{`
        @keyframes gr-doc-fade {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .gr-doc-panel {
          animation: gr-doc-fade 350ms ease-out;
        }
        @media (prefers-reduced-motion: reduce) {
          .gr-doc-panel {
            animation: none;
          }
        }
      `}</style>

      <div role="tablist" aria-label="Tipos de processo" className="grid gap-4 sm:grid-cols-3">
        {TABS.map((tab, index) => {
          const isActive = index === active;

          return (
            <button
              key={tab.title}
              type="button"
              role="tab"
              id={`${baseId}-tab-${index}`}
              aria-selected={isActive}
              aria-controls={`${baseId}-panel`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(index)}
              className={`flex min-h-[64px] items-center gap-4 rounded-2xl border p-5 text-left transition-colors duration-300 motion-reduce:transition-none ${
                isActive
                  ? "border-[#f6bd16]/60 bg-[#f6bd16]/[0.06] shadow-[0_0_24px_-8px_rgba(246,189,22,0.45)]"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-sm font-black transition-colors duration-300 motion-reduce:transition-none ${
                  isActive
                    ? "border-[#f6bd16]/60 text-[#f6bd16]"
                    : "border-white/15 text-white/50"
                }`}
              >
                {tab.number}
              </span>

              <span
                className={`text-base font-bold transition-colors duration-300 motion-reduce:transition-none ${
                  isActive ? "text-white" : "text-white/70"
                }`}
              >
                {tab.title}
              </span>
            </button>
          );
        })}
      </div>

      <div
        key={active}
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${active}`}
        className="gr-doc-panel relative mt-8 overflow-hidden rounded-[28px] border border-white/10 bg-[#111111] p-8 sm:p-10"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative">
          <h3 className="text-2xl font-black text-white">
            {activeTab.title}
          </h3>

          {activeTab.subtitle && (
            <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-[#f6bd16]">
              <CategoryIcon />
              {activeTab.subtitle}
            </p>
          )}

          <ul className="mt-7 flex flex-col gap-4">
            {activeTab.items.map((item) => (
              <li key={item.name} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#f6bd16]/30 bg-[#f6bd16]/5">
                  <ItemIcon type={item.icon} />
                </span>
                <span className="pt-1 text-[15px] leading-6">
                  <span className="font-semibold text-white">
                    {item.name}
                  </span>
                  <span className="text-white/60"> — {item.detail}</span>
                </span>
              </li>
            ))}
          </ul>

          {activeTab.note && (
            <div className="mt-8 flex gap-3 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-5">
              <span className="mt-0.5">
                <InfoIcon />
              </span>
              <p className="text-sm leading-6 text-white/60">
                {activeTab.note}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
