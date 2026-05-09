import React from 'react'
import NotesHero from './Components/NotesHero'
import FeaturedTopics from './Components/FeaturedTopics'
import SubjectCategories from './Components/SubjectCategories'
import RecentNotes from './Components/RecentNotes'
import QuickInsights from './Components/QuickInsights'

const Notes = () => {
  return (
    <div>
      <NotesHero/>
      <FeaturedTopics/>
      <SubjectCategories/>
      <RecentNotes/>
      <QuickInsights/>
    </div>
  )
}

export default Notes
