import Link from "next/link";

export default function ImportantInformationSection() {
  return (
    <section
      id="informacoes-importantes"
      className="relative overflow-hidden border-b border-white/10 bg-[#090909] py-24"
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
        className="pointer-events-none absolute -left-32 -top-24 h-[420px] w-[420px] rounded-full bg-[#f6bd16]/10 blur-[120px]"
      />

      <div className="gr-container relative">
        <div className="max-w-[620px]">
          <p className="text-[#f6bd16]">INFORMAÇÕES IMPORTANTES</p>

          <h2 className="mt-4 text-4xl font-black text-white">
            Antes de começar sua habilitação.
          </h2>

          <p className="mt-4 text-lg text-white/60">
            Veja informações importantes para quem vai iniciar o processo
            da primeira habilitação.
          </p>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="h-[2px] w-10 bg-[#f6bd16]" />

            <h3 className="mt-6 text-2xl font-black text-white">
              Primeira Habilitação
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-white/70">
                Categoria A
              </span>
              <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-white/70">
                Categoria B
              </span>
              <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-white/70">
                Categoria A+B
              </span>
            </div>

            <p className="mt-6 text-[15px] leading-7 text-white/60">
              No caso da 1ª habilitação, é possível candidatar-se às
              categorias A (moto), B (carro) ou A+B (carro e moto).
            </p>

            <p className="mt-4 text-[15px] leading-7 text-white/60">
              A 1ª habilitação é a permissão concedida aos candidatos
              considerados aptos nos exames de avaliação para dirigir.
              Trata-se de uma autorização para conduzir veículos por um
              ano — após esse período, a Carteira Nacional de
              Habilitação definitiva é expedida se o condutor não tiver
              cometido infração de trânsito de natureza grave ou
              gravíssima, nem reincidido em infração média.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-white/60">
              Se o portador da Permissão para Dirigir não atender a esses
              requisitos, deverá refazer o processo de habilitação.
            </p>
          </div>

          <div>
            <span className="h-[2px] w-10 bg-[#f6bd16]" />

            <h3 className="mt-6 text-2xl font-black text-white">
              Para fazer a 1ª habilitação
            </h3>

            <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-white/35">
              Requisitos
            </p>

            <ol className="mt-6 flex flex-col divide-y divide-white/10 border-t border-white/10">
              <li className="flex gap-4 py-4">
                <span className="text-sm font-black text-[#f6bd16]">
                  01
                </span>
                <p className="text-[15px] leading-6 text-white/70">
                  Ter idade a partir de 18 anos.
                </p>
              </li>
              <li className="flex gap-4 py-4">
                <span className="text-sm font-black text-[#f6bd16]">
                  02
                </span>
                <p className="text-[15px] leading-6 text-white/70">
                  Possuir RG atualizado/recente e CPF.
                </p>
              </li>
              <li className="flex gap-4 py-4">
                <span className="text-sm font-black text-[#f6bd16]">
                  03
                </span>
                <p className="text-[15px] leading-6 text-white/70">
                  Ser penalmente imputável.
                </p>
              </li>
              <li className="flex gap-4 py-4">
                <span className="text-sm font-black text-[#f6bd16]">
                  04
                </span>
                <p className="text-[15px] leading-6 text-white/70">
                  Saber ler e escrever.
                </p>
              </li>
              <li className="flex gap-4 py-4">
                <span className="text-sm font-black text-[#f6bd16]">
                  05
                </span>
                <p className="text-[15px] leading-6 text-white/70">
                  Possuir comprovante de residência no próprio nome do
                  aluno, com data dos últimos três meses, como conta de
                  água, luz, telefone fixo, documento bancário ou
                  declaração.
                </p>
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <div className="border-l-2 border-[#f6bd16]/40 pl-5">
            <p className="text-sm leading-6 text-white/50">
              Conforme a Resolução 168, parágrafo 3º, todos os processos
              terão validade de 12 meses a partir da data de entrada do
              requerimento.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-start gap-6 rounded-[28px] border border-white/10 bg-[#111111] p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="text-lg font-bold text-white">
                Quer entender todas as etapas?
              </h4>
              <p className="mt-1 text-sm text-white/60">
                Veja como funciona o processo da matrícula ao exame
                prático.
              </p>
            </div>

            <Link
              href="/#processo"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#f6bd16] px-6 text-sm font-extrabold text-[#090909] transition hover:bg-[#ffd044] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6bd16]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
            >
              Ver passo a passo
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
