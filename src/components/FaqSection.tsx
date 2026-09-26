import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";

const WHATSAPP_NUMBER = "5511931523189";

function whatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Posso fazer habilitação para carro e moto?",
    answer:
      "Sim. A Auto Escola GR trabalha com opções para categoria A, categoria B e também A + B. Fale com a equipe para entender qual opção atende melhor ao que você procura.",
  },
  {
    question: "Como faço para começar minha CNH?",
    answer:
      "Entre em contato com a equipe da Auto Escola GR. Você receberá orientação sobre os próximos passos para iniciar o seu processo.",
  },
  {
    question: "Posso consultar os valores pelo WhatsApp?",
    answer:
      "Sim. Os valores e condições atualizadas podem ser consultados diretamente com a equipe pelo WhatsApp.",
  },
  {
    question: "A Auto Escola GR atende aos sábados?",
    answer:
      "Entre em contato com a equipe para confirmar os horários e a disponibilidade de atendimento e aulas aos sábados.",
  },
];

export default function FaqSection() {
  return (
    <section id="duvidas" className="border-b border-white/10 bg-[#090909] py-24">
      <div className="gr-container grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-[#f6bd16]">Dúvidas frequentes</p>

          <h2 className="mt-4 text-4xl font-black text-white">
            Antes de começar, tire suas dúvidas.
          </h2>

          <p className="mt-6 max-w-[480px] text-lg leading-8 text-white/60">
            Reunimos algumas informações para ajudar você a entender melhor
            como iniciar sua habilitação.
          </p>

          <a
            href={whatsappHref(
              "Olá! Estou no site da Auto Escola GR e gostaria de tirar uma dúvida sobre habilitação.",
            )}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#f6bd16] transition hover:text-[#ffd044] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6bd16]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090909]"
          >
            Ainda tem dúvidas? Fale com a gente
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <FaqAccordion items={FAQ_ITEMS} />
      </div>
    </section>
  );
}
