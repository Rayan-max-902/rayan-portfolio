import React from 'react';

interface StackingCardItem {
  title: string;
  text: string;
  number: string;
}

interface StackingCardsProps {
  items: StackingCardItem[];
}

export default function StackingCards({ items }: StackingCardsProps) {
  return (
    <ul 
      id="cards" 
      className="list-none p-0 grid grid-cols-1 gap-4 sm:gap-[3vw] w-full max-w-full sm:max-w-[90vw] mx-auto mb-6 sm:mb-[4vw]"
      style={{ 
        gridTemplateRows: `repeat(${items.length}, var(--card-height))`,
        paddingBottom: `calc(${items.length} * var(--card-margin))`
      } as React.CSSProperties}
    >
      {items.map((item, index) => (
        <li 
          key={index} 
          className="card sticky top-[12vh] sm:top-[15vh] h-[var(--card-height)] min-h-[260px] sm:min-h-[340px] perspective-[1000px]"
          style={{ '--index': index + 1 } as React.CSSProperties}
        >
          <div className="card__content box-border p-5 xs:p-6 sm:p-10 w-full h-full rounded-2xl sm:rounded-3xl bg-[#18181b] text-white flex flex-col justify-center items-start border border-white/10 overflow-hidden origin-[50%_0%] will-change-transform transform-style-3d shadow-xl relative">
            <span className="number text-5xl xs:text-6xl sm:text-8xl md:text-[9rem] absolute right-4 top-2 sm:right-8 sm:top-0 opacity-10 font-black pointer-events-none select-none">
              {item.number}
            </span>
            <h3 className="text-lg xs:text-xl sm:text-3xl font-bold mb-2 sm:mb-3 pr-8 leading-snug">
              {item.title}
            </h3>
            <p className="text-xs xs:text-sm sm:text-base max-w-[620px] leading-relaxed opacity-85 text-zinc-300">
              {item.text}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
