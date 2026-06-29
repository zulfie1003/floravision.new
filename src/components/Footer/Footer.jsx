import React, { useState } from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import logo from '../../assests/logo.svg'
const Footer = () => {
  const [email, setEmail] = useState('')
  return (
    <footer className="border-t border-white/[0.07] pt-14 pb-4 mt-1">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_2fr] gap-10 mb-10">

          {/* Brand */}
         {/* Brand */}
<div className="flex flex-col">

  <img
    src={logo}
    alt="FloraVision Logo"
    className="w-[100px] object-contain"
  />

  <p className="-mt-12 max-w-[430px] text-white/80 text-[15px] leading-[1.5]">
    "From lush indoor greens to vibrant outdoor blooms, our plants are
    crafted to inspire and elevate your living environment."
  </p>

  <div className="flex items-center gap-12 mt-8">
    <a href="#" className="text-white text-[18px] font-semibold">FB</a>
    <a href="#" className="text-white text-[18px] font-semibold">TW</a>
    <a href="#" className="text-white text-[18px] font-semibold">LI</a>
  </div>

</div>
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-[13.5px] mb-[14px]">Quick Link's</h4>
            <ul className="flex flex-col gap-[10px]">
              {['Home','Types Of plants','Contact','Privacy'].map(l => (
                <li key={l}><a href="#" className="text-white/45 text-[13px] hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold text-[13.5px] mb-[14px]">For Every Update.</h4>
            <div className="flex gap-2">
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)}
                placeholder="Enter Email" aria-label="Newsletter email"
                className="flex-1 min-w-0 bg-transparent border border-white/18 rounded-[9px] px-4 py-[10px] text-white text-[13px] placeholder-white/30 focus:outline-none focus:border-green-500/70 transition-colors" />
              <button className="px-[15px] py-[10px] bg-green-700/65 hover:bg-green-600/80 border border-green-600/70 rounded-[9px] text-white text-[11px] font-bold tracking-[0.06em] whitespace-nowrap transition-all duration-300">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.07] pt-5 flex justify-end">
          <p className="text-white/28 text-[12px]">FloraVision © All right reserved</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
