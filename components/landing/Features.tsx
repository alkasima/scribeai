import React from 'react'

const Features = () => {
  return (
    <div>
        <section id="features" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                    <div className="text-blue-600 mb-4">
                    <svg
                        className="w-10 h-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                    </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Advanced AI Technology</h3>
                    <p className="text-gray-600">
                    Our state-of-the-art AI understands context and generates human-like
                    content with unparalleled quality.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                    <div className="text-blue-600 mb-4">
                    <svg
                        className="w-10 h-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                        />
                    </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Multiple Content Types</h3>
                    <p className="text-gray-600">
                    Create blog posts, social media content, product descriptions, and
                    more with ease and flexibility.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                    <div className="text-blue-600 mb-4">
                    <svg
                        className="w-10 h-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">SEO Optimization</h3>
                    <p className="text-gray-600">
                    Generate content optimized for search engines to improve your rankings
                    and drive organic traffic.
                    </p>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Features