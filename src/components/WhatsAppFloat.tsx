const WHATSAPP_NUMBER = "5511931523189";

function whatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref(
        "Olá! Estou no site da Auto Escola GR e gostaria de falar com a equipe.",
      )}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#f6bd16] shadow-[0_10px_30px_-8px_rgba(246,189,22,0.45)] ring-1 ring-black/10 transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-[#ffd044] hover:shadow-[0_14px_36px_-8px_rgba(246,189,22,0.6)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f6bd16] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6 fill-[#090909] sm:h-7 sm:w-7"
      >
        <path d="M12.01 2C6.48 2 2 6.48 2 12.01c0 1.86.5 3.6 1.36 5.1L2 22l5.02-1.32a9.94 9.94 0 0 0 4.99 1.34h.01c5.53 0 10.01-4.48 10.01-10.01C22.03 6.48 17.55 2 12.01 2Zm0 18.2h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-2.98.78.8-2.9-.2-.3a8.2 8.2 0 1 1 6.87 3.74Zm4.5-6.13c-.25-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.37-1.7-.14-.24-.02-.37.11-.5.11-.11.25-.29.37-.43.12-.15.16-.24.24-.4.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42-.14 0-.3-.02-.46-.02-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.5.58.19 1.1.16 1.51.1.46-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28Z" />
      </svg>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full border border-white/10 bg-[#111111] px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block"
      >
        Falar no WhatsApp
      </span>
    </a>
  );
}
