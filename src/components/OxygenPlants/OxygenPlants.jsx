import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SectionTitle from '../SectionTitle/SectionTitle'
import oxygenLogo from '../../assests/Rose Gold Feminine Calligraphy Monogram Logo(15) 3.png'

const slides = [
  {
    title: "We Have Small And Best O2 Plants Collection's",
    p1: 'Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.',
    p2: 'Many plants can help filter air pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.',
    image: oxygenLogo,
  },
  {
    title: 'Fresh Air Starts With The Right Green Companions',
    p1: 'Peace lilies, spider plants, and snake plants are among the top performers in removing indoor pollutants and boosting air quality naturally.',
    p2: 'Adding these plants to your home or office is an affordable, beautiful, and eco-friendly way to improve your wellbeing every single day.',
  },
  {
    title: "Nature's Air Purifiers — Right In Your Home",
    p1: 'Studies show that indoor plants can reduce CO₂ levels noticeably in both air-conditioned and naturally ventilated spaces.',
    p2: 'Beyond air quality, the presence of greenery reduces stress hormones, boosts focus, and creates a calming environment.',
  },
]

const OxygenPlants = () => {
  const [idx, setIdx] = useState(0)
  return (
    <section className="py-16 md:py-[96px]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <SectionTitle className="mb-10 md:mb-14">Our Best o2</SectionTitle>

        <motion.div initial={{ opacity:0, y:36 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6 }}
          className="glass-card rounded-[36px] overflow-visible">
          <div className="flex flex-col md:flex-row items-stretch overflow-visible">

            {/* Plant image */}

<div
  className="
    relative
    flex-1
    flex
    justify-center
    items-center
    overflow-visible
    pt-10
    md:pt-0
  "
>
  {slides[idx].image && (
    <img
      src={slides[idx].image}
      alt={slides[idx].title}
      className="
        relative
        z-20

        w-[260px]
        sm:w-[30px]
        md:w-[40px]
        lg:w-[50px]
        xl:w-[550px]

        h-auto
        object-contain

        -mt-12
        md:-mt-60
        lg:-mt-80

        drop-shadow-[0_35px_45px_rgba(0,0,0,.35)]

        transition-all
        duration-500
      "
    />
  )}
</div>

            {/* Content */}
            <div className="flex flex-col justify-center gap-[18px] p-8 md:pl-6 flex-1">
              <AnimatePresence mode="wait">
                <motion.div key={idx}
                  initial={{ opacity:0, x:16 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-16 }}
                  transition={{ duration:0.35 }} className="flex flex-col gap-[14px]">
                  <h3 className="text-white text-[22px] md:text-[24px] font-semibold leading-[1.33] max-w-[340px] tracking-[-0.01em]">
                    {slides[idx].title}
                  </h3>
                  <p className="text-white/55 text-[13px] leading-[1.72] max-w-[340px]">{slides[idx].p1}</p>
            
                </motion.div>
              </AnimatePresence>

              <button className="self-start border border-white/38 text-white text-[13.5px] font-medium px-[22px] py-[8px] rounded-[9px] bg-transparent hover:bg-green-700/50 hover:border-green-600/70 transition-all duration-300 mt-1">
                Explore
              </button>

              {/* Nav row */}
              <div className="flex items-center gap-3 mt-1">
                <button onClick={() => setIdx(i => Math.max(0, i-1))} disabled={idx===0}
                  aria-label="Previous"
                  className="w-8 h-8 border border-white/22 rounded-[8px] flex items-center justify-center text-white/50 hover:text-white hover:bg-green-700/50 hover:border-green-600/60 disabled:opacity-25 transition-all duration-300">
                  <FiChevronLeft size={15}/>
                </button>
                <button onClick={() => setIdx(i => Math.min(slides.length-1, i+1))} disabled={idx===slides.length-1}
                  aria-label="Next"
                  className="w-8 h-8 border border-white/22 rounded-[8px] flex items-center justify-center text-white/50 hover:text-white hover:bg-green-700/50 hover:border-green-600/60 disabled:opacity-25 transition-all duration-300">
                  <FiChevronRight size={15}/>
                </button>
                <div className="flex items-center gap-[6px] ml-1">
                  {slides.map((_,i) => (
                    <button key={i} onClick={() => setIdx(i)} aria-label={`Slide ${i+1}`}
                      className={`rounded-full transition-all duration-300 ${i===idx ? 'w-[20px] h-[5px] bg-white' : 'w-[5px] h-[5px] bg-white/28 hover:bg-white/50'}`}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
export default OxygenPlants
