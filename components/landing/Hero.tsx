import React from 'react'

const Hero = () => {
  return (
    <div>
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">Revolutionize Your Content Creation</h1>
              <p className="text-xl mb-8">Harness the power of AI to create engaging, SEO-optimized content in seconds.</p>
              <div className="flex space-x-4">
                <a href="#" className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">Start Free Trial</a>
                <a href="#" className="border-2 border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">Watch Demo</a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src="https://via.placeholder.com/600x400" alt="AI Writing" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero