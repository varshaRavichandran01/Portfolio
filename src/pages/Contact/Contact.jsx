import React from 'react'
import ContactHero from './Components/ContactHero'
import ContactCards from './Components/ContactCards'
import SocialPresence from './Components/SocialPresence'
import MessageSection from './Components/MessageSection'
import ClosingReflection from './Components/ClosingReflection'

const Contact = () => {
  return (
    <div>
      <ContactHero/>
      <ContactCards/>
      <SocialPresence/>
      <MessageSection/>
      <ClosingReflection/>
    </div>
  )
}

export default Contact
