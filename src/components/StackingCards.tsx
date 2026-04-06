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
      className="list-none p-0 grid grid-cols-1 gap-[4vw] max-w-[90vw] mx-auto mb-[4vw]"
      style={{ 
        gridTemplateRows: `repeat(${items.length}, var(--card-height))`,
        paddingBottom: `calc(${items.length} * var(--card-margin))`
      } as React.CSSProperties}
    >
      {items.map((item, index) => (
        <li 
          key={index} 
          className="card sticky top-[10vh] h-[40vw] perspective-[1000px]"
          style={{ '--index': index + 1 } as React.CSSProperties}
        >
          <div className="card__content box-border p-8 sm:p-12 w-full h-full rounded-[30px] sm:rounded-[50px] bg-[#1c1c1c] text-white flex flex-col justify-center items-flex-start border border-white/10 overflow-hidden origin-[50%_0%] will-change-transform transform-style-3d">
            <span className="number text-6xl sm:text-[10rem] absolute right-8 top-0 opacity-10 font-bold pointer-events-none">
              {item.number}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">{item.title}</h2>
            <p className="text-sm sm:text-lg max-w-[600px] leading-relaxed opacity-80">
              {item.text}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
