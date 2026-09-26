import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImportantInformationSection from "@/components/ImportantInformationSection";

export const metadata: Metadata = {
  title: "Informações Importantes | Auto Escola GR",
  description:
    "Veja informações importantes para quem vai iniciar o processo da primeira habilitação na Auto Escola GR.",
};

export default function InformacoesImportantesPage() {
  return (
    <>
      <Header />

      <main className="relative bg-[#090909]">
        <div className="pointer-events-none absolute inset-x-0 top-6 z-10">
          <div className="gr-container">
            <Link
              href="/informacoes"
              className="pointer-events-auto inline-flex items-center gap-2 text-sm font-bold text-[#f6bd16] transition hover:text-[#ffd044]"
            >
              <span aria-hidden="true">←</span>
              Voltar para Informações
            </Link>
          </div>
        </div>

        <ImportantInformationSection />
      </main>

      <Footer />
    </>
  );
}
