import React from 'react'

const Testimonials = () => {
  return (
    <div>
        <section id="testimonials" className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"ScribeAI has completely transformed our content creation process. We're able to produce high-quality articles in a fraction of the time it used to take us."</p>
              <div className="flex items-center">
                <img src="https://via.placeholder.com/60" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-semibold">Jane Doe</p>
                  <p className="text-gray-500">Marketing Director, TechCorp</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"The AI-generated content is surprisingly good. It's like having a team of expert writers at your fingertips. Highly recommended!"</p>
              <div className="flex items-center">
                <img src="https://via.placeholder.com/60" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-semibold">John Smith</p>
                  <p className="text-gray-500">Content Manager, BlogCo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials