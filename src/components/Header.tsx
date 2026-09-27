"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/#habilitacao", label: "Habilitação" },
  { href: "/#pacotes", label: "Pacotes" },
  { href: "/#processo", label: "Como funciona" },
  { href: "/#sobre", label: "A GR" },
  { href: "/informacoes/perguntas-e-respostas", label: "Dúvidas" },
  { href: "/informacoes", label: "Informações" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menu mobile aberto: trava a rolagem da página (compensando a barra de
  // rolagem para não haver salto) e fecha com Esc ou ao chegar no desktop.
  useEffect(() => {
    if (!isMenuOpen) return;

    const html = document.documentElement;
    const scrollbarWidth = window.innerWidth - html.clientWidth;
    const previousOverflow = html.style.overflow;
    const previousPaddingRight = html.style.paddingRight;
    html.style.overflow = "hidden";
    if (scrollbarWidth > 0) html.style.paddingRight = `${scrollbarWidth}px`;

    const desktop = window.matchMedia("(min-width: 1024px)");
    const close = () => setIsMenuOpen(false);
    const onDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) close();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    desktop.addEventListener("change", onDesktopChange);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      html.style.overflow = previousOverflow;
      html.style.paddingRight = previousPaddingRight;
      desktop.removeEventListener("change", onDesktopChange);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="relative border-b border-white/10 bg-[#090909]">
      <div className="gr-container flex h-[84px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/logo-auto-escola-gr-v2.png"
            alt="Auto Escola GR"
            width={1983}
            height={793}
            priority
            className="h-auto w-[145px] object-contain sm:w-[165px] lg:w-[160px] xl:w-[180px]"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://wa.me/5511931523189"
          target="_blank"
          rel="noreferrer"
          className={`group/cta hidden min-h-11 items-center gap-2 rounded-full border border-[#ffd66b]/60 bg-gradient-to-b from-[#ffcb33] to-[#f6bd16] py-1.5 pl-5 pr-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_6px_18px_-10px_rgba(246,189,22,0.5)] transition duration-300 hover:-translate-y-px hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_22px_-8px_rgba(246,189,22,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6bd16]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090909] motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${isMenuOpen ? "" : "sm:inline-flex"}`}
        >
          {/* Cor e fonte nos <span>: `a { color/font: inherit }` global sobrepõe classes no <a>. */}
          <span className="text-sm font-bold text-[#090909]">
            Começar minha CNH
          </span>
          <span
            aria-hidden="true"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#090909] text-[#f6bd16]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 fill-none stroke-current stroke-[2.4] transition-transform duration-300 group-hover/cta:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover/cta:translate-x-0"
            >
              <path
                d="M5 12h13.5M13 6.5 18.5 12 13 17.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>

        <button
          type="button"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-xl text-white lg:hidden"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full z-50 h-[calc(100dvh-85px)] overflow-y-auto border-t border-white/10 bg-[#090909] lg:hidden"
        >
          <nav className="gr-container flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}

            <a
              href="https://wa.me/5511931523189"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="group/cta mt-4 flex min-h-12 w-full items-center justify-between gap-3 rounded-full border border-[#ffd66b]/60 bg-gradient-to-b from-[#ffcb33] to-[#f6bd16] py-1.5 pl-6 pr-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_8px_22px_-12px_rgba(246,189,22,0.55)] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6bd16]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090909] motion-reduce:transition-none"
            >
              <span className="text-sm font-bold text-[#090909]">
                Começar minha CNH
              </span>
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#090909] text-[#f6bd16]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-none stroke-current stroke-[2.2] transition-transform duration-300 group-hover/cta:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover/cta:translate-x-0"
                >
                  <path
                    d="M5 12h13.5M13 6.5 18.5 12 13 17.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
