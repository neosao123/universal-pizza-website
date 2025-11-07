import React from 'react'
import HeroSlider from '../features/HeroSlider/components/HeroSlider'
import CategoryPizza from '../features/Categories/components/Categories'
import OfferCards from '../features/OfferCards/components/OfferCards'
import OrderPizza from '../features/OrderPizza/components/OrderPizza'

const Homepage = () => {
  return (
    <div>
    <HeroSlider/>
    <OrderPizza/>
    <CategoryPizza/>
    <OfferCards/>

    </div>
  )
}

export default Homepage