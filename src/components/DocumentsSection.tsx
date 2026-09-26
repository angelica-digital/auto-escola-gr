import DocumentsTabs from "@/components/DocumentsTabs";

export default function DocumentsSection() {
  return (
    <section
      id="documentos"
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
          <p className="text-[#f6bd16]">DOCUMENTOS</p>

          <h2 className="mt-4 text-4xl font-black text-white">
            O que você precisa para começar.
          </h2>

          <p className="mt-4 text-lg text-white/60">
            Confira os documentos necessários de acordo com o seu processo
            de habilitação.
          </p>
        </div>

        <div className="mt-14">
          <DocumentsTabs />
        </div>
      </div>
    </section>
  );
}
