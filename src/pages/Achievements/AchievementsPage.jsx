import React from 'react'
import AchievementsHero from './Components/AchievementsHero'
import FeaturedAchievement from './Components/FeaturedAchievement'
import AwardsSection from './Components/AwardsSection'
import WorkshopsSection from './Components/WorkshopsSection'
import AwarenessSection from './Components/AwarenessSection'
import GallerySection from './Components/GallerySection'

const AchievementsPage = () => {
  return (
    <div>
      <AchievementsHero/>
      <FeaturedAchievement/>
      <AwardsSection/>
      <WorkshopsSection/>
      <AwarenessSection/>
      <GallerySection/>
    </div>
  )
}

export default AchievementsPage
