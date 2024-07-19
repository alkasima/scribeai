import React from 'react'
import Link from 'next/link';

const JoinUs = () => {
  return (
    <div>
     <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-blue-600 rounded-lg shadow-xl py-10 px-6 md:py-16 md:px-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Revolutionize Your Content Creation?</h2>
            <p className="text-xl mb-8">Join thousands of satisfied customers and start creating amazing content today.</p>
            <Link href="/auth/register" className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">Start Your Free Trial</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JoinUs