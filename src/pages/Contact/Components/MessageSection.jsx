import React from 'react'

const MessageSection = () => {
  return (
    <section className="bg-white px-6 md:px-20 py-20">
      
      <div className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <div className="text-center">
          
          <p className="text-emerald-600 font-semibold uppercase tracking-wide">
            Send A Message
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
            I’d Love To Hear From You
          </h2>

          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            Feel free to share your thoughts, questions, or simply connect through a message.
          </p>

        </div>

        {/* Form */}
        <form className="mt-14 bg-emerald-50 rounded-3xl p-8 md:p-10 shadow-sm">
          
          {/* Name */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-xl border border-emerald-100 bg-white px-5 py-4 outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-emerald-100 bg-white px-5 py-4 outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          {/* Message */}
          <div className="mb-8">
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>

            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full rounded-xl border border-emerald-100 bg-white px-5 py-4 outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl transition shadow-sm"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  )
}

export default MessageSection