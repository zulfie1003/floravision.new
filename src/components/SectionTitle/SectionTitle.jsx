import React from 'react'

const SectionTitle = ({ children, className = '' }) => (
  <div className={`flex justify-center ${className}`}>
    <h2 className="text-white text-[26px] md:text-[30px] font-semibold tracking-[-0.015em] flex flex-wrap items-center justify-center gap-[3px] text-center leading-tight">
      <span className="inline-block w-[2px] h-[22px] border-l-2 border-white/35 mr-[5px]" />
      <span className="max-w-full">{children}</span>
      <span className="inline-block w-[2px] h-[22px] border-r-2 border-white/35 ml-[5px]" />
    </h2>
  </div>
)

export default SectionTitle
