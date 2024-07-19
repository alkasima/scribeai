const AnalyticsWidget = () => {
    return (
      <div className="w-full px-6 py-6 bg-white shadow-md rounded-lg">
        <h4 className="text-2xl font-semibold text-gray-700 mb-4">Analytics</h4>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <div className="p-4 bg-indigo-100 rounded-lg">
              <p className="text-indigo-800 font-semibold">Total Content</p>
              <p className="text-3xl font-bold text-indigo-900">152</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <div className="p-4 bg-green-100 rounded-lg">
              <p className="text-green-800 font-semibold">Words Generated</p>
              <p className="text-3xl font-bold text-green-900">50,232</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <div className="p-4 bg-pink-100 rounded-lg">
              <p className="text-pink-800 font-semibold">Avg. Content/Day</p>
              <p className="text-3xl font-bold text-pink-900">5.3</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default AnalyticsWidget