import React from 'react';

interface IFormSection {
  title: string;
  children?: React.ReactNode;
}

export default function formSection({ title, children }: IFormSection) {
  return (
    <div className="section mt-8">
      <div className="subtitle mb-2.5 uppercase border-b border-[#b0b8bc] font-bold text-[#b0b8bc] text-[10px] leading-[18px]">
        {title}
      </div>
      <div className="inputs flex flex-wrap">{children}</div>
    </div>
  );
}
