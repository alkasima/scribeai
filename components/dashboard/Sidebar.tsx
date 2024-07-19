import Link from 'next/link'

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className={`fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'}`}>
      <div className="flex items-center justify-center mt-8">
        <div className="flex items-center">
          <span className="text-white text-2xl mx-2 font-semibold">AI Writer</span>
        </div>
      </div>

      <nav className="mt-10">
        <Link href="/dashboard" className="flex items-center mt-4 py-2 px-6 bg-gray-700 bg-opacity-25 text-gray-100">
            <span className="mx-3">Dashboard</span>
        </Link>
        <Link href="/content-library" className="flex items-center mt-4 py-2 px-6 text-gray-300 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
            <span className="mx-3">Content Library</span>
        </Link>
        <Link href="/templates" className="flex items-center mt-4 py-2 px-6 text-gray-300 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
            <span className="mx-3">Templates</span>
        </Link>
        <Link href="/settings" className="flex items-center mt-4 py-2 px-6 text-gray-300 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
            <span className="mx-3">Settings</span>
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar