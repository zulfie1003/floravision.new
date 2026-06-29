import React from 'react'
import Hero from '../components/Hero/Hero'
import TrendingPlants from '../components/TrendingPlants/TrendingPlants'
import TopSelling from '../components/TopSelling/TopSelling'
import CustomerReviews from '../components/CustomerReviews/CustomerReviews'
import OxygenPlants from '../components/OxygenPlants/OxygenPlants'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <main>
      <Hero />
      <TrendingPlants />
      <TopSelling />
      <CustomerReviews />
      <OxygenPlants />
      <Footer />
    </main>
  )
}

export default Home
