"use client";

import { useId, useState } from "react";

export type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border-t border-white/10">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.question} className="border-b border-white/10">
            <h3>
              <button
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left text-base font-bold text-white transition hover:text-[#f6bd16] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6bd16]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090909]"
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl font-light text-[#f6bd16]"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              aria-labelledby={triggerId}
              aria-hidden={!isOpen}
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="min-h-0 overflow-hidden pb-6 pr-8 text-sm leading-7 text-white/60">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
