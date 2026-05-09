import React from 'react'
import ReflectionsHero from './Components/ReflectionsHero'
import FeaturedReflection from './Components/FeaturedReflection'
import ReflectionCards from './Components/ReflectionCards'
import ThoughtSnippets from './Components/ThoughtSnippets'
import ClosingReflection from '../Contact/Components/ClosingReflection'

const Reflections = () => {
  return (
    <div>
      <ReflectionsHero/>
      <FeaturedReflection/>
      <ReflectionCards/>
      <ThoughtSnippets/>
      <ClosingReflection/>
    </div>
  )
}

export default Reflections
