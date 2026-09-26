import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type InfoPagePlaceholderProps = {
  title: string;
};

export default function InfoPagePlaceholder({
  title,
}: InfoPagePlaceholderProps) {
  return (
    <>
      <Header />

      <main className="bg-[#090909]">
        <section className="border-b border-white/10 bg-[#090909] py-24">
          <div className="gr-container max-w-[620px]">
            <p className="text-[#f6bd16]">INFORMAÇÕES</p>

            <h1 className="mt-4 text-4xl font-black text-white">{title}</h1>

            <p className="mt-4 text-lg text-white/60">
              Esta página está em construção. O conteúdo será publicado em
              breve.
            </p>

            <Link
              href="/informacoes"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#f6bd16] transition hover:text-[#ffd044]"
            >
              <span aria-hidden="true">←</span>
              Voltar para Informações
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
