import React from 'react'
import { motion } from 'framer-motion'
import { FiShoppingCart } from 'react-icons/fi'
import SectionTitle from '../SectionTitle/SectionTitle'
import roseLogo from '../../assests/Rose Gold Feminine Calligraphy Monogram Logo(15) 2 (1).svg'
import roseLogo2 from '../../assests/Rose Gold Feminine Calligraphy Monogram Logo(20) 2.svg'

const cards = [
  {
    id: 1,
    layout: 'imgLeft',
    title: 'For Your Desks Decorations',
    desc: 'I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!',
    price: 'Rs. 599/-',
    image: roseLogo,
  },
  {
    id: 2,
    layout: 'imgRight',
    title: 'For Your Desks Decorations',
    desc: 'The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming.',
    price: 'Rs. 399/-',
    image: roseLogo2,
    imageWidth: 590,
    imageTop: -155,
    imageLeft: 200,
    imageScale: 1,
    imageBottom: 600,
  },
]

const TrendCard = ({ card, i }) => {
  const isLeft = card.layout === 'imgLeft'

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.58, delay: i * 0.12 }}
      className={`
        glass-card
        w-full
        max-w-[2980px]
        min-h-[320px]
        rounded-[40px]
        md:rounded-[120px]
        flex flex-col
        md:flex-row
        gap-8
        md:gap-16
        lg:gap-24
        items-center
        overflow-hidden
        mx-auto
        ${!isLeft ? 'md:flex-row-reverse' : ''}
      `}
    >
      <div className={`flex-shrink-0 flex items-center justify-center w-full md:w-auto px-4 pt-6 md:pt-4 pb-2 md:pb-4 ${isLeft ? 'md:pl-8' : 'md:pr-8'}`}>
        <div className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[420px] lg:w-[440px] lg:h-[650px] rounded-full overflow-visible">
          {card.image ? (
            <img
              src={card.image}
              alt={card.title}
              className="relative z-50 h-full w-full object-cover"
            />
          ) : null}
        </div>
      </div>

      <div className={`flex flex-col gap-[14px] p-6 md:p-8 lg:p-10 ${isLeft ? 'md:pl-5' : 'md:pr-5'} flex-1 items-start text-left`}>
        <h3 className="text-white text-[20px] sm:text-[22px] md:text-[25px] font-semibold tracking-[-0.01em]">{card.title}</h3>
        <p className="text-white text-[13.5px] sm:text-[14px] leading-[1.7] max-w-[320px]">{card.desc}</p>
        <p className="text-white font-semibold text-[15.5px]">{card.price}</p>
        <div className="flex flex-wrap items-center gap-3 mt-1">
          <button className="border border-white/38 text-white text-[13.5px] font-medium px-[22px] py-[8px] rounded-[9px] bg-transparent hover:bg-green-700/50 hover:border-green-600/70 transition-all duration-300">
            Explore
          </button>
          <button
            aria-label="Add to cart"
            className="w-9 h-9 border border-white/28 rounded-[9px] flex items-center justify-center text-white/55 hover:text-white hover:bg-green-700/50 hover:border-green-600/70 transition-all duration-300"
          >
            <FiShoppingCart size={15} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

const TrendingPlants = () => (
  <section className="pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pb-[96px]">
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
      <SectionTitle className="mb-8 sm:mb-10 md:mb-14">Our Trendy plants</SectionTitle>
    </div>
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
      <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16 overflow-visible">
        {cards.map((c, i) => <TrendCard key={c.id} card={c} i={i} />)}
      </div>
    </div>
  </section>
)

export default TrendingPlants
