import React from 'react'
import Banner from '../component/Banner'
import Information from '../component/Information'
import Offer from '../component/Offer'
import NewArrivals from '../component/NewArrivals'
import BestSeller from '../component/BestSeller'
import PhoneOfYear from '../component/PhoneOfYear'
import SpecialOffer from '../component/SpecialOffer'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Information/>
      <Offer/>
      <NewArrivals/>
      <BestSeller/>
      <PhoneOfYear/>
      <SpecialOffer/>
    </div>
  )
}

export default Home