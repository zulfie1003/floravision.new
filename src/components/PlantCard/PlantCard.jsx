import React from "react";
import { motion } from "framer-motion";
import { FiShoppingCart } from "react-icons/fi";
import CardSVG from "../CardSVG/CardSVG";

const PlantCard = ({ plant, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.25 },
      }}
      role="listitem"
      className="
        relative
        w-full
        max-w-[360px]
        h-[460px]
        mx-auto
        overflow-visible
      "
    >
      {/* Card Background */}
      <div className="absolute inset-0">
        <CardSVG className="w-full h-full" />
      </div>

      {/* Plant Image */}
      {plant.image && (
        <img
          src={plant.image}
          alt={plant.name}
          style={{
            width: plant.imageWidth,
            top: plant.imageTop,
            left: plant.imageLeft,
            transform: `translateX(-50%) scale(${plant.imageScale})`,
          }}
          className="
            absolute
            z-10
            h-[450px]
            -ml-1
          
            object-contain
            pointer-events-none
            transition-all
            duration-500
            group-hover:scale-105
            drop-shadow-[0_25px_45px_rgba(0,0,0,.35)]
          "
        />
      )}

      {/* Card Content */}
      <div
        className="
          relative
          z-20
          h-full
          flex
          flex-col
          px-6
          pt-[210px]
          pb-6
        "
      >
        {/* Title */}
        <h3
          className="
            text-white
            text-[28px]
            font-semibold
            leading-tight
            min-h-[56px]
            flex
            items-end
          "
        >
          {plant.name}
        </h3>

        {/* Description */}
        <p
          className="
            mt-2
            text-[15px]
            leading-7
            text-white/70
            min-h-[72px]
          "
        >
          {plant.description}
        </p>

        {/* Bottom */}
        <div className="mt-auto flex items-center justify-between pt-6">
          <span className="text-white text-[24px] mr-10 mb-12 ml-10 font-semibold">
            {plant.price}
          </span>

          <button
            aria-label={`Add ${plant.name}`}
            className="
              w-12
              h-12
              mb-14
              mr-10
              rounded-xl
              border
              border-white/30
              flex
              items-center
              justify-center
              text-white
              transition-all
              duration-300
              hover:bg-white/10
              hover:border-white/50
            "
          >
            <FiShoppingCart size={20} />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default PlantCard;