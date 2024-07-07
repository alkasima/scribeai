// pages/index.tsx

import React from 'react';

const Main: React.FC = () => {
  return (
    <div>
      <main className="pt-16">
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  Revolutionize Your Content Creation
                </h1>
                <p className="text-xl mb-8">
                  Harness the power of AI to create engaging, SEO-optimized content in seconds.
                </p>
                <div className="flex space-x-4">
                  <a
                    className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
                    href="#"
                  >
                    Start Free Trial
                  </a>
                  <a
                    className="border-2 border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
                    href="#"
                  >
                    Watch Demo
                  </a>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  alt="AI Writing"
                  className="rounded-lg shadow-xl"
                  src="https://via.placeholder.com/600x400"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-20" id="features">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Powerful Features
            </h2>
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Advanced AI Technology
                </h3>
                <p className="text-gray-600">
                  Our state-of-the-art AI understands context and generates human-like content with unparalleled quality.
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
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Multiple Content Types
                </h3>
                <p className="text-gray-600">
                  Create blog posts, social media content, product descriptions, and more with ease and flexibility.
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  SEO Optimization
                </h3>
                <p className="text-gray-600">
                  Generate content optimized for search engines to improve your rankings and drive organic traffic.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-20" id="how-it-works">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              How It Works
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-blue-600 text-4xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Input Your Topic
                </h3>
                <p className="text-gray-600">
                  Enter your desired topic or keywords into our intuitive interface.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-blue-600 text-4xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  AI Processing
                </h3>
                <p className="text-gray-600">
                  Our advanced AI analyzes your input and generates high-quality content.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-blue-600 text-4xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Review & Publish
                </h3>
                <p className="text-gray-600">
                  Review the generated content, make any desired edits, and publish.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20" id="pricing">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Flexible Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <h3 className="text-2xl font-semibold mb-4">
                  Starter
                </h3>
                <p className="text-4xl font-bold mb-6">
                  $29
                  <span className="text-lg font-normal">
                    /month
                  </span>
                </p>
                <ul className="mb-8 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    Unlimited Documents
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    AI Content Suggestions
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    Basic SEO Optimization
                  </li>
                </ul>
                <a
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                  href="#"
                >
                  Get Started
                </a>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <h3 className="text-2xl font-semibold mb-4">
                  Professional
                </h3>
                <p className="text-4xl font-bold mb-6">
                  $79
                  <span className="text-lg font-normal">
                    /month
                  </span>
                </p>
                <ul className="mb-8 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    Unlimited Documents & Users
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    Advanced AI Features
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    Full SEO Optimization
                  </li>
                </ul>
                <a
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                  href="#"
                >
                  Get Started
                </a>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <h3 className="text-2xl font-semibold mb-4">
                  Enterprise
                </h3>
                <p className="text-4xl font-bold mb-6">
                  Custom
                </p>
                <ul className="mb-8 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    Custom Features & Integrations
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    Dedicated Support
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    Tailored SEO Strategies
                  </li>
                </ul>
                <a
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                  href="#"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-blue-600 py-20" id="contact">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Contact Us
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-white mb-8 text-center">
                Ready to revolutionize your content creation? Reach out to us today!
              </p>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded-lg px-4 py-2 mt-2"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded-lg px-4 py-2 mt-2"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full bg-white rounded-lg px-4 py-2 mt-2"
                    placeholder="How can we assist you?"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-blue-600 rounded-lg px-6 py-3 font-semibold hover:bg-gray-100 transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;
