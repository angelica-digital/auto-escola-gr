"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type StudentsMarqueeProps = {
  /**
   * Caminhos públicos das fotos (ex: "/alunos/aluno-01.webp"), já
   * resolvidos a partir do conteúdo real de public/alunos/.
   */
  photos: string[];
};

/**
 * Curva simétrica (espaço objectBoundingBox, 0–1) usada como clip-path da
 * faixa: altura plena no centro, afunilando de forma orgânica e muito sutil
 * em direção às extremidades esquerda/direita.
 */
const MARQUEE_FRAME_CLIP_PATH =
  "M0,0.06 C0.2,0.012 0.38,0 0.5,0 C0.62,0 0.8,0.012 1,0.06 L1,0.94 C0.8,0.988 0.62,1 0.5,1 C0.38,1 0.2,0.988 0,0.94 Z";
const MARQUEE_FRAME_CLIP_ID = "gr-alunos-frame-clip";

export default function StudentsMarquee({ photos }: StudentsMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || photos.length === 0) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    let frameId: number;
    const pixelsPerFrame = 0.5;

    const step = () => {
      if (!pausedRef.current) {
        const half = track.scrollWidth / 2;
        track.scrollLeft += pixelsPerFrame;
        if (track.scrollLeft >= half) {
          track.scrollLeft -= half;
        }
      }
      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [photos.length]);

  if (photos.length === 0) {
    return (
      <div className="relative overflow-hidden rounded-[28px] border border-dashed border-white/15 bg-white/[0.02] py-16 text-center">
        {/*
          Estado de desenvolvimento: nenhuma foto encontrada em
          public/alunos/. Adicione arquivos como:
          /alunos/aluno-01.webp, /alunos/aluno-02.webp, /alunos/aluno-03.webp...
          para que a galeria seja preenchida automaticamente.
        */}
        <p className="text-sm text-white/40">
          Em breve: fotos reais de alunos da Auto Escola GR.
        </p>
      </div>
    );
  }

  const loopedPhotos = [...photos, ...photos];

  return (
    <div className="relative gr-alunos-frame">
      <style>{`
        @media (min-width: 640px) {
          .gr-alunos-frame {
            clip-path: url(#${MARQUEE_FRAME_CLIP_ID});
            -webkit-clip-path: url(#${MARQUEE_FRAME_CLIP_ID});
          }
        }
      `}</style>

      <svg width="0" height="0" aria-hidden="true" className="absolute">
        <defs>
          <clipPath id={MARQUEE_FRAME_CLIP_ID} clipPathUnits="objectBoundingBox">
            <path d={MARQUEE_FRAME_CLIP_PATH} />
          </clipPath>
        </defs>
      </svg>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#090909] to-transparent sm:w-28"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#090909] to-transparent sm:w-28"
      />

      {/*
        Faixa horizontal: overflow-x-auto + white-space:nowrap + cards
        inline-block (em vez de flex) — o clip-path acima precisa que a
        faixa não contenha um container flex/grid direto, senão o
        navegador recalcula a curva por item em vez de uma vez para o
        conjunto inteiro.
      */}
      <div
        ref={trackRef}
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
        onPointerDown={() => {
          pausedRef.current = true;
        }}
        onPointerUp={() => {
          pausedRef.current = false;
        }}
        onPointerCancel={() => {
          pausedRef.current = false;
        }}
        className="overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {loopedPhotos.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="relative mr-4 inline-block h-52 aspect-[3/4] align-top overflow-hidden rounded-2xl border border-white/10 sm:h-64 lg:h-72"
          >
            <Image
              src={src}
              alt={`Aluno ${(index % photos.length) + 1} da Auto Escola GR`}
              fill
              sizes="(min-width: 1024px) 216px, (min-width: 640px) 192px, 156px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
