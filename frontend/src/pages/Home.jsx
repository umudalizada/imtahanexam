import React from 'react'
import Hero from './components/Hero'
import "./Home.scss"
import CrudPage from './components/CrudPage'
import BestSeller from './components/BestSeller'
import Subscribe from './components/Subscribe'
import Marka from './components/Marka'

const Home = () => {
  return (
    <>
    <Hero/>
    <CrudPage/>
    <BestSeller/>
    <Subscribe/>
    <Marka/>
    </>
  )
}

export default Home