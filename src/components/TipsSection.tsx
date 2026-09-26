const WHATSAPP_NUMBER = "5511931523189";

function whatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
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

function SteeringWheelIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 fill-none stroke-[#f6bd16] stroke-[1.6]"
    >
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="2.2" />
      <path
        d="M12 6v3.3M7.4 15.2l2.8-1.8M16.6 15.2l-2.8-1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 fill-none stroke-[#f6bd16] stroke-[1.6]"
    >
      <path
        d="M4.5 16v-3l1.8-4.2A2 2 0 0 1 8.1 7.5h7.8a2 2 0 0 1 1.8 1.3L19.5 13v3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 16h15v1.5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V17h-9v.5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V16Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4.5 13h15" strokeLinecap="round" />
    </svg>
  );
}

function MotoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 fill-none stroke-[#f6bd16] stroke-[1.6]"
    >
      <circle cx="5.5" cy="17" r="2.3" />
      <circle cx="18" cy="17" r="2.3" />
      <path
        d="M8 17h5l-1.5-5H9M13 12l2-3h3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 17 6 11h3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const GETTING_STARTED_TIPS: string[] = [
  "Use roupas confortáveis durante as aulas.",
  "Para as aulas práticas, utilize calçados confortáveis e adequados — evite chinelos e sapatos de salto.",
  "Procure manter a calma durante as aulas; o instrutor estará ao seu lado para orientar você durante o aprendizado.",
  "Antes de começar, ajuste o banco para uma posição confortável e segura.",
  "Tenha calma ao iniciar a condução e evite movimentos bruscos.",
  "Durante o período de aprendizagem, pratique nos veículos destinados às aulas, que possuem equipamentos específicos para acompanhamento do instrutor.",
  "Lembre-se da importância de respeitar pedestres e os demais usuários da via.",
  "Leia com atenção o material das aulas teóricas e procure compreender as regras apresentadas.",
  "Seja pontual para suas aulas e avaliações.",
  "Respeite seu ritmo de aprendizagem — dificuldades fazem parte do processo.",
  "Mantenha a atenção durante as aulas e siga as orientações do instrutor.",
  "Antes de dirigir, confira se os retrovisores estão corretamente ajustados.",
  "Evite dirigir quando estiver com sono ou sem condições adequadas de atenção.",
  "Nunca associe bebida alcoólica e direção.",
  "Durante a condução, mantenha o controle adequado do volante conforme as orientações recebidas durante as aulas.",
];

type ChecklistGroup = {
  title: string;
  items: string[];
};

const CATEGORY_B_GROUPS: ChecklistGroup[] = [
  {
    title: "Antes de ligar o carro",
    items: [
      "Ajustar o banco.",
      "Ajustar os espelhos retrovisores.",
      "Colocar o cinto de segurança.",
      "Verificar se o veículo está em ponto morto.",
      "Dar a partida.",
    ],
  },
  {
    title: "Durante o percurso",
    items: [
      "Não iniciar o percurso com o freio de mão acionado.",
      "Verificar a marcha antes da partida.",
      "Iniciar a saída utilizando a marcha adequada.",
      "Utilizar corretamente freio e embreagem conforme as orientações aprendidas nas aulas.",
      "Utilizar as setas nas conversões e manobras.",
      "Evitar manter o pé apoiado na embreagem durante o percurso.",
    ],
  },
  {
    title: "Ao finalizar",
    items: [
      "Sinalizar corretamente antes de parar.",
      "Ao finalizar, colocar o veículo em ponto morto e acionar o freio de mão antes de desligar o motor.",
    ],
  },
];

const CATEGORY_A_STEPS_GROUP: ChecklistGroup = {
  title: "Antes de iniciar",
  items: [
    "Colocar o capacete.",
    "Regular corretamente a jugular e manter a viseira posicionada conforme orientação.",
    "Preparar a motocicleta para o início do percurso conforme aprendido nas aulas.",
  ],
};

const CATEGORY_A_TOPIC_GROUPS: ChecklistGroup[] = [
  {
    title: "Durante o percurso",
    items: [
      "Início e finalização do percurso",
      "Troca de marchas",
      "Entrada nos cones",
      "Passagem pelo pranchão",
      "Utilização das setas",
      "Execução do “oito”",
      "Reduções",
      "Parada obrigatória",
      "Encerramento do percurso",
    ],
  },
  {
    title: "Atenção durante o exame",
    items: [
      "Posição das mãos",
      "Embreagem e freios",
      "Setas",
      "Faixas delimitadoras",
      "Apoio dos pés",
      "Reduções",
      "Viseira",
      "Parada obrigatória",
    ],
  },
];

function Bullet() {
  return (
    <span
      aria-hidden="true"
      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f6bd16]"
    />
  );
}

function ChecklistBlock({ group }: { group: ChecklistGroup }) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#f6bd16]">
        {group.title}
      </h3>
      <ul className="mt-4 flex flex-col gap-3">
        {group.items.map((item) => (
          <li key={item} className="flex gap-3">
            <Bullet />
            <span className="text-[15px] leading-6 text-white/60">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TopicTagsBlock({ group }: { group: ChecklistGroup }) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#f6bd16]">
        {group.title}
      </h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-white/70"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TipsSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#090909] py-24">
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
        className="pointer-events-none absolute -top-24 left-1/2 h-[380px] w-[560px] -translate-x-1/2 rounded-full bg-[#f6bd16]/10 blur-[130px]"
      />

      <div className="gr-container relative">
        <div className="max-w-[620px]">
          <p className="text-[#f6bd16]">DICAS</p>

          <h1 className="mt-4 text-4xl font-black text-white">
            Prepare-se com mais confiança.
          </h1>

          <p className="mt-4 text-lg text-white/60">
            Orientações para aproveitar melhor sua formação e se preparar
            para as avaliações.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-8">
          <div className="rounded-[28px] border border-white/10 bg-[#111111] p-8 transition-colors duration-300 motion-reduce:transition-none hover:border-[#f6bd16]/40 sm:p-10">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#f6bd16]/30 bg-[#f6bd16]/5">
                <SteeringWheelIcon />
              </span>
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#f6bd16]">
                  01
                </span>
                <h2 className="text-xl font-black text-white">
                  Dicas para quem está começando
                </h2>
              </div>
            </div>

            <ul className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {GETTING_STARTED_TIPS.map((tip) => (
                <li key={tip} className="flex gap-3">
                  <Bullet />
                  <span className="text-[15px] leading-6 text-white/60">
                    {tip}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[28px] border border-white/10 bg-[#111111] p-8 transition-colors duration-300 motion-reduce:transition-none hover:border-[#f6bd16]/40 sm:p-10">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#f6bd16]/30 bg-[#f6bd16]/5">
                  <CarIcon />
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#f6bd16]">
                    02
                  </span>
                  <h2 className="text-xl font-black text-white">
                    Exame Prático — Categoria B
                  </h2>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-8">
                {CATEGORY_B_GROUPS.map((group) => (
                  <ChecklistBlock key={group.title} group={group} />
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#111111] p-8 transition-colors duration-300 motion-reduce:transition-none hover:border-[#f6bd16]/40 sm:p-10">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#f6bd16]/30 bg-[#f6bd16]/5">
                  <MotoIcon />
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#f6bd16]">
                    03
                  </span>
                  <h2 className="text-xl font-black text-white">
                    Exame Prático — Categoria A
                  </h2>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-8">
                <ChecklistBlock group={CATEGORY_A_STEPS_GROUP} />
                {CATEGORY_A_TOPIC_GROUPS.map((group) => (
                  <TopicTagsBlock key={group.title} group={group} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-12 text-center">
          <h3 className="text-xl font-black text-white">
            Ficou com alguma dúvida?
          </h3>

          <p className="mx-auto mt-2 max-w-[420px] text-white/60">
            Nossa equipe pode orientar você sobre seu processo de
            habilitação.
          </p>

          <a
            href={whatsappHref(
              "Olá! Vi as dicas no site da Auto Escola GR e gostaria de falar com a equipe.",
            )}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f6bd16] px-7 text-sm font-extrabold text-[#090909] transition hover:bg-[#ffd044] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6bd16]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090909]"
          >
            <WhatsAppIcon />
            Falar com a Auto Escola GR
          </a>
        </div>
      </div>
    </section>
  );
}
