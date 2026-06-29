import React from 'react'
import { motion } from 'framer-motion'
import { FiPlay, FiChevronRight } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'
import heroBg from '../../assests/bgFigma.svg'

import plantHero from '../../assests/Rose Gold Feminine Calligraphy Monogram Logo(15) 3.png'
import CardSVG from '../CardSVG/CardSVG'
const ronnieUnsplash = 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80'


const Stars = ({ n = 4 }) => (
  <div className="flex gap-[3px]">
    {[1,2,3,4,5].map(i => (
      <FaStar key={i} size={11} className={i <= n ? 'text-yellow-400' : 'text-white/20'} />
    ))}
  </div>
)

const Hero = () => (
  <section className="relative min-h-screen bg-cover bg-center bg-no-repeat">
    <img
      src={heroBg}
      alt=""
      className="absolute left-0 top-0 w-full h-[180%] object-cover"
    />

    <div className="relative z-10 h-full w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-[84px] pb-6">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] gap-6 items-start">

        {/* ── Left ── */}
        <motion.div initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:0.72 }} className="flex flex-col gap-4 max-w-[400px] pt-3">

          <h1 className="text-[118px]  font-extrabold leading-[1.03] tracking-[-0.025em] text-white">
            Earth's Exhale
          </h1>

          <p className="text-white/55 text-[23px] md:text-[14.5px] leading-[1.72] max-w-[430px]">
            "Earth Exhale" symbolizes the purity and vitality of the Earth's natural
            environment and its essential role in sustaining life.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-3 mt-1">
            <button className="border border-white/40 text-white text-[13.5px] font-medium px-6 py-[9px] rounded-[9px] bg-transparent hover:bg-green-700/50 hover:border-green-600/70 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500">
              Buy Now
            </button>
            <button className="flex items-center gap-2 text-white/60 hover:text-white text-[13px] bg-transparent border-none cursor-pointer transition-colors duration-200">
              <span className="w-[28px] h-[28px] rounded-full border border-white/30 flex items-center justify-center">
                <FiPlay size={11} className="ml-[1px]" />
              </span>
              Live Demo...
            </button>
          </div>

          {/* Floating review card */}
          <motion.div initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }}
            transition={{ delay:0.55, duration:0.65 }}
            className="glass-card  p-5 max-w-[350px] max-h-[210px] mt-20 lg:mt-30 ">
            <div className="flex items-start gap-4 "  >
              <div className="mt-1 h-20 w-20 rounded-full overflow-hidden flex-shrink-0 border border-white/20">
                <img src={ronnieUnsplash} alt="Ronnie Hamill" className="h-full w-full object-cover object-center" />
              </div>
              <div className="min-w-0 flex-1 py-1">
                <p className="text-white text-[16px] font-semibold leading-none mb-[6px]">Ronnie Hamill</p>
                <Stars n={4} />
                <p className="text-white/55 text-[15.5px] leading-[1.65] mt-[7px]">
                  I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Right card ── */}
       <motion.div
  initial={{ opacity: 0, x: 28 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.2, duration: 0.68 }}
  className="relative w-full max-w-[420px] aspect-[549/668] ml-auto"
>
  {/* SVG Background */}
  <CardSVG className="absolute inset-0 w-full h-full" />

  {/* Content */}
  <div className="absolute inset-0 z-10 flex flex-col p-6">
    {/* Plant */}
    <div className="relative flex-1 flex items-start justify-center overflow-visible">
  <img
    src={plantHero}
    alt="Aglaonema plant"
    className="
      absolute
      top-[-78%]
      left-1/2
      -translate-x-1/2
      w-[115%]
      max-w-none
      z-50
      pointer-events-none
    "
  />
</div>

    {/* Bottom Content */}
    <div className="mt-auto">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white/45 text-xs">
            Indoor Plant
          </p>

          <h3 className="text-white text-xl font-semibold mt-1">
            Aglaonema Plant
          </h3>
        </div>

        <button className="text-white/60 hover:text-white">
          <FiChevronRight size={22} />
        </button>
      </div>

      <button
        className="
          w-full
          mt-5
          py-3
          rounded-xl
          border
          border-white/20
          text-white
          backdrop-blur-md
          hover:bg-white/10
          transition
        "
      >
        Buy Now
      </button>

      <div className="flex justify-center gap-2 mt-5">
        <span className="w-6 h-1 rounded-full bg-white" />
        <span className="w-1 h-1 rounded-full bg-white/30" />
        <span className="w-1 h-1 rounded-full bg-white/30" />
      </div>
    </div>
  </div>
</motion.div>

      </div>
    </div>
  </section>
)

export default Hero
