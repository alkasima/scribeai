import { useState } from 'react'
import Sidebar from '../../components/dashboard/Sidebar'
import Header from '../../components/dashboard/Header'
import ContentCreationWidget from '../../components/dashboard/ContentCreationWidget'
import RecentContentWidget from '../../components/dashboard/RecentContentWidget'
import AnalyticsWidget from '../../components/dashboard/AnalyticsWidget'
import AIAssistantWidget from '../../components/dashboard/AIAssistantWidget'

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">Dashboard</h3>
            
            <div className="mt-4">
              <div className="flex flex-wrap -mx-6">
                <ContentCreationWidget />
                <RecentContentWidget />
              </div>
            </div>
            
            <div className="mt-8">
              <AnalyticsWidget />
            </div>
            
            <div className="mt-8">
              <AIAssistantWidget />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}