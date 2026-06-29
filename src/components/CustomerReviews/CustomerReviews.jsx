import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../SectionTitle/SectionTitle'
import ReviewCard from '../ReviewCard/ReviewCard'
import { reviews } from '../../data/reviews'

const CustomerReviews = () => (
  <section className="py-16 md:py-24">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
      <SectionTitle className="mb-10 md:mb-14">Customer Review</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {reviews.map((review, i) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col"
          >
            <ReviewCard review={review} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default CustomerReviews
