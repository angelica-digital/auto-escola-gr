"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

  return (
    <header className="relative border-b border-white/10 bg-[#090909]">
      <div className="gr-container flex h-[84px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/logoautomoto.png"
            alt="Auto Escola GR"
            width={1983}
            height={793}
            priority
            className="h-auto w-[120px] sm:w-[150px] lg:w-[160px]"
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
          className="hidden rounded-full bg-[#f6bd16] px-6 py-3 text-sm font-bold text-[#090909] transition hover:bg-[#ffd044] sm:inline-flex"
        >
          Começar minha CNH
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
          className="absolute inset-x-0 top-full z-50 border-t border-white/10 bg-[#090909] lg:hidden"
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
              className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-[#f6bd16] px-6 text-sm font-bold text-[#090909] transition hover:bg-[#ffd044]"
            >
              Começar minha CNH
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
