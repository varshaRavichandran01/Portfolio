import React from 'react'
import AboutHero from './components/AboutHero'
import JourneySection from './components/JourneySection'
import ClinicalExposure from './components/ClinicalExposure'
import BeyondAyurveda from './components/BeyondAyurveda'
import TimelineSection from './components/TimelineSection'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <JourneySection/>
      <ClinicalExposure/>
      <BeyondAyurveda/>
      <TimelineSection/>
    </div>
  )
}

export default About
