"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

const clients = [
  { name: "KCR", image: "/images/kcr.png" },
  { name: "Srinivas Yadav", image: "/images/srinivas-yadav.png" },
  { name: "Padma Rao", image: "/images/padma-rao.png" },
  { name: "Sri Ganesh", image: "/images/sri-ganesh.png" },
  { name: "KCR", image: "/images/kcr.png" },
  { name: "Srinivas Yadav", image: "/images/srinivas-yadav.png" },
  { name: "Padma Rao", image: "/images/padma-rao.png" },
  { name: "Sri Ganesh", image: "/images/sri-ganesh.png" },
];

const CARD_WIDTH = 237;
const GAP = 20;

function useVisibleCount() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    function update() {
      setCount(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 4);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return count;
}

export default function TestimonialsSection() {
  const VISIBLE = useVisibleCount();
  const [current, setCurrent] = useState(0);
  const maxIndex = Math.max(0, clients.length - VISIBLE);

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent((c) => Math.min(maxIndex, c + 1)), []);

  const trackOffset = current * (CARD_WIDTH + GAP);

  return (
    <section id="clients" className="bg-[#edf2fa] py-[80px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-[50px]">
          <h2 className="text-[24px] font-bold uppercase tracking-wide text-[#0f172a] md:text-[36px]">
            What Our Clients Say
          </h2>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute -left-[22px] z-10 flex h-[36px] w-[36px] items-center justify-center rounded-full border border-gray-300 bg-white shadow-md transition-opacity disabled:opacity-30 md:-left-[50px] md:h-[44px] md:w-[44px]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          {/* Carousel Track */}
          <div className="mx-auto overflow-hidden" style={{ width: VISIBLE * CARD_WIDTH + (VISIBLE - 1) * GAP }}>
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                gap: GAP,
                transform: `translateX(-${trackOffset}px)`,
              }}
            >
              {clients.map((client, i) => (
                <div
                  key={`${client.name}-${i}`}
                  className="flex-shrink-0 overflow-hidden rounded-[20px] shadow-lg"
                  style={{ width: CARD_WIDTH }}
                >
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={237}
                    height={474}
                    className="h-[474px] w-[237px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            disabled={current >= maxIndex}
            className="absolute -right-[22px] z-10 flex h-[36px] w-[36px] items-center justify-center rounded-full border border-gray-300 bg-white shadow-md transition-opacity disabled:opacity-30 md:-right-[50px] md:h-[44px] md:w-[44px]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === current ? "w-8 bg-[#ff7b00]" : "w-2.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
