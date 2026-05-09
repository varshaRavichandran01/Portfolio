import React from 'react'

const ThoughtSnippets = () => {
  const snippets = [
    "Healing often begins with awareness.",
    "Balance is built through small daily choices.",
    "Wellness is deeply connected to routine and mindfulness.",
    "Listening can sometimes heal more than words.",
    "Prevention is one of the most powerful forms of care.",
    "Growth happens quietly through consistent learning."
  ]

  return (
    <section className="bg-white px-6 md:px-20 py-20">
      
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <p className="text-emerald-600 font-semibold uppercase tracking-wide">
          Thought Snippets
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
          Small Thoughts From The Journey
        </h2>

        <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
          Gentle reflections and small reminders inspired by learning, observation, and mindful living.
        </p>

        {/* Snippets */}
        <div className="grid md:grid-cols-2 gap-6 mt-14">
          
          {snippets.map((item, index) => (
            <div
              key={index}
              className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 hover:shadow-sm transition"
            >
              
              <p className="text-gray-700 text-lg leading-relaxed italic">
                “{item}”
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default ThoughtSnippets