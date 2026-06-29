import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import PlantCard from '../PlantCard/PlantCard'
import { plants } from '../../data/plants'

const TopSelling = () => (
  <section className="py-16 overflow-visible sm:py-20">
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
      <SectionTitle className="mb-10 sm:mb-16 lg:mb-20">
        Our Top Selling Plants
      </SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 justify-items-center overflow-visible">
        {plants.map((plant, i) => (
          <PlantCard key={plant.id} plant={plant} index={i} />
        ))}
      </div>
    </div>
  </section>
)

export default TopSelling
