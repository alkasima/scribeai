import React from 'react'

const HowItWorks = () => {
  return (
    <div>
        <section id="how-it-works" className="bg-gray-100 py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="text-blue-600 text-4xl font-bold mb-4">1</div>
                    <h3 className="text-xl font-semibold mb-4">Input Your Topic</h3>
                    <p className="text-gray-600">
                    Enter your desired topic or keywords into our intuitive interface.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="text-blue-600 text-4xl font-bold mb-4">2</div>
                    <h3 className="text-xl font-semibold mb-4">AI Processing</h3>
                    <p className="text-gray-600">
                    Our advanced AI analyzes your input and generates high-quality
                    content.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="text-blue-600 text-4xl font-bold mb-4">3</div>
                    <h3 className="text-xl font-semibold mb-4">Review &amp; Publish</h3>
                    <p className="text-gray-600">
                    Review the generated content, make any desired edits, and publish.
                    </p>
                </div>
                </div>
            </div>
            </section>
    </div>
  )
}

export default HowItWorks