import React from 'react'
import Hero from './components/Hero'
import AboutShort from './components/AboutShort'
import LearningJourney from './components/LearningJourney'
import Achievements from './components/Achievements'
import AreasOfInterest from './components/AreasOfInterest'
import KnowledgeSharing from './components/KnowledgeSharing'
import Philosophy from './components/Philosophy'
import ContactMe from './components/ContactMe'


const Home = () => {
  return (
    <>
      <Hero/>
      <AboutShort/>
      <LearningJourney/>
      <Achievements/>
      <AreasOfInterest/>
      <KnowledgeSharing/>
      <Philosophy/>
      <ContactMe/>
    </>
  )
}

export default Home
